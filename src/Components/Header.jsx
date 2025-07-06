import notification from "../assets/active.png"
import hamburger from "../assets/hamburger.png"
export function HeaderBar() {
  return (
    <div>
    <div className="flex justify-between px-2 py-2 border border-gray-200 items-center">
      <div className="flex gap-3 items-center">
      <img src={hamburger} className="w-4 "/>
       <span className="font-light text-gray-400">Workspace </span>
       <span className="font-light text-gray-400">{">"}</span>
       <span className="font-light text-gray-400">Folder</span>
       <span className="font-light text-gray-400">{">"}</span>
       <span className="font-semibold text-black">Spreadsheet</span>
       <span className="font-light text-gray-400">...</span>
      </div>
      <div className="flex gap-3 items-center">
        <input type="text" placeholder="search with sheet" className="rounded-md bg-gray-100 px-3 py-1 text-sm placeholder-gray-500"/>
        <img src={notification} className="w-8 h-8" alt="notification"/>
        <img
        src="https://i.pravatar.cc/32"
        alt="Profile"
        className="w-8 h-8 rounded-full"
      />
      <div className="flex flex-col text-sm ">
       <span>John Doe</span>
       <span className="font-light text-gray-400 truncate w-[80px]">john.doe.gmail.com</span>
      </div>
        
      </div>
    </div>
    </div>

  )
}