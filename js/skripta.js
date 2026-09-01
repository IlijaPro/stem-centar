/* SLAJDER */

let trenutniSlajd = 0;

function prikaziSlajd(indexSlajda) {

    let slajdovi = document.querySelectorAll('.slajd'); // trzi slike slajda po klasi koja je oznacena u html-u sa "slajd"

    if (slajdovi.length === 0) {// ako nema slika za slajd
        return;
    }

    if (indexSlajda >= slajdovi.length)  { //ako brojac slajda jednak broju sladova onda se vracamo na prvu sliku 
        trenutniSlajd = 0;
    } else if (indexSlajda < 0)  {// ako kliknemo levu strelicu slajda onda tok slajda se usmerava na poslednju sliku slajda 
        trenutniSlajd = slajdovi.length - 1;
    } else {
        trenutniSlajd = indexSlajda;
    }

    slajdovi.forEach(slajd => {
        slajd.classList.remove('prikazi'); // prikazi= naziv klase 
    });

    slajdovi[trenutniSlajd].classList.add('prikazi');// ovo prikazi predstavlja naziv klase u css gde je definisano da se slika vidi : opacity:1; 
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

$('#hamburger').on('click', function(){// klikom na element sa id hamburger 

    $('#meni-lista').toggleClass('aktivno');//prikazuje se meni lista sa svojstvom klase aktivno

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
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // pre znaka @ mogu da stoje odredjeni karakteri .... ... ... i minimalno 2 karaktera


    if (email === "" || !emailPattern.test(email)) {

        alert("Unesite ispravnu email adresu.");

        return false;
    }


    if (poruka === "") {

        alert("Poruka je obavezna.");

        return false;
    }


    let jezik = localStorage.getItem("jezik");// kupi podatke sa local storeg-a i to sa jezik.js

    if (jezik === "en") {

    window.location.href = "message.html";

   } 

    else {

    window.location.href = "poruka.html";

     }


    return false;
}
