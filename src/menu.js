const contBox = document.querySelector("#content");

export function createMenuPage(){
    const menu = document.createElement("div");
    menu.classList.add("menu");
    contBox.appendChild(menu);
}