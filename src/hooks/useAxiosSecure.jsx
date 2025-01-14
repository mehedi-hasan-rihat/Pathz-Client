import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";
export const axiosSecure = axios.create({
  baseURL: "https://pathz.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const navigate = useNavigate();

  const { logOut } = useContext(AuthContext);
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => res,
      async (err) => {
        console.log(err.response);
        if (err.response.status === 401 || err.response.status === 403) {
          logOut();
          navigate("/auth/login");
        }
      }
    );
  }, []);
  return axiosSecure;
};

export default useAxiosSecure;
