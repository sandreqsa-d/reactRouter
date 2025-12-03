import { useNavigate } from "react-router-dom";

export default function Task1() {
  const nav = useNavigate();

  return (
    <div className="flex flex-col gap-4 w-[75%] mt-15 m-auto items-center bg-green-300 p-5">
      <h1 className="text-4xl font-bold">This is a page for Task1</h1>
      <button
        onClick={() => nav("/")}
        className="px-5 py-2 text-lg rounded-lg bg-red-500 text-white hover:bg-red-600 transition w-fit"
      >
        Back
      </button>

    </div>
  );
}
