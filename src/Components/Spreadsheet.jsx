import { Buttons } from "./Buttons";
import { HeaderBar } from "./Header";

export function Spreadsheet(){
    return(
        <div className="flex flex-col">
         <HeaderBar/> 
         <div className=""> <Buttons/></div>
        
        </div>
    )
}