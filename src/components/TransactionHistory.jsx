// src/components/TransactionHistory.jsx
const TransactionHistory = ({ items }) => {
  return (
    <table className="w-3/4 mx-auto mt-10 mb-10 border border-gray-400 text-center table-fixed">
      <thead>
        <tr className="bg-gray-800 text-white">
          <th className="p-3 border border-gray-300">Type</th>
          <th className="p-3 border border-gray-300">Amount</th>
          <th className="p-3 border border-gray-300">Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={item.id} className={index % 2 === 1 ? "bg-gray-200" : ""}>
            <td className="p-2 border border-gray-300 capitalize">
              {item.type}
            </td>
            <td className="p-2 border border-gray-300">{item.amount}</td>
            <td className="p-2 border border-gray-300">{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

