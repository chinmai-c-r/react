import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Users.css";

const AllUsers = () => {
  const [users, setUsers] = useState(["chinmai", "shekhar", "sumanth"]);
  const navigate = useNavigate();

  return (
    <div className="user-list-wrapper">
      {users.map((user) => {
        return (
          <div
            className="individual-user"
            onClick={() => {
              navigate(`${user}`);
            }}
          >
            {user}
          </div>
        );
      })}
    </div>
  );
};

export default AllUsers;
