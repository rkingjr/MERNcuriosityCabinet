import React, { useState } from "react";
import axios from 'axios';
import Auth from '../../utils/auth'
import { ADD_IMAGE } from "../../utils/mutations";
import { Link } from 'react-router-dom';
import classes from './BlankCubby.module.css';
import { useMutation } from "@apollo/client";

export default function Form() {
    const [title, setTitle] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [description, setDescription] = useState("");
    const [addImage, { error }] = useMutation(ADD_IMAGE);
    console.log(title)
    console.log(selectedFile)
    console.log(description)

    const submitForm = (e) => {
        e.preventDefault();
        const filename = selectedFile.name
        console.log(filename)
 
        const formData = new FormData();
        formData.append("image", selectedFile);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("filename", filename);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post("/upload", formData, config)
             .then(res => {
                 console.log(res);
             })
             .catch(err => {
                 console.log(err);
             })
        
    };

    return (
        <div className={classes.cubby} >
        <div className="flex-row justify-center">
        <div className={classes.card}>
            <h2>Upload an Artifact</h2>
            {Auth.loggedIn() ? (
            <form onSubmit={submitForm} encType="multipart/form-data">
                <div className="form-group">
                    <label >Title</label>
                    <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} aria-describedby="emailHelp" placeholder="Artifact title" />
                </div>
                <div className="form-group">
                    <label >Description</label>
                    <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} id="exampleFormControlTextarea1" rows="3" placeholder="Enter a short description"></textarea>
                </div>
                <div className="form-group">
                    <input type="file" className="form-control-file" name="image" id="exampleFormControlFile1" onChange={(e) => setSelectedFile(e.target.files[0]) && console.log(e.target)} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            ) : (
                <p>
                  You need to be logged in to contribute. Please{' '}
                  <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
                </p>
              )}
        </div>
        </div>
      </div>
    );
};