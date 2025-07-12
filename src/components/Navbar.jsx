import React from "react";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-4 mb-4 pb-0">
            <div className="bg-white text-sky-400 px-8 py-5 mx-8 rounded-full hover:shadow-2xl hover:shadow-sky-400">
                <h1>AYUSH BANSAL</h1>
            </div>
            <div className="flex justify-between items-center text-sm">
                <div className="hidden space-x-6 text-gray-500 md:flex items-center justify-evenly">
                    <div className="flex items-center transition ease-in-out delay-50 hover:text-sky-500 hover:border-sky-500 hover:translate-y-1 duration-300">
                        Blogs
                    </div>
                    <div className="flex items-center transition ease-in-out delay-50 hover:text-sky-500 hover:border-sky-500 hover:translate-y-1 duration-300">
                        its2003ayush@gmail.com
                    </div>
                    <div className="flex items-center transition ease-in-out delay-50 hover:text-sky-500 hover:border-sky-500 hover:translate-y-1 duration-300">
                        +91 8727510817
                    </div>
                </div>
                <div className="mx-6 flex items-center transition ease-in-out delay-50 hover:text-sky-500 hover:border-sky-500 hover:translate-y-1 duration-300">
                    <a href="#projects">Projects</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
