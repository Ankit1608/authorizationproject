import React from "react";
import { Link } from "react-router-dom";
import { setAccessToken } from "../accessToke";
import { useMutation } from "@apollo/client";
import { logout } from "../graphql/gql";
function Header({ history }) {
  const [userlogout, { client }] = useMutation(logout);
  return (
    <div>
      <header>
        <div>
          <Link to="/">home</Link>
        </div>
        <div>
          <Link to="/register">register</Link>
        </div>
        <div>
          <Link to="/login">login</Link>
        </div>
        <div>
          <Link to="/bye">bye</Link>
        </div>
        <div>
          <Link to="/login">
            <button
              onClick={async () => {
                await userlogout();
                setAccessToken("");
                await client.resetStore();
              }}
            >
              logout
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
