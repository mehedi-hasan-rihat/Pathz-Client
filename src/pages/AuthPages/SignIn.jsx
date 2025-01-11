import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { AuthContext } from "./../../providers/AuthProvider";
export default function Login() {
  const navigate = useNavigate();
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        Swal.fire({
          title: "Successfully LogIn",
          text: " ",
          icon: "success",
        });
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {   
        console.log(error.message)
        Swal.fire({
          title: "Invalid email and password",
          text: "Please Enter Correct email and password",
          icon: "error",
        });
      });
  };
  return (


<section className="relative flex flex-wrap lg:h-screen lg:items-center max-w-7xl mx-auto">
<div className="flex-1 max-w-5xl shadow-md mx-20 bg-gray-100/50 my-10 rounded-lg">
      <form className="card-body" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label"></label>
        </div>

        <Link
          to="/auth/signup"
          className="relative -top-3 font-semibold text-xs hover:underline hover:text-gray-500"
        >
          Click for Registration
        </Link>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>

        <div
          className="btn btn-outline"
          onClick={() => {
            signInWithGoogle()
              .then((userCredential) => {
                Swal.fire({
                  title: "Successfully Login",
                  text: " ",
                  icon: "success",
                });
                navigate(location.state ? location.state : "/");
              })
              .catch((error) => {
                console.log(error);
                Swal.fire({
                  title: "Try again",
                  text: `${error.message}`,
                  icon: "error",
                });
              });
          }}
        >
          <span className="">
            <FcGoogle />
          </span>
          Continue with Google
        </div>
      </form>
    </div>
  <div className="relative h-64 flex-1 sm:h-96 lg:h-full lg:w-1/2">
    <img
      alt=""
      src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?uid=R122104271&ga=GA1.1.222521603.1736143886&semt=ais_hybrid"
      className="absolute inset-0 h-full w-full object-contain"
    />
  </div>
</section>
   
  );
}
