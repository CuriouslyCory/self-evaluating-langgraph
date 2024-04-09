import { useState } from "react";

export const TestPage = () => {
  const [count, setCount] = useState(0);

  const handleAddButtonClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleRemoveButtonClick = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 0));
  };

  return (
    <div className="flex flex-col">
      <button
        className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
        onClick={handleAddButtonClick}
      >
        Add
      </button>
      <button
        className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
        onClick={handleRemoveButtonClick}
      >
        Remove
      </button>
      {Array(count).fill(
        <div key={Math.random()} className="h-10 w-10 bg-green-500"></div>,
      )}
    </div>
  );
};
export default TestPage;
