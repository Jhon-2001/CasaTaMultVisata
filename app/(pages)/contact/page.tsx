import { FaLocationDot } from "react-icons/fa6";
import { IoIosMailUnread } from "react-icons/io";
import { MdContactPhone } from "react-icons/md";
import { SiCilium } from "react-icons/si";

import Link from "next/link";

const Contact = () => {
  return (
    <div className="">
      <div className="">
        <div className="text-sec text-center text-3xl font font-semibold my-5 mb-10">
          Unde ne gasesti ?
        </div>
        <div className="flex flex-col items-center justify-center gap-y-6 divide-y-2 divide-sec/80 gap-x-2">
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-main/30 text-sec p-4">
              {" "}
              <FaLocationDot size={40} />
            </div>
            <div className="text-xl my-2 text-main/80 font-semibold">
              Adresa
            </div>
            <p className="text-center text-main/70 font-semibold">
              ROMANIA, CLUJ, FLORESTI <br /> Str. Eroilor, Nr. 18C, Bl. C4, Sc.1
              Ap. 9
            </p>
          </div>
          <div className="flex flex-col items-center pt-5">
            <div className="rounded-full bg-main/30 text-sec p-4">
              {" "}
              <IoIosMailUnread size={40} />
            </div>
            <div className="text-xl my-2 text-main/80 font-semibold">Email</div>
            <p className="text-center text-main/70 font-semibold">
              office@casatamultvisata.ro
            </p>
          </div>
          <div className="flex flex-col items-center pt-5">
            <div className="rounded-full bg-main/30 text-sec p-4">
              {" "}
              <MdContactPhone size={40} />
            </div>
            <div className="text-xl my-2 text-main/80 font-semibold">
              Telefon
            </div>
            <p className="text-center text-main/70 font-semibold">
              <Link href="tel:+44742756576" className="">
                0742756576
              </Link>
              <br />
              <Link className="" href="tel:+44752013176">
                0752013176
              </Link>{" "}
            </p>
            
          </div>{" "}
          <div className="flex flex-col items-center pt-5">
            <div className="rounded-full bg-main/30 text-sec p-4">
              {" "}
              <SiCilium size={40} />
            </div>
            <div className="text-xl my-2 text-main/80 font-semibold">
              Date Firma
            </div>
            <div className="flex  flex-col font-semibold">
              <div className="flex">
                {" "}
                <span className=" text-sec mr-2">C.U.I: </span>{" "}
                <p className=""> 44554245</p>
              </div>
             
              <div className="flex">
                {" "}
                <span className=" text-sec mr-1">O.N.R.C: </span>{" "}
                <p className=""> J12/3204/2021</p>
              </div>
            </div>
            <div className=""></div>
            <div className=""></div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Contact;
