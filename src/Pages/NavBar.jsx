import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const Links = <>
    <li><Link to={'/'}>Home</Link></li>
    <li><Link>Start-learning</Link></li>
    <li><Link>Tutorials</Link></li>
    <li><Link>About-us </Link></li>
    <li><Link>Dashboard</Link></li>
</>

const NavBar = () => {
    //---------------------------Using context--------------------
    const { user, UserSignOut } = useContext(AuthContext)


    return (
        <div>
            <div className="navbar bg-base-100 md:px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-sm btn-circle lg:hidden">
                            <img src="https://img.icons8.com/fluency/50/menu--v3.png" alt="..." className="w-6" />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {Links}
                        </ul>
                    </div>
                    <img src="https://cdn-icons-png.flaticon.com/256/5280/5280696.png" className="w-8 ml-4  md:w-14" />
                    <Link to={'/f'} className="text-lg font-serif mx-2 md:text-3xl lg:text-4xl font-bold">Lingo <span className="text-blue-500">Bingo</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ?
                        <div className="md:flex items-center gap-3">
                            <div className="md:w-14 w-8 h-8 md:h-14">
                                <img src={user.photoURL} className="w-full h-full object-cover border-2 border-yellow-400 rounded-full" />
                            </div>
                            <div>
                                <p className="hidden md:block text-lg font-semibold">{user && user.displayName}</p>
                                <button className="btn btn-xs text-xs md:text-sm btn-warning" onClick={UserSignOut}>Sign Out </button>
                            </div>
                        </div> :
                        <div className="flex items-center gap-3">
                            <img src="https://cdn-icons-png.flaticon.com/512/8214/8214212.png" className="w-8 mr-2  md:w-10" />
                            <Link to={'/login'} className="btn btn-info btn-xs  md:btn-sm">Log In</Link>
                        </div>}
                </div>
            </div>
        </div>
    );
};

export default NavBar;