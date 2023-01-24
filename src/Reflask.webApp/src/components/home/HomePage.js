import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();
    return (
      <>
        <h1>Hello World</h1>
        {/* navigate link to /test */}
        <button onClick={() => navigate("/test")}>Navigate to /test</button>
      </>
    )
};

export default HomePage;