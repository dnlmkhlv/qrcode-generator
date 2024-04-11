let displaybox = document.getElementById("display-box");
let qrimage = document.getElementById("qrimage");
let qrtext = document.getElementById("qrtext");
let downloadButton = document.getElementById("downloadButton");

function GenerateQR() {
    if (qrtext.value.length > 0) { 
        qrimage.src = `https://api.qrserver.com/v1/create-qr-code/?data=${qrtext.value}&size=150x150`;

        displaybox.classList.add("show-img");

        downloadButton.href = qrimage.src;
        downloadButton.style.display = "block"; 
    } else {
        qrtext.classList.add("error");

        setTimeout(() => {
            qrtext.classList.remove("error");
        }, 1000);
    }
}