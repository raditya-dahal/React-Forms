import { useState } from "react";
import { useForm } from "../hooks/formHooks";
import { useFile, useMedia } from "../hooks/apiHooks";

const Upload = () => {
  const { inputs, handleInputChange, handleSubmit } = useForm(doUpload, {
    title: "",
    description: "",
  });
  const [file, setFile] = useState(null);
  const { postFile } = useFile();
  const { postMedia } = useMedia();

  function handleFileChange(evt) {
    if (evt.target.files) setFile(evt.target.files[0]);
  }

  async function doUpload() {
    try {
      if (!file) return;
      const token = localStorage.getItem("token");
      const fileData = await postFile(file, token);
      await postMedia(fileData, inputs, token);
      alert("Upload successful");
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <>
      <h1>Upload</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            value={inputs.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows={5}
            value={inputs.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="file">File</label>
          <input
            id="file"
            name="file"
            type="file"
            accept="image/*,video/*"
            onChange={handleFileChange}
          />
        </div>
        {file && <img src={URL.createObjectURL(file)} width="200" alt="preview" />}
        <button type="submit">Upload</button>
      </form>
    </>
  );
};

export default Upload;
