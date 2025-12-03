import { useNavigate } from "react-router-dom";

export default function Task1() {
  const nav = useNavigate();

  return (
    <div className="w-full min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="flex flex-col gap-4 w-[75%] max-w-xl bg-white/40 backdrop-blur-md rounded-xl p-6 shadow-lg text-center">

        <h1 className="text-4xl font-bold text-gray-800">
          This is a page for Task1
        </h1>

        <button
          onClick={() => nav("/")}
          className="px-5 py-2 text-lg rounded-xl bg-blue-600 text-white hover:bg-blue-700 shadow-md transition w-fit mx-auto"
        >
          Back
        </button>

      </div>
    </div>
  );
}
