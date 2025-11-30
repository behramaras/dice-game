
    

    document.getElementById("buton1").addEventListener("click", () => {
       
        const data = Math.floor(Math.random() * 7);
        if(data==0)
            data=data+1

        const sonuc = document.getElementById('sonuc1');
        sonuc.textContent ="1.OYUNCUNUN ZARI:  "+" "+ data; // data'yı 'sonuc1' elemanına yazdırır
    });

    document.getElementById("buton2").addEventListener("click", () => {
        
        const data = Math.floor(Math.random() * 7);
        if(data==0)
            data=data+1

        const sonuc = document.getElementById('sonuc2');
        sonuc.textContent ="2.OYUNCUNUN ZARI: "+" " + data; // data'yı 'sonuc1' elemanına yazdırır
    });