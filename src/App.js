// import {
//     BrowserRouter,
//     Routes,
//     Route,
// } from "react-router-dom";

// import Home from "./Client/Pages/Home"
import "./App.css";
import React from 'react'
import Sidebar from "./Client/Components/Sidebar/Sidebar"
 
 function App() {
   return (
     <div className="App">
        <div className="GlassEffect">
          <Sidebar />
          <div>Middle</div>
          <div>End</div>
          
        </div>
     </div>
   )
 }
 


















  // function App() {
  //   return (
  //     <div className="App">
  //       <BrowserRouter>
  //       <Routes>

  //          {/*project*/}
  //         <Route path="/">
  //         <Route index element={<Home />} />
  //        </Route>




  //       </Routes>
  //       </BrowserRouter>
  //     </div>
  //   );
  // }
  
  export default App;

