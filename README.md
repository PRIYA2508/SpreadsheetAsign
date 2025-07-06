Structure:-

Spreadsheet/
├── public/
├── src/
│   ├── components/
│   │   ├── Buttons.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── JobStatus.jsx
│   │   ├── Overview.jsx
│   │   ├── Spreadsheet.jsx
│   │   ├── SpreadsheetData.jsx
│   │   └── SpreadsheetTable.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
└── README.md

Tech Stack:-
React 19
Tailwind CSS
Vite 
Static UI 


Getting Started:-
1.Clone the repo
2.npm start
3.npm run dev

Features:-
1. Each component is responsible for a different feature or section of the page, ensuring a clean, modular structure.
2. SpreadsheetData.jsx contains all the static data used for rendering rows in the SpreadTable.jsx component.
3. In SpreadTable.jsx conditional rendering is applied to style elements like buttons and status tags with dynamic colors based on the data.
4. I render all my components in Spreadsheet.jsx component.
5. Header.jsx contains the top navigation section of the web page.
6. Button.jsx component is a component which is under the header.
7. Footer.jsx defines the footer of the spreadsheet interface, typically holding tabbed navigation like “All Orders,” “Pending,” etc.


