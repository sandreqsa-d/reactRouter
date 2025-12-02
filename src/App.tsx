import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Task1 from "./components/Task1";
import Gallery from "./components/Task2";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/task1" element={<Task1/>} />
      <Route  path = "/task2" element= {<Gallery/>}/>
    </Routes>
  );
}
