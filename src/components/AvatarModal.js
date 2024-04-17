import { UserIcon } from "@heroicons/react/outline";
import { useSelector } from "react-redux";

const AvatarModal = ({ handleSignOut }) => {
  const userName = useSelector((store) => store?.user?.displayName);
  return (
    <div
      id="avatar-modal"
      className="text-red-700 bg-black absolute top-20 right-14 border-red-700 border-2"
    >
      <div className=" p-2 border-b-2  border-red-700 flex justify-between hover:text-red-500">
        <span className="text-red-700 font-semibold hover:text-red-500">
          {userName && userName.split(" ")[0]}
        </span>
        <UserIcon className="text-red-700 w-6 hover:text-red-500" />
      </div>
      <button
        onClick={handleSignOut}
        className=" p-2 font-semibold text-red-700 hover:text-red-500"
      >
        Sign out
      </button>
    </div>
  );
};

export default AvatarModal;
