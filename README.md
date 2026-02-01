**MINUTE MEALS
MMI 675 Advanced Web Design
Project 1- Personal Assistant - Reyska Ramdhany**
 
1.	**PRODUCT BRIEF**
MinuteMeals is an AI smart recipe site for busy graduate students and young professionals (ages 20–40) to cook healthy meals in 15–30 minutes without needing to plan, research recipes, or grocery-shop around complicated ingredients. The core problem it solves is decision fatigue and time pressure, where people want nutritious food but end up ordering takeout or skipping meals because cooking feels slow, confusing, or mentally exhausting.
MinuteMeals is designed for users who often have “random ingredients” in the fridge and need a fast, realistic recipe suggestion based on what they already have. The approach is effective because it combines speed and personalization. The users pick the mealtime (breakfast, lunch, or dinner), type in available ingredients, and instantly get a recipe that fits their time limit. The output focuses on practical steps, minimal equipment, and clear cooking instructions. So, users can start cooking immediately instead of reading long recipe blogs.
By generating recipes around real constraints (time, ingredients, simple steps), MinuteMeals makes healthy cooking feel doable on the busiest days.

2.	**FEATURES**
  •	AI-Powered Recipe Generation: Uses Claude AI (Anthropic) to create personalized recipes based on user available ingredients.
  •	Meal-Specific Recipes: Different recipe styles for Breakfast, Lunch, and Dinner - even with the same ingredients.
  •	Smart Image Integration: Automatically fetches relevant food images from Unsplash for each recipe.
  •	Quick & Healthy: All recipes designed to be prepared in 15-30 minutes.
  •	Mobile Responsive: Fully optimized for desktop, tablet, and mobile devices.
  •	Modern UI/UX: Beautiful glassmorphism design with elegant typography.

**3.	DESIGN FEATURES**
**A.	Color Palette**
  1.	**Primary Yellow**: `#FFD700` - Main accent color
  2.	**Secondary Gold**: `#FFC107` - Supporting accent
  3.	**Dark Background**: `#2C3E50` - Primary text and UI elements
  4.	**Light**: `#ECF0F1` - Secondary text and backgrounds

**B.	Typography**
  1.	**Headers**: Playfair Display (Serif)
  2.	**Body**: DM Sans (Sans-serif)


**4.	INSTRUCTIONS TO USE SITE**
    a.	Select Meal Type: Choose between Breakfast, Lunch, or Dinner
    b.	Enter Ingredients: Type in the ingredients you have available (e.g., "eggs, tomatoes, cheese, bread")
    c.	Generate Recipe: Click the "Cook for me!" button
    d.	View Results: Get a complete recipe with:
        •	Recipe name and appetizing food image
        •	Full ingredient list with measurements
        •	Step-by-step numbered instructions
        •	Estimated cooking time
        •	Helpful cooking tip

**5. TECHNOLOGIES USED & TECH STACK**
MinuteMeals is built using a modern, lightweight tech stack. It does not use frameworks or heavy dependencies needed. Everything runs directly in the browser, except for the AI-powered backend function deployed on Vercel.
  **Core Technologies:**
   •	HTML5 – Provides the structure and semantic markup for the entire application, ensuring clean, accessible, and well-organized content.
   •	CSS3 – Handles all styling with modern features including Flexbox for layout, animations for smooth transitions, and glassmorphism effects to achieve the sleek, transparent card design.
   •	JavaScript (ES6+) – Powers all interactive functionality, including meal type selection, form handling, API communication with the Vercel serverless function, and dynamic recipe rendering.
    •	Claude AI API – The backbone of recipe generation. Powered by Anthropic's Claude Sonnet 4, it processes user input (ingredients and meal type) and returns a fully formatted, unique recipe tailored to the selected meal.
    •	Google Fonts – Playfair Display is used for headings to add elegance, while DM Sans is used for body text to keep things clean and highly readable.
    
  **Q&A:**
  What AI coding assistant did you use? Claude. Its sidebar workflow made it easy to see the project progress clearly at every step, making it faster to build, test, and iterate on the application without switching between tools.
  What AI API did you use and why? Claude API by Anthropic. Since Claude was used as both the AI coding assistant and the development tool throughout the entire project, integrating Claude API for recipe generation kept the workflow consistent. This ensured the same level of quality and reliability across both development and the final product.
  Where is it deployed? The project is hosted on GitHub as the source repository and deployed live using Vercel, which handles the serverless backend function that securely communicates with the Claude API.

**6. REFLECTION**
AI assistance sped up the build process significantly, in Claude AI, MinuteMeals successfully generates quick recipes from limited ingredients, which matches real user needs. However, the project presented several challenges throughout development and deployment.
On the technical side, recipe step numbering was inconsistent. Sometimes outputting "1.1.1" instead of "1, 2, 3", then it requires multiple prompt revisions to fix. Spacing between Ingredients and Instructions sections also proved difficult to control despite trying line breaks and new paragraphs. The Unsplash image feature (to show the meal’s image) failed due to an API issue, so images are currently limited to manually uploaded references only.
 
Image: Meal's picture can't be generated from either Claude or Unsplash
Deployment added another layer of difficulty. I initially chose GitHub Pages, which only supports static files and cannot run serverless functions, causing a token parsing error. Moving to Vercel then revealed a folder structure mistake, and finally, an Anthropic credit balance issue blocked the API entirely. Because of this, every time I tried to generate a recipe from the Vercel link, it was unsuccessful, as shown in the pictures below.
  
Image: Recipe unsuccessfully generated.

**7.	FUTURE ENHANCEMENTS**
For version 2.0, I would improve formatting reliability, integrate a stable image source, and add filters like dietary preferences, allergies, and a cooking time toggle. Beyond that, there are several additional features I plan to develop. First, I would like to add the ability to save favorite recipes to local storage and include a print functionality so users can easily keep a physical copy. Social media sharing would also be a useful addition to let users share recipes they enjoy. Further enhancements include dietary filters such as vegetarian, vegan, and gluten-free options, along with nutritional information for each generated recipe. A shopping list generator would help users prepare ingredients with ease. Lastly, I plan to add a recipe rating system, multi-language support to reach a wider audience, and a dark mode toggle to improve the overall user experience.
<img width="468" height="648" alt="image" src="https://github.com/user-attachments/assets/29bfe83b-a487-4cc5-8e95-4f228d107502" />

