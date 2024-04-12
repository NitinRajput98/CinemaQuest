const LoginErrorMssg = ({ errorMssg }) => {
  return (
    <div className="w-full h-auto bg-[#D89D31] text-slate-950 p-2 mt-4 rounded-md">
      <p>{"💥" + errorMssg}</p>
    </div>
  );
};

export default LoginErrorMssg;
