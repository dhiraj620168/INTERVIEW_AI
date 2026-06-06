import React, { useState } from "react";
import axios from "axios";

const NotesGenerator = () => {
  const [topic, setTopic] = useState("");

  const [notes, setNotes] = useState("");

  const generateNotes = async () => {
    try {
      const { data } = await axios.post(
        "/api/notes/generate",
        { topic },
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );

      if (data.success) {
        setNotes(data.note.content);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen p-10">

      <h1 className="text-3xl font-bold mb-5">
        AI Notes Generator
      </h1>

      <input
        type="text"
        placeholder="Enter Topic"
        className="border p-3 w-full"
        value={topic}
        onChange={(e) =>
          setTopic(e.target.value)
        }
      />

      <button
        onClick={generateNotes}
        className="bg-black text-white px-6 py-3 mt-5"
      >
        Generate Notes
      </button>

      <div className="mt-10 whitespace-pre-wrap">
        {notes}
      </div>
    </div>
  );
};

export default NotesGenerator;