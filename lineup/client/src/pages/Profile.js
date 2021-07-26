import React from "react";
import ProgressLanding from "../components/ProgressLanding";
// import { Link } from "react-router-dom";
// import photo from "../components/images/cat-avatar.jpg";

function Profile() {
  const photo = { photo };
  const userName = { userName };
  const location = { location };

  const favorites = [
    {
      id: "1",
      photo:
        "https://api-cdn.spott.tv/rest/v004/image/images/e91f9cad-a70c-4f75-9db4-6508c37cd3c0?width=587&height=599",
      userName: "Mike Ross",
      content:
        "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. ",
      createdAt: 1543858000000,
    },
  ];

  return (
    <div style={{ margin: "0 auto", width: "100%" }}>
      {/* <Profile photo={photo} 
        userName={userName} 
        location={location} 
        initialLikesCount={0} 
        initialFollowingCount={0} 
        initialFollowersCount={0} 
        initialFaves={favorites} /> */}
      <ProgressLanding>      
      </ProgressLanding>
    </div>
  );
}



export default Profile;
