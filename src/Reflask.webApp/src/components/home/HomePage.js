import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();
    return (
      <>
        <h1>Hello World</h1>
      </>
    )
};

export default HomePage;