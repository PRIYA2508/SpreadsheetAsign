export function Footer(){
    return(
        <div className="flex items-center h-full ">
            <span className="w-10 border border-gray-50"></span>
            <span className=" bg-green-200 w-30 flex items-center justify-center px-2 text-green-950 font-bold border-t-4 border-green-700"> All orders</span>
            <span className="px-5 font-light text-gray-400">Pending</span>
            <span className="px-7 font-light text-gray-400">Reviewed</span>
            <span className="px-5 font-light text-gray-400">Arrived</span>
            <span className="font-light text-gray-400">{"+"}</span>
        </div>
    )
}