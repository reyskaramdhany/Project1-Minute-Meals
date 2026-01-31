# Project1-Minute-Meals

MINUTE MEALS
PRODUCT BRIEF (150–250 WORDS)
MinuteMeals helps busy graduate students and young professionals (ages 20–40) cook healthy meals in 15–30 minutes without needing to plan, research recipes, or grocery-shop around complicated ingredients. The core problem it solves is decision fatigue + time pressure: people want nutritious food but end up ordering takeout or skipping meals because cooking feels slow, confusing, or mentally exhausting.
MinuteMeals is designed for users who often have “random ingredients” in the fridge and need a fast, realistic recipe suggestion based on what they already have. The approach is effective because it combines speed + personalization: users pick the mealtime (breakfast, lunch, or dinner), type in available ingredients, and instantly get a recipe that fits their time limit. The output focuses on practical steps, minimal equipment, and clear cooking instructions. So users can start cooking immediately instead of reading long recipe blogs.
By generating recipes around real constraints (time, ingredients, simple steps), MinuteMeals makes healthy cooking feel doable on the busiest days.

CLEAR INSTRUCTIONS FOR USING MINUTEMEALS
1.	Select your meal time: Breakfast / Lunch / Dinner
2.	Type the ingredients you have (example: “eggs, spinach, rice, chicken, soy sauce”)
3.	Click “Cook for Me!”
4.	Get a quick recipe: prep time, cook time, ingredients list, step-by-step instructions, and optional swaps.

TECH STACK (SIMPLE LIST)
What AI API did you use and why?
Claude API, because you used Claude to create the project and wanted to stay consistent with the same AI ecosystem for both development and generation quality.
What AI coding assistant did you use?
Claude because it shows the product progress clearly (sidebar workflow), making it easier to build and iterate.
Where is it deployed?
GitHub

REFLECTION (100–150 WORDS)
AI assistance worked well for speeding up the whole build and making meal generation easier where MinuteMeals can produce quick recipe ideas from limited ingredients, which matches the real user need. The biggest challenge was getting consistent step numbering in recipe instructions. Sometimes the output formatted steps incorrectly (like 1.1.1 instead of 1, 2, 3), so I had to test several prompts and reword instructions to improve formatting reliability. Another challenge was adding meal images: the image feature didn’t work because of an Unsplash API-related issue, so recipes only can use image that I have uploaded. For now, the image only for reference, not for the real image for the dish. Last, I have difficulties to give space between Ingredients and Instructions. I tried for put breaks, new paraghraph or some enters, but still did not change. 
For version 2.0, I would improve instruction formatting reliability, add image generation or a stable image source, and build better controls like dietary preferences, allergies, and a “15 vs 30 minutes” toggle for more accurate recipes.

<img width="468" height="639" alt="image" src="https://github.com/user-attachments/assets/53cad265-2ad0-4090-8a00-e0a667f2451e" />
