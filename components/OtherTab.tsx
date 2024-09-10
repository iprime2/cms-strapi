import { ChevronLeft } from "lucide-react";

export default function OtherTab ({title}: {title: string}) {
return (
    <div className="bg-slate-300 text-black cursor-pointer hover:text-white hover:bg-rose-600 flex w-full px-5 py-2 justify-between items-center rounded-l-full font-semibold">
        <ChevronLeft className='text-bold'/>
        <span className="">
        {title}
        </span>
    </div>
    )
}