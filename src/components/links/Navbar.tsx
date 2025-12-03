import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex gap-4 justify-center mt-6">
      <Link to="/">
        <button className="px-5 py-2 text-lg rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition">
          Home
        </button>
      </Link>

      <Link to="/task2">
        <button className="px-5 py-2 text-lg rounded-lg bg-green-500 text-white hover:bg-green-600 transition">
          Go to Task 1
        </button>
      </Link>

      <Link to="/task1">
        <button className="px-5 py-2 text-lg rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition">
          Go to Task 2
        </button>
      </Link>
    

    </div>
  );
};

export default Navbar;
