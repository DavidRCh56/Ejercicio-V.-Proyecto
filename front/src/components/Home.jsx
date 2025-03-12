import { useContext, useEffect, useState } from "react";
import { AuthContext, TOKEN_KEY } from "../context/AuthContext";

const Home = () => {
  const [teams, setTeams] = useState([]);
  const { user } = useContext(AuthContext);

  const getTeams = async () => {
    const token = localStorage.getItem(TOKEN_KEY);
    const response = await fetch('http://localhost:3000/videojuegos', {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    const apiVideojuegos = await response.json();
    console.log(apiVideojuegos);
    setTeams(apiVideojuegos);
  };

  useEffect(() => {
    getTeams();
  }, []);

  return (
    <>
      <h1>Componente Home</h1>
      <p>Tu usuario es: {user.email}</p>
      {teams.map((team) => (
        <p key={team.id}>{team.nombre}</p>
      ))}
    </>
  );
};

export default Home;
