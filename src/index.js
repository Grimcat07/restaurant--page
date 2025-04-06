import "./styles.css"
import {homepage} from "./homepage.js"



const homepage_button=document.querySelector("#homepage");
homepage_button.addEventListener("click",()=>homepage())

homepage();