import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
    const { user, } = useContext(AuthContext)
    return (
        <div>
            <footer className="flex flex-col items-center justify-center gap-10 bg-slate-200 md:py-16  text-black rounded px-10">
                <div className=" md:flex gap-4 hover:underline text-center">
                    <Link to={'/'}><p>Home</p></Link>
                    <Link to={'/lesson'}><p>{"Let's"}-learn</p></Link>
                    <Link to={'/tutorials'}><p>Tutorials</p></Link>
                    <Link to={'/aboutUs'}><p>About-us </p></Link>
                    {user && <Link to={'/dashboard'}><p>My Profile</p></Link>}
                </div>
                <div >
                    <div className="grid grid-flow-col text-xl md:text-3xl gap-4">
                        <a href="https://www.facebook.com/">
                            <FaFacebook />
                        </a>
                        <a href="https://www.instagram.com/">
                            <FaInstagram />
                        </a>
                        <a href="https://www.youtube.com/">
                            <FaYoutube />
                        </a>
                        <a href="https://x.com/home?lang=en">
                            <FaTwitter />
                        </a>
                    </div>
                </div>
                <div>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by <span className="font-serif font-bold">Lingo <span className="text-blue-500">Bingo</span></span></p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;