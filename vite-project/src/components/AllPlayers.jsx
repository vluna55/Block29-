import { useEffect, useState } from "react";
import { deletePlayer, fetchAllPlayers } from "../API";
import { FaRegTrashCan } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const AllPlayers = () => {
  const navigate = useNavigate();
  const [allPlayers, setAllPlayers] = useState(null);
  useEffect(() => {
    async function getAllPlayers() {
      const response = await fetchAllPlayers();
      console.log(response)
      setAllPlayers(response);
    }
    getAllPlayers();
  }, []);
  async function handleDelete(id) {
    await deletePlayer(id);
    const response = await fetchAllPlayers();
      console.log(response)
      setAllPlayers(response);
    navigate("/");
  }
  console.log(allPlayers);
  return (
    <div>
      <table className="table-auto">
        <thead className="bg-gray-500 text-white">
          <tr>
            <th className="px-5 py-2">Player</th>
            <th className="px-5 py-2">Name</th>
            <th className="px-5 py-2">Breed</th>
            <th className="px-5 py-2">Status</th>
            <th className="px-5 py-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          {allPlayers ? (
            allPlayers.map((player) => (
              <>
                <tr key={player.id}>
                  <td>
                    <img className="w-10" src={player.imageUrl} alt="" />
                  </td>
                  <Link className="" to={`/${player.id}`}>
                    <td>{player.name}</td>
                  </Link>
                  <td>{player.breed}</td>
                  <td>{player.status}</td>
                  <td className="text-red-500">
                    <FaRegTrashCan onClick={() => handleDelete(player.id)} />
                  </td>
                </tr>
              </>
            ))
          ) : (
            <tr>
              <td>Players loading...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AllPlayers;
