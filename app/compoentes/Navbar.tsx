"use client";
import Image from "next/image";
import { MdOutlinePhoneForwarded } from "react-icons/md";
import { ImFacebook2 } from "react-icons/im";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

const routes = [
  {
    route: "/",
    name: "Acasa",
  },
  {
    route: "/despre",
    name: "Despre Noi",
  },
  {
    route: "/constructii",
    name: "Constructii",
  },
  {
    route: "/preturi",
    name: "Preturi",
  },
  {
    route: "/proiectare",
    name: "Proiectare",
  },
  {
    route: "/contact",
    name: "Contact",
  },
];

const Navbar = () => {
  const route = usePathname();
  return (
    <div className="font-poppins  text-main ">
      <div
        className={cn(
          route == "/"
            ? "bg-[url('/1.3.jpg')] transition-all ease-in-out duration-200 md:bg-center bg-cover bg-no-repeat h-[30vh] md:h-[50vh]  w-[100vw]"
            : "bg-[url('/p2.jpg')] transition-all ease-in-out duration-200  md:bg-center bg-cover bg-no-repeat h-[13vh] md:h-[16vh]  w-[100vw]"
        )}
      >
        <div className="flex flex-col h-full ">
          {" "}
          <div className="h-20 w-full  grow mx-auto md:px-10 px-2 pt-3 flex  justify-between">
            <div className="flex md:flex-row gap-2">
              <Image
                src="/logo1.jpg"
                className="rounded-md md:h-28 md:w-64 h-14 w-28  "
                alt="logo"
                height={80}
                width={160}
              ></Image>
              <Image
                src="/logo2.jpg"
                className="rounded-md md:h-28 md:w-64 h-14 w-28  "
                alt="logo"
                height={80}
                width={160}
              ></Image>
            </div>
            <div className="flex mr-2 ">
              <div className="flex flex-col items-center text-main ">
                <MdOutlinePhoneForwarded size={32} />
                <span className=" whitespace-nowrap font-bold text-p3 px-2 bg-sec/20 rounded-md  py-0.5">
                  0742 756576
                </span>
              </div>
              <div className=""> {/* <ImFacebook2 size={26} /> */}</div>
            </div>
          </div>
          <div
            className={cn(
              route == "/"
                ? "text-center grow  md:-mt-12 -mt-6 text-sec text-p uppercase text-xl md:text-3xl "
                : "hidden"
            )}
          >
            <div className="text-sec bg-white/50 flex items-center justify-center ">
              Construieste cu{" "}
              <span className="text-sec/85 ml-2 font-semibold">
                {" "}
                noi, <br />
              </span>{" "}
            </div>
            <div className="text-sec bg-white/50 flex items-center justify-center ">
              {" "}
              construieste pentru{" "}
              <span className="text-sec/85 font-semibold ml-2"> viitor!!!</span>
            </div>
          </div>
          <div className="flex md:mx-2  text-black text-sm md:font-semibold md:text-md gap-x-1.5 md:text-md md:gap-x-10">
            {routes.map((item) => (
              <Link
                className={cn(
                  "transition-all bg-500/50 bg-white/80 whitespace-nowrap ease-in-out duration-200",
                  item.route == route ? "bg-sec/50 text-whit " : "",
                  "md:px-2 px-0.5 mb-1 rounded-sm"
                )}
                key={item.route}
                href={item.route}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
