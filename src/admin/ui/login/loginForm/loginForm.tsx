const LoginForm = () => {

  return (
    <div className="flex items-center justify-center bg-[#151c2c] text-white text-[1.6rem] font-['Quicksand'] w-full h-full">
      <form
        action=""
        className="bg-[#182237] p-20 rounded-2xl w-[600px] h-[600px] flex flex-col items-center justify-center gap-12"
      >
        <h1 className="text-white text-[3.2rem] font-bold">Login</h1>
        <input
          className="w-full p-12 border-[2px] border-[#2e374a] rounded-[5px] bg-[#151c2c] text-white text-[12px]"
          type="text"
          placeholder="username"
          name="username"
        />
        <input
          className="w-full p-12 border-[2px] border-[#2e374a] rounded-[5px] bg-[#151c2c] text-white text-[12px]"
          type="password"
          placeholder="password"
          name="password"
        />
        <p className="block w-full">Login as:</p>
        <div className="w-full flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-between">
            <input
              className="form-check-input mr-4 w-8 h-8 cursor-pointer"
              type="radio"
              name="userRole"
              id="roleAdmin"
              value="Admin"
            />
            <label className="form-check-label" htmlFor="roleAdmin">
              Admin
            </label>
          </div>
          <div className="flex flex-row items-center justify-between">
            <input
              className="form-check-input mr-4 w-8 h-8 cursor-pointer"
              type="radio"
              name="userRole"
              id="roleRider"
              value="Rider"
            />
            <label className="form-check-label" htmlFor="roleRider">
              Rider
            </label>
          </div>
          <div className="flex flex-row items-center justify-between">
            <input
              className="form-check-input mr-4 w-8 h-8 cursor-pointer"
              type="radio"
              name="userRole"
              id="roleShop"
              value="Shop"
            />
            <label className="form-check-label" htmlFor="roleShop">
              Shop
            </label>
          </div>
        </div>
        <button className="w-full p-12 text-[18px] bg-[teal] text-white border-none cursor-pointer rounded-[5px] font-bold">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
