import React, { useEffect } from "react";

function FetchUser() {
  const [user, setUser] = React.useState({});
  // example of Fetch Api as async function with try catch

  useEffect(() => {
    // the purpose of this variable is to prevent the state
    // from being updated after the component is unmounted.
    let ignore = false;
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=1");
        const json = await response.json();
        if (!ignore) {
          setUser(json.results[0]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

    return () => {
      ignore = true;
    };
  }, []);

  return user && user.id ? (
    <div>
      <h1>Fetched User</h1>
      <p>First Name : {user.name.first}</p>
      <p>Last Name : {user.name.last}</p>
      <p>Email : {user.email}</p>
      <img src={user.picture.large} alt="user" />
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default FetchUser;
