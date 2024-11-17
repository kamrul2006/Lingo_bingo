import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";



const LoginPage = () => {

  const location = useLocation()
  // console.info(location)

  const [error, setError] = useState(null)

  const [show, setShow] = useState(false)
  const ShowPassWord = (e) => {
    e.preventDefault();
    setShow(!show)
  }


  const navigate = useNavigate()

  //---------- Context use----------------------

  const { LoginUser, setUser } = useContext(AuthContext)

  const HandleLogin = (e) => {
    e.preventDefault();
    const Email = e.target.email.value
    const Password = e.target.password.value

    //-------------------------login with email and password--------------------
    LoginUser(Email, Password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user)
        navigate(location.state ? location.state : '/')
      })
      .catch((error) => {
        // console.log(error)
        if (error) { setError('Password or Email is invalid..!') }
      });

  }

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="p-8 rounded-lg  max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">Welcome Back</h2>

        <form onSubmit={HandleLogin} className="space-y-6">
          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-white-300 rounded-lg focus:outline-none focus:border-blue-500 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="absolute px-3 left-3 -top-3 text-white-500 bg-white transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-4 peer-focus:-top-3 peer-focus:left-3 peer-focus:text-blue-500 rounded-xl peer-focus:border peer-focus:border-blue-500 text-xs"
            >
              Email Address
            </label>
          </div>

          {/* Password Field */}
          <div className="relative">
            <input
              type={show ? "text" : "password"}
              id="password"
              name="password"
              className="w-full px-4 py-2 border border-white-300 rounded-lg focus:outline-none focus:border-blue-500 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="password"
              className="absolute px-3 left-3 -top-3 text-white-500 bg-white transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-4 peer-focus:-top-3 peer-focus:left-3 peer-focus:text-blue-500 rounded-xl peer-focus:border peer-focus:border-blue-500 text-xs"
            >
              Password
            </label>
            <button onClick={ShowPassWord} className="btn btn-ghost btn-xs absolute right-3 top-2 text-lg">
              {show ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {error && <p className="text-xs font-semibold text-red-500 text-center">{error}</p>}


          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-indigo-600 transition duration-300"
          >
            Log In
          </button>
        </form>

        <div className="divider divider-info mt-8">or</div>

        <button className="btn btn-sm rounded-full btn-warning w-full mt-1 mb-5">Log in With Google
          <img src="https://img.icons8.com/fluency/50/google-logo.png" alt="google-logo" className="w-5 shadow-lg border rounded-full" />
        </button>

        {/* Footer Text */}
        <p className="text-center text-gray-600 mt-6">
          Don’t have an account? <Link to='/signUp' className="text-indigo-500 font-semibold hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
