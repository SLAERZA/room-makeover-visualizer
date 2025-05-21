import React, { useState } from "react";
import axios from "axios";

function Upload() {
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("/api/images", { imageUrl, projectId: 1 });
        alert("Image submitted!");
    };

    return (
        <div>
            <h2>Upload Room Image</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Image URL"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Upload;