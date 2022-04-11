import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_COLLECTION } from "../utils/mutations";
// import Auth from "../utils/auth";

const AddCollection = (props) => {
  const [formState, setFormState] = useState({ title: "", description: "" });
  const [collection, { error, data }] = useMutation(ADD_COLLECTION);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await collection({
        variables: { ...formState },
      });

      return data;
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      title: "",
      description: "",
    });
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Add Collection</h4>
          <div className="card-body">
            {data ? (
              <p>
                <b>{formState.title}</b> collection added! Check it out on{" "}
                <a href="../">the homepage.</a>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="title"
                  name="title"
                  type="text"
                  value={formState.title}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="description"
                  name="description"
                  type="text"
                  value={formState.description}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-block btn-info"
                  style={{ cursor: "pointer" }}
                  type="submit"
                >
                  Add
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AddCollection;
