import SD1 from "@/app/compoentes/SectiuneDespre1";
import Image from "next/image";

const photos = ["1.1.jpg","1.2.jpg","1.3.jpg","2.2.jpg","2.3.jpg","3.1.jpg","3.2.jpg","3.3.jpg","3.4.jpg",]

const Despre = () => {
    return ( <div className="">
        <div className="max-w-5xl px-2 mx-auto mb-10">
            <SD1 />
        </div>
        {
            photos.map((photo) => (
                <div className="mx-auto" key={photo}>
                    <Image className="mx-auto my-8" src={`/poze/${photo}`} height={1000} width={1000} alt="home"/>
                </div>
            ))
        }
    </div> );
}
 
export default Despre;