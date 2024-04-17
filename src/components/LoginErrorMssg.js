import { ExclamationCircleIcon } from "@heroicons/react/outline";

const LoginErrorMssg = ({ errorMssg }) => {
  return (
    <div className="w-full h-auto bg-[#D89D31] text-slate-950 p-2 mt-4 rounded-md">
      <p>
        <ExclamationCircleIcon className="text-[#ff0000] w-4 inline-block" />
        {" " + errorMssg}
      </p>
    </div>
  );
};

export default LoginErrorMssg;
