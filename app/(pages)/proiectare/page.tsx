import Image from "next/image";

const Proiectare = () => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto">
        <div className="md:mx-10 mx-2">
          <div className="md:mt-10 space-y-2 my-2 text-text text-md tracking-wide  md:text-start">
            <span className="text-sec font-bold">
              Echipa C.E.B. vă stă la dispoziție cu servicii complete de
              proiectare arhitecturală, structurală și instalații, de la concept
              până la finalizarea construcției:
            </span>
            <ul className="text-main ml-10 mb-5">
              <li>
                ✒ elaborarea temei de proiectare, în conformitate cu cerințele
                clientului;
              </li>
              <li>
                ✒ elaborarea design-ului preliminar și propunere de concept /
                soluție arhitecturală;
              </li>
              <li>
                ✒ reprezentări grafice pentru o mai bună vizualizare (randări și
                ilustrații 3d);
              </li>
              <li>✒ realizarea detaliilor de execuție, necesare pe șantier;</li>
              <li>
                ✒ documentații pentru obținerea Certificatului de Urbanism;
              </li>
              <li>
                ✒ documentații pentru obținerea avizelor, acordurilor solicitate
                prin Certificatul de Urbanism;
              </li>
              <li>
                ✒ documentații pentru obținerea Autorizației de Construire;
              </li>
              <li>✒ studii de urbanism: PUZ, PUD;</li>
              <li>✒ studii de fezabilitate;</li>
              <li>✒ consultanță tehnică de specialitate;</li>
              <li>✒ asistență tehnică de șantier;</li>
              <li>
                ✒ realizarea proiectului tehnic și calculului static (necesar
                pentru conformarea clădirii din punct de vedere al rezistenței);
              </li>
              <li>
                ✒ asistență specializată pe partea de amenajări
                interioare/exterioare.
              </li>
            </ul>
            <Image alt="proiectare" height={1009} width={1009} src="/4.1.jpg"></Image>
            <span className="text-sec font-bold">
              Oferim servicii de consultanță tehnică:
            </span>
            <ul className="text-main ml-10 mb-5">
              <li>✒ stabilirea unui buget prealabil;</li>
              <li>✒ analiza cost-beneficii;</li>
              <li>
                ✒ consultanță referitoare la materiale, cantități și soluții
                tehnice.
              </li>
            </ul>
            <span className="text-sec font-bold">
              Avantajele acestor servicii sunt:
            </span>
            <ul className="text-main ml-10 mb-5">
              <li>✒ reducerea termenului de realizare a investiției;</li>
              <li>
                ✒ reducerea costurilor prin realizarea unui management
                performant al investiției;
              </li>
              <li>
                ✒ folosirea de tehnologii adecvate, moderne, care duc la
                diminuări de costuri și încadrări în bugetele prestabilite.
              </li>
            </ul>
            <Image alt="proiectare" height={1009} width={1009} src="/4.2.jpg"></Image>

            <span className="text-sec font-bold">
             Vă punem la dispoziție
              servicii de proiectare pentru mai multe funcțiuni și programe:
            </span>
            <ul className="text-main ml-10 mb-5">
              <li>✒ locuințe unifamiliare, semicolective și colective;</li>
              <li>✒ locuințe temporare (case de vacanță);</li>
              <li>
                ✒ construcții cu destinație comercială, alimentație și servicii
                administrative (ex. birouri, spații comerciale- alimentație,
                etc);
              </li>
              <li>✒ clădiri cu destinație turistică; hoteluri; pensiuni;</li>
              <li>
                ✒ clădiri cu destinație instituțională; școli, creșe, grădinițe,
                etc.;
              </li>
              <li>✒ construcții industriale.</li>
            </ul>
            <span className="text-sec font-bold">
              Societatea noastră asigură clienților ei servicii complete de
              proiectare de arhitectură, de urbanism, structuri și instalații
              pentru construcții civile și industriale.
            </span>
            <Image alt="proiectare" height={1009} width={1009} src="/4.3.jpg"></Image>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Proiectare;
