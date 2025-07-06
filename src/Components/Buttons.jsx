import sort from "../assets/sort.png"
import hide from "../assets/hide.png"
import filter from "../assets/filter.png"
import cell from "../assets/cell.png"
import darrow from "../assets/darrow.png"
import uparrow from "../assets/uparrow.png"
import share from "../assets/share.png"

export function Buttons(){
    return(
        <div className="flex justify-between border border-gray-200 ">
            <div className="flex gap-5 px-2 py-2  items-center">
                <span className="flex items-center">Tool baar</span>
                <span>{">>"}</span>
                <span className="font-light text-gray-300">{"|"}</span>
                <div className="flex gap-1 items-center"><img src={hide} className="w-4 h-5 "/>
                <span className="mr-1">Hide fields</span></div>
                <div className="flex items-center gap-1">
                <img src={sort} className="w-4 "/>
                <span>Sort</span>
                </div>
                <div className="flex items-center gap-1">
                    <img src={filter} className="w-4"/>
                    <span>Filter</span>
                </div>
                <div className="flex items-center gap-1">
                    <img src={cell} className="w-4"/>
                    <span>Cell view</span>
                </div>
                
            </div>
            <div className="flex gap-2 items-center px-2 py-2">
                <button className="border border-gray-200 rounded-md bg-gray-100 flex p-1 cursor-pointer">
                    <img src={darrow} className="w-6 font-bold"/> 
                    Import
                    </button> 
                <button className="border border-gray-200 rounded-md bg-gray-100 flex p-1 items-center gap-1 cursor-pointer">
                    <img src={uparrow} className="w-4"/>
                 Export
                </button>
                <button className="border border-gray-200 rounded-md bg-gray-100 flex p-1 items-center gap-1 cursor-pointer">
                 <img src={share} className="w-4 "/>
                   Share 
                </button>
                <button className="border border-gray-200 rounded-md flex  p-1 bg-green-700 px-3 cursor-pointer">
                    New Actions
                </button>
            </div>

        </div>
     )}