import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
//import { faHeart } from "@fortawesome/free-regular-svg-icons";
//import { useParams } from "react-router-dom";
import "/src/UserProfile.css";
const UserProfile = () => {
  const [user, setUser] = useState(null);
  //const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //const userId = "65cb243199ccb2a4d0fc8376";

  useEffect(() => {
    const fetchUserData = async (e) => {
      try {
        const storedUser = JSON.parse(localStorage.getItem("user"));
       /* if (!storedUser || !storedUser.token) {
          throw new Error('No authentication token found');
        }*/
        //onst token = storedUser.token;
        const response = await axios.get(
          `http://localhost:8080/api/users/${storedUser.id}`,
          {
           withCredentials: true
          }
        );
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
      fetchUserData();
    }, []);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }
  

   
   if (!user) {
      return <div>No user data found.</div>;
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

















/* const fetchData = async () => {
          try {
            const storedUser = JSON.parse(localStorage.getItem("user"));
            if (!storedUser || !storedUser.token) {
              throw new Error('No authentication token found');
            }
            const token = storedUser.token;
            const response = await axios.get(`http://localhost:8080/api/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
         setUser(response.data);
        }catch(error) {
          console.error( 'Error fetching user data:', error);
          setError(error.message);
        } finally {
          setLoading(false);
        }

        };
        useEffect(()=> {
          fetchData();

        },[id]);

        if (loading) {
          return <div>Loading...</div>;
        }

        if (error) {
          return <div>Error: {error}</div>;
        }
      

       
       if (!user) {
          return <div>No user data found.</div>;
        }*/


/* //const storedUser = JSON.parse(localStorage.getItem("user"));
        const user = JSON.parse(window.localStorage.getItem("user"));
        if (!storedUser || !storedUser.id || !storedUser.token) {
          console.error('No user or token found in local storage');
          return;
        }

        const userId = storedUser.id;
        const token = storedUser.token;

        const response = await axios.get(`http://localhost:8080/api/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }*/