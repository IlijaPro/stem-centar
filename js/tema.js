function setujKolacic(ime, vrednost, dani) {// vrednost je ovde koji je tip teme

    const datum = new Date();

    datum.setTime(
        datum.getTime() + (dani * 24 * 60 * 60 * 1000)// trenutni datum + odredjen broj dana pretvoren u milisekunde  
    );

    const istice =
        "expires=" + datum.toUTCString();

    document.cookie =
        `${ime}=${vrednost}; ${istice}; path=/`;
}


function uzmiKolacic(ime) {

    const kolacici =
        document.cookie.split(';');

    for (let i = 0; i < kolacici.length; i++) {

        let k = kolacici[i].trim();

        if (k.indexOf(ime + "=") === 0) {// proverava da li podstring "ime =" se nalazi na pocetku k kolacica posto je pocetna pozicija 0

            return k.substring( (ime + "=").length, k.length ); // na osnovu ova dva parametra izvlaci se naziv vrednosti teme
        }
    }

    return null;
}



/* PROMENA TEME */

function promeniTemu() {

    const bootstrapStranica =
        document.getElementById("bootstrap-stranica");


    /* O NAMA - BOOTSTRAP */

    if (bootstrapStranica) {

        const kartice =
            document.querySelectorAll(".card"); // card je ovde bootstrapp klasa

        const tamnaTema =
            bootstrapStranica.classList.contains("bg-dark");


        if (tamnaTema) {// ako je trenutno tamna tema ukljucena

            bootstrapStranica.classList.remove(
                "bg-dark",
                "text-white"
            );

            bootstrapStranica.classList.add(
                "bg-light",
                "text-dark"
            );


            kartice.forEach(function(kartica) {

                kartica.classList.remove(
                    "bg-dark",
                    "text-white"
                );

                kartica.classList.add(
                    "bg-white",
                    "text-dark"
                );

            });


            setujKolacic(
                "tema",
                "css/svetla.css",
                30
            );

        } else {

            bootstrapStranica.classList.remove(
                "bg-light",
                "text-dark"
            );

            bootstrapStranica.classList.add(
                "bg-dark",
                "text-white"
            );


            kartice.forEach(function(kartica) {

                kartica.classList.remove(
                    "bg-white",
                    "text-dark"
                );

                kartica.classList.add(
                    "bg-dark",
                    "text-white"
                );

            });


            setujKolacic(
                "tema",
                "css/tamna.css",
                30
            );
        }

        return;
    }



    /* SVE OSTALE STRANICE */

    const link =
        document.getElementById("tema-stil");

    const trenutnaTema =
        link.getAttribute("href");

    const novaTema =
        trenutnaTema === "css/svetla.css"
            ? "css/tamna.css"
            : "css/svetla.css";

    link.setAttribute(
        "href",
        novaTema
    );

    setujKolacic(
        "tema",
        novaTema,
        30
    );
}



/* PROMENA FONTA */

function promeniFont() {

    const bootstrapStranica =
        document.getElementById("bootstrap-stranica");


    /* O NAMA - BOOTSTRAP */

    if (bootstrapStranica) {

        const tekstovi =
            bootstrapStranica.querySelectorAll("p");

        const povecan =
            uzmiKolacic("font") === "povecan";


        tekstovi.forEach(function(tekst) {

            if (povecan) {

                tekst.classList.remove("fs-5");

            } else {

                tekst.classList.add("fs-5");

            }

        });


        if (povecan) {

            setujKolacic(
                "font",
                "normalan",
                30
            );

        } else {

            setujKolacic(
                "font",
                "povecan",
                30
            );
        }

        return;
    }



    /* SVE OSTALE STRANICE */

    const fontLink =
        document.getElementById("font-stil");

    const aktivan =
        fontLink.getAttribute("href") ===
        "css/font.css";


    if (aktivan) {

        fontLink.setAttribute(
            "href",
            ""
        );

        setujKolacic(
            "font",
            "normalan",
            30
        );

    } else {

        fontLink.setAttribute(
            "href",
            "css/font.css"
        );

        setujKolacic(
            "font",
            "povecan",
            30
        );
    }
}



/* UČITAVANJE PODEŠAVANJA */

function ucitajPodesavanja() {

    const sacuvanaTema =
        uzmiKolacic("tema");

    const sacuvanFont =
        uzmiKolacic("font");

    const bootstrapStranica =
        document.getElementById("bootstrap-stranica");


    /* O NAMA - BOOTSTRAP */

    if (bootstrapStranica) {

        const kartice =
            document.querySelectorAll(".card");


        if (sacuvanaTema === "css/tamna.css") {

            bootstrapStranica.classList.remove(
                "bg-light",
                "text-dark"
            );

            bootstrapStranica.classList.add(
                "bg-dark",
                "text-white"
            );


            kartice.forEach(function(kartica) {

                kartica.classList.remove(
                    "bg-white",
                    "text-dark"
                );

                kartica.classList.add(
                    "bg-dark",
                    "text-white"
                );

            });
        }


        if (sacuvanFont === "povecan") {

            const tekstovi =
                bootstrapStranica.querySelectorAll("p");

            tekstovi.forEach(function(tekst) {

                tekst.classList.add("fs-5");

            });
        }

        return;
    }



    /* SVE OSTALE STRANICE */

    const temaLink =
        document.getElementById("tema-stil");

    const fontLink =
        document.getElementById("font-stil");


    if (sacuvanaTema && temaLink) {

        temaLink.setAttribute(
            "href",
            sacuvanaTema
        );
    }


    if (
        sacuvanFont === "povecan" &&
        fontLink
    ) {

        fontLink.setAttribute(
            "href",
            "css/font.css"
        );
    }
}
