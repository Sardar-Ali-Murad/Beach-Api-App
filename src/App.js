import React from "react";
import {Navbar}  from "./components/index"
import {BrowserRouter,Route,Routes}  from "react-router-dom"
import {Home,SingleRoom,Rooms} from "./pages/index"
import {Error} from "./components/index"

function App() {
  return (
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/room/:id" element={<SingleRoom/>}/>
        <Route path="*" element={<Error/>}/>
        <Route path="/rooms" element={<Rooms/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
