import React from "react";
import { useState, useEffect } from "react";

const HeroSection = () => {
    const [value, setValue] = useState(5);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth >= 768) {
                setScrollY(window.scrollY);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div className="md:flex-row">
                <section className="flex flex-col md:flex-row items-center justify-between px-6">
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src="resume.jpg"
                            alt="resume"
                            className="w-110 h-auto my-16"
                        />
                    </div>
                    <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
                        <h1 className="text-5xl font-bold text-blue-500">
                            BACKEND DEV
                        </h1>
                        <h1 className="text-4xl md:text-7xl font-bold text-gray-800">
                            AYUSH BANSAL
                        </h1>
                        <p className="text-lg text-gray-500">
                            Recent Computer Science graduate and backend-leaning
                            Full-Stack Developer passionate about building
                            scalable systems, clean APIs, and developer tools. I
                            have hands-on experience with FastAPI, Flask, React,
                            PostgreSQL, and AWS, along with multiple AWS
                            certifications that validate my cloud expertise. I
                            enjoy crafting solutions that boost developer
                            productivity and hold up under real-world pressure.
                            I’m now looking to kickstart my career in IT, where
                            I can contribute to high-impact engineering teams
                            and grow as a developer.
                        </p>
                        <div className="flex justify-start items-center">
                            <button className="text-lg border-solid border-2 bg-white mt-12 px-16 py-6 text-sky-400 shadow-md shadow-gray-100 rounded-full hover:shadow-md hover:shadow-sky-700 hover:translate-x-4 duration-300">
                                <a href="/CV_AYUSH_BANSAL.pdf" download>
                                    Download Resume
                                </a>
                            </button>
                            <p className="text-lg text-gray-500 mt-2 px-8">
                                Let's connect :{" "}
                                <a
                                    href="https://github.com/ayush03b"
                                    className="text-blue-400 hover:text-blue-600"
                                >
                                    Github
                                </a>{" "}
                                ·{" "}
                                <a
                                    href="https://www.linkedin.com/in/ayush03b/"
                                    className="text-blue-400 hover:text-blue-600"
                                >
                                    LinkedIn
                                </a>
                            </p>
                        </div>
                    </div>
                </section>
                <div
                    id="projects"
                    className="flex items-center justify-center w-full h-[400px] bg-gradient-to-br from-sky-100 via-sky-400 via-blue-500 to-blue-800 bg-[length:400%_400%] animate-gradient-x"
                >
                    <div className="flex flex-row w-full text-sky-100 drop-shadow-md font-mono text-xs px-4 py-6">
                        <pre className="whitespace-pre leading-tight tracking-tight text-2xl pl-24">
                            {`

██████╗ ██████╗  ██████╗      ██╗███████╗ ██████╗████████╗███████╗
██╔══██╗██╔══██╗██╔═══██╗     ██║██╔════╝██╔════╝╚══██╔══╝██╔════╝
██████╔╝██████╔╝██║   ██║     ██║█████╗  ██║        ██║   ███████╗
██╔═══╝ ██╔══██╗██║   ██║██   ██║██╔══╝  ██║        ██║   ╚════██║
██║     ██║  ██║╚██████╔╝╚█████╔╝███████╗╚██████╗   ██║   ███████║
╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚════╝ ╚══════╝ ╚═════╝   ╚═╝   ╚══════╝
                                                                  

`}
                        </pre>
                        <pre className="whitespace-pre leading-tight tracking-tight animate-cursor text-3xl ml-8">
                            {`

        
        
        
███████╗
╚══════╝
`}
                        </pre>
                    </div>
                </div>

                <section className="flex flex-col md:flex-row items-center justify-center md:py-20 md:px-20 space-y-6 md:space-y-0">
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src="FASTAPI.png"
                            alt="resume"
                            className="w-110 h-auto my-16"
                        />
                    </div>
                    <div className="w-full md:w-1/2 text-center md:text-left space-y-6 mr-4">
                        <h1 className="text-5xl font-bold text-blue-500 hover:text-blue-600">
                            STACKHATCH
                        </h1>
                        <p className="text-lg text-blue-400 mt-2">
                            REST API built with FASTAPI
                        </p>
                        <ul className="text-lg text-gray-500 space-y-2 list-disc pl-5">
                            <li>
                                Built secure backend service with CRUD, user
                                auth, and RBAC using FastAPI, SQLModel,
                                PostgreSQL
                            </li>
                            <li>
                                Added JWT auth, middleware, Celery background
                                tasks, async email via Redis
                            </li>
                            <li>
                                Modular, containerized system with Docker &
                                clean routing
                            </li>
                            <li>
                                Auto-generated API docs for smooth developer
                                onboarding
                            </li>
                        </ul>

                        <a href="https://github.com/ayush03b/blip">
                            Github Repo
                        </a>
                    </div>
                </section>
                <section className="relative md:pl-16 mt-24 flex items-start flex-col md:flex-row justify-evenly">
                    <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
                        <h1 className="text-5xl font-bold text-blue-500 hover:text-blue-600">
                            STREAMFORGE
                        </h1>
                        <p className="text-lg text-blue-400 mt-2">
                            Adaptive Bitrate Streaming Video Transcoder
                        </p>
                        <ul className="text-lg text-gray-500 space-y-2 list-disc pl-5">
                            <li>
                                Built full-stack video platform (React + FastAPI
                                + Docker)
                            </li>
                            <li>
                                Event-driven ECS video transcoding (HLS) via SQS
                            </li>
                            <li>
                                Stored in S3, served via CloudFront + signed
                                URLs
                            </li>
                            <li>
                                Presigned S3 uploads, Redis caching, PostgreSQL
                                metadata
                            </li>
                        </ul>
                        <button className="text-lg border-solid border-2 bg-white px-16 py-6 text-sky-400 shadow-md shadow-gray-100 rounded-full hover:shadow-md hover:shadow-sky-700 hover:translate-x-4 duration-300 ">
                            <a href="https://github.com/ayush03b/video-transcoder-prototype">
                                Github Repo
                            </a>
                        </button>
                    </div>
                    <div
                        className="hidden md:block w-full md:w-1/2 sticky top-24"
                        style={{ transform: `translateY(-${scrollY * 0.1}px)` }}
                    >
                        <img
                            src="TranscoderArchitecture.png"
                            alt="ImageMiddle"
                            className="w-auto h-[550px] object-contain mx-auto"
                        />
                    </div>
                </section>
                <section className="flex flex-col md:flex-row items-center justify-evenly py-32 space-y-6 md:space-y-0">
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src="TranscoderArchitecture.png"
                            alt="resume"
                            className="w-110 h-auto my-16"
                        />
                    </div>
                    <div className="relative flex flex-col w-full md:w-1/2 px-20">
                        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
                            <h1 className="text-5xl font-bold text-blue-500 hover:text-blue-600">
                                BACKSMITH
                            </h1>
                        </div>
                        <div className="flex flex-col md:flex-row mt-6 items-center">
                            <div>
                                <ul className="text-lg text-gray-500 space-y-2 list-disc pl-5">
                                    <li>
                                        Built an interactive project generator
                                        that scaffolds production-grade FastAPI
                                        apps with user-selected modules
                                    </li>
                                    <li>
                                        Supports plug-and-play options like ORM
                                        (SQLModel), auth, DB, Redis cache, and
                                        background tasks via Celery
                                    </li>
                                    <li>
                                        Generates clean project structure with
                                        Docker, JWT auth, role-based access, and
                                        modular routing
                                    </li>
                                    <li>
                                        Designed for real-world use with
                                        automatic API docs, async support, and
                                        built-in scalability patterns
                                    </li>
                                </ul>

                                <button className="text-lg border-solid border-2 bg-white mt-12 px-16 py-6 text-sky-400 shadow-md shadow-gray-100 rounded-full hover:shadow-md hover:shadow-sky-700 hover:translate-x-4 duration-300">
                                    Github Repo
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default HeroSection;
