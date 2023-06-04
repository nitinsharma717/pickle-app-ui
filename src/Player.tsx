import React, { useEffect, useState } from 'react';
import './Player.css';
import axios from 'axios';
import {useNavigate, Link } from 'react-router-dom';

function Player() {
  const [players, setPlayer] = useState<any[]>([]);

  useEffect(() => {
    fetchplayers();
  }, []);

  const navigate  = useNavigate();
  const deleteUser = async (playerId) => {
    try {
      await axios.delete(`https://picknats.azurewebsites.net/players/${playerId}`);
      console.log('Player deleted successfully');

     // Redirect to the list of players
     fetchplayers();
      
    } catch (error) {
      console.error(error);
    }
  }; 
 
  const fetchplayers = async () => {
    try {
      const response = await axios.get('https://picknats.azurewebsites.net/players');
      setPlayer(response.data.data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
                {players.length === 0 && (
                    <div className="text-center">
                        <h2>No Player found at the moment</h2>
                    </div>
                )}
                <div>
                    <div>
                        <table>
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">First Name</th>
                                    <th scope="col">MI</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Rating</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {players && players.map(item =>
                                    <tr key={item.id}>
                                        <td>{item.firstName}</td>
                                        <td>{item.middleInitials}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.email}</td>
                                        <td>{item.rating}</td>
                                        <td>
                                            <div className="table-cont">
                                                <div className="btn-group" style={{paddingLeft: "10%", marginBottom: "1px" }}>
                                                    <Link to={`/edit/${item.id}`} className="btn btn-sm btn-outline-secondary">Edit Player </Link>
                                                    <button  onClick={() => deleteUser(item.id)}>Delete Player</button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
  );
};

export default Player;
