export const contBox = document.querySelector("#content");

export function createHomePage(){
    contBox.innerHTML = `
        <div class="main-name">
            <p>Welcome to Lumière –</p>
            <p>A Symphony of Flavors and Elegance</p>
        </div>
    `;

    const reserveBut = document.createElement("button");
    reserveBut.classList.add("reserve");
    reserveBut.textContent = "Reserve your table";
    contBox.appendChild(reserveBut);
}

