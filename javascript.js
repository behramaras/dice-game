document.getElementById("buton1").addEventListener("click", () => {
    
    let data = Math.floor(Math.random() * 7);
    if (data === 0) {
        data = data + 1;
    }

    const result = document.getElementById("sonuc1");
    result.textContent = "PLAYER 1 DICE: " + data; // Displays the dice value in the 'sonuc1' element
});

document.getElementById("buton2").addEventListener("click", () => {
    
    let data = Math.floor(Math.random() * 7);
    if (data === 0) {
        data = data + 1;
    }

    const result = document.getElementById("sonuc2");
    result.textContent = "PLAYER 2 DICE: " + data; // Displays the dice value in the 'sonuc2' element
});
