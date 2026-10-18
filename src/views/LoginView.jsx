import Logo from "../assets/images/social-media.png";
import { Link } from "react-router";
function LoginView() {
    return (
        <>
            <div className="flex w-full max-w-5xl">
                <div className="hidden md:flex flex-1 items-center justify-center">
                    <img src={Logo} alt="" className="w-96 h-96 mt-3" />
                </div>
                <div className="flex flex-1 justify-center items-center">
                    <div className="w-full max-w-xs">
                        <div className="card bg-base-100">
                            <div className="card-body px-8 py-10">
                                <h1 className="text-5xl font-bold text-center mb-8">
                                    JustGram
                                </h1>
                                <input type="text" placeholder="Email" className="input input-bordered w-full bg-base-200" />
                                <input type="password" placeholder="Password" className="input input-bordered w-full bg-base-200 mb-3" />
                                <button className="btn w-full bg-info">Login</button>
                            </div>
                        </div>
                        <div className="divider">OR</div>
                        <div className="card bg-base-100 mt">
                            <div className="card-body py-4 text-center text-sm">
                                Don't Have An Account?
                                <Link to="/register">
                                    <span className="link link-primary font-semibold cursor-pointer">
                                        SignUp
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginView;