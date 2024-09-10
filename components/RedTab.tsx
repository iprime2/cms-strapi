import { ChevronLeft } from "lucide-react";

export default function RedTab ({title}: {title: string}) {
return (
    <div className="bg-rose-800 cursor-pointer hover:bg-rose-600 flex w-full px-5 py-2 justify-between items-center rounded-l-full font-semibold">
        <ChevronLeft className='text-bold'/>
        <span className="">
        {title}
        </span>
    </div>
    )
}