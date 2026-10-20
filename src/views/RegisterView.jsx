import {Link} from "react-router";
function RegisterView() {
    return (
        <>
            <div className="flex-1 flex my-5 justify-center">
                <div className="w-full max-w-xs">
                    <div className="card bg-base-100 border border-info-content">
                        <div className="card-body px-8 py-6">
                            <div className="text-center">
                                <h1 className="font-bold text-5xl">JustTime</h1>
                                <p className="text-semibold mt-3 leading-7">
                                    Dengan Akun Meta, Anda bisa mengakses beberapa teknologi Meta
                                </p>
                            </div>
                            <div className="divider"></div>
                            <input type="email" placeholder="Email" className="w-full bg-base-300 input input-bordered" />
                            <input type="password" placeholder="Password" className="w-full bg-base-300 input input-bordered" />
                            <input type="text" placeholder="Full Name" className="w-full bg-base-300 input input-bordered" />
                            <input type="text" placeholder="Username" className="w-full bg-base-300 input input-bordered" />
                            <button className="btn btn-info w-full my-3">Sign Up</button>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="card w-full bg-base-100 border border-info-content">
                        <div className="text-center py-3 card-body text-sm">
                            Have An Account ?
                            <Link to="/login">
                                <span className="link link-primary cursor-pointer font-semibold no-underline">
                                    Login
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterView;