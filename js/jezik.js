function promeniJezik(jezik)//kupi podatak sa html dugmeta koji jezik je u pitanju  {

    localStorage.setItem("jezik", jezik);// ovo pod znacima navoda je kljucna rec a ovo posle zareza je argument funkcije promeniJezik 

    fetch("podaci/" + jezik + ".json")// pravi se putanja do json fajlova koje se potom proveravaju kroz .then(response.ok)
        .then(response => {

            if (!response.ok) {
                throw new Error("Greska pri ucitavanju JSON fajla");
            }

            return response.json();
        })

        .then(podaci => {

            const tekstovi = podaci.pocetna;// ovde pristupamo zeljenom delu prevoda evo u ovom slucaju deo prevoda za stranicu pocetna 


            /* ZAJEDNICKI DEO SVIH STRANICA */

            document.getElementById("naslov-centra").innerHTML =
                tekstovi.naslov;// ovde je tekstovi zapravo skupina podataka iz fajla za prevod a rec naslov ovde konkretna promenljiva sa json fajla 

            document.getElementById("podnaslov-centra").innerHTML =
                tekstovi.podnaslov;

            document.getElementById("dugme-tema").innerHTML =
                tekstovi.promeniTemu;

            document.getElementById("dugme-font").innerHTML =
                tekstovi.promeniFont;

            document.getElementById("nav-pocetna").innerHTML =
                tekstovi.pocetna;

            document.getElementById("nav-o-nama").innerHTML =
                tekstovi.oNama;

            document.getElementById("megaMeni-Dugme").innerHTML =
                "⯆&nbsp; " + tekstovi.programi;

            document.getElementById("nav-projekti").innerHTML =
                tekstovi.projekti;

            document.getElementById("nav-kontakt").innerHTML =
                tekstovi.kontakt;

            document.getElementById("mega-robotika-elektronika").innerHTML =
                tekstovi.megaRobotikaElektronika;

            document.getElementById("mega-robotika").innerHTML =
                tekstovi.megaRobotika;

            document.getElementById("mega-arduino").innerHTML =
                tekstovi.megaArduino;

            document.getElementById("mega-stem").innerHTML =
                tekstovi.megaStem;

            document.getElementById("mega-programiranje-dizajn").innerHTML =
                tekstovi.megaProgramiranjeDizajn;

            document.getElementById("mega-programiranje").innerHTML =
                tekstovi.megaProgramiranje;

            document.getElementById("mega-3d").innerHTML =
                tekstovi.mega3D;

            document.getElementById("footer-1").innerHTML =
                tekstovi.footer1;

            document.getElementById("footer-2").innerHTML =
                tekstovi.footer2;


            /* POCETNA STRANICA */

            if (document.getElementById("dobrodosli-naslov")) {

                document.getElementById("dobrodosli-naslov").innerHTML =
                    tekstovi.dobrodosliNaslov;

                document.getElementById("dobrodosli-tekst-1").innerHTML =
                    tekstovi.dobrodosliTekst1;

                document.getElementById("dobrodosli-tekst-2").innerHTML =
                    tekstovi.dobrodosliTekst2;

                document.getElementById("saznajte-vise").innerHTML =
                    tekstovi.saznajteVise;

                document.getElementById("izdvojeni-programi").innerHTML =
                    tekstovi.izdvojeniProgrami;

                document.getElementById("robotika-naslov").innerHTML =
                    tekstovi.robotikaNaslov;

                document.getElementById("robotika-tekst").innerHTML =
                    tekstovi.robotikaTekst;

                document.getElementById("programiranje-naslov").innerHTML =
                    tekstovi.programiranjeNaslov;

                document.getElementById("programiranje-tekst").innerHTML =
                    tekstovi.programiranjeTekst;

                document.getElementById("arduino-naslov").innerHTML =
                    tekstovi.arduinoNaslov;

                document.getElementById("arduino-tekst").innerHTML =
                    tekstovi.arduinoTekst;

                document.getElementById("izdvojeni-projekti").innerHTML =
                    tekstovi.izdvojeniProjekti;

                document.getElementById("autonomni-robot-naslov").innerHTML =
                    tekstovi.autonomniRobotNaslov;

                document.getElementById("autonomni-robot-tekst").innerHTML =
                    tekstovi.autonomniRobotTekst;

                document.getElementById("robotska-ruka-naslov").innerHTML =
                    tekstovi.robotskaRukaNaslov;

                document.getElementById("robotska-ruka-tekst").innerHTML =
                    tekstovi.robotskaRukaTekst;

                document.getElementById("pametna-kuca-naslov").innerHTML =
                    tekstovi.pametnaKucaNaslov;

                document.getElementById("pametna-kuca-tekst").innerHTML =
                    tekstovi.pametnaKucaTekst;

                document.getElementById("pogledajte-projekte").innerHTML =
                    tekstovi.pogledajteProjekte;
            }


            /* STRANICA PROJEKTI */

            if (document.getElementById("projekti-naslov")) {

                const projekti = podaci.projekti;

                document.getElementById("projekti-naslov").innerHTML =
                    projekti.projektiNaslov;

                document.getElementById("projekti-uvod").innerHTML =
                    projekti.projektiUvod;

                document.getElementById("projekat-autonomni-robot-naslov").innerHTML =
                    projekti.autonomniRobotNaslov;

                document.getElementById("projekat-autonomni-robot-tekst").innerHTML =
                    projekti.autonomniRobotTekst;

                document.getElementById("projekat-robotska-ruka-naslov").innerHTML =
                    projekti.robotskaRukaNaslov;

                document.getElementById("projekat-robotska-ruka-tekst").innerHTML =
                    projekti.robotskaRukaTekst;

                document.getElementById("projekat-pametna-kuca-naslov").innerHTML =
                    projekti.pametnaKucaNaslov;

                document.getElementById("projekat-pametna-kuca-tekst").innerHTML =
                    projekti.pametnaKucaTekst;

                document.getElementById("projekat-meteoroloska-stanica-naslov").innerHTML =
                    projekti.meteoroloskaStanicaNaslov;

                document.getElementById("projekat-meteoroloska-stanica-tekst").innerHTML =
                    projekti.meteoroloskaStanicaTekst;

                document.getElementById("projekat-navodnjavanje-naslov").innerHTML =
                    projekti.navodnjavanjeNaslov;

                document.getElementById("projekat-navodnjavanje-tekst").innerHTML =
                    projekti.navodnjavanjeTekst;

                document.getElementById("video-naslov").innerHTML =
                    projekti.videoNaslov;

                document.getElementById("video-tekst").innerHTML =
                    projekti.videoTekst;

                document.getElementById("dokument-naslov").innerHTML =
                    projekti.dokumentNaslov;

                document.getElementById("dokument-tekst").innerHTML =
                    projekti.dokumentTekst;

                document.getElementById("dokument-link").innerHTML =
                    projekti.dokumentLink;
            }

         /* STRANICA ROBOTIKA */

if (document.getElementById("robotika-stranica-naslov")) {

    const robotika = podaci.robotika;

    document.getElementById("robotika-stranica-naslov").innerHTML =
        robotika.naslov;

    document.getElementById("robotika-stranica-opis").innerHTML =
        robotika.opis;

    document.getElementById("robotika-stranica-kontakt").innerHTML =
        robotika.kontakt;
}


/* STRANICA ARDUINO I ELEKTRONIKA */

if (document.getElementById("arduino-stranica-naslov")) {

    const arduino = podaci.arduino;

    document.getElementById("arduino-stranica-naslov").innerHTML =
        arduino.naslov;

    document.getElementById("arduino-stranica-opis").innerHTML =
        arduino.opis;

    document.getElementById("arduino-stranica-kontakt").innerHTML =
        arduino.kontakt;
}


/* STRANICA STEM RADIONICE */

if (document.getElementById("stem-stranica-naslov")) {

    const stemRadionice = podaci.stemRadionice;

    document.getElementById("stem-stranica-naslov").innerHTML =
        stemRadionice.naslov;

    document.getElementById("stem-stranica-opis").innerHTML =
        stemRadionice.opis;

    document.getElementById("stem-stranica-kontakt").innerHTML =
        stemRadionice.kontakt;
}


/* STRANICA PROGRAMIRANJE */

if (document.getElementById("programiranje-stranica-naslov")) {

    const programiranje = podaci.programiranje;

    document.getElementById("programiranje-stranica-naslov").innerHTML =
        programiranje.naslov;

    document.getElementById("programiranje-stranica-opis").innerHTML =
        programiranje.opis;

    document.getElementById("programiranje-stranica-kontakt").innerHTML =
        programiranje.kontakt;
}


/* STRANICA 3D MODELOVANJE */

if (document.getElementById("modelovanje-stranica-naslov")) {

    const modelovanje3D = podaci.modelovanje3D;

    document.getElementById("modelovanje-stranica-naslov").innerHTML =
        modelovanje3D.naslov;

    document.getElementById("modelovanje-stranica-opis").innerHTML =
        modelovanje3D.opis;

    document.getElementById("modelovanje-stranica-kontakt").innerHTML =
        modelovanje3D.kontakt;
}

/* STRANICA KONTAKT */

if (document.getElementById("kontakt-naslov")) {

    const kontaktStranica = podaci.kontaktStranica;

    document.getElementById("kontakt-naslov").innerHTML =
        kontaktStranica.naslov;

    document.getElementById("kontakt-uvod").innerHTML =
        kontaktStranica.uvod;

    document.getElementById("label-ime").innerHTML =
        kontaktStranica.ime;

    document.getElementById("label-email").innerHTML =
        kontaktStranica.email;

    document.getElementById("label-program").innerHTML =
        kontaktStranica.program;

    document.getElementById("opcija-izaberite").innerHTML =
        kontaktStranica.izaberite;

    document.getElementById("opcija-robotika").innerHTML =
        kontaktStranica.robotika;

    document.getElementById("opcija-arduino").innerHTML =
        kontaktStranica.arduino;

    document.getElementById("opcija-stem").innerHTML =
        kontaktStranica.stem;

    document.getElementById("opcija-programiranje").innerHTML =
        kontaktStranica.programiranje;

    document.getElementById("opcija-3d").innerHTML =
        kontaktStranica.modelovanje;

    document.getElementById("label-poruka").innerHTML =
        kontaktStranica.poruka;

    document.getElementById("kontakt-posalji").value =
        kontaktStranica.posalji;
}

/* STRANICA O NAMA */

if (document.getElementById("o-nama-naslov")) {

    const oNama = podaci.oNamaStranica;

    document.getElementById("o-nama-naslov").innerHTML =
        oNama.naslov;

    document.getElementById("o-nama-tekst").innerHTML =
        oNama.tekst;

    document.getElementById("misija-naslov").innerHTML =
        oNama.misijaNaslov;

    document.getElementById("misija-tekst").innerHTML =
        oNama.misijaTekst;

    document.getElementById("ciljevi-naslov").innerHTML =
        oNama.ciljeviNaslov;

    document.getElementById("ciljevi-tekst").innerHTML =
        oNama.ciljeviTekst;

    document.getElementById("vlasnik-naslov").innerHTML =
        oNama.vlasnikNaslov;

    document.getElementById("vlasnik-ime").innerHTML =
        oNama.vlasnikIme;

    document.getElementById("instagram-tekst").innerHTML =
        oNama.instagramTekst;

    document.getElementById("lokacija-naslov").innerHTML =
        oNama.lokacijaNaslov;

    document.getElementById("lokacija-tekst").innerHTML =
        oNama.lokacijaTekst;
}

            console.log(podaci);// ovo je samo za proveru ispisa svih podataka koji se nalaze u prevodu

        })

        .catch(error => {

            console.error("Greška:", error);

        });
}
