import Link from "next/link";
import Card from "./Card";

const NoLocationInfo = ({location}) => {
    return (
        <Card>
            <div className="flex flex-col items-center justify-center h-full gap-y-10">
               <h1 className="text-3xl text-center">No Location Info Available for {location}</h1>
               <Link href='/' className="py-1 px-6 rounded-md transition-all duration-500 bg-teal-900 hover:bg-teal-500 hover:text-black text-white">Back To Home</Link>
            </div>
        </Card>
    )
}
export default NoLocationInfo;