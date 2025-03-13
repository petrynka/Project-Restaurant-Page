const contBox = document.querySelector("#content");

export function createAboutUsPage() {
    contBox.innerHTML = `
        <div class="aboutUsContent">
            <p>About Us</p>
            <p>Step into a world where fine dining meets artistic brilliance. 
                At Lumière, we craft exquisite culinary experiences, blending the finest 
                ingredients with impeccable presentation. Let the warm glow of our 
                ambiance and the harmony of flavors transport you to a place of pure 
                indulgence.</p>
            <p>Reserve your table today and experience the magic of Lumière.</p>
        </div>
    `;

    const reserveBut = document.createElement("button");
    reserveBut.classList.add("reserve");
    reserveBut.textContent = "Reserve your table";
    contBox.appendChild(reserveBut);
}