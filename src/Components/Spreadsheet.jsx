import { Buttons } from "./Buttons";
import SpreadsheetTable from "./Content";
import { HeaderBar } from "./Header";
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
            <SpreadsheetTable/>
         </div>
        </div>
    )
}