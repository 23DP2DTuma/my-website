function showMessage() {
    document.getElementById("message").textContent = "Mani sauc Dmitrijs un tas mana mājaslapa.";
}

function fetchCatFact() {
    fetch("https://catfact.ninja/fact")
        .then(response => response.json())
        .then(data => {
            document.getElementById("fact").textContent = data.fact;
        })
}

function fetchCatImage() {
    fetch("https://api.thecatapi.com/v1/images/search")
        .then(response => response.json())
        .then(data => {
            const img = document.createElement("img");
            img.src = data[0].url;
            img.style.width = "300px";
            img.style.marginTop = "10px";
            
            const container = document.getElementById("cat-image-container");
            container.innerHTML = ""; 
            container.appendChild(img);
        })
}

function checkGuess() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    const userGuess = document.getElementById("guess").value;
    const resultText = userGuess == randomNumber ? "Pareizi! 🎉" : `Nepareizi! Pareizais skaitlis bija ${randomNumber}.`;
    
    document.getElementById("result").textContent = resultText;
}