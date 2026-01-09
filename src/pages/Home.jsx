import { motion } from 'framer-motion';
import { Linkedin, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex flex-col items-center justify-center overflow-hidden">
                {/* Background Large Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-[0.03] select-none pointer-events-none">
                    <h2 className="text-[12vw] font-black uppercase leading-none text-white whitespace-nowrap">DESIGNER UI/UX</h2>
                    <h2 className="text-[12vw] font-black uppercase leading-none text-white whitespace-nowrap">DEVELOPER FRONTEND</h2>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 text-center flex flex-col items-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-white font-bold tracking-widest text-sm mb-2"
                    >
                        Hey There I'm
                    </motion.p>

                    <motion.h1
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-rahul text-lime"
                    >
                        DINESHKUMAR
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-gray-400 font-medium text-xs md:text-sm mt-4 max-w-xs md:max-w-md mx-auto leading-relaxed"
                    >
                        Currently Studying Computer Science and Engineering
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex space-x-6 mt-6"
                    >
                        <a href="#" className="text-lime hover:text-white transition-colors duration-300">
                            <Linkedin size={24} />
                        </a>
                        <a href="#" className="text-white hover:text-lime transition-colors duration-300">
                            <Github size={24} />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* About Section Preview */}
            <section className="bg-lime text-dark py-20 px-6 md:px-20">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black uppercase mb-10 text-center">About</h2>
                    <p className="text-lg md:text-xl font-medium leading-relaxed">
                        Hi there! I'm Arul, a third-year Computer Science student at SRM Institute with a passion for crafting user-centric experiences. I specialize in UI/UX design, front-end development, and graphic design, with expertise in HTML, CSS, JavaScript, React, Node.js, Tailwind CSS, QML, and C++. I thrive on collaboration and bring experience in agile scrum methodologies. Beyond coding, I enjoy photography, graphic design, and exploring music. Let's connect and bring your digital visions to life!
                    </p>
                    <div className="flex justify-end mt-10">
                        <Link to="/about" className="bg-dark text-white px-8 py-3 rounded-md font-bold uppercase tracking-widest text-xs hover:bg-black transition-colors duration-300">
                            More...
                        </Link>
                    </div>
                </div>
            </section>

            {/* Recent Projects Preview */}
            <section className="bg-dark py-20 px-6 md:px-20">
                <div className="max-w-6xl mx-auto">
                    <div className="flex justify-between items-end mb-12">
                        <h2 className="text-4xl md:text-6xl font-black uppercase">Recent Projects</h2>
                        <Link to="/projects" className="text-white hover:text-lime flex items-center text-xs font-bold uppercase tracking-widest transition-colors duration-300">
                            See all <ArrowRight size={16} className="ml-2" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ProjectCard
                            title="Portfolio"
                            type="Frontend"
                            desc="Developed to showcase my skills in web development, my portfolio website exemplifies proficiency in technologies such as ReactJS, CSS, and Figma."
                            image="/project_portfolio.png"
                        />
                        <ProjectCard
                            title="Weather App"
                            type="Full Stack"
                            desc="Developed a full-stack weather app using NodeJS/ Express for server-side logic and ReactJS/Handlebars for interactive frontend, delivering real-time weather data."
                            image="/project_weather.png"
                        />
                        <ProjectCard
                            title="Cred Clone"
                            type="Frontend"
                            desc="Crafted a responsive CRED Landing Page clone using ReactJS for modularity and interactivity, styled with CSS to match the original design."
                            image="/project_cred.png"
                        />
                    </div>
                </div>
            </section>

            {/* Get in Touch Preview */}
            <section className="bg-lime text-dark py-20 px-6 md:px-20">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div className="max-w-xl">
                        <h2 className="text-6xl md:text-8xl font-black uppercase mb-6 leading-tight">Get in Touch</h2>
                        <p className="text-xl font-medium">If you are interested in my work or want to provide feedback about this website, I am open to exchanging ideas.</p>
                    </div>
                    <div className="mt-10 md:mt-0 flex flex-col items-end">
                        <div className="flex space-x-6 mb-8 text-dark">
                            <Linkedin size={28} />
                            <Github size={28} />
                        </div>
                        <Link to="/contact" className="border-2 border-dark text-dark px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:bg-dark hover:text-lime transition-all duration-300">
                            Contact Me
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

const ProjectCard = ({ title, type, desc, image }) => (
    <motion.div
        whileHover={{ y: -10 }}
        className="bg-[#161b22] rounded-[2.5rem] border border-gray-800/50 flex flex-col group h-full"
    >
        <div className="h-72 p-5 bg-[#0b0c0d] overflow-hidden">
            <div className="w-full h-full rounded-[2rem] overflow-hidden border border-gray-800 shadow-2xl transition-transform duration-500 group-hover:scale-105">
                <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>
        </div>
        <div className="p-10 flex-grow">
            <h3 className="text-3xl md:text-4xl font-black uppercase text-white mb-1 tracking-tight">{title}</h3>
            <p className="text-lime font-bold text-sm uppercase mb-6 tracking-widest">{type}</p>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 h-24 overflow-hidden line-clamp-3 font-medium">{desc}</p>
            <div className="flex space-x-4">
                {[
                    "react/react-original.svg",
                    "javascript/javascript-plain.svg",
                    "css3/css3-plain.svg",
                    "figma/figma-original.svg"
                ].map((icon, i) => (
                    <div key={i} className="w-14 h-14 rounded-2xl bg-[#0d1117] border border-gray-800 flex items-center justify-center p-3 hover:border-lime transition-all duration-300">
                        <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}`} alt="tech" className="w-full h-full object-contain" />
                    </div>
                ))}
            </div>
        </div>
    </motion.div>
);

export default Home;
