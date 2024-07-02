import User from "@/ui/dashboard/users/singleUser/User";
import React from "react";

const SingleUserPage = ({ params: { id } }) => {
  return (
    <div>
      <User id={id} />
    </div>
  );
};

export default SingleUserPage;
