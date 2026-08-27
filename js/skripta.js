/* SLAJDER */

let trenutniSlajd = 0;

function prikaziSlajd(indexSlajda) {

    let slajdovi = document.querySelectorAll('.slajd');

    if (slajdovi.length === 0) {
        return;
    }

    if (indexSlajda >= slajdovi.length) {
        trenutniSlajd = 0;
    } else if (indexSlajda < 0) {
        trenutniSlajd = slajdovi.length - 1;
    } else {
        trenutniSlajd = indexSlajda;
    }

    slajdovi.forEach(slajd => {
        slajd.classList.remove('prikazi');
    });

    slajdovi[trenutniSlajd].classList.add('prikazi');
    slajdovi[trenutniSlajd].style.display = 'block';
}


/* AUTOMATSKA PROMENA SLAJDA */

setInterval(function() {

    let slajdovi = document.querySelectorAll('.slajd');

    if (slajdovi.length === 0) {
        return;
    }

    trenutniSlajd++;

    if (trenutniSlajd >= slajdovi.length) {
        trenutniSlajd = 0;
    }

    prikaziSlajd(trenutniSlajd);

}, 3000);


/* UČITAVANJE STRANICE */

window.onload = function() {

    let slajdovi = document.querySelectorAll('.slajd');

    if (slajdovi.length > 0) {
        prikaziSlajd(trenutniSlajd);
    }

    ucitajPodesavanja();
};


/* HAMBURGER MENI - jQuery */

$('#hamburger').on('click', function() {

    $('#meni-lista').toggleClass('aktivno');

});

function posaljiPoruku() {

    alert("Poruka je uspešno uneta.");

}

function validacija() {

    let ime = document.getElementById("ime").value;
    let email = document.getElementById("email").value;
    let poruka = document.getElementById("poruka").value;


    if (ime === "") {

        alert("Ime i prezime su obavezni.");

        return false;
    }


    let emailPattern =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    if (email === "" || !emailPattern.test(email)) {

        alert("Unesite ispravnu email adresu.");

        return false;
    }


    if (poruka === "") {

        alert("Poruka je obavezna.");

        return false;
    }


    let jezik = localStorage.getItem("jezik");

    if (jezik === "en") {

    window.location.href = "message.html";

   } 

    else {

    window.location.href = "poruka.html";

     }


    return false;
}