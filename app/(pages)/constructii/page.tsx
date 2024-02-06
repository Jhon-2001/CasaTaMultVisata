import Swiper1 from "@/app/compoentes/Swiper1";

const Pretur = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-sec/20 shadow-sm border-4 border-gray-200 mt-5 ">
        <div className="text-center text-2xl  text-sec font-semibold mt-5 ">
          Constructii {'"'} La Rosu{'"'}
        </div>
        <div className="my-2 text-center">
          La constructia unei case la rosu nu sunt incluse finisajele exterioare
          si interioare sau realizarea instalatiilor necesare (sanitare,
          electrice, termice, etc.) Preturile practicate de firma noastra contin
          manopera si materialele folosite si se calculeaza in functie de
          suprafata construita a casei dumneavoastra. In functie de tipul de
          materiale folosite si de complexitatea proiectului, preturile pot
          diferi de la o constructie la alta.
        </div>
        <Swiper1 />
      </div>


      <div className="bg-gray-100 shadow-xl mb-10">
        <div className="text-center text-2xl text-sec font-semibold mt-5">
        Constructii {'"'} La Cheie{'"'}
        </div>
        <div className="my-2 text-center">
          La constructia unei case la rosu nu sunt incluse finisajele exterioare
          si interioare sau realizarea instalatiilor necesare (sanitare,
          electrice, termice, etc.) Preturile practicate de firma noastra contin
          manopera si materialele folosite si se calculeaza in functie de
          suprafata construita a casei dumneavoastra. In functie de tipul de
          materiale folosite si de complexitatea proiectului, preturile pot
          diferi de la o constructie la alta.
        </div>
        <Swiper1 />
      </div>

      <div className="bg-sec/20 shadow-xl">
        <div className="text-center text-2xl  text-sec font-semibold mt-5">
        Constructii Traditionale
        </div>
        <div className="my-2 text-center">
          La constructia unei case la rosu nu sunt incluse finisajele exterioare
          si interioare sau realizarea instalatiilor necesare (sanitare,
          electrice, termice, etc.) Preturile practicate de firma noastra contin
          manopera si materialele folosite si se calculeaza in functie de
          suprafata construita a casei dumneavoastra. In functie de tipul de
          materiale folosite si de complexitatea proiectului, preturile pot
          diferi de la o constructie la alta.
        </div>
        <Swiper1 />
      </div>


      <div className="bg-gray-100 shadow-xl">
        <div className="text-center text-2xl  text-sec font-semibold mt-5">
        Constructii cu si din Piatra
        </div>
        <div className="my-2 text-center">
          La constructia unei case la rosu nu sunt incluse finisajele exterioare
          si interioare sau realizarea instalatiilor necesare (sanitare,
          electrice, termice, etc.) Preturile practicate de firma noastra contin
          manopera si materialele folosite si se calculeaza in functie de
          suprafata construita a casei dumneavoastra. In functie de tipul de
          materiale folosite si de complexitatea proiectului, preturile pot
          diferi de la o constructie la alta.
        </div>
        <Swiper1 />
      </div>
      
    </div>
  );
};

export default Pretur;
