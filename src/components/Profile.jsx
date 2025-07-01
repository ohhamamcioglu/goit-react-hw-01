const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className="w-80 mx-auto mt-10 bg-white border-2 border-black rounded-xl overflow-hidden shadow-md">
      <div className="text-center p-6">
        <img
          className="w-24 h-24 mx-auto rounded-full bg-black mb-4"
          src={image}
          alt="User avatar"
        />
        <p className="text-lg font-bold text-gray-900">{name}</p>
        <p className="text-sm text-gray-500">@{tag}</p>
        <p className="text-sm text-gray-500">{location}</p>
      </div>

      <ul className="flex divide-x divide-gray-500 border-t border-gray-500 bg-gray-100 text-center">
        <li className="w-1/3 py-3 px-2">
          <span className="block text-sm text-gray-600">Followers</span>
          <span className="block font-bold">{stats.followers}</span>
        </li>
        <li className="w-1/3 py-3 px-2">
          <span className="block text-sm text-gray-600">Views</span>
          <span className="block font-bold">{stats.views}</span>
        </li>
        <li className="w-1/3 py-3 px-2">
          <span className="block text-sm text-gray-600">Likes</span>
          <span className="block font-bold">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

