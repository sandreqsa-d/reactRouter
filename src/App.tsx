import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Task1 from "./components/task2/Task2";
import Task2 from "./components/task1/Task1";



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/task1" element={<Task1 />} />
      <Route path="/task2" element={<Task2 />} />
      
    </Routes>
  );
}
