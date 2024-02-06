"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import React from "react";
import CountUp from "react-countup";

const Sectiune1 = () => {
  const [num, setNum] = React.useState(30);
  const [num2, setNum2] = React.useState(1824);
  const [num3, setNum3] = React.useState(143134);

  return (
    <div className="">
      <div className="max-w-7xl md:px-20 mx-auto ">
        <div className="flex bg-gray-100 items-center md:my-10  flex-row md:hadow-md  m-3 md:p-0 gap-x-5 gap-y-5">
          <div className="hidden w-1/2 md:block ">
            {" "}
            <Image
              src="/casa.jpg"
              alt="casa"
              width={400}
              height={300}
              className="h-auto w-auto"
            />
          </div>

          <div className="md:mt-10 space-y-2 my-2 text-text text-md tracking-wide text-center md:text-start">
            {" "}
            <span className="text-sec"> 
              {" "}
              Bun venit pe pagina noastră de prezentare! În caz dacă suntenţi în
              căutarea unei firme de constructii prestigioase şi de încredere,
              aţi nimerit tocmai la locul potrivit <br /><br />
            </span>
            {/* CASATAMULTVISATA EVOLVE BUSINESS S.R.L. S.R.L. este o societate cu
            capital privat, înfiintata în conformitate cu Legea 31/1990, br
            înmatriculata la Registrul Comertului al Municipiului Cluj-Napoca{" "} */}
            Suntem o echipă de profesioniști dedicați să realizăm
            proiecte in domeniul construcțiilor care să îndeplinească nevoile și visurile
            clienților noștri. Fie că doriți să construiți o casă nouă sau să
            renovați o locuință existentă, suntem aici pentru a vă ajuta să
            transformați visul dumneavoastră în realitate.
            <br /> <br />
            <span className="text-sec">
              {/* Numarul de ordine in Registrul Comestului: J12/3204/2021, Cod Unic
              de Inregistrare: RO 37638637, sediul social ROMANIA, CLUJ,
              FLORESTI Str. Eroilor, Nr. 18C, Bl. C4, Sc.1 Ap. 9 */}
              Cu o vastă experiență în domeniul construcțiilor și cu o echipă
              bine pregătită, vă garantăm că proiectul dumneavoastră va fi
              gestionat cu profesionalism și atenție la detalii. Indiferent de
              dimensiunea sau complexitatea proiectului, ne angajăm să vă oferim
              soluții personalizate și rezultate de excepție.
            </span>
            <br /> <br />
            {/* Obiectul principal de activitate este:{" "}
            <span className="font-bold">7111</span> Activitati de arhitectura”.
            Echipa C.E.B. are o experienta in realizarea a peste 500 de proiecte
            structuri diverse: beton armat, otel, zidarie, lemn. */}
            Contactați-ne pentru a discuta despre proiectul dumneavoastră și
            pentru a afla cum vă putem ajuta să vă transformați visul în
            realitate.
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex md:flex-row flex-col gap-10 items-center my:mx-10 my-10 justify-evenly">
          <div className="flex flex-col  items-center">
            <h1 className="text-5xl font-bold">
              {" "}
              <CountUp duration={4.75} start={0} end={30} delay={0}></CountUp>
              <span className="text-sec "></span>
            </h1>
            <p className="text-text text-3xl">Ani Experiență</p>{" "}
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-5xl font-bold flex">
              {" "}
              <CountUp
                duration={4.75}
                start={0}
                end={1533}
                delay={0}
              ></CountUp>{" "}
              <span className="text-sec -translate-y-4">+</span>
            </h1>
            <p className="text-text text-3xl">Proiecte Finalizate</p>{" "}
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-5xl font-bold flex">
              {" "}
              <CountUp
                duration={4.75}
                start={0}
                end={124143}
                delay={0}
              ></CountUp>{" "}
              <span className="text-sec -translate-y-4">+</span>
            </h1>
            <p className="text-text text-3xl">MP Construiti</p>{" "}
          </div>
        </div>
      </div>
      <div className="text-3xl text-center bg-zinc-900/40 bg-[url('/p3.jpeg')] transition-all ease-in-out duration-200 md:bg-center bg-cover bg-no-repeat h-[30vh] md:h-[50vh]  w-[100vw] flex items-center justify-center text-main font-bold ">
        CONSULTANTA IN CONSTRUCTII
      </div>
      <div className="">
        {" "}
        <ul className=" text-md text-text py-5 bg-gray-100/50 text-center border-2">
          <li> Servicii specializate de intocmire și verificare a ofertelor</li>
          <li>
            {" "}
            Gestionați eficient situațiile de plată cu Dirigenția de șantier
          </li>
          <li> Experți în Project Management pentru proiecte reușite</li>
          <li>
            Realizăm amenajări pentru case și vile, oferind expertiză tehnică în
            construcții existente pentru consolidare, extindere, supraetajare,
            alipiri la calcan și subzidiri
          </li>
        </ul>
      </div>
      <div className="">
        <div className=" bg-zinc-900/40 bg-[url('/p4.jpeg')] transition-all ease-in-out duration-200 md:bg-center bg-cover bg-no-repeat h-[30vh] md:h-[50vh]  w-[100vw] flex items-center justify-center text-sec tracking-wider font-bold  text-2xl">
          SERVICII DE PROIECTARE{" "}
        </div>{" "}
        <div className="">
          {" "}
          <ul className=" text-md p-4 mb-10 text-text bg-gray-100/50 text-center border-2">
            <li>Proiectare arhitectură</li>
            <li>Proiectare arhitectură tradițională țărănească românească</li>
            <li>Proiectare rezistență</li>
            <li>Proiectare instalații sanitare, termice, electrice</li>
            <li>Proiecte tip personalizate (case și vile)</li>
            <li>
              Proiecte de arhitectură, rezistență și instalații pentru
              amenajări, consolidări, reparații
            </li>
            <li>Expertiză tehnică în construcții</li>
            <li>Verificare MLPAT</li>
            <li>Studii de fezabilitate</li>
            <li>Documentații PUZ, PUD</li>
            <li>
              Proiect pentru obținerea Autorizației de Construire | Proiect
              tehnic și detalii de execuție
            </li>
            <li>Specificații tehnice și liste de cantități</li>
            <li>Urmărire și asistență tehnică de șantier</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sectiune1;
