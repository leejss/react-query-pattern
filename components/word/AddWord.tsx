import { useState } from "react";
import { useAddWordMutation } from "./wordQuery";

const AddWord = () => {
  const [text, setText] = useState("");
  const mutation = useAddWordMutation();

  return (
    <div className="outline">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          mutation.mutate(text);
        }}
        className="flex flex-col items-start"
      >
        <label>
          <span>Word</span>
          <input
            className="bg-slate-200 p-2 rounded-md"
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </label>
        <button
          type="submit"
          className="bg-slate-500 text-white py-2 px-4 rounded-lg"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddWord;

//
