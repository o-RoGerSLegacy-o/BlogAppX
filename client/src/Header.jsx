import React, { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";

import { Link } from "react-router-dom";

const Header = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <header>
      <Link to="/" className="logo">
        QuatidianBloggers
      </Link>

      <nav>
        {username && (
          <>
            <Link to="/create">create new post</Link>
            <a href=" " onClick={logout}>
              logout
            </a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login"> login</Link>
            <Link to="/register"> Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
