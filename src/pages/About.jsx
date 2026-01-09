import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const About = () => {
    const skills = [
        { name: 'HTML', icon: 'html5' },
        { name: 'CSS', icon: 'css3' },
        { name: 'JS', icon: 'javascript' },
        { name: 'React', icon: 'react' },
        { name: 'Tailwind', icon: 'tailwindcss' },
        { name: 'Node', icon: 'nodejs' },
        { name: 'Figma', icon: 'figma' },
        { name: 'C++', icon: 'cplusplus' },
    ];

    return (
        <div className="pt-32 pb-20 px-10 md:px-20 min-h-screen">
            <div className="flex justify-center mb-20">
                <h1 className="text-rahul text-white">About</h1>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative group">
                    <div className="absolute -inset-4 border-2 border-lime/30 rounded-3xl -z-10 group-hover:inset-0 transition-all duration-500"></div>
                    <img
                        src="rahul.png"
                        alt="Arul"
                        className="w-full rounded-2xl shadow-2xl hover:scale-[1.02] transition-all duration-700"
                    />
                </div>

                <div>
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10">
                        I'm Arul, a Computer Science student at <span className="text-lime">SRM Institute of Science and Technology</span>. My passion lies in building user-friendly solutions that enhance overall user experiences. I am currently focused on <span className="text-lime">React Native, Expo, Firebase, and React</span>, leveraging these technologies to create responsive and functional applications. One of my ongoing projects is Rescue Paws, a mobile app designed to facilitate the rescue and adoption of stray and pet dogs. The app will soon be published on the <span className="text-lime font-bold">Play Store and App Store</span>. I'm also Organised and managed events such as hackathons and workshops, mentoring others in UI/UX and graphic design. I thrive in <span className="text-lime italic">Agile Scrum environments</span> and believe collaboration and teamwork are essential to delivering successful projects.
                    </p>

                    <button className="bg-lime text-dark px-8 py-4 rounded-xl font-bold flex items-center space-x-3 hover:translate-y-[-5px] transition-transform duration-300">
                        <Download size={20} />
                        <span className="uppercase tracking-widest text-sm">Download Resume</span>
                    </button>
                </div>
            </div>

            {/* Skills Section */}
            <div className="mt-40 max-w-6xl mx-auto">
                <h2 className="text-4xl font-black uppercase mb-16">Skills</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-8">
                    {skills.map((skill) => (
                        <div key={skill.name} className="flex flex-col items-center space-y-4">
                            <div className="w-16 h-16 bg-dark-lighter border border-gray-800 rounded-2xl flex items-center justify-center hover:border-lime transition-colors duration-300">
                                <img
                                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-${skill.icon === 'javascript' || skill.icon === 'nodejs' ? 'original' : 'plain'}.svg`}
                                    className="w-10 h-10 grayscale hover:grayscale-0 transition-all duration-300"
                                    alt={skill.name}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
