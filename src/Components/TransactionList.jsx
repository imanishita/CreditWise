import React from "react";

const transactions = [
  { id: 1, date: "2025-04-05", type: "Credit Card Payment", amount: "- ₹2,000" },
  { id: 2, date: "2025-04-03", type: "Loan EMI", amount: "- ₹8,000" },
  { id: 3, date: "2025-04-01", type: "Salary", amount: "+ ₹25,000" },
];

const TransactionList = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
      <ul className="divide-y divide-gray-200">
        {transactions.map((tx) => (
          <li key={tx.id} className="py-2 flex justify-between text-sm">
            <span>{tx.date}</span>
            <span>{tx.type}</span>
            <span className={`font-medium ${tx.amount.startsWith("-") ? "text-red-600" : "text-green-600"}`}>
              {tx.amount}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
