import { useContext, useEffect } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";
import Fp from '../assets/Fp.png'


const ForgetPass = () => {
    useEffect(() => {
        document.title = "Lingo Bingo || ForgetPassword"
    }, [])

    const { pEmail } = useContext(AuthContext)

    return (
        <div className="h-screen flex items-center gap-5 mx-4 md:mx-20">

            <div className="hidden md:block">
                <img src={Fp} className="w-96" />
            </div>

            <div className="mx-auto bg-slate-50 py-5 px-5 w-fit md:h-[400px] flex flex-col gap-4 md:w-1/2 rounded-xl shadow-lg border-2 items-center justify-center">
                <h1 className="text-center text-2xl font-bold">Reset Your PassWord</h1>
                <form action="">
                    <div className="">
                        <label className="my-3 text-sm mx-2">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            defaultValue={pEmail ? pEmail : ""}
                            className="w-full px-4 py-2 border border-white-300 rounded-lg focus:outline-none focus:border-blue-500 peer"
                            placeholder="Inter Email "
                            required
                        />
                    </div>
                    <div className="relative">
                        <label className="my-3 text-sm mx-2">
                            New Password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full px-4 py-2 border border-white-300 rounded-lg focus:outline-none focus:border-blue-500 peer"
                            placeholder="Password"
                            required
                        />
                    </div>

                    {/* https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox */}
                    <Link to={'https://mail.google.com'}><p className="bg-yellow-400 text-center w-fit px-8 rounded-full hover:font-bold mx-auto my-5 py-2">Reset Password</p></Link>
                </form>
            </div>

        </div>
    );
};

export default ForgetPass;