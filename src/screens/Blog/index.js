import React from "react";
import { useUserContext } from "../../providers/UserProvider";

function Blog() {
  const { user } = useUserContext();
  // To ensure the proper functioning and utilization of the useUserContext in React, it is necessary to utilize 
  // the UserProvider at the parent level. This allows for the appropriate propagation of user data throughout 
  // the component tree, facilitating seamless access and manipulation of this information by child components 
  // as needed. To observe this, please look at the App.js 

  return (
    <React.Fragment>
      <h1>Blog</h1>
      <p>username: <strong>{user?.username}</strong></p>
      <p>email: <strong>{user?.email}</strong></p>
      <p>dob: <strong>{user?.dob}</strong></p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptates, quod, quia, voluptate quae voluptatem quibusdam quos
        accusantium quas dolorum voluptatum. Quisquam, quae. Quisquam, quae
        voluptate. Quisquam, quae. Quisquam, quae voluptate. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Quisquam voluptates, quod, quia,
        voluptate quae voluptatem quibusdam quos accusantium quas dolorum
        voluptatum. Quisquam, quae. Quisquam, quae voluptate. Quisquam, quae.
        Quisquam, quae voluptate. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quisquam voluptates, quod, quia, voluptate quae
        voluptatem quibusdam quos accusantium quas dolorum voluptatum. Quisquam,
        quae. Quisquam, quae voluptate. Quisquam, quae. Quisquam, quae
        voluptate.
      </p>
      <p>Written By {user?.name}</p>
    </React.Fragment>
  );
}

export default Blog;
