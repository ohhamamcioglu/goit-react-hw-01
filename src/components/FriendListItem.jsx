// src/components/FriendListItem.jsx
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className="w-40 p-4 border rounded-xl text-center shadow-sm">
      <img
        className="w-20 h-20 mx-auto mb-2"
        src={avatar}
        alt="Avatar"
        width="48"
      />
      <p className="text-lg font-semibold">{name}</p>
      <p
        className={`text-md font-medium ${
          isOnline ? "text-green-600" : "text-red-600"
        }`}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;

