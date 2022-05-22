import Home from "./Client/Pages/Home"
import AddProject from "./Client/Pages/Projects/AddProject.jsx"

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Updateproject from "./Client/Pages/Projects/Updateproject";
import Users from "./Client/Pages/Users/Users";
import Updateuser from "./Client/Pages/Users/Updateuser"
import Adduser from "./Client/Pages/Users/Adduser";




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
         <Route path="/projects/updateproject" element ={<Updateproject />}/>


         {/*Users*/}
         <Route path="/users" element ={<Users />}/>
         <Route path="/users/updateuser" element ={<Updateuser />}/>
         <Route path="/users/adduser" element ={<Adduser />}/>
         


        </Routes>
        </BrowserRouter>
      </div>
    );
  }
  
  export default App;

