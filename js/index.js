var recipe =
    [
        {
            image: "images/CreamySpaghetti.png",
            rating: 4.8,
            reviews: 234,
            cookTime: 20,
            serving: 4,
            prepTime: 15,
            extendedTime: false,
            badges: ["easy", "Italian"],
            mainHeading: "Creamy Spaghetti Carbonara",
            description: "A classic Italian pasta dish with eggs, cheese, and pancetta",
            ingredients: ["400g spaghetti pasta", "200g pancetta or guanciale, diced", "4 large eggs", "100g Pecorino Romano cheese, grated", "50g Parmesan cheese, grated", "Freshly ground black pepper", "Salt for pasta water"],
            instructions: ["While pasta cooks, heat a large skillet over medium heat. Add diced pancetta and cook until crispy, about 5-7 minutes.", "In a bowl, whisk together eggs, grated Pecorino Romano, and Parmesan cheese. Add plenty of freshly ground black pepper.", "Reserve 1 cup of pasta cooking water before draining. Drain pasta and immediately add to the skillet with pancetta.", "Remove skillet from heat. Quickly pour in egg mixture while tossing pasta vigorously. Add reserved pasta water as needed to create a creamy sauce.", "Serve immediately with extra cheese and black pepper on top. Enjoy your authentic carbonara!"],
            nutrition: { calorie: "520 kcal", Protein: "28g", Carbohydrates: "62g", fat: "18g", Sodium: "680mg", Fiber: "3g" },
            tips: ["Use room temperature eggs for a smoother sauce consistency", "Work quickly when mixing eggs with hot pasta to avoid scrambling", "Reserve extra pasta water - it's the secret to perfect creaminess", "Freshly grated cheese makes all the difference in flavor", "Never add cream - authentic carbonara is made with eggs only"]
        },
        {
            image: "images/burger.png",
            rating: 4.6,
            reviews: 405,
            cookTime: 15,
            serving: 2,
            prepTime: 10,
            extendedTime: false,
            badges: ["easy", "American"],
            mainHeading: "Classic Beef Burger",
            description: "Juicy homemade burger with all the fixings",
            ingredients: ["500g ground beef (80/20)", "4 burger buns", "4 slices cheddar cheese", "Lettuce leaves", "Tomato slices", "Red onion, sliced", "Pickles", "Burger sauce or condiments"],
            instructions: ["Divide ground beef into 4 equal portions. Form into patties, making a small indent in the center.", "Season patties generously with salt and pepper on both sides.", "Heat a grill or skillet over high heat. Cook patties for 4-5 minutes per side for medium.", "Add cheese slices in the last minute of cooking and cover to melt.", "Toast burger buns lightly on the grill or in a pan.", "Assemble burgers with lettuce, tomato, onion, pickles, and your favorite sauce."],
            nutrition: { calorie: "650 kcal", Protein: "38g", Carbohydrates: "42g", fat: "35g", Sodium: "920mg", Fiber: "2g" },
            tips: ["Don't press down on burgers while cooking - keeps them juicy", "Make indent in center to prevent burger from puffing up", "Let patties rest for 2-3 minutes before serving", "Toast buns for better texture and flavor"]
        },
        {
            image: "images/ChickenTikka .png",
            rating: 3.8,
            reviews: 326,
            cookTime: 20,
            serving: 3,
            prepTime: 35,
            extendedTime: true,
            badges: ["Intermediate", "Asian"],
            mainHeading: "Chicken Tikka Masala",
            description: "Rich and creamy Indian curry with tender chicken pieces",
            ingredients: ["600g chicken breast, cubed", "1 cup plain yogurt", "2 tablespoons tikka masala paste", "400ml coconut cream", "1 onion, diced", "4 cloves garlic, minced", "2 tablespoons ginger, grated", "400g canned tomatoes", "Fresh cilantro for garnish"],
            instructions: ["Marinate chicken in half the yogurt and 1 tablespoon tikka paste for at least 30 minutes.", "Heat oil in a large pan, cook marinated chicken until browned. Remove and set aside.", "In the same pan, sauté onion until soft. Add garlic and ginger, cook for 1 minute.", "Add remaining tikka paste and canned tomatoes. Simmer for 10 minutes.", "Stir in coconut cream and remaining yogurt. Add chicken back to the pan.", "Simmer for 15 minutes until sauce thickens. Garnish with cilantro and serve with rice."],
            nutrition: { calorie: "450 kcal", Protein: "38g", Carbohydrates: "24g", fat: "22g", Sodium: "760mg", Fiber: "4g" },
            tips: ["Marinate chicken overnight for deeper flavor", "Use full-fat coconut cream for richest sauce", "Adjust spice level by varying the tikka paste amount", "Serve with naan bread and basmati rice"]
        },
        {
            image: "images/GreekMoussaka.png",
            rating: 4.8,
            reviews: 376,
            cookTime: 30,
            serving: 2,
            prepTime: 35,
            extendedTime: true,
            badges: ["Intermediate", "Mediterranean"],
            mainHeading: "Greek Moussaka",
            description: "Traditional layered eggplant casserole with lamb",
            ingredients: ["3 large eggplants, sliced", "500g ground lamb", "400g canned tomatoes", "1 onion, diced", "3 cloves garlic, minced", "500ml béchamel sauce", "100g parmesan cheese", "Cinnamon and oregano", "Olive oil"],
            instructions: ["Slice eggplants, salt them, and let sit for 30 minutes. Rinse and pat dry.", "Brush eggplant slices with olive oil, grill or bake until softened.", "Cook ground lamb with onion and garlic. Add tomatoes, cinnamon, oregano. Simmer 20 minutes.", "Preheat oven to 180°C (350°F).", "Layer in baking dish: eggplant, meat sauce, eggplant, meat sauce. Top with béchamel and parmesan.", "Bake for 45 minutes until golden. Let rest 15 minutes before serving."],
            nutrition: { calorie: "580 kcal", Protein: "36g", Carbohydrates: "32g", fat: "32g", Sodium: "820mg", Fiber: "8g" },
            tips: ["Salt eggplant to remove bitterness", "Don't skip the resting time - it helps set the layers", "Use ground beef if lamb is unavailable", "Make ahead and reheat for easier serving"]
        },
        {
            image: "images/ThaiGreen.png",
            rating: 4.7,
            reviews: 312,
            cookTime: 25,
            serving: 4,
            prepTime: 15,
            extendedTime: false,
            badges: ["Intermediate", "Asian"],
            mainHeading: "Thai Green Curry",
            description: "Vibrant and aromatic curry with vegetables and coconut milk",
            ingredients: ["2 tablespoons green curry paste", "400ml coconut milk", "300g chicken breast, sliced", "1 red bell pepper, sliced", "100g green beans", "1 eggplant, cubed", "2 tablespoons fish sauce", "1 tablespoon palm sugar", "Fresh Thai basil leaves"],
            instructions: ["Add half the coconut milk and stir to combine with the curry paste.", "Add sliced chicken and cook until no longer pink, about 5 minutes.", "Add remaining coconut milk, vegetables, fish sauce, and palm sugar.", "Simmer for 15-20 minutes until vegetables are tender and sauce has thickened.", "Stir in fresh Thai basil leaves. Serve hot with jasmine rice."],
            nutrition: { calorie: "420 kcal", Protein: "26g", Carbohydrates: "22g", fat: "26g", Sodium: "890mg", Fiber: "5g" },
            tips: ["Adjust spice level by using more or less curry paste", "Add vegetables in stages based on cooking time needed", "Fresh Thai basil is essential for authentic flavor", "Use full-fat coconut milk for richest, creamiest sauce"]
        },
        {
            image: "images/TeriyakiChicken.png",
            rating: 4.7,
            reviews: 367,
            cookTime: 20,
            serving: 2,
            prepTime: 15,
            extendedTime: false,
            badges: ["Easy", "Asian"],
            mainHeading: "Teriyaki Chicken Bowl",
            description: "Sweet and savory chicken over rice with vegetables",
            ingredients: ["400g chicken thighs, sliced", "1/2 cup teriyaki sauce", "2 cups cooked rice", "1 broccoli head, florets", "1 carrot, julienned", "Sesame seeds", "Green onions, sliced", "1 tablespoon sesame oil"],
            instructions: ["Add teriyaki sauce to chicken, simmer for 5 minutes until sauce thickens.", "Meanwhile, steam broccoli and carrots until tender-crisp.", "Divide rice between bowls.", "Top with teriyaki chicken and steamed vegetables.", "Garnish with sesame seeds and green onions. Serve hot."],
            nutrition: { calorie: "540 kcal", Protein: "42g", Carbohydrates: "58g", fat: "14g", Sodium: "1240mg", Fiber: "4g" },
            tips: ["Use chicken thighs for juicier meat", "Make homemade teriyaki sauce for better flavor control", "Add edamame for extra protein", "Meal prep by cooking rice and chicken ahead"]
        },
        {
            image: "images/pizza.png",
            rating: 4.9,
            reviews: 512,
            cookTime: 12,
            serving: 2,
            prepTime: 90,
            extendedTime: true,
            badges: ["Intermediate", "Italian"],
            mainHeading: "Margherita Pizza",
            description: "Classic Italian pizza with fresh mozzarella and basil",
            ingredients: ["300g pizza dough", "200g crushed tomatoes", "250g fresh mozzarella", "Fresh basil leaves", "2 tablespoons olive oil", "2 cloves garlic, minced", "Salt and pepper to taste", "Parmesan cheese for topping"],
            instructions: ["Let pizza dough come to room temperature and rest for 1 hour.", "Preheat oven to maximum temperature (usually 250°C/480°F).", "Mix crushed tomatoes with olive oil, garlic, salt, and pepper for the sauce.", "Roll out dough on a floured surface to desired thickness.", "Spread tomato sauce, add torn mozzarella pieces, and drizzle with olive oil.", "Bake for 10-12 minutes until crust is golden. Top with fresh basil and parmesan."],
            nutrition: { calorie: "580 kcal", Protein: "24g", Carbohydrates: "68g", fat: "22g", Sodium: "920mg", Fiber: "4g" },
            tips: ["Use a pizza stone for crispier crust", "Don't overload with toppings - less is more", "Add basil after baking to keep it fresh", "Let dough rest properly for best texture"]
        },
        {
            image: "images/Lasagna .png",
            rating: 4.9,
            reviews: 478,
            cookTime: 90,
            serving: 4,
            prepTime: 30,
            extendedTime: true,
            badges: ["Intermediate", "Italian"],
            mainHeading: "Lasagna Bolognese",
            description: "Layered Italian pasta with rich meat sauce and béchamel",
            ingredients: ["12 lasagna sheets", "500g ground beef", "400g canned tomatoes", "1 onion, diced", "2 carrots, diced", "500ml béchamel sauce", "200g mozzarella, grated", "100g parmesan cheese", "Fresh basil"],
            instructions: ["Cook ground beef with onion and carrots until browned. Add tomatoes and simmer for 30 minutes.", "Cook lasagna sheets according to package directions. Drain and set aside.", "Preheat oven to 180°C (350°F).", "In a baking dish, layer: meat sauce, lasagna sheets, béchamel sauce. Repeat 3-4 times.", "Top final layer with béchamel, mozzarella, and parmesan cheese.", "Bake for 45 minutes until golden and bubbly. Let rest 10 minutes before serving."],
            nutrition: { calorie: "680 kcal", Protein: "42g", Carbohydrates: "58g", fat: "28g", Sodium: "920mg", Fiber: "6g" },
            tips: ["Make bolognese sauce a day ahead for better flavor", "Don't skip the resting time after baking", "Use fresh pasta sheets for best texture", "Freeze leftovers in individual portions"]
        },
        {
            image: "images/VegetableCurry.png",
            rating: 4.6,
            reviews: 289,
            cookTime: 30,
            serving: 4,
            prepTime: 20,
            extendedTime: true,
            badges: ["Easy", "Asian"],
            mainHeading: "Vegetable Curry",
            description: "Hearty vegetarian curry with coconut milk",
            ingredients: ["2 potatoes, cubed", "1 cauliflower, florets", "2 carrots, sliced", "1 can chickpeas", "400ml coconut milk", "3 tablespoons curry powder", "1 onion, diced", "3 cloves garlic, minced", "Fresh spinach"],
            instructions: ["Heat oil in a large pot. Sauté onion until soft, add garlic and curry powder, cook for 1 minute.", "Add potatoes and carrots, cook for 5 minutes.", "Pour in coconut milk and 1 cup water. Bring to simmer.", "Add cauliflower and chickpeas. Cook for 20 minutes until vegetables are tender.", "Stir in fresh spinach and cook until wilted.", "Serve hot over basmati rice or with naan bread."],
            nutrition: { calorie: "380 kcal", Protein: "14g", Carbohydrates: "48g", fat: "16g", Sodium: "480mg", Fiber: "12g" },
            tips: ["Add vegetables in order of cooking time needed", "Adjust curry powder amount to taste", "Use full-fat coconut milk for creamier curry", "Add protein like tofu or paneer if desired"]
        },
        {
            image: "images/CapreseSandwich.png",
            rating: 4.5,
            reviews: 189,
            cookTime: 5,
            serving: 2,
            prepTime: 10,
            extendedTime: false,
            badges: ["Easy", "Italian"],
            mainHeading: "Caprese Sandwich",
            description: "Fresh Italian sandwich with mozzarella, tomato, and basil",
            ingredients: ["1 ciabatta bread", "200g fresh mozzarella, sliced", "2 large tomatoes, sliced", "Fresh basil leaves", "3 tablespoons pesto", "2 tablespoons balsamic glaze", "Olive oil", "Salt and pepper"],
            instructions: ["Toast bread lightly until just crispy.", "Spread pesto on both sides of bread.", "Layer mozzarella slices, tomato slices, and fresh basil leaves.", "Drizzle with olive oil and balsamic glaze. Season with salt and pepper.", "Close sandwich, cut in half, and serve immediately."],
            nutrition: { calorie: "480 kcal", Protein: "22g", Carbohydrates: "48g", fat: "22g", Sodium: "680mg", Fiber: "3g" },
            tips: ["Use ripe, in-season tomatoes for best flavor", "Buffalo mozzarella is traditional but harder to slice", "Toast bread lightly - not too crispy", "Add prosciutto or salami for a heartier sandwich"]
        },
        {
            image: "images/CaesarSalad.png",
            rating: 4.4,
            reviews: 189,
            cookTime: 0,
            serving: 2,
            prepTime: 15,
            extendedTime: false,
            badges: ["Easy", "Mediterranean"],
            mainHeading: "Caesar Salad",
            description: "Classic salad with crispy romaine and creamy dressing",
            ingredients: ["1 large romaine lettuce", "1/2 cup Caesar dressing", "1/2 cup parmesan cheese, shaved", "1 cup croutons", "2 anchovy fillets (optional)", "Lemon wedges", "Black pepper"],
            instructions: ["Wash and dry romaine lettuce thoroughly. Tear into bite-sized pieces.", "Place lettuce in a large salad bowl.", "Add Caesar dressing and toss until evenly coated.", "Add croutons and half the parmesan cheese. Toss gently.", "Top with remaining parmesan shavings and anchovies if using.", "Serve immediately with lemon wedges and fresh black pepper."],
            nutrition: { calorie: "320 kcal", Protein: "12g", Carbohydrates: "18g", fat: "22g", Sodium: "680mg", Fiber: "3g" },
            tips: ["Use cold, crisp lettuce for best texture", "Make homemade croutons for better flavor", "Add grilled chicken for a complete meal", "Don't dress salad until ready to serve"]
        },
        {
            image: "images/Chicken-Stir-Fry.png",
            rating: 4.5,
            reviews: 324,
            cookTime: 15,
            serving: 4,
            prepTime: 15,
            extendedTime: false,
            badges: ["Easy", "Asian"],
            mainHeading: "Chicken Stir-Fry",
            description: "Quick and healthy stir-fry with colorful vegetables",
            ingredients: ["500g chicken breast, sliced", "2 bell peppers, sliced", "1 broccoli head, florets", "2 carrots, julienned", "3 tablespoons soy sauce", "2 tablespoons oyster sauce", "1 tablespoon sesame oil", "2 cloves garlic, minced", "Fresh ginger, grated"],
            instructions: ["Heat wok over high heat with oil. Cook chicken until golden, remove and set aside.", "Add more oil if needed. Stir-fry garlic and ginger for 30 seconds.", "Add vegetables, starting with hardest ones (carrots, broccoli). Cook for 3-4 minutes.", "Return chicken to wok, add bell peppers and sauce. Toss for 2 minutes.", "Serve immediately over steamed rice or noodles."],
            nutrition: { calorie: "320 kcal", Protein: "34g", Carbohydrates: "18g", fat: "12g", Sodium: "840mg", Fiber: "5g" },
            tips: ["Cut all ingredients before starting to cook", "Keep heat high for authentic stir-fry texture", "Don't overcrowd the wok or vegetables will steam", "Add cashews or peanuts for extra crunch"]
        },
        {
            image: "images/BBQ.png",
            rating: 4.7,
            reviews: 412,
            cookTime: 240,
            serving: 4,
            prepTime: 15,
            extendedTime: true,
            badges: ["Easy", "American"],
            mainHeading: "BBQ Pulled Pork",
            description: "Slow-cooked tender pork in smoky barbecue sauce",
            ingredients: ["1kg pork shoulder", "1 cup BBQ sauce", "1/2 cup apple cider vinegar", "2 tablespoons brown sugar", "1 tablespoon paprika", "1 tablespoon garlic powder", "Burger buns", "Coleslaw for serving"],
            instructions: ["Place pork in slow cooker with apple cider vinegar and 1/2 cup water.", "Cook on low for 8 hours or high for 4 hours until meat is very tender.", "Remove pork and shred with two forks. Discard excess fat.", "Return shredded pork to slow cooker, mix with BBQ sauce.", "Serve on toasted buns with coleslaw on top."],
            nutrition: { calorie: "620 kcal", Protein: "48g", Carbohydrates: "52g", fat: "22g", Sodium: "1180mg", Fiber: "3g" },
            tips: ["Use pork shoulder for best results - it stays moist", "Let pork rest before shredding for juicier meat", "Make your own BBQ sauce for better flavor", "Leftovers freeze well for up to 3 months"]
        },
        {
            image: "images/PadThai.png",
            rating: 4.8,
            reviews: 445,
            cookTime: 15,
            serving: 2,
            prepTime: 20,
            extendedTime: false,
            badges: ["Intermediate", "Asian"],
            mainHeading: "Pad Thai",
            description: "Popular Thai stir-fried noodles with shrimp and peanuts",
            ingredients: ["200g rice noodles", "200g shrimp, peeled", "2 eggs", "3 tablespoons tamarind paste", "2 tablespoons fish sauce", "1 tablespoon palm sugar", "Bean sprouts", "Crushed peanuts", "Lime wedges and cilantro"],
            instructions: ["Mix tamarind paste, fish sauce, and palm sugar to make the sauce.", "Heat wok over high heat. Scramble eggs and set aside.", "Cook shrimp until pink. Add noodles and sauce, toss for 2-3 minutes.", "Add scrambled eggs and bean sprouts. Toss everything together.", "Serve topped with crushed peanuts, lime wedges, and cilantro."],
            nutrition: { calorie: "540 kcal", Protein: "32g", Carbohydrates: "62g", fat: "16g", Sodium: "1120mg", Fiber: "4g" },
            tips: ["Don't oversoak noodles or they'll be mushy", "Cook on high heat for authentic wok flavor", "Balance sweet, sour, and salty flavors", "Prepare all ingredients before starting to cook"]
        },
        {
            image: "images/BeefTacos.png",
            rating: 4.6,
            reviews: 278,
            cookTime: 20,
            serving: 4,
            prepTime: 15,
            extendedTime: false,
            badges: ["Easy", "American"],
            mainHeading: "Beef Tacos",
            description: "Flavorful Mexican tacos with seasoned ground beef",
            ingredients: ["500g ground beef", "8 taco shells", "1 onion, diced", "2 tablespoons taco seasoning", "Shredded lettuce", "Diced tomatoes", "Shredded cheddar cheese", "Sour cream", "Salsa"],
            instructions: ["Heat a large skillet over medium-high heat. Cook ground beef until browned.", "Add diced onion and cook until softened, about 5 minutes.", "Stir in taco seasoning and 1/2 cup water. Simmer for 10 minutes.", "Warm taco shells according to package directions.", "Fill each shell with seasoned beef.", "Top with lettuce, tomatoes, cheese, sour cream, and salsa. Serve immediately."],
            nutrition: { calorie: "420 kcal", Protein: "26g", Carbohydrates: "32g", fat: "20g", Sodium: "780mg", Fiber: "4g" },
            tips: ["Drain excess fat from beef for healthier tacos", "Warm shells in oven for better texture", "Prepare all toppings before cooking beef", "Use ground turkey for a lighter option"]
        },
        {
            image: "images/ShrimpScampi.png",
            rating: 4.8,
            reviews: 356,
            cookTime: 15,
            serving: 2,
            prepTime: 10,
            extendedTime: false,
            badges: ["Easy", "Seafood"],
            mainHeading: "Shrimp Scampi",
            description: "Garlicky shrimp in white wine butter sauce",
            ingredients: ["400g large shrimp, peeled", "300g linguine pasta", "6 cloves garlic, minced", "1/2 cup white wine", "4 tablespoons butter", "2 tablespoons olive oil", "Fresh parsley, chopped", "Lemon juice and zest", "Red pepper flakes"],
            instructions: ["Heat olive oil and 2 tablespoons butter in a large pan. Add garlic and red pepper flakes, cook for 1 minute.", "Add shrimp, cook until pink on both sides, about 3-4 minutes. Remove and set aside.", "Add white wine to pan, simmer for 2 minutes. Add remaining butter and lemon juice.", "Return shrimp to pan, add cooked pasta and toss. Add pasta water if needed.", "Garnish with parsley, lemon zest, and serve immediately."],
            nutrition: { calorie: "520 kcal", Protein: "36g", Carbohydrates: "54g", fat: "18g", Sodium: "620mg", Fiber: "3g" },
            tips: ["Don't overcook shrimp - they cook very quickly", "Use good quality white wine for best flavor", "Toss pasta in sauce for maximum flavor absorption", "Add extra lemon for bright, fresh taste"]
        },
        {
            image: "images/Salmon.png",
            rating: 4.9,
            reviews: 187,
            cookTime: 15,
            serving: 2,
            prepTime: 10,
            extendedTime: false,
            badges: ["Easy", "Seafood"],
            mainHeading: "Honey Garlic Salmon",
            description: "Pan-seared salmon with a sweet and savory glaze",
            ingredients: ["2 salmon fillets (6oz each)", "3 tablespoons honey", "2 tablespoons soy sauce", "4 cloves garlic, minced", "1 tablespoon olive oil", "1 teaspoon fresh ginger, grated", "Sesame seeds for garnish", "Green onions, sliced"],
            instructions: ["Pat salmon fillets dry with paper towels. Season with salt and pepper.", "In a small bowl, whisk together honey, soy sauce, minced garlic, and grated ginger.", "Heat olive oil in a large skillet over medium-high heat.", "Place salmon fillets skin-side up in the pan. Cook for 4-5 minutes", "Garnish with sesame seeds and sliced green onions. Serve with steamed vegetables or rice."],
            nutrition: { calorie: "380 kcal", Protein: "35g", Carbohydrates: "28g", fat: "14g", Sodium: "720mg", Fiber: "0g" },
            tips: ["Don't overcook salmon - it should be slightly pink in the center", "Use wild-caught salmon for best flavor and nutrition", "Let the sauce caramelize slightly for deeper flavor", "Pair with steamed broccoli or asparagus for a complete meal"]
        }
    ]

function randomIndex() {
    var index = Math.floor(Math.random() * recipe.length);
    return index;
}

tryAnotherRecipe();

// window.onload = function () {
//     tryAnotherRecipe();
// };

function tryAnotherRecipe() {
    var index = randomIndex();
    changeImage(index);
    changeRating(index);
    changeRecipeInfo(index);
    changeHeading(index);
    changeIngredients(index);
    changeInstructions(index);
    changeNutrition(index);
    changeTips(index);
    addTimeWarning(index);
}

function changeImage(index) {
    document.getElementById("mainImage").innerHTML =
        `<img class="w-100 h-100 object-fit-cover" src="${recipe[index].image}" alt="${recipe[index].mainHeading}">`;
}

function changeRating(index) {
    document.getElementById("ratings").innerHTML =
        `<div class="flex-center badge-container">
            <i class="fa-solid fa-star color-yellow-400 pe-2"></i>
            <span class="fw-semibold color-gray-900 pe-2 text-size-md">${recipe[index].rating}</span>
            <span class="color-gray-500 text-size-sm">(${recipe[index].reviews}  reviews)</span>
        </div>`;
}

function changeRecipeInfo(index) {
    document.getElementById("prep-time").innerHTML = recipe[index].prepTime + " " + "min";
    document.getElementById("cook-time").innerHTML = recipe[index].cookTime + " " + "min";
    document.getElementById("Serving").innerHTML = recipe[index].serving + " " + "people";

    document.getElementById("top-badges").innerHTML = `
    <span class="color-green-700 bg-green-100 py-1 rounded-5 fw-semibold text-size-sm">${recipe[index].badges[0]}</span>
    <span class="color-blue-700 bg-blue-100 py-1 rounded-5 text-size-sm fw-semibold">${recipe[index].badges[1]}</span>
`;
}

function changeHeading(index) {
    document.getElementById("main-heading").innerHTML = `
        <h3 class="fw-bold text-size-2xl color-gray-900">${recipe[index].mainHeading}</h3>
        <p class="text-size-md color-gray-600 m-0">${recipe[index].description}</p>`;
}


function addTimeWarning(index) {
    var preparationTime = recipe[index].cookTime + recipe[index].prepTime;
    if (preparationTime > 45) {
        document.getElementById("time-warning").innerHTML =
            `<div class="time-warning-card p-3 bg-red-50 border-red-500 border-start border-4 rounded-3 mb-4">
            <div class="d-flex align-items-center">
                <div class="icon flex-center me-2 color-red-500 text-size-xl">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                </div>
                <div>
                    <h3 class="color-red-800 text-size-md fw-semibold m-0">Extended Preparation Time</h3>
                    <p class="text-size-sm color-red-600 m-0">This recipe requires more than 45 minutes to prepare. Plan accordingly!</p>
                </div>
            </div>
        </div>`;
    } else {
        document.getElementById("time-warning").innerHTML = "";
    }
}

function changeIngredients(index) {
    var recipeIngredients = ""
    for (var i = 0; i < recipe[index].ingredients.length; i++) {
        recipeIngredients +=
            `<li class="d-flex align-items-start"> 
                <span class="bg-orange-500 text-white rounded-circle fw-bold flex-center text-size-sm">${i + 1}</span>
                <span class="color-gray-700">${recipe[index].ingredients[i]}</span>
            </li>`;
    }
    document.getElementById("ingredients").innerHTML = recipeIngredients;
}

function changeInstructions(index) {
    var recipeInstructions = "";
    for (var i = 0; i < recipe[index].instructions.length; i++) {
        recipeInstructions +=
            `<li class="d-flex align-items-start mb-4"> 
                <span class="bg-orange-500 text-white me-3 fw-bold flex-center text-size-xl rounded-4 flex-shrink-0">${i + 1}</span>
                <p class="color-gray-700 pt-2 m-0">${recipe[index].instructions[i]}</p>
            </li>`;
    }
    document.getElementById("instructions").innerHTML = recipeInstructions;
}

function changeNutrition(index) {
    document.getElementById("Fat").innerHTML = recipe[index].nutrition.fat;
    document.getElementById("Sodium").innerHTML = recipe[index].nutrition.Sodium;
    document.getElementById("Protein").innerHTML = recipe[index].nutrition.Protein;
    document.getElementById("Fiber").innerHTML = recipe[index].nutrition.Fiber;
    document.getElementById("Carbohydrate").innerHTML = recipe[index].nutrition.Carbohydrates;
    document.getElementById("calories").innerHTML = recipe[index].nutrition.calorie;
}

function changeTips(index) {
    var chefTips = "";
    for (var i = 0; i < recipe[index].tips.length; i++) {
        chefTips +=
            `<div class="chef-tips-card mb-3 d-flex p-3 bg-amber-50 align-items-start border-start border-4 border-amber-400">
                <span class="color-amber-600 text-size-xl mt-1">
                    <i class="fa-solid fa-check-circle"></i>
                </span>
                <p class="color-gray-700">${recipe[index].tips[i]}</p>
            </div>`;
    }
    document.getElementById("tips").innerHTML = chefTips;
}