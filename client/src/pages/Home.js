import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Room Makeover Visualizer</h1>
            <Link to="/upload">Start a Project</Link>
        </div>
    );
}

export default Home;