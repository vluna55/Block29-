import { useEffect, useState } from "react";
import { fetchSinglePlayer } from "../API";
import { useParams, useNavigate } from "react-router-dom";
import { FaRegTrashCan } from "react-icons/fa6";


const SinglePlayer = () => {
  const [param1, setParam1] = useState("");
  const [singlePlayer, setSinglePlayer] = useState(null);
  const navigate = useNavigate();

  let { id } = useParams();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const paramValue = params.get("param1");
    setParam1(paramValue);
    async function getSinglePlayer() {
      const response = await fetchSinglePlayer(id);
      console.log(response);
      setSinglePlayer(response);
    }

    getSinglePlayer();
  }, []);

  return (
    <div>
      SinglePlayer {id}
      
       <table className="table-auto">
        <thead className="bg-gray-500 text-white">
          <tr>
            <th className="px-5 py-2">Player</th>
            <th className="px-5 py-2">Name</th>
            <th className="px-5 py-2">Breed</th>
            <th className="px-5 py-2">Status</th>
            <th className="px-5 py-2">Edit</th>
            <th className="px-5 py-2">Delete</th>
          </tr>
        </thead>
        <tbody>
            <>
          <tr>
            <td>
              <img className="w-10" src={singlePlayer?.imageUrl} alt="" />
            </td>

            <td>{singlePlayer?.name}</td>
            <td>{singlePlayer?.breed}</td>
            <td>{singlePlayer?.status}</td>
            <td>edit</td>
            <td className="text-red-500">
              <FaRegTrashCan  />
            </td>
          </tr>
            </>
        </tbody>
      </table> 
    </div>
  );
};

export default SinglePlayer;
