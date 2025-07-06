import { Buttons } from "./Buttons";
import { HeaderBar } from "./Header";
import { JobStatus } from "./JobStatus";
import { Overview } from "./Overview";

export function Spreadsheet(){
    return(
        <div className="flex flex-col">
         <HeaderBar/> 
         <div className=""> <Buttons/></div>
         <div>
            <Overview/>
         </div>
         <div>
           <JobStatus/> 
         </div>
        </div>
    )
}