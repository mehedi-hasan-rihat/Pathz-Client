import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
export default function SignIn() {
  const navigate = useNavigate();
  const { createUser, updateUserProfile, signInWithGoogle } =
    useContext(AuthContext);
  const notify = () =>
    toast(
      "Password must include a capital letter, special character, number, and be at least 6 characters long.",
      {
        style: {
          background: "#EE4B2B",
          color: "white",
        },
      }
    );
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo_url = form.photo_url.value;
    const email = form.email.value;
    const password = form.password.value;

    const validPass = (password) => {
      const regex = /^(?=.*[A-Z])(?=.*[\W])(?=.*\d).{6,}$/;
      return regex.test(password);
    };
    const validPassCheak = validPass(password);

    if (!validPassCheak) {
      notify();
      return;
    }

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        Swal.fire({
          title: "Successfully SignUp",
          text: " ",
          icon: "success",
        });
        console.log(user);
        updateUserProfile(name, photo_url).catch((error) => {
          console.log(error);
        });
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Try again",
          text: "Can't signIn this tis time. Please try again",
          icon: "error",
        });
      });
  };
  return (
    <div className="max-w-xl mx-auto bg-gray-100/50 my-10 rounded-lg">
      <form className="card-body" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="name"
            name="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo_url</span>
          </label>
          <input
            type="url"
            name="photo_url"
            placeholder="photo_url"
            className="input input-bordered"
            required
          />
        </div>
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
          to="/auth/login"
          className="relative -top-3 font-semibold text-xs hover:underline hover:text-gray-500"
        >
          Click for Login
        </Link>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <div
          className="btn btn-outline"
          onClick={() => {
            signInWithGoogle()
              .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                Swal.fire({
                  title: "Successfully SignUp",
                  text: " ",
                  icon: "success",
                });
                navigate(location.state ? location.state : "/");
              })
              .catch((error) => {
                console.log(error);
                Swal.fire({
                  title: "Try again",
                  text: "Can't signUp this tis time. Please try again",
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
  );
}
