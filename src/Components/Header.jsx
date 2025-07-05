import notification from "../assets/active.png"
import hamburger from "../assets/hamburger.png"
export function HeaderBar() {
  return (
    <div>
    <div className="flex justify-between px-2 py-2 border items-center">
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

//     <div className="flex justify-between items-center px-4 py-2 bg-white shadow-sm">
//   {/* Left Side: Breadcrumbs */}
//   <div className="flex items-center gap-2 text-sm text-gray-500">
//     {/* Icon Box */}
//     <div className="w-4 h-4 border rounded-sm bg-green-200"></div>

//     {/* Breadcrumb trail */}
//     <span>Workspace</span>
//     <span>{'>'}</span>
//     <span>Folder 2</span>
//     <span>{'>'}</span>
//     <span className="font-semibold text-black">Spreadsheet 3</span>
//     <span className="font-light text-gray-400"">...</span>
//   </div>

//   {/* Right Side: Search, Notification, Profile */}
//   <div className="flex items-center gap-4">
//     {/* Search box */}
//     <input
//       type="text"
//       placeholder="Search within sheet"
//       className="bg-gray-100 text-sm rounded-md px-3 py-1 placeholder-gray-500"
//     />

//     {/* Notification Icon */}
//     <div className="relative">
//       <svg
//         className="w-5 h-5 text-gray-700"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M15 17h5l-1.405-1.405C18.21 14.79 18 14.15 18 13.5V11a6 6 0 10-12 0v2.5c0 .65-.21 1.29-.595 1.795L4 17h5m6 0v1a3 3 0 01-6 0v-1m6 0H9"
//         />
//       </svg>
//       <div className="absolute -top-1 -right-1 bg-green-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
//         2
//       </div>
//     </div>

//     {/* Profile */}
//     <div className="flex items-center gap-2">
//       <img
//         src="https://i.pravatar.cc/32"
//         alt="Profile"
//         className="w-8 h-8 rounded-full"
//       />
//       <div className="flex flex-col text-sm leading-none">
//         <span className="font-semibold text-black">John Doe</span>
//         <span className="text-gray-500 truncate w-[80px]">john.doe@email.com</span>
//       </div>
//     </div>
//   </div>
// </div>

  )
}