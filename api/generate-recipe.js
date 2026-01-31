export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { meal, ingredients } = req.body;

    // Check if API key is configured
    if (!process.env.ANTHROPIC_API_KEY) {
      return res.status(500).json({ 
        error: 'API key not configured. Please add ANTHROPIC_API_KEY to your Vercel environment variables.' 
      });
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        messages: [{
          role: 'user',
          content: `Create a delicious and UNIQUE ${meal} recipe using these ingredients: ${ingredients}. 

CRITICAL: This MUST be a ${meal}-appropriate dish:
- If BREAKFAST: Create a typical breakfast dish (scrambled eggs, pancakes, omelette, breakfast sandwich, frittata, etc.)
- If LUNCH: Create a typical lunch dish (salad, wrap, sandwich, pasta, stir-fry, bowl, etc.)  
- If DINNER: Create a typical dinner dish (casserole, roasted meal, hearty entree, etc.)

Even with the same ingredients, generate a COMPLETELY DIFFERENT recipe style for each meal type. Be creative!

Please format the response EXACTLY as shown below:

**[Recipe Name]**

**Ingredients:**
- List all ingredients with measurements

**Instructions:**
1. First step
2. Second step
3. Third step
4. Fourth step
(Continue with sequential numbering: 5., 6., 7., etc.)

**Cooking Time:** X minutes

**Tip:** [helpful cooking tip]

IMPORTANT: Number the instruction steps sequentially (1. 2. 3. 4. 5. etc.) - do NOT use "1." for every step.

Keep it simple, tasty, and suitable for a ${meal} meal that can be prepared in 15-30 minutes.`
        }]
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      return res.status(response.status).json({ error: errorData });
    }

    const data = await response.json();
    return res.status(200).json(data);

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ 
      error: 'Failed to generate recipe',
      message: error.message 
    });
  }
}
