import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Home from "./Client/Pages/Home"

  function App() {
    return (
      <div className="App">
        <BrowserRouter>
        <Routes>

           {/*project*/}
          <Route path="/">
          <Route index element={<Home />} />
         </Route>




        </Routes>
        </BrowserRouter>
      </div>
    );
  }
  
  export default App;

