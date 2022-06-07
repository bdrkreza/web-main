import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import React from "react";
// import Image from "next/image";
// import topImage from "../assets/Header/bhalogari.0bdbffc9.png";

function LoginForm(props) {
  const { title, subTitle, onSignIn, onSignUp, signUp } = props;
  const [disable, setDisable] = React.useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // const onSubmit = onSignIn;

  const onSubmit = async(data) => {
    console.log(data)
    onSignIn(data)
    setDisable(true);
  }

  // console.debug(watch("username"), watch("password"));

  return (
    <div>
      {/* <Box
        className="grid grid-cols-1"
        component="form"
        noValidate
        autoComplete="off"
      >
        <h2 className="text-xl text-blue-800">{title}</h2>
        <div className="grid grid-col-1 mt-4 mb-4 ">
          <TextField
            required
            id="standard-required"
            label="Username"
            variant="standard"
            {...register("username")}
          />
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
            {...register("password", { required: true })}
          />
          {(errors.password || errors.username) && (
            <span className="text-sm text-gray-500">
              Username and Password fields are required
            </span>
          )}
        </div>
        <Button onClick={handleSubmit(onSubmit)}>Sign In</Button>
        {signUp && (
          <Button variant="outline" onClick={onSignUp}>
            Sign Up
          </Button>
        )}
      </Box> */}

      {/* my code start */}

      <div className="flex items-start md:items-center justify-center min-h-screen bg-grey-200">
        <div className="h-full m-4 px-6 py-20 text-left bg-white shadow-lg rounded-xl">
          <div className="flex items-center justify-center flex-shrink-0 text-white">
            {/* <Image width={90} height={90} src={topImage}></Image> */}
            <img src="/assets/img/bhalogari.png" />
          </div>
          <h3 className="text-2xl font-bold text-center text-black mb-[15px] mt-[20px]">{title}</h3>
          {subTitle && <h2 className="text-center text-[#FC6A03] mt-[15px]">{subTitle}</h2>}
          <form action="">
            <div className="mt-4">
              <div>
                <label className="block" htmlFor="username">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="eg: 01777664033 "
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-600"
                  autoComplete="name"
                  required
                  {...register("username")}
                />
                <span className="text-xs tracking-wide text-red-600" style={{ fontSize: "11px" }}>
                  {" "}
                  * Username is required to login{" "}
                </span>
                {/* <span className="text-xs tracking-wide text-red-600">Username field is required </span> */}
              </div>

              <div className="mt-4">
                <label className="block">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-600"
                  autoComplete="name"
                  required
                  {...register("password", { required: true })}
                />
              </div>

              <div className="flex items-center justify-center">
                <button
                  className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                  style={{ backgroundColor: "#ED7117", marginTop: "30px", height: "50px" }}
                  onClick={handleSubmit(onSubmit)}
                  disabled={disable}
                >
                  Login
                </button>
                {/* TODO <a href="#" className="text-sm text-blue-600 hover:underline" >Forgot password?</a> */}
              </div>
            </div>
            <div className="flex items-center justify-center pt-4">
              <Link href="/">Back to Home</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
    // my code ends
  );
}

export default LoginForm;
LoginForm.propTypes = {
  title: PropTypes.string,
  onSignUp: PropTypes.func,
  onSignIn: PropTypes.func,
  signUp: PropTypes.bool,
};

LoginForm.defaultProps = {
  title: "Login",
  signUp: false,
  onSignIn: (data) => {
    const { username, password } = data;
    alert(`TODO\nUsername: ${username}\nPassword: ${password}`);
  },
  onSignUp: () => {
    alert("TODO Sign Up");
  },
};

{
  /* <div className="px-4 py-5 mx-auto border-2 border-orange-600 rounded-xl w-1/3">
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Merchant Storefront</h2>
              <h2 className="text-lg md:text-lg font-extrabold mb-2">{title}</h2>
            </div>
            <form action="">
              <div className="mb-6">
                <label className="block mb-2 font-extrabold" for="">
                  Username *
                </label>
                <input
                  className="inline-block w-full py-4 px-6 mb-6 leading-6 text-black font-extrabold border-3 shadow rounded"
                  id="name"
                  name="name"
                  type="text"
                  autocomplete="name"
                  required
                  {...register("username")}
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 font-extrabold" for="">
                  Password
                </label>
                <input
                  className="inline-block w-full py-4 px-6 mb-6 text-lg leading-6 text-black font-extrabold border-3 shadow rounded"
                  id="name"
                  name="name"
                  type="password"
                  autocomplete="name"
                  required
                  {...register("password", { required: true })}
                />
              </div>

              <button
                onClick={handleSubmit(onSubmit)}
                className="border-2 border-orange-600 inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white hover:text-orange-600 font-extrabold bg-orange-600 hover:bg-slate-100 border-3 shadow rounded transition duration-200"
              >
                Sign in
              </button>
            </form>
          </div>
        </div> */
}
