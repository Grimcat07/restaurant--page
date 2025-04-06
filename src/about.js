export {about}
import employee1 from "./assets/basil.png"
import employee2 from "./assets/barista.jpg"
import employee3 from "./assets/waiter.png"
import employee4 from "./assets/dishwasher.png"
import employee5 from "./assets/manager.png"

function about() {
    const container = document.querySelector("#content");
    container.textContent = "";

    // Employee 1: Benny "The Basil" Thompson - Head Chef 🌿
    const emp1 = document.createElement("div");
    emp1.className = "employee";
    const empName1 = document.createElement("p");
    empName1.className = "para_heading";
    empName1.textContent = "Benny 'The Basil' Thompson - Head Chef 🌿";
    const emp1_list = document.createElement("ul");
    const emp1_desc = document.createElement("li");
    emp1_desc.className = "emp_desc";
    emp1_desc.textContent = "Benny’s secret ingredient? A pinch of sarcasm and a dash of bad puns.";
    const emp1_funFact = document.createElement("li");
    emp1_funFact.className = "fun_fact";
    emp1_funFact.textContent = "🍳 Master of ‘experimental’ dishes that might just surprise you.";
    const emp1_img = document.createElement("img");
    emp1_img.src = employee1;
    const img_div1 = document.createElement("div");
    img_div1.className = "img_div";
    img_div1.appendChild(emp1_img);
    emp1_list.appendChild(emp1_desc);
    emp1_list.appendChild(emp1_funFact);
    emp1.appendChild(img_div1);
    emp1.appendChild(empName1);
    emp1.appendChild(emp1_list);
    container.appendChild(emp1);

    // Employee 2: Jamie "The Juice" Rivera - Barista 🍹
    const emp2 = document.createElement("div");
    emp2.className = "employee";
    const empName2 = document.createElement("p");
    empName2.className = "para_heading";
    empName2.textContent = "Jamie 'The Juice' Rivera - Barista 🍹";
    const emp2_list = document.createElement("ul");
    const emp2_desc = document.createElement("li");
    emp2_desc.className = "emp_desc";
    emp2_desc.textContent = "Jamie believes smoothies should be mini adventures, sometimes spicy ones.";
    const emp2_funFact = document.createElement("li");
    emp2_funFact.className = "fun_fact";
    emp2_funFact.textContent = "🥤 Once made a smoothie so spicy it set off the fire alarm.";
    const emp2_img = document.createElement("img");
    emp2_img.src = employee2;
    const img_div2 = document.createElement("div");
    img_div2.className = "img_div";
    img_div2.appendChild(emp2_img);
    emp2_list.appendChild(emp2_desc);
    emp2_list.appendChild(emp2_funFact);
    emp2.appendChild(img_div2);
    emp2.appendChild(empName2);
    emp2.appendChild(emp2_list);
    container.appendChild(emp2);

    // Employee 3: Alex "The Avocado" Martinez - Waitstaff 🥑
    const emp3 = document.createElement("div");
    emp3.className = "employee";
    const empName3 = document.createElement("p");
    empName3.className = "para_heading";
    empName3.textContent = "Alex 'The Avocado' Martinez - Waitstaff 🥑";
    const emp3_list = document.createElement("ul");
    const emp3_desc = document.createElement("li");
    emp3_desc.className = "emp_desc";
    emp3_desc.textContent = "Alex serves with dramatic flair and once balanced five plates while reciting Shakespeare.";
    const emp3_funFact = document.createElement("li");
    emp3_funFact.className = "fun_fact";
    emp3_funFact.textContent = "📚 Can turn any meal into an existential experience.";
    const emp3_img = document.createElement("img");
    emp3_img.src = employee3;
    const img_div3 = document.createElement("div");
    img_div3.className = "img_div";
    img_div3.appendChild(emp3_img);
    emp3_list.appendChild(emp3_desc);
    emp3_list.appendChild(emp3_funFact);
    emp3.appendChild(img_div3);
    emp3.appendChild(empName3);
    emp3.appendChild(emp3_list);
    container.appendChild(emp3);

    // Employee 4: Sam "The Sous-Vide" Patel - Dishwasher & Philosopher 🧽
    const emp4 = document.createElement("div");
    emp4.className = "employee";
    const empName4 = document.createElement("p");
    empName4.className = "para_heading";
    empName4.textContent = "Sam 'The Sous-Vide' Patel - Dishwasher & Philosopher 🧽";
    const emp4_list = document.createElement("ul");
    const emp4_desc = document.createElement("li");
    emp4_desc.className = "emp_desc";
    emp4_desc.textContent = "Sam contemplates life while elbow-deep in suds and talks to dirty plates.";
    const emp4_funFact = document.createElement("li");
    emp4_funFact.className = "fun_fact";
    emp4_funFact.textContent = "🧼 Believes every dish has a story to tell.";
    const emp4_img = document.createElement("img");
    emp4_img.src = employee4;
    const img_div4 = document.createElement("div");
    img_div4.className = "img_div";
    img_div4.appendChild(emp4_img);
    emp4_list.appendChild(emp4_desc);
    emp4_list.appendChild(emp4_funFact);
    emp4.appendChild(img_div4);
    emp4.appendChild(empName4);
    emp4.appendChild(emp4_list);
    container.appendChild(emp4);

    // Employee 5: Lily "The Lettuce" Kim - Manager & Office DJ 🥬
    const emp5 = document.createElement("div");
    emp5.className = "employee";
    const empName5 = document.createElement("p");
    empName5.className = "para_heading";
    empName5.textContent = "Lily 'The Lettuce' Kim - Manager & Office DJ 🥬";
    const emp5_list = document.createElement("ul");
    const emp5_desc = document.createElement("li");
    emp5_desc.className = "emp_desc";
    emp5_desc.textContent = "Lily manages with the efficiency of a robot and the soul of a poet.";
    const emp5_funFact = document.createElement("li");
    emp5_funFact.className = "fun_fact";
    emp5_funFact.textContent = "🎧 Known for motivational playlists that include '90s hits and mysterious jazz.";
    const emp5_img = document.createElement("img");
    emp5_img.src = employee5;
    const img_div5 = document.createElement("div");
    img_div5.className = "img_div";
    img_div5.appendChild(emp5_img);
    emp5_list.appendChild(emp5_desc);
    emp5_list.appendChild(emp5_funFact);
    emp5.appendChild(img_div5);
    emp5.appendChild(empName5);
    emp5.appendChild(emp5_list);
    container.appendChild(emp5);
}
