import React from "react";

const MovieCast = () => {
  return (
    <div>
      <h1>MovieCast</h1>
      <form>
        <label className="block mb-2 font-bold">Actor Name</label>
        <input
          type="text"
          className="border rounded py-2 px-3 mb-4 w-full"
          placeholder="Enter actor name"
        />
        <label className="block mb-2 font-bold">Character Name</label>
        <input
          type="text"
          className="border rounded py-2 px-3 mb-4 w-full"
          placeholder="Enter character name"
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

export default MovieCast;
