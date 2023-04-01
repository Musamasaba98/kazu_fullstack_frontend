import React, { useState } from "react";
import Input from "./Input";
import Button from "../../Components/Button";

const MovieForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <form>
      <Input
        label="Title"
        type="text"
        name="title"
        value={title}
        onChange={handleTitleChange}
        required
      />
      <Input
        label="Description"
        name="description"
        value={description}
        onChange={handleDescriptionChange}
      >
        <textarea
          name="description"
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Enter a description"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </Input>
      <Button />
    </form>
  );
};

export default MovieForm;
