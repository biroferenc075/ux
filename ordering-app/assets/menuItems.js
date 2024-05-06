export const menuItems = [
    // test item
    
    {
        "name" : "Let Him Cook",
        "price" : 9999,
        "type" : "appetizer",
        "allergens" : ["gluten", "dairy", "fish", "shellfish", "soy", "nuts", "eggs"],
        "diets" : ["vegetarian","pescatarian","meat_eater"],
        "description" : "Szia anya",
        "imageSource" : require("./dump/chef.png")
    },
    // main dishes

    {
        "name" : "Margherita Pizza",
        "price" : 1500,
        "type" : "main",
        "allergens" : ["gluten", "dairy"],
        "diets" : ["vegetarian","pescatarian","meat_eater"],
        "description" : "A classic Italian pizza topped with tomato sauce, mozzarella cheese, and fresh basil.",
        "imageSource" : require("./images/food/margherita-pizza.jpg")
    },
    {
        "name" : "Chicken Pad Thai",
        "price" : 1800,
        "type" : "main",
        "allergens" : ["nuts", "soy", "gluten"],
        "diets" : ["meat_eater"],
        "description" : "A Thai stir-fried noodle dish with tender chicken, rice noodles, bean sprouts, and peanuts, flavored with a tangy tamarind sauce.",
        "imageSource" : require("./images/food/chicken-pad-thai.jpg")
    },
    {
        "name" : "Beef Burger",
        "price" : 2000,
        "type" : "main",
        "allergens" : ["gluten", "dairy"],
        "diets" : ["meat_eater"],
        "description" : "Juicy beef patty topped with melted cheese, lettuce, tomato, onion, and pickles, served on a toasted bun with fries on the side.",
        "imageSource" : require("./images/food/beef-burger.jpg")
    },
    {
        "name" : "Vegetable Curry",
        "price" : 1700,
        "type" : "main",
        "allergens" : [],
        "diets" : ["vegan","vegetarian","pescatarian","meat_eater"],
        "description" : "A flavorful Indian curry made with mixed vegetables, simmered in a fragrant blend of spices and coconut milk, served with steamed rice.",
        "imageSource" : require("./images/food/vegetable-curry.jpg")
    },
    {
        "name" : "Sushi Platter",
        "price" : 2500,
        "type" : "main",
        "allergens" : ["gluten", "soy", "fish"],
        "diets" : ["pescatarian","meat_eater"],
        "description" : "A selection of fresh and delicious sushi rolls including California rolls, tuna rolls, and salmon nigiri, served with soy sauce and wasabi.",
        "imageSource" : require("./images/food/sushi-platter.jpg")
    },
    {
        "name" : "Greek Salad",
        "price" : 1600,
        "type" : "main",
        "allergens" : ["dairy"],
        "diets" : ["vegetarian","pescatarian","meat_eater"],
        "description" : "Crisp lettuce, juicy tomatoes, cucumbers, red onions, olives, and feta cheese tossed in a light vinaigrette dressing, topped with oregano.",
        "imageSource" : require("./images/food/greek-salad.jpg")
    },
    {
        "name" : "Chicken Tikka Masala",
        "price" : 1900,
        "type" : "main",
        "allergens" : ["dairy"],
        "diets" : ["meat_eater"],
        "description" : "Tender pieces of grilled chicken cooked in a creamy tomato-based sauce with a blend of aromatic Indian spices, served with naan bread.",
        "imageSource" : require("./images/food/chicken-tikka-masala.jpg")
    },
    {
        "name" : "Spaghetti Carbonara",
        "price" : 1800,
        "type" : "main",
        "allergens" : ["gluten","dairy","eggs"],
        "diets" : ["meat_eater"],
        "description" : "Italian spaghetti pasta tossed in a rich and creamy sauce made with eggs, pancetta, Parmesan cheese, and black pepper.",
        "imageSource" : require("./images/food/spaghetti-carbonara.jpg")
    },
    {
        "name" : "Falafel Wrap",
        "price" : 1600,
        "type" : "main",
        "allergens" : ["gluten"],
        "diets" : ["vegan","vegetarian","pescatarian","meat_eater"],
        "description" : "Crispy falafel balls wrapped in warm pita bread with shredded lettuce, diced tomatoes, cucumber slices, and tahini sauce, served with a side of hummus and pickles.",
        "imageSource" : require("./images/food/falafel-wrap.jpg")
    },
    {
        "name" : "Quinoa Salad",
        "price" : 1700,
        "type" : "main",
        "allergens" : [],
        "diets" : ["vegan","vegetarian","pescatarian","meat_eater"],
        "description" : "Nutritious quinoa mixed with colorful bell peppers, cherry tomatoes, cucumber, red onion, fresh herbs, and a zesty lemon vinaigrette.",
        "imageSource" : require("./images/food/quinoa-salad.jpg")
    },
    {
        "name" : "Vegetable Stir-Fry",
        "price" : 1800,
        "type" : "main",
        "allergens" : [],
        "diets" : ["vegan","vegetarian","pescatarian","meat_eater"],
        "description" : "A medley of crisp vegetables including broccoli, bell peppers, carrots, and snap peas, stir-fried in a savory gluten-free soy sauce, served over steamed jasmine rice.",
        "imageSource" : require("./images/food/vegetable-stir-fry.jpg")
    },

    // side dishes

    {
        "name" : "French Fries",
        "price" : 800,
        "type" : "side",
        "allergens" : [],
        "diets" : ["vegan","vegetarian","pescatarian","meat_eater"],
        "description" : "Crispy and golden French fries, perfect for snacking or pairing with your main course.",
        "imageSource" : require("./images/food/french-fries.jpg")
    },
    {
        "name" : "Garlic Bread",
        "price" : 900 ,
        "type" : "side",
        "allergens" : ["gluten","dairy"],
        "diets" : ["vegetarian","pescatarian","meat_eater"],
        "description" : "Slices of toasted bread brushed with garlic-infused butter and sprinkled with parsley, served warm and flavorful.",
        "imageSource" : require("./images/food/garlic-bread.jpg")
    },
    {
        "name" : "Mixed Green Salad",
        "price" : 1000,
        "type" : "side",
        "allergens" : [],
        "diets" : ["vegan","vegetarian","pescatarian","meat_eater"],
        "description" : "A refreshing salad made with mixed greens, cherry tomatoes, cucumber slices, and a tangy vinaigrette dressing.",
        "imageSource" : require("./images/food/mixed-green-salad.jpg")
    },
    {
        "name" : "Steamed Vegetables",
        "price" : 1200,
        "type" : "side",
        "allergens" : [],
        "diets" : ["vegan","vegetarian","pescatarian","meat_eater"],
        "description" : "A medley of seasonal vegetables, lightly steamed to preserve their natural flavors and nutrients.",
        "imageSource" : require("./images/food/steamed-vegetables.jpeg")
    },
    {
        "name" : "Sweet Potato Fries",
        "price" : 1000,
        "type" : "side",
        "allergens" : [],
        "diets" : ["vegan","vegetarian","pescatarian","meat_eater"],
        "description" : "Crispy sweet potato fries seasoned with a hint of salt, offering a delightful balance of sweetness and crunch.",
        "imageSource" : require("./images/food/sweet-potato-fries.jpg")
    },

    // appetizers
   
    {
        "name" : "Bruschetta",
        "price" : 1000,
        "type" : "appetizer",
        "allergens" : ["gluten"],
        "diets" : ["vegan","vegetarian","pescatarian","meat_eater"],
        "description" : "Toasted slices of baguette topped with diced tomatoes, garlic, basil, and a drizzle of balsamic glaze, bursting with fresh flavors.",
        "imageSource" : require("./images/food/bruschetta.jpg")
    },
    {
        "name" : "Vegetable Spring Rolls",
        "price" : 1400,
        "type" : "appetizer",
        "allergens" : ["gluten","soy"],
        "diets" : ["vegan","vegetarian","pescatarian","meat_eater"],
        "description" : "Crispy spring rolls filled with a colorful assortment of shredded cabbage, carrots, and mushrooms, served with a sweet chili dipping sauce.",
        "imageSource" : require("./images/food/vegetable-spring-rolls.jpg")
    },
    {
        "name" : "Caprese Skewers",
        "price" : 1500 ,
        "type" : "appetizer",
        "allergens" : ["dairy"],
        "diets" : ["vegetarian","pescatarian","meat_eater"],
        "description" : "Skewers of cherry tomatoes, fresh mozzarella balls, and basil leaves drizzled with balsamic reduction, a delightful twist on the classic Caprese salad.",
        "imageSource" : require("./images/food/caprese-skewers.jpg")
    },

    // desserts

    {
        "name" : "Coconut Chia Pudding",
        "price" : 1400 ,
        "type" : "dessert",
        "allergens" : [],
        "diets" : ["vegan","vegetarian","pescatarian","meat_eater"],
        "description" : "Creamy coconut milk combined with chia seeds and a hint of vanilla, chilled to perfection and topped with fresh berries for a vegan-friendly and gluten-free treat.",
        "imageSource" : require("./images/food/coconut-chia-pudding.jpg")
    },
    {
        "name" : "Fresh Fruit Salad",
        "price" : 1300,
        "type" : "dessert",
        "allergens" : [],
        "diets" : ["vegan","vegetarian","pescatarian","meat_eater"],
        "description" : "A refreshing combination of seasonal fruits such as watermelon, pineapple, grapes, and strawberries, served chilled for a light and healthy dessert option.",
        "imageSource" : require("./images/food/fresh-fruit-salad.jpg")
    },
    {
        "name" : "Tiramisu",
        "price" : 1600 ,
        "type" : "dessert",
        "allergens" : ["dairy","gluten","eggs"],
        "diets" : ["vegetarian","pescatarian","meat_eater"],
        "description" : "Layers of espresso-soaked ladyfingers and creamy mascarpone cheese, dusted with cocoa powder for a rich and indulgent Italian treat.",
        "imageSource" : require("./images/food/tiramisu.jpg")
    },
    {
        "name" : "Cheesecake",
        "price" : 1700,
        "type" : "dessert",
        "allergens" : ["dairy","gluten","eggs"],
        "diets" : ["vegetarian","pescatarian","meat_eater"],
        "description" : "A creamy and smooth New York-style cheesecake with a graham cracker crust, served plain or with your choice of fruit topping.",
        "imageSource" : require("./images/food/cheesecake.jpg")
    },

    // drinks

    {
        "name" : "Mojito",
        "price" : 1800,
        "type" : "drink",
        "allergens" : [],
        "diets" : ["vegan","vegetarian","pescatarian","meat_eater"],
        "description" : "A refreshing blend of white rum, fresh mint leaves, lime juice, sugar, and soda water, served over ice.",
        "imageSource" : require("./images/food/mojito.jpg")
    },
    {
        "name" : "Cosmopolitan",
        "price" : 2000,
        "type" : "drink",
        "allergens" : [],
        "diets" : ["vegan","vegetarian","pescatarian","meat_eater"],
        "description" : "A sophisticated cocktail made with vodka, triple sec, cranberry juice, and freshly squeezed lime juice, shaken and strained into a chilled martini glass.",
        "imageSource" : require("./images/food/cosmopolitan.jpg")
    },
    {
        "name" : "White Russian",
        "price" : 2200,
        "type" : "drink",
        "allergens" : ["dairy"],
        "diets" : ["vegetarian","pescatarian","meat_eater"],
        "description" : "A decadent cocktail featuring vodka, coffee liqueur, and cream, served over ice in an old-fashioned glass.",
        "imageSource" : require("./images/food/white-russian.jpg")
    },
    {
        "name" : "Green Tea",
        "price" : 600,
        "type" : "drink",
        "allergens" : [],
        "diets" : ["vegan","vegetarian","pescatarian","meat_eater"],
        "description" : "A classic and aromatic green tea, known for its light and refreshing flavor, perfect for any time of day.",
        "imageSource" : require("./images/food/green-tea.jpg")
    },
    {
        "name" : "Chamomile Tea",
        "price" : 600,
        "type" : "drink",
        "allergens" : [],
        "diets" : ["vegan","vegetarian","pescatarian","meat_eater"],
        "description" : "A soothing herbal tea made from dried chamomile flowers, renowned for its calming properties and delicate floral taste.",
        "imageSource" : require("./images/food/chamomile-tea.jpg")
    },
    {
        "name" : "Espresso",
        "price" : 700,
        "type" : "drink",
        "allergens" : ["dairy"],
        "diets" : ["vegetarian","pescatarian","meat_eater"],
        "description" : "A strong and intense shot of espresso, perfect for a quick pick-me-up or after-dinner indulgence.",
        "imageSource" : require("./images/food/espresso.jpg")
    },
    {
        "name" : "Cappuccino",
        "price" : 2200,
        "type" : "drink",
        "allergens" : ["dairy"],
        "diets" : ["vegetarian","pescatarian","meat_eater"],
        "description" : "A classic Italian coffee made with equal parts espresso, steamed milk, and milk foam, topped with a sprinkle of cocoa powder.",
        "imageSource" : require("./images/food/capuccino.jpg")
    },
    {
        "name" : "Iced Latte",
        "price" : 1000,
        "type" : "drink",
        "allergens" : ["dairy"],
        "diets" : ["vegetarian","pescatarian","meat_eater"],
        "description" : "A refreshing combination of espresso and chilled milk served over ice, perfect for hot summer days or anytime you need a cool caffeine boost.",
        "imageSource" : require("./images/food/iced-latte.jpg")
    },
]    
