import './App.css';
import Navbar from "./navbar/Navbar"
import Home from "./Pages/home/Home"
import {
  createBrowserRouter, RouterProvider} from "react-router-dom"
import Generate from "./Pages/generate/Generate"

function App() {
  return (
    <>
      <Navbar /> 
      <Home />
    </>
  );
}

export default App;
