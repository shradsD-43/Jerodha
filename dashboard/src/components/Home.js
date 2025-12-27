import React from "react";
import { useEffect, useState, useRef } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [cookies, ,removeCookie] = useCookies([]);
  const [username, setUsername] = useState("JUSER");
  const toastShown = useRef(false);

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        window.location.href = `${process.env.REACT_APP_FRONTEND_URL}/login`;
        return;
      }
      try {
        const { data } = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/verify`,
          {},
          { withCredentials: true }
        );

        const { status, user } = data;

        if (status) {
          setUsername(user);
          if (!toastShown.current) {
            toast(`Hello ${user}`, { position: "top-right" });
            toastShown.current = true;
          }
        } else {
          removeCookie("token");
          try {
            await axios.post(
              `${process.env.REACT_APP_BACKEND_URL}/logout`,
              {},
              { withCredentials: true }
            );
          } catch (err) {
            console.error(err);
          } finally {
            window.location.href = `${process.env.REACT_APP_FRONTEND_URL}/login`;
          }
        }
      } catch {
        removeCookie("token");
        try {
            await axios.post(
              `${process.env.REACT_APP_BACKEND_URL}/logout`,
              {},
              { withCredentials: true }
            );
          } catch (err) {
            console.error(err);
          } finally {
            window.location.href = `${process.env.REACT_APP_FRONTEND_URL}/login`;
          }
      }
    };
    verifyCookie();
  }, []); //cookies.token, removeCookie

  return (
    <>
      <TopBar username={username} />
      <Dashboard username={username} />
      <ToastContainer />
    </>
  );
};

export default Home;
