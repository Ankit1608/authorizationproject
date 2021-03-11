import React, { useEffect, useState } from "react";
import { setAccessToken } from "./accessToke";
import Routes from "./Routes";

function App() {
  const [loading, Setloading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/refresh_token", {
      method: "POST",
      credentials: "include",
    }).then(async (x) => {
      const { accessToken } = await x.json();
      console.log(accessToken);
      setAccessToken(accessToken);
      Setloading(false);
    });
  });
  return (
    <>
      {loading && <div>loading....</div>}
      {!loading && <Routes />}
    </>
  );
}

export default App;
