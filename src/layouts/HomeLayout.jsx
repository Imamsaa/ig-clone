import { FaHome, FaSearch, FaPlusSquare, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { Outlet, Link } from "react-router"
function HomeLayout() {
    return (
        <>
            <div className="flex min-w-screen bg-base-200">
                <aside className="hidden lg:flex w-64 px-6 py-6 flex-col justify-between sticky top-0 h-screen overflow-hidden shadow-md shadow-info">
                    <div className="">
                        <h1 className="font-bold text-5xl mb-10">JustGram</h1>
                        <ul className="menu text-base gap-3">
                            <li>
                                <Link to="/">
                                    <FaHome /> Home
                                </Link>
                            </li>
                            <li>
                                <a href="">
                                    <FaSearch /> Search
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <FaPlusSquare /> Create
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <FaUserCircle /> Profile
                                </a>
                            </li>
                        </ul>
                    </div>
                    <button className="btn btn-outline btn-sm">SignOut</button>
                </aside>
                <aside className="hidden md:flex lg:hidden w-20 shadow-md shadow-info flex-col py-6 gap-8 sticky top-0 h-screen overflow-hidden items-center">
                    <Link to="/">
                        <FaHome className="text-2xl cursor-pointer"/>
                    </Link>
                    <FaSearch className="text-2xl cursor-pointer"/>
                    <FaPlusSquare className="text-2xl cursor-pointer"/>
                    <FaUserCircle className="text-2xl cursor-pointer"/>
                    <FaSignOutAlt className="text-2xl cursor-pointer"/>
                </aside>
                <Outlet/>
                <div className="fixed bottom-0 left-0 right-0 flex md:hidden lg:hidden items-center justify-around bg-base-300 py-4 px-4">
                    <Link to="/">
                        <FaHome className="text-xl" />
                    </Link>
                    <FaSearch className="text-xl"/>
                    <FaPlusSquare className="text-xl"/>
                    <FaUserCircle className="text-xl"/>
                </div>
            </div>
        </>
    )
}

export default HomeLayout;