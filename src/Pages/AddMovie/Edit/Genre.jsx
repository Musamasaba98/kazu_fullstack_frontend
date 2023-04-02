import React from "react";

const Genre = () => {
  return (
    <div>
      <h1>Add Genre</h1>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2 font-bold">Genre</label>
        <input
          type="text"
          className="border rounded py-2 px-3 mb-4 w-full"
          placeholder="Enter genre"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Genre;
