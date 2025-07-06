import { SpreadsheetData } from "./SpreadsheetData";

export function SpreadsheetTable(){
   return(
    <div>
    {SpreadsheetData.map((data,i)=>(
     <div className="flex items-center h-10">
         <div className="flex items-center  ">
            <span className="w-10 border border-gray-100 h-10 flex items-center justify-center">{data.id}</span>
            <span className="border border-gray-100 h-10 flex items-center justify-center w-[310px]">
                <span className="overflow-hidden truncate whitespace-nowrap block w-full ml-2">{data.JobRequest}</span>
                </span>
            <span className="border border-gray-100 h-10 flex items-center justify-center w-[120px]">{data.Submitted}</span>
            <span className="border border-gray-100 h-10 flex items-center justify-center w-[120px]">
                <span className={`rounded-xl px-2 py-1 font-medium text-sm
                ${data.Status === "In-process" ? "bg-yellow-300 text-yellow-100" :
                  data.Status === "Complete" ? "bg-green-400 text-green-200" :
                  data.Status === "Need to start" ? "bg-blue-300 text-blue-200":
                  data.Status === "Blocked" ? "bg-red-400 text-red-200":
                  "bg-white"
                }`}
                    >
                    {data.Status}</span>
                </span>
            <span className="border border-gray-100 h-10 flex items-center justify-center w-[120px]">{data.Submitter}</span>
            <span className="border border-gray-100 h-10 flex items-center justify-center w-[120px]">
                <span className="overflow-hidden truncate whitespace-nowrap block w-full ml-2">{data.URL}</span></span>
         </div>
         <div className="flex items-center h-10">
            <span className="border border-gray-100 h-10 flex items-center justify-center w-[120px] truncate overflow-hidden ">{data.Assigned}</span>
            <span className="border border-gray-100 h-10 flex items-center justify-center w-[125px] ">
                <span className={`font-bold ${data.Priority === "Medium" ?"text-amber-500":
                data.Priority === "High" ? "text-red-500":
                data.Priority === "Low" ? "text-blue-500":
                    "text-black"
                }`}>{data.Priority}</span>
                </span>
            <span className="border border-gray-100 h-10 flex items-center justify-center w-[125px] ">
                <span className="ml-5">{data.DueDate}</span></span>
            <span className="border border-gray-100 h-10 flex items-center justify-center w-[120px] ">
                <span className="ml-5">{data.Value}</span></span>
            <span className="h-10 flex items-center justify-center w-[120px] border border-dotted"></span>
         </div>
        </div>
        ))}
        </div>
   ) 
}