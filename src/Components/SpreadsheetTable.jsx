import { SpreadsheetData } from "./SpreadsheetData";

export function SpreadsheetTable(){
   return(
    <div>
    {SpreadsheetData.map((data,i)=>(
     <div className="flex items-center h-10">
         <div className="flex items-center bg-gray-200 ">
            <span className="w-10 border-2 border-gray-100 h-10 flex items-center justify-center">{data.id}</span>
            <span className="border-2 border-gray-100 h-10 flex items-center justify-center w-[310px]">{data.JobRequest}</span>
            <span className="border-2 border-gray-100 h-10 flex items-center justify-center w-[120px]">{data.Submitted}</span>
            <span className="border-2 border-gray-100 h-10 flex items-center justify-center w-[120px]">{data.Status}</span>
            <span className="border-2 border-gray-100 h-10 flex items-center justify-center w-[120px]">{data.Submitter}</span>
            <span className="border-2 border-gray-100 h-10 flex items-center justify-center w-[120px]">{data.URL}</span>
         </div>
         <div className="flex items-center h-10">
            <span className="border-2 border-gray-100 h-10 flex items-center justify-center w-[120px] bg-green-100">{data.Assigned}</span>
            <span className="border-2 border-gray-100 h-10 flex items-center justify-center w-[125px] bg-purple-200">{data.Priority}</span>
            <span className="border-2 border-gray-100 h-10 flex items-center justify-center w-[125px] bg-purple-200">{data.DueDate}</span>
            <span className="border-2 border-gray-100 h-10 flex items-center justify-center w-[120px] bg-orange-100">{data.Value}</span>
            <span className="h-10 flex items-center justify-center w-[120px] border border-dotted"></span>
         </div>
        </div>
        ))}
        </div>
   ) 
}