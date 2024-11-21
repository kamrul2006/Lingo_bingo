/* eslint-disable no-unused-vars */
import { useContext } from "react";

import { AuthContext } from "../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";


const UpdateInfo = () => {

    const navigate = useNavigate()
    //--------------------------Context use--------------------------
    const { user, setUser, updatedProfile } = useContext(AuthContext)

    // console.log(user)

    const HandleUpdateUp = (e) => {
        e.preventDefault();
        const Name = e.target.name.value
        const Photo = e.target.photoUrl.value


        updatedProfile({ displayName: Name, photoURL: Photo })
            .then(() => {
                setUser(user)
                navigate('/dashboard')
            }).catch(err => {
                
            })

    }


    return (
        <div className="flex items-center justify-center ">
            <div className=" p-8 max-w-md w-full my-5">
                <h2 className="text-3xl font-bold text-black text-center mb-6">Update Your Profile Information.</h2>

                <form onSubmit={HandleUpdateUp} className="space-y-6">

                    <div className="relative">
                    <label className="my-3 text-sm mx-2">
                            Full Name:
                        </label>
                        <input
                            type="Text"
                            id="name"
                            name="name"
                            className="w-full px-4 py-2 border border-white-300 rounded-lg focus:outline-none focus:border-blue-500 peer"
                            placeholder=" Full name"
                            required
                        />
                    </div>

                    <div className="relative">
                    <label className="my-3 text-sm mx-2">
                            Photo Url:
                        </label>
                        <input
                            type="text"
                            id="photo"
                            name="photoUrl"
                            className="w-full px-4 py-2 border border-white-300 rounded-lg focus:outline-none focus:border-blue-500 peer"
                            placeholder="Photo Url"
                            required
                        />
                    </div>

                    <button type="submit" className="w-full btn btn-info text-black py-2 rounded-lg font-semibold">
                        Update Profile
                    </button>

                    <hr />

                    <Link to={'/dashboard'}>
                        <button className="w-full btn btn-warning my-5 text-black py-2 rounded-lg font-semibold">
                            Go back
                        </button></Link>
                </form>




            </div>
        </div>
    );
};

export default UpdateInfo;