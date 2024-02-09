import React, { useState } from "react";
import { createNewPlayer } from "../API";
import { useNavigate} from "react-router-dom" 

const NewPlayerForm = () => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [status, setStatus] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();


  const handleClick = async (e) => {
    e.preventDefault();
    await createNewPlayer(name, breed, status, imageUrl);
    navigate("/");
  };

  return (
    <>
      <form className="forms flex gap-5">
        <label>
          Name:
          <input className="px-4 py-2" type="text" name="Name" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Breed:
          <input className="px-4 py-2" type="text" name="Breed" value={breed} onChange={(e) => setBreed(e.target.value)} />
        </label>
        <label>
          Status:
          <input className="px-4 py-2" type="text" name="Status" value={status} onChange={(e) => setStatus(e.target.value)} />
        </label>
        <label>
          URL:
          <input className="px-4 py-2" type="url" name="Image URL" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        </label>
        <button onClick={handleClick}>Add dog:</button>
      </form>
    </>
  );
};

export default NewPlayerForm;
