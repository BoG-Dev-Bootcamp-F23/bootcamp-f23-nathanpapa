const page = document.getElementById("page");
const colorButton = document.getElementById("colorButton");
const myData = document.getElementById("my-data");
const catButton = document.getElementById("cat-button");

colorButton.addEventListener("click", ()=> {
    if (page.dataset.theme == "dark") {
        page.dataset.theme = "light";
        colorButton.textContent = "Change to Dark Mode";
    } else {
        page.dataset.theme = "dark";
        colorButton.textContent = "Change to Light Mode";
    }
});

catButton.addEventListener("click", ()=> {
    if (myData.querySelector("#info-text") !== null) {
        myData.innerHTML = `
            <img id="silas" src="silas.png" width="85%" />
        `;
        catButton.textContent = "Back to Me";
    } else {
        myData.innerHTML = `
            <p id="info-text">
                Hi! I'm Nathan Papa, and I'm a second-year computer science major from Cookeville, Tennessee.
                I'm a huge video game and music nerd with an interest in software engineering. I also have a 
                really fluffy cat named Silas that is as much of a guard dog as he is a generically mean cat.
            </p>
        `;
        catButton.textContent = "Click to See My Cat";
    }
});
