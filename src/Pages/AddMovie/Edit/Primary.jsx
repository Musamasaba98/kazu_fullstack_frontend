import React from "react";

const Primary = () => {
  return (
    <div>
      <h3 className="text-white">Edit Movie</h3>
      <form>
        <label className="block mb-2 font-bold">Title</label>
        <input
          type="text"
          className="border rounded py-2 px-3 mb-4 w-full"
          placeholder="Enter movie title"
        />
        <label className="block mb-2 font-bold">Overview</label>
        <textarea
          className="border rounded py-2 px-3 mb-4 w-full"
          placeholder="Enter movie overview"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Save
        </button>
      </form>
      <form>
        <label className="block mb-2 font-bold">Keywords</label>
        <input
          type="text"
          className="border rounded py-2 px-3 mb-4 w-full"
          placeholder="Enter keywords separated by comma"
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

export default Primary;
