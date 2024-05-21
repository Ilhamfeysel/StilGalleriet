import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/users/${id}`);
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm mb-3">
          <div className="card">
            <div className="card-body text-center">
              <img
                src="https://via.placeholder.com/150"
                className="rounded-circle mb-3"
                alt="profile"
                style={{ width: "150px", height: "150px" }}
              />
              <h5 className="card-title">{`${user.firstName} ${user.lastName}`}</h5>
              <p className="card-text">Rating: N/A</p>
              <button className="btn btn-outline-secondary">
                <FontAwesomeIcon icon={faPen} /> Edit profile
              </button>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Email:</strong> {user.email}
              </li>
              <li className="list-group-item">
                <strong>Username:</strong> {user.username}
              </li>
              <li className="list-group-item">
                <strong>Status:</strong> {user.active ? "Active" : "Inactive"}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
