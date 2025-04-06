export {menu}
import mango_salad from "./assests/Mango-Avocado-Salad.jpg"
//import pasta from "./assests/Pasta.jpg"
//import pizza from "./assests/Pizza.jpg"
//import sushi from "./assests/Sushi.jpg"
//import burger from "./assests/Burger.jpg"

function menu() {
    const container = document.querySelector("#content")
    container.textContent = ""

    // Dish 1: Spicy Mango Avocado Salad
    const dish1 = document.createElement("div")
    dish1.className = "dish"
    const dishname1 = document.createElement("p")
    dishname1.className = "para_heading"
    dishname1.textContent = "Spicy Mango Avocado Salad"
    const d1_list = document.createElement("ul")
    const d1_item1 = document.createElement("li")
    d1_item1.className = "dish_desc"
    d1_item1.textContent = "A refreshing mix of ripe mangoes, creamy avocados, crisp greens, and a zesty lime-chili dressing."
    const d1_item2 = document.createElement("li")
    d1_item2.className = "price"
    d1_item2.textContent = "$9.99"
    const d1_item3 = document.createElement("li")
    d1_item3.className = "add_info"
    d1_item3.textContent = "🌿 Vibrant & Fresh: Perfect as a light starter or side."
    const d1_img = document.createElement("img")
    d1_img.src = mango_salad
    const img_div1 = document.createElement("div")
    img_div1.className = "img_div"
    img_div1.appendChild(d1_img)
    d1_list.appendChild(d1_item1)
    d1_list.appendChild(d1_item2)
    d1_list.appendChild(d1_item3)
    dish1.appendChild(img_div1)
    dish1.appendChild(dishname1)
    dish1.appendChild(d1_list)
    container.appendChild(dish1)

    // Dish 2: Pasta
    const dish2 = document.createElement("div")
    dish2.className = "dish"
    const dishname2 = document.createElement("p")
    dishname2.className = "para_heading"
    dishname2.textContent = "Classic Italian Pasta"
    const d2_list = document.createElement("ul")
    const d2_item1 = document.createElement("li")
    d2_item1.className = "dish_desc"
    d2_item1.textContent = "Delicious pasta served with a savory tomato sauce, fresh basil, and parmesan cheese."
    const d2_item2 = document.createElement("li")
    d2_item2.className = "price"
    d2_item2.textContent = "$12.99"
    const d2_item3 = document.createElement("li")
    d2_item3.className = "add_info"
    d2_item3.textContent = "🌿 Comfort food with a taste of Italy."
    const d2_img = document.createElement("img")
   // d2_img.src = pasta
    const img_div2 = document.createElement("div")
    img_div2.className = "img_div"
    img_div2.appendChild(d2_img)
    d2_list.appendChild(d2_item1)
    d2_list.appendChild(d2_item2)
    d2_list.appendChild(d2_item3)
    dish2.appendChild(img_div2)
    dish2.appendChild(dishname2)
    dish2.appendChild(d2_list)
    container.appendChild(dish2)

    // Dish 3: Pizza
    const dish3 = document.createElement("div")
    dish3.className = "dish"
    const dishname3 = document.createElement("p")
    dishname3.className = "para_heading"
    dishname3.textContent = "Margherita Pizza"
    const d3_list = document.createElement("ul")
    const d3_item1 = document.createElement("li")
    d3_item1.className = "dish_desc"
    d3_item1.textContent = "Classic pizza with fresh mozzarella, tomatoes, and basil."
    const d3_item2 = document.createElement("li")
    d3_item2.className = "price"
    d3_item2.textContent = "$14.99"
    const d3_item3 = document.createElement("li")
    d3_item3.className = "add_info"
    d3_item3.textContent = "🌿 Simple, fresh, and flavorful!"
    const d3_img = document.createElement("img")
    //d3_img.src = pizza
    const img_div3 = document.createElement("div")
    img_div3.className = "img_div"
    img_div3.appendChild(d3_img)
    d3_list.appendChild(d3_item1)
    d3_list.appendChild(d3_item2)
    d3_list.appendChild(d3_item3)
    dish3.appendChild(img_div3)
    dish3.appendChild(dishname3)
    dish3.appendChild(d3_list)
    container.appendChild(dish3)

    // Dish 4: Sushi
    const dish4 = document.createElement("div")
    dish4.className = "dish"
    const dishname4 = document.createElement("p")
    dishname4.className = "para_heading"
    dishname4.textContent = "Assorted Sushi"
    const d4_list = document.createElement("ul")
    const d4_item1 = document.createElement("li")
    d4_item1.className = "dish_desc"
    d4_item1.textContent = "A variety of fresh sushi rolls, including tuna, salmon, and avocado."
    const d4_item2 = document.createElement("li")
    d4_item2.className = "price"
    d4_item2.textContent = "$19.99"
    const d4_item3 = document.createElement("li")
    d4_item3.className = "add_info"
    d4_item3.textContent = "🌿 A delightful assortment for sushi lovers."
    const d4_img = document.createElement("img")
   // d4_img.src = sushi
    const img_div4 = document.createElement("div")
    img_div4.className = "img_div"
    img_div4.appendChild(d4_img)
    d4_list.appendChild(d4_item1)
    d4_list.appendChild(d4_item2)
    d4_list.appendChild(d4_item3)
    dish4.appendChild(img_div4)
    dish4.appendChild(dishname4)
    dish4.appendChild(d4_list)
    container.appendChild(dish4)

    // Dish 5: Burger
    const dish5 = document.createElement("div")
    dish5.className = "dish"
    const dishname5 = document.createElement("p")
    dishname5.className = "para_heading"
    dishname5.textContent = "Cheese Burger"
    const d5_list = document.createElement("ul")
    const d5_item1 = document.createElement("li")
    d5_item1.className = "dish_desc"
    d5_item1.textContent = "Juicy beef patty with melted cheese, lettuce, and tomato, served in a fresh bun."
    const d5_item2 = document.createElement("li")
    d5_item2.className = "price"
    d5_item2.textContent = "$11.99"
    const d5_item3 = document.createElement("li")
    d5_item3.className = "add_info"
    d5_item3.textContent = "🌿 A classic American favorite."
    const d5_img = document.createElement("img")
   // d5_img.src = burger
    const img_div5 = document.createElement("div")
    img_div5.className = "img_div"
    img_div5.appendChild(d5_img)
    d5_list.appendChild(d5_item1)
    d5_list.appendChild(d5_item2)
    d5_list.appendChild(d5_item3)
    dish5.appendChild(img_div5)
    dish5.appendChild(dishname5)
    dish5.appendChild(d5_list)
    container.appendChild(dish5)
}
