import Swiper1 from "@/app/compoentes/Swiper1";

const Pretur = () => {
  return (
    <div className="bg-gray-200 -mt-5">
      {" "}
      <div className="max-w-5xl mx-auto mt-5 pt-5 ">
        <div className="bg-gray-100 shadow-sm mt-5 p-5 border-4 border-gray-200 ">
          <div className="text-center text-2xl  text-sec font-semibold mt-3 ">
            Constructii {'"'}La Rosu{'"'}
          </div>
          <div className="my-2 text-center">
            Descoperă serviciile noastre de construcții pentru case din
            cărămidă, unde fiecare proiect reprezintă o combinație perfectă
            între tradiție și inovație. Cu o experiență vastă în domeniu, ne
            străduim să creăm locuințe care să ofere nu doar confort și
            funcționalitate, ci și un design modern și atrăgător. Fiecare casă
            construită de noi este rezultatul unei atenții deosebite acordate
            fiecărui detaliu, de la fundație până la acoperiș. Utilizăm
            materiale de cea mai înaltă calitate și tehnici de construcție
            avansate pentru a asigura rezistență și durabilitate în timp.
          </div>
          <Swiper1 photos={["constructii/constructiilarosu/17.jpg"]} />
        </div>

        <div className="bg-gray-100 shadow-xl mb-10 p-5 mt-5">
          <div className="text-center text-2xl text-sec font-semibold mt-5 my-2">
            Constructii {'"'}La Cheie{'"'}
          </div>
          <div className="my-2 text-center">
            Descoperă serviciile noastre complete de construcții La Cheie, unde
            ne angajăm să transformăm visul tău de locuință în realitate, fără
            niciun stres sau bătăi de cap din partea ta. De la idee la
            finalizare, echipa noastră de profesioniști se ocupă de fiecare
            aspect al construcției, astfel încât tu să te poți bucura de
            rezultatul final fără nicio grijă. Construcțiile La Cheie includ
            toate etapele necesare pentru a obține o locuință completă și
            funcțională, de la realizarea fundației și structurii de bază până
            la montarea finisajelor interioare și exterioare. În plus, ne ocupăm
            și de instalarea sistemelor electrice, sanitare și termice, astfel
            încât să te poți muta în casa ta nouă fără nicio întârziere sau
            inconveniență
          </div>
          <Swiper1
            photos={[
              "constructii/constructiilacheie/11.jpg",
              "constructii/constructiilacheie/poza3.jpg",
            ]}
          />{" "}
        </div>

        <div className="bg-gray-100 shadow-xl mb-10 p-5 mt-5">
          <div className="text-center text-2xl text-sec font-semibold mt-5 my-2">
            Constructii Traditionale
          </div>
          <div className="my-2 text-center">
            Fie că îți dorești o casă în stil rustic, cu elemente tradiționale
            românești, sau o cabană în mijlocul naturii, construcțiile noastre
            tradiționale sunt realizate cu respect pentru tradiție și atenție la
            detalii. Folosim tehnici și materiale tradiționale, precum lemnul și
            piatra naturală, pentru a crea locuințe care să îmbine confortul
            modern cu autenticitatea tradițională. Echipa noastră de experți în
            construcții tradiționale are o pasiune pentru conservarea și
            promovarea arhitecturii și meșteșugurilor tradiționale. Ne străduim
            să aducem la viață proiectele tale într-un mod autentic și
            respectuos față de tradiție, astfel încât să te poți bucura de o
            locuință plină de caracter și personalitate.
          </div>
          <Swiper1
            photos={[
              "constructii/constructiitaranesti/3.jpg",
              "constructii/constructiitaranesti/7.jpg",
            ]}
          />{" "}
        </div>

        <div className="bg-gray-100 shadow-xl mb-10 p-5 mt-5">
          <div className="text-center text-2xl text-sec font-semibold mt-5 my-2">
            Constructii cu si din Piatra
          </div>
          <div className="my-2 text-center">
            Descoperă eleganța și durabilitatea construcțiilor cu și din piatră,
            o alegere perfectă pentru cei care apreciază frumusețea naturală și
            caracterul autentic al locuințelor lor. Echipa noastră de experți în
            construcții cu piatră aduce la viață proiecte remarcabile, folosind
            materiale de cea mai înaltă calitate și tehnici tradiționale. Fie că
            îți dorești o casă cu fațade din piatră naturală sau elemente
            decorative sculptate manual, construcțiile noastre cu piatră sunt
            realizate cu o atenție deosebită la detalii și respect pentru
            materialele naturale. Ne asigurăm că fiecare proiect reflectă
            personalitatea și gusturile tale, iar rezultatul final să fie o
            locuință unică și impresionantă.
          </div>
          <Swiper1 photos={["constructii/piatra/8.jpg","constructii/piatra/10.jpg"]} />{" "}
        </div>
      </div>
    </div>
  );
};

export default Pretur;
