import React from "react";
function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-[90dvh]">
        <form
          action=""
          className="flex flex-col justify-center items-center w-[90%] md:w-2/5 h-[50dvh] border gap-y-4 p-4 rounded-md shadow-md"
        >
          <h1 className="text-3xl font-medium my-2">Login</h1>
          <div className="flex items-center input input-bordered w-[90%]">
            <input
              type="email"
              placeholder="Email"
              className="outline-none w-full max-w-md"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex items-center w-[90%] input input-bordered">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full outline-none max-w-full"
              onChange={(e) => setPassword(e.target.value)}
            />
            {
              showPassword ? (
                <i className="fa-solid fa-eye" onClick={handleShowPassword}></i>
              ) : (
                <i className="fa-solid fa-eye-slash" onClick={handleShowPassword}></i>
              )
            }
          </div>
          <input
            type="submit"
            value="Login"
            className="input input-bordered bg-accent-content w-full text-white max-w-md"
          />
          <a href="/register" className="text-blue-600">
            create new account
          </a>
        </form>
        {email}
        <br/>
        {password}
      </div>
    </>
  );
}

export default Login;
