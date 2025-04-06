export {homepage}

function homepage() 
{
    const container=document.querySelector("#content");
    container.textContent=""
    const desc=document.createElement("div");
    desc.className="desc"
    const desc_para=document.createElement("p");
    const desc_para_heading=document.createElement("P")
    desc_para_heading.className="para_heading"
    desc_para_heading.textContent="🌿 Urban Harvest - Where Fresh Meets Flavor"
    desc_para.textContent="At Urban Harvest, we believe that good food starts with fresh ingredients and great company. Located in the heart of Downtown Springfield, our cozy eatery offers a vibrant atmosphere where every dish tells a story of flavor, freshness, and culinary creativity."
    desc.appendChild(desc_para_heading)
    desc.appendChild(desc_para)
    container.appendChild(desc)

    const more_info=document.createElement("div")
    more_info.className="more_info"
    const more_info_para_heading=document.createElement("P")
    more_info_para_heading.className="para_heading"
    more_info_para_heading.textContent="We Offer:"
    const string="A diverse menu inspired by global flavors with a local twist*Freshly brewed coffee and handcrafted beverages*Daily specials featuring seasonal ingredients"
    const string_arr=string.split("*");
    const ul_list=document.createElement("ul")
    const item1=document.createElement("li")
    const item2=document.createElement("li")
    const item3=document.createElement("li")
    item1.textContent=string_arr[0]
    item2.textContent=string_arr[1]
    item3.textContent=string_arr[2]
    ul_list.appendChild(item1)
    ul_list.appendChild(item2)
    ul_list.appendChild(item3)
    more_info.appendChild(more_info_para_heading)
    more_info.appendChild(ul_list)
    container.appendChild(more_info)

    const contact=document.createElement("div")
    contact.className="contact"
    const contact_para_heading=document.createElement("p")
    contact_para_heading.className="para_heading"
    contact_para_heading.textContent="📍 Visit Us:"
    const contact_str="🏡 Urban Harvest,123 Flavor Street, Downtown Springfield*📞 (555) 123-4567*🌐 www.urbanharvest.com"
    const contact_arr=contact_str.split("*")
    console.log(contact_arr)
    const ul_list1=document.createElement("ul")
    const contact_item1=document.createElement("li")
    const contact_item2=document.createElement("li")
    const contact_item3=document.createElement("li")
    contact_item1.textContent=contact_arr[0]
    contact_item2.textContent=contact_arr[1]
    contact_item3.textContent=contact_arr[2]
    ul_list1.appendChild(contact_item1)
    ul_list1.appendChild(contact_item2)
    ul_list1.appendChild(contact_item3)
    contact.appendChild(contact_para_heading)
    contact.appendChild(ul_list1)
    container.appendChild(contact)
}