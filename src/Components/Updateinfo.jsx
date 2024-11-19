import { useContext } from "react";

import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";


const UpdateInfo = () => {

    const navigate = useNavigate()
    //--------------------------Context use--------------------------
    const { user, setUser, updatedProfile } = useContext(AuthContext)

    console.log(user)

    const HandleUpdateUp = (e) => {
        e.preventDefault();
        const Name = e.target.name.value
        const Photo = e.target.photoUrl.value


        updatedProfile({ displayName: Name, photoURL: Photo })
            .then((userCredential) => {
                //         // ----------------------------Signed up 
                const user = userCredential.user;
                setUser(user)
                navigate('/dashboard')
            }).catch(err => (err.massage))

    }


    return (
        <div className="flex items-center justify-center ">
            <div className=" p-8 max-w-md w-full my-5">
                <h2 className="text-3xl font-bold text-black text-center mb-6">Create an Account</h2>
                <p className="text-center text-black mb-8">Join us and enjoy exclusive benefits!</p>

                <form onSubmit={HandleUpdateUp} className="space-y-6">

                    <div className="relative">
                        <input
                            type="Text"
                            id="name"
                            name="name"
                            className="w-full px-4 py-2 border border-white-300 rounded-lg focus:outline-none focus:border-blue-500 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="email"
                            className="absolute px-3 left-3 -top-3 text-white-500 bg-white transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-4 peer-focus:-top-3 peer-focus:left-3 peer-focus:text-blue-500 rounded-xl peer-focus:border peer-focus:border-blue-500 text-xs"
                        >
                            Full Name
                        </label>
                    </div>

                    <div className="relative">
                        <input
                            type="text"
                            id="photo"
                            name="photoUrl"
                            className="w-full px-4 py-2 border border-white-300 rounded-lg focus:outline-none focus:border-blue-500 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="email"
                            className="absolute px-3 left-3 -top-3 text-white-500 bg-white transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-4 peer-focus:-top-3 peer-focus:left-3 peer-focus:text-blue-500 rounded-xl peer-focus:border peer-focus:border-blue-500 text-xs"
                        >
                            Photo Link
                        </label>
                    </div>

                    <button type="submit" className="w-full btn btn-info text-black py-2 rounded-lg font-semibold">
                        Update Profile
                    </button>
                </form>


            </div>
        </div>
    );
};

export default UpdateInfo;