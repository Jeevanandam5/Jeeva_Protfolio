import React from "react";


const project = [
    {
        id: 1,
        title: "Online Bookstore",
        description:
            "Developed a MERN-stack Online Bookstore with user authentication, favourites, cart, order management, and admin-only book control using JWT and MongoDB.",
        tags: ["React.js", "React Router", "Tailwind CSS", "Axios", "Node.js", "Express.js","JWT (Authentication)","MongoDB","Mongoose"],
        demo: "https://bookstore-a5oj.onrender.com/",
        code: "https://github.com/Jeevanandam5/BookStore", 

    },
    {
        id: 2,
        title: "Student Mark Table ",
        description:
            "A simple student marks management app built with HTML, CSS, and Vanilla JavaScript using the Constructor function. It allows adding, viewing, and deleting student marks with automatic percentage calculation and LocalStorage support.",
        tags: ["HTML5", "JavaScript", "LocalStorage", "Bootstrap"],
        demo: "https://student-mark-table.netlify.app/",
        code: "https://github.com/Jeevanandam5/Student_Mark_Table", 

    },
    {
        id: 3,
        title: "BookWay - Book Manager App",
        description:
            "BookWay is a clean, functional book management system built using JavaScript ES6, localStorage, and Bootstrap. It allows users to add, edit, delete, and persist book entries dynamically.",
        tags: ["HTML5", "CSS", "Bootstrap 5", "JavaScript (ES6)", "LocalStorage"],
        demo: "https://book-records.netlify.app/",
        code: "https://github.com/Jeevanandam5/Book_way",
    },
    {
        id: 4,
        title: "Movie Finder App",
        description:
            "A fully functional movie search application built using React and the TMDB API. Browse popular, top-rated movies, search by keyword, and view detailed information.",
        tags: ["React", "Framer Motion", "React Router", "TMDB API", "Tailwind CSS"],
        demo: "https://movie-finder-com.netlify.app/",
        code: "https://github.com/Jeevanandam5/movie-finder",
        
    },
     {
        id: 5,
        title: "Theos Ray Ministry Website",
        description:
            "A modern and responsive ministry website designed to share sermons, videos, and resources with an engaging user experience. Built with React and Tailwind CSS for fast performance and clean UI.",
        tags: ["React.js", "Tailwind CSS", "React Router"],
        demo: "https://theosrayministry.netlify.app/",
        code: "https://github.com/Jeevanandam5/theo-ray-flow",
    },
    {
        id: 6,
        title: "E-commerce",
        description:
            "A full-stack e-commerce platform built using the MERN stack with secure user authentication, product management, and a fully functional cart system. It features intelligent cart sync for both guest and logged-in users, seamless checkout flow, and persistent state across sessions. Designed with responsive UI components and RESTful APIs for smooth and modern shopping experience.",
        tags: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT Auth", "Redux Toolkit", "RESTful APIs", "Responsive UI"],
        demo: "https://e-commercee-furnitures.onrender.com/",
        code: "https://github.com/Jeevanandam5/e-commerce-furniture",
    }
];

const Pill = ({ children }) => (
    <span className="inline-block text-sm px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-700">
        {children}
    </span>
);

const ProjectCard = ({ project }) => {


    return (
        <article className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            {/* left accent bar */}
            <div className="absolute left-6 top-9 w-1.5 h-10 bg-orange-400 rounded-md" />

            {/* Card content */}
            <div
                className='p-8 md:p-10 bg-white'>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    {project.title}
                </h3>

                <p className="text-gray-600 mb-5 max-w-xl">{project.description}</p>

                {/* tags */}
                <div className="flex flex-wrap gap-4 mb-6">
                    {project.tags.map((t) => (
                        <Pill key={t}>{t}</Pill>
                    ))}
                </div>

                {/* actions */}
                <div className="flex flex-wrap gap-3">
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-orange-400 text-orange-400 hover:bg-orange-50 transition">
                        {/* external icon (svg) */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2">
                            <path d="M14 3h7v7" />
                            <path d="M10 14L21 3" />
                            <path d="M21 21H3V3" />
                        </svg>
                        Live Demo
                    </a>

                    <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white hover:brightness-95 transition">
                        {/* github icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="currentColor">
                            <path d="M12 .5C5.73.5.5 5.73.5 12A11.5 11.5 0 007 23.25c.5.1.7-.22.7-.5v-1.9c-2.85.62-3.45-1.2-3.45-1.2-.46-1.16-1.12-1.48-1.12-1.48-.92-.63.07-.62.07-.62 1.02.07 1.56 1.05 1.56 1.05.9 1.55 2.36 1.1 2.94.85.09-.66.36-1.1.65-1.35-2.28-.26-4.68-1.14-4.68-5.08 0-1.12.4-2.03 1.06-2.75-.1-.26-.46-1.3.1-2.7 0 0 .86-.28 2.82 1.05A9.66 9.66 0 0112 6.8c.87 0 1.76.12 2.58.36 1.96-1.33 2.82-1.05 2.82-1.05.56 1.4.2 2.44.1 2.7.66.72 1.06 1.63 1.06 2.75 0 3.95-2.4 4.82-4.69 5.07.37.33.69.98.69 1.98v2.93c0 .28.2.6.7.5A11.5 11.5 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
                        </svg>
                        Source Code
                    </a>
                </div>
            </div>
        </article>
    );
};

const Project = () => {
    return (
        <section className="w-full bg-gray-50 py-13">
            <div className="max-w-7xl mx-auto px-6">
                {/* header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                        My Projects
                    </h2>
                    <div className="mx-auto w-25 h-1 bg-orange-400 rounded-full mt-4" />
                </div>

                {/* grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {project.map((p) => (
                        <ProjectCard key={p.id} project={p} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;
