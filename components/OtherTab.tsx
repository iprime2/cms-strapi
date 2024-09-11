import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";

export default function OtherTab ({title, type, slug}: {title: string, type:string, slug:string}) {
return (
    <div className={cn("text-black cursor-pointer hover:text-white hover:bg-rose-600 flex w-full px-5 py-2 justify-between items-center rounded-l-full font-semibold", 
        slug === type ? "bg-rose-700 text-white" : "bg-slate-300"
    )}>
        <ChevronLeft className='text-bold'/>
        <span className="">
        {title}
        </span>
    </div>
    )
}