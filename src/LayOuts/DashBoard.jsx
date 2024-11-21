import { useContext, useEffect } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";


const DashBoard = () => {
    useEffect(() => {
        document.title = "Lingo Bingo || My Profile"
    }, [])


    const { user } = useContext(AuthContext)
    // console.log(user)
    return (
        <div className="mx-auto flex flex-col justify-center items-center md:mx-20 my-10">
            {user && <div>
                <div>
                    <p className=" md:text-2xl font-serif text-yellow-500 text-center ">
                        Hello <span className="text-black md:text-3xl">{user.displayName}</span> <br />

                        Welcome

                        To
                        <span className="text-black"> Lingo</span>
                        <span className="text-blue-500"> Bingo</span></p>
                </div>

                <div className="flex items-center justify-between gap-5 ">

                    <div className="hidden md:block w-1/3">
                        <img src="https://cdni.iconscout.com/illustration/premium/thumb/user-profile-illustration-download-in-svg-png-gif-file-formats--account-media-online-male-swift-pack-people-illustrations-4504662.png" className="mx-auto" />


                    </div>

                    <div className="mx-auto">

                        <div className="mx-auto my-4">

                            <div className=" my-1 p-4 bg-yellow-50 rounded-2xl shadow-lg mx-auto md:px-20 w-fit">
                                <h2 className="text-center text-xl bg-white py-1 rounded-xl">My Profile:</h2>
                                <div className="md:w-36 mx-auto w-14 h-14 md:h-36 my-4">
                                    <img src={user.photoURL} className="w-full h-full object-cover mx-auto border-2 border-yellow-400 rounded-full" />
                                </div>
                                <div className=" flex flex-col items-center justify-center items-left gap-3">
                                    <p className=" text-lg md:text-3xl  font-serif">Name : <span className="font-sans font-bold">  {user.displayName}</span></p>
                                    <p className=" text-lg md:text-2xl font-serif">Email : <span className="font-sans font-bold">  {user.email ? user.email : "Not Added"}</span></p>
                                    <p className=" text-lg md:text-2xl font-serif">Mobile : <span className="font-sans font-bold">  {user.phoneNumber ? user.phoneNumber : "Not Added."}</span>
                                        <span className="mx-5"> Verified : <span className="font-sans">  {user.emailVerified ? '✅' : "Not Verified."}</span></span></p>
                                </div>

                                <Link to={'/dashboard/updateInfo'} ><p className="text-center bg-yellow-500 my-4 mx-auto w-fit px-4 py-1 rounded-lg hover:font-bold">Update Profile Info</p></Link>

                            </div>




                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    );
};

export default DashBoard;