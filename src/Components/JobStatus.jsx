export function JobStatus(){
    return(
        <div className="flex items-center h-10">
         <div className="flex items-center bg-gray-200 ">
            <span className="w-10 border-2 border-gray-100 h-10 flex items-center justify-center">#</span>
            <span className="border-2 border-gray-100 h-10 flex items-center justify-center w-[310px]">Job Request</span>
            <span className="border-2 border-gray-100 h-10 flex items-center justify-center w-[120px]">Submitted</span>
            <span className="border-2 border-gray-100 h-10 flex items-center justify-center w-[120px]">Status</span>
            <span className="border-2 border-gray-100 h-10 flex items-center justify-center w-[120px]">Submitter</span>
            <span className="border-2 border-gray-100 h-10 flex items-center justify-center w-[120px]">URL</span>
         </div>
         <div className="flex items-center h-10">
            <span className="border-2 border-gray-100 h-10 flex items-center justify-center w-[120px] bg-green-100">Assigned</span>
            <span className="border-2 border-gray-100 h-10 flex items-center justify-center w-[125px] bg-purple-200">Priority</span>
            <span className="border-2 border-gray-100 h-10 flex items-center justify-center w-[125px] bg-purple-200">Due Date</span>
            <span className="border-2 border-gray-100 h-10 flex items-center justify-center w-[120px] bg-orange-100">Est. Value</span>
            <span className="h-10 flex items-center justify-center w-[120px] border border-dotted"></span>
         </div>
        </div>
    )
}
