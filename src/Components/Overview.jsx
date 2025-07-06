export function Overview(){
    return(
      <div className="flex justify-between border border-gray-300 h-10">
        <div className="flex items-center">
            <span className="border border-gray-300 h-10 w-10"></span>
            <div className=" w-[650px] h-10 bg-gray-200 flex items-center">
                <input type="text" placeholder="Q3. Financial Overview" className="rounded-md p-1 m-1 bg-gray-100"/>

            </div>
          
        </div>
        <div className="flex items-center">
         <div className="w-[120px] h-10 bg-green-200 flex items-center justify-center">ABC</div>
         <div className="h-10 w-[250px] bg-purple-300 flex items-center justify-center">Answer a question</div>
         <div className="w-[120px] h-10 bg-orange-200 flex items-center justify-center">Extract</div>
         <div className="w-[120px] h-10 bg-white flex items-center justify-center border border-dotted">{"+"}</div>
        </div>
      </div>  
    )
}