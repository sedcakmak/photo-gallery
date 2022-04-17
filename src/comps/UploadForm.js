import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
// import useFirestore from "../hooks/useFirestore";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  //const { docs } = useFirestore("images");
  // console.log(docs);

  // const removeImage = (id) => {
  // setFile((oldState) => oldState.filter((item) => item.id !== id));
  // console.log(id);
  // };

  const types = ["image/png", "image/jpeg"];
  const changeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpeg)");
    }
    console.log(e.target.files);
  };

  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
        {/* <button className="btn-delete" onClick={() => removeImage(docs.id)}>
          Delete
        </button> */}
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
