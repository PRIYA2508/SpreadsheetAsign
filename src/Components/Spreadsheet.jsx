import { Buttons } from "./Buttons";
import { Footer } from "./Footer";
import { HeaderBar } from "./Header";
import { JobStatus } from "./JobStatus";
import { Overview } from "./Overview";
import { SpreadsheetTable } from "./SpreadsheetTable";

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
         <div>
          <SpreadsheetTable/>
         </div>
         <div>
          <Footer/>
         </div>
        </div>
    )
}