import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";


const DashBoard = () => {
    const { user } = useContext(AuthContext)
    // console.log(user)
    return (
        <div className="mx-auto flex flex-col justify-center items-center">
            {user &&
                <div className="mx-auto">
                    <div>
                        <p className=" text-4xl font-serif text-yellow-500 text-center ">
                            Hello <span className="text-black text-5xl">{user.displayName}</span> <br />

                            <img src="https://t3.ftcdn.net/jpg/05/10/05/34/360_F_510053447_fwoIXNtS3G4wfzWoZqMN7mQSUI0tI7YL.jpg" alt="Welcome" className="w-1/4 mx-auto" />

                            To
                            <span className="text-black"> Lingo</span>
                            <span className="text-blue-500"> Bingo</span></p>
                    </div>

                    <div className="mx-32 my-4 border-2 p-4">
                        <h2>My Profile:</h2>
                        <div className="md:w-36 mx-auto w-14 h-14 md:h-36 my-4">
                            <img src={user.photoURL} className="w-full h-full object-cover mx-auto border-2 border-yellow-400 rounded-full" />
                        </div>
                        <div className=" flex flex-col items-center justify-center items-left gap-3">
                            <p className=" text-3xl font-serif">Name : <span className="font-sans">  {user.displayName}</span></p>
                            <p className=" text-3xl font-serif">Email : <span className="font-sans">  {user.email}</span></p>
                            <p className=" text-3xl font-serif">Mobile : <span className="font-sans">  {user.phoneNumber ? user.phoneNumber : "Not Added."}</span></p>
                            <p className=" text-3xl font-serif">Verified : <span className="font-sans">  {user.emailVerified ? '✅' : "Not Verified."}</span></p>
                        </div>
                    </div>


                    <div className="flex items-center justify-between">
                        <p className="font-semibold text-xl hover:text-yellow-500">Want To update Information   {">>>>>"} </p>
                        <Link to={'/udateprofile'} className="btn btn-neutral btn-sm btn-outline my-4">Update Profile Info</Link>

                    </div>

                </div>}

        </div>
    );
};

export default DashBoard;