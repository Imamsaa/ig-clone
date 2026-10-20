import { FaHeart, FaRegComment, FaPaperPlane, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router"
function HomeView() {
    return (
        <>
            <main className="flex flex-1 justify-center pb-16 md:pb-0">
                <div className="w-full max-w-xl">
                    <div className="border-b">
                        <div className="flex items-center justify-between px-4 py-3">
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="w-10 rounded-full">
                                        <img src="https://i.pravatar.cc/150?img=1" alt="Avatar" />
                                    </div>
                                </div>
                                <Link to="/rizky25" className="font-semibold text-sm">
                                    Username
                                </Link>
                            </div>
                            <span className="cursor-pointer">...</span>
                        </div>
                        <img src="https://picsum.photos/seed/1/600/600" alt="" className="w-full" />
                        <div className="flex justify-between px-4 py-3">
                            <div className="flex gap-4 text-xl">
                                <FaHeart className="cursor-pointer hover:text-red-500 transition"/>
                                <FaRegComment className="cursor-pointer"/>
                                <FaPaperPlane className="cursor-pointer"/>
                            </div>
                            <FaRegBookmark className="cursor-pointer text-xl"/>
                        </div>
                        <div className="text-sm px-4 pb-4">
                            <p className="font-semibold">1500 Likes</p>
                            <p>
                                <span className="font-bold">
                                    Username 
                                </span>
                                - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed suscipit voluptate odit.
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                                2 Jam yang lalu
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default HomeView;