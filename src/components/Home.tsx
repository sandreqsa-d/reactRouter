import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <h1 style={{ textAlign: "center", marginTop: "50px" }}>This is home page</h1>
            <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                marginTop: "30px"
            }}>
                <Link to="/task1">
                    <button style={{
                        padding: "10px 20px",
                        fontSize: "16px",
                        borderRadius: "8px",
                        border: "none",
                        backgroundColor: "#4CAF50",
                        color: "#fff",
                        cursor: "pointer",
                        transition: "0.3s"
                    }}

                    >
                        Go to Task 1
                    </button>
                </Link>
                <Link to="/task2">
                    <button style={{
                        padding: "10px 20px",
                        fontSize: "16px",
                        borderRadius: "8px",
                        border: "none",
                        backgroundColor: "#2196F3",
                        color: "#fff",
                        cursor: "pointer",
                        transition: "0.3s"
                    }}

                    >
                        Go to Task 2
                    </button>
                </Link>
            </div>
        </>
    );
}
