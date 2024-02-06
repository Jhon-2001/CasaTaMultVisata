import Image from "next/image";

const Sectiune2 = () => {
  return (
    <div className="">
      <div className="flex md:flex-row flex-col items-center">
        <div className="md:w-1/2">
          <p className=" uppercase my-5 md:my-0 text-6xl text-center md:text-[10rem] text-text2 font-bold ">
            De ce noi ?
          </p>
        </div>
        <div className="md:w-1/2">
          <div className="flex flex-col gap-y-4 items-center">
            <div className="flex md:flex-row flex-col border-2 shadow-xl border-text2 p-4 rounded-md ml-2 mr-2">
              <div className=" md:p-5 pl-2 m-auto">
                <Image
                  alt="icon"
                  width={100}
                  height={100}
                  src="/icons/2-1.png"
                />
              </div>
              <div className="md:w-2/3 flex flex-col ">
                <h1 className="border-b-2 mr-2 pb-2 border-text2 text-main md:text-start font-bold text-3xl text-center">Experiență</h1>
                <p className="mt-2 text-md text-text text-center md:text-start">
                  În cei 30 de ani de activitate am revitalizat mii de metri de
                  parchet și am învățat cum să rezolvăm orice problemă poate
                  apărea.
                </p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col border-2 shadow-xl border-text2 p-4 rounded-md ml-2 mr-2">
              <div className="md:p-5 pl-2 m-auto">
                <Image
                  alt="icon"
                  width={100}
                  height={100}
                  src="/icons/3-1.png"
                />
              </div>
              <div className="md:w-2/3 flex flex-col ">
                <h1 className="border-b-2 mr-2 pb-2 border-text2 text-main md:text-start font-bold text-3xl text-center">Rapiditate</h1>
                <p className="mt-2 text-md text-text text-center md:text-start">
                Timpul este la fel de important pentru noi precum și pentru clienții noștri iar echipa noastră promite o lucrare rapidă și calitativă
                </p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col border-2 shadow-xl border-text2 p-4 rounded-md ml-2 mr-2">
              <div className=" md:p-5 pl-2 m-auto">
                <Image
                  alt="icon"
                  width={100}
                  height={100}
                  src="/icons/1-1.png"
                />
              </div>
              <div className="md:w-2/3 flex flex-col ">
                <h1 className="border-b-2 mr-2 pb-2 border-text2 text-main md:text-start font-bold text-3xl text-center">Profesionalism</h1>
                <p className="mt-2 text-md text-text text-center md:text-start">
                Indiferent de proiect, echipa noastră vă promite o lucrare impecabilă și nu va pleca de la dumneavoastră până când sunteți mulțumit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectiune2;
