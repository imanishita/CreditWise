import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CardDetails = () => {
  const [card, setCard] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    // Save card details or send to backend
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-900 p-6">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-400">Enter Card Details</h2>
        <input
          type="text"
          placeholder="Card Number"
          className="w-full p-3 mb-4 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
          value={card}
          onChange={(e) => setCard(e.target.value)}
        />
        <button
          onClick={handleNext}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Continue to Dashboard
        </button>
      </div>
    </div>
  );
};

export default CardDetails;
