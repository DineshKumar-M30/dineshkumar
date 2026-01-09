import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            title: "Portfolio",
            type: "Frontend",
            desc: "Developed to showcase my skills in web development, my portfolio website exemplifies proficiency in technologies such as ReactJS, CSS, and Figma.",
            image: "/project_portfolio.png",
            color: "bg-[#0b0c0d]"
        },
        {
            title: "Weather App",
            type: "Full Stack",
            desc: "Developed a full-stack weather app using NodeJS/ Express for server-side logic and ReactJS/Handlebars for interactive frontend, delivering real-time weather data.",
            image: "/project_weather.png",
            color: "bg-[#0b0c0d]"
        },
        {
            title: "Cred Clone",
            type: "Frontend",
            desc: "Crafted a responsive CRED Landing Page clone using ReactJS for modularity and interactivity, styled with CSS to match the original design.",
            image: "/project_cred.png",
            color: "bg-[#0b0c0d]"
        },
        {
            title: "User Authentication syst....",
            type: "Full Stack",
            desc: "Crafted a responsive CRED Landing Page clone using ReactJS for modularity and interactivity, styled with CSS to match the original design.",
            image: "/project_auth.png",
            color: "bg-[#0b0c0d]"
        },
        {
            title: "Todo List",
            type: "Frontend",
            desc: "Crafted a responsive CRED Landing Page clone using ReactJS for modularity and interactivity, styled with CSS to match the original design.",
            image: "/project_todo.png",
            color: "bg-[#0b0c0d]"
        },
        {
            title: "QR Scanner",
            type: "Frontend",
            desc: "Crafted a responsive CRED Landing Page clone using ReactJS for modularity and interactivity, styled with CSS to match the original design.",
            image: "/project_qr.png",
            color: "bg-[#0b0c0d]"
        },
        {
            title: "Playlist Generator",
            type: "Frontend",
            desc: "Crafted a responsive CRED Landing Page clone using ReactJS for modularity and interactivity, styled with CSS to match the original design.",
            image: "/gallery_full.png",
            color: "bg-[#0b0c0d]"
        },
    ];

    const icons = [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
    ];

    return (
        <div className="pt-24 pb-20 bg-[#0b0c0d] min-h-screen">
            {/* Header Section */}
            <div className="flex flex-col items-center mb-0">
                <p className="text-lime font-bold uppercase tracking-[0.2em] text-xs mb-8">Projects</p>
                <div className="w-full bg-[#161b22] py-8 flex justify-center border-y border-gray-800/50 overflow-hidden">
                    <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter uppercase leading-none scale-y-110">
                        PROJECTS
                    </h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-10 mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-[#161b22] rounded-[2.5rem] overflow-hidden border border-gray-800/50 flex flex-col group"
                    >
                        <div className={`h-72 p-5 ${project.color} overflow-hidden`}>
                            <div className="w-full h-full rounded-[2rem] overflow-hidden border border-gray-800 shadow-2xl transition-transform duration-500 group-hover:scale-105">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="p-10 flex-grow">
                            <h3 className="text-3xl md:text-4xl font-black uppercase text-white mb-1 tracking-tight">{project.title}</h3>
                            <p className="text-lime font-bold text-sm uppercase mb-6 tracking-widest">{project.type}</p>
                            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 h-24 overflow-hidden line-clamp-3 font-medium">
                                {project.desc}
                            </p>
                            <div className="flex space-x-4">
                                {icons.map((icon, i) => (
                                    <div key={i} className="w-14 h-14 rounded-2xl bg-[#0d1117] border border-gray-800 flex items-center justify-center p-3 hover:border-lime transition-all duration-300">
                                        <img src={icon} alt="tech" className="w-full h-full object-contain" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
