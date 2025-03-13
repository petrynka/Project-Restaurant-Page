import "./style.css";
import {createHomePage, contBox} from "./home.js";
import {createMenuPage} from "./menu.js";
import {createAboutUsPage} from "./about.js";

createHomePage();

const homePage = document.querySelector("#home");
const menuPage = document.querySelector("#menu");
const aboutUs = document.querySelector("#about");

homePage.addEventListener("click", () =>{
    contBox.innerHTML = "";
    createHomePage();
});

menuPage.addEventListener("click", () =>{
    contBox.innerHTML = "";
    createMenuPage();
});

aboutUs.addEventListener("click", () =>{
    contBox.innerHTML = "";
    createAboutUsPage();
});