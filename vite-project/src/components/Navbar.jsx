import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex gap-5 justify-center w-screen bg-slate-700'>
      <Link className="hover:bg-slate-400 hover:text-white px-4 py-2 rounded-md" to={"/"}>Home</Link>
      <Link className="hover:bg-slate-400 hover:text-white px-4 py-2 rounded-md" to={"/newplayerform"}>Create Player</Link>
    </div>
  )
}

export default Navbar