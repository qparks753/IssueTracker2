import Home from "./Client/Pages/Home"
import AddProject from "./Client/Pages/Projects/AddProject.jsx"

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";




function App() {

    return (
      <div className="App">
        <BrowserRouter>
        <Routes>

           {/*project*/}
          <Route path="/">
          <Route index element={<Home />} />
         </Route>
         <Route path="/projects/addproject" element ={<AddProject />}/>

        </Routes>
        </BrowserRouter>
      </div>
    );
  }
  
  export default App;

