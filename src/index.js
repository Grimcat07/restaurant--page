import "./styles.css"
import {homepage} from "./homepage.js"
import {menu} from "./menu.js"


const homepage_button=document.querySelector("#homepage");
homepage_button.addEventListener("click",()=>homepage())
const menu_button=document.querySelector("#menupage")
menu_button.addEventListener("click",()=>menu())
homepage();