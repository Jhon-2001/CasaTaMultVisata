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
    route: "/contact",
    name: "Contact",
  },
];

const Navbar = () => {
  const route = usePathname();
  return (
    <div className="font-poppins text-main ">
      <div
        className={cn(
          route == "/"
            ? "bg-[url('/p2.jpg')] transition-all ease-in-out duration-200 md:bg-center bg-cover bg-no-repeat h-[30vh] md:h-[50vh]  w-[100vw]"
            : "bg-[url('/p2.jpg')] transition-all ease-in-out duration-200  md:bg-center bg-cover bg-no-repeat h-[13vh] md:h-[15vh]  w-[100vw]"
        )}
      >
        <div className="flex flex-col h-full ">
          {" "}
          <div className="h-20 w-full grow mx-auto md:px-10 px-2 pt-3 flex  justify-between">
            <div className="flex md:flex-row  gap-2">
              <Image
                src="/logo1.jpg"
                className="rounded-md md:h-16 md:w-32 h-12 w-24  "
                alt="logo"
                height={80}
                width={160}
              ></Image>
              <Image
                src="/logo2.jpg"
                className="rounded-md md:h-16 md:w-32 h-12 w-24  "
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
                ? "text-center grow  md:-mt-12 -mt-6 text-gray-800 text-p uppercase text-xl md:text-3xl "
                : "hidden"
            )}
          >
            Construieste cu
            <span className="text-sec/85 font-semibold">
              {" "}
              noi, <br />
            </span>{" "}
            construieste pentru{" "}
            <span className="text-sec/85 font-semibold"> viitor!!!</span>
          </div>
          <div className="flex md:mx-2  text-main md:font-semibold text-md gap-x-2 md:text-md md:gap-x-10">
            {routes.map((item) => (
              <Link
                className={cn("transition-all ease-in-out duration-200",
                  item.route == route ? "bg-sec/30 text-main " : "",
                  "md:px-2 px-1 mb-1 rounded-sm"
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
