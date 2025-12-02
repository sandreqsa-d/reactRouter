import { useNavigate } from "react-router-dom";

export default function Task1() {
  const nav = useNavigate();

  return (
    <div>
      <h1>This is a page for Task2</h1>
      <button
        onClick={() => nav("/")}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#f44336",
          color: "#fff",
          cursor: "pointer",
          transition: "0.3s"
        }}
      >
        Back
      </button>
    </div>
  );
}
