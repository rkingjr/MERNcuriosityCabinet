import React, { useState } from "react";
import axios from 'axios';

export default function Form() {
    const [title, setTitle] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [description, setDescription] = useState("");

    const submitForm = () => {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("file", selectedFile);
        formData.append("description", description);

        axios
            .post(ADD_IMAGE, formData)
            .then((res) => {
                alert("File Upload success");
            })
            .catch((err) => alert("File Upload Error"));
    };

    return (
        <div className="Form">
            <h2>Upload an Artifact</h2>
            <form>
                <div className="form-group">
                    <label >Title</label>
                    <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} aria-describedby="emailHelp" placeholder="Artifact title" />
                </div>
                <div className="form-group">
                    <label >Description</label>
                    <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} id="exampleFormControlTextarea1" rows="3" placeholder="Enter a short description"></textarea>
                </div>
                <div className="form-group">
                    <input type="file" className="form-control-file" value={selectedFile} id="exampleFormControlFile1" onChange={(e) => setSelectedFile(e.target.files[0])} />
                </div>

                <button onClick={submitForm}>Submit</button>
            </form>
        </div>
    );
};