import React from "react";

const Video = () => {
  return (
    <div>
      <h1>Video</h1>
      <form>
        <label className="block mb-2 font-bold">Video URL</label>
        <input
          type="text"
          className="border rounded py-2 px-3 mb-4 w-full"
          placeholder="Enter video URL"
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

export default Video;
