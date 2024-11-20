import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";




const NavBar = () => {
    //---------------------------Using context--------------------
    const { user, UserSignOut } = useContext(AuthContext)

    const NavLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/lesson'}>{"Let's"}-learn</NavLink></li>
        <li><NavLink to={'/tutorials'}>Tutorials</NavLink></li>
        <li><NavLink to={'/aboutUs'}>About-us </NavLink></li>
        {user && <li><NavLink to={'/dashboard'}>My Profile</NavLink></li>}
    </>

    // console.log(user, user.photoURL)

    return (
        <div>
            {user && <p className="text-center  font-semibold py-1 italic font-serif bg-sky-400 flex items-center justify-center gap-2">
                <img src="https://cdn.pixabay.com/animation/2022/10/11/03/16/03-16-38-134_512.gif" alt="Welcome" className="w-28" />
                {user.displayName} </p>}
            <div className="navbar bg-base-100 md:px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-sm btn-circle lg:hidden">
                            <img src="https://img.icons8.com/fluency/50/menu--v3.png" alt="..." className="w-6" />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {NavLinks}
                        </ul>
                    </div>
                    <img src="https://cdn-icons-png.flaticon.com/256/5280/5280696.png" className="w-8 ml-4  md:w-14" />
                    <NavLink to={'/'} className="text-lg font-serif mx-2 md:text-3xl lg:text-4xl font-bold">Lingo <span className="text-blue-500">Bingo</span></NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ?
                        <div className="flex items-center gap-3">
                            <div className="md:w-14 w-8 h-8 md:h-14">
                                <img src={user.photoURL} className="w-full h-full object-cover border-2 border-yellow-400 rounded-full" />
                            </div>
                            <div>
                                <p className="hidden md:block text-lg font-semibold">{user && user.displayName}</p>
                                <button className="hidden md:block btn btn-xs text-xs md:text-sm btn-warning" onClick={UserSignOut}>Sign Out </button>
                                <button className="btn btn-ghost btn-circle md:hidden btn-xs" onClick={UserSignOut}>
                                    <img src="https://img.icons8.com/nolan/64/exit.png" alt="exit" className="w-7" />
                                </button>
                            </div>
                        </div> :
                        <div className="flex items-center gap-3">
                            <img src="https://cdn-icons-png.flaticon.com/512/8214/8214212.png" className="w-8 mr-2  md:w-10" />
                            <NavLink to={'/login'} className="btn btn-info btn-xs  md:btn-sm">Log In</NavLink>
                        </div>}
                </div>
            </div>
        </div>
    );
};

export default NavBar;