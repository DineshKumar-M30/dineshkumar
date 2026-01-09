import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div className="pt-32 min-h-screen flex flex-col">
            <div className="flex justify-center mb-20 px-6">
                <h1 className="text-rahul text-white">Contact</h1>
            </div>

            <div className="flex-grow flex items-center justify-center py-20 px-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-lime text-dark w-full max-w-6xl rounded-[3rem] p-12 md:p-24 flex flex-col md:flex-row gap-20"
                >
                    <div className="flex-1">
                        <h2 className="text-6xl md:text-8xl font-black uppercase mb-8 leading-tight">Get in Touch</h2>
                        <p className="text-xl md:text-2xl font-medium leading-relaxed">
                            If you are interested in my work or want to provide feedback about this website, I am open to exchanging ideas.
                        </p>
                    </div>

                    <div className="flex-1 space-y-8">
                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest pl-4">Name</label>
                            <input
                                type="text"
                                className="w-full bg-white border-none rounded-2xl p-5 text-dark focus:ring-4 ring-dark/10 outline-none transition-all"
                                placeholder="Arul..."
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest pl-4">Email</label>
                            <input
                                type="email"
                                className="w-full bg-white border-none rounded-2xl p-5 text-dark focus:ring-4 ring-dark/10 outline-none transition-all"
                                placeholder="arul@example.com"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest pl-4">Message</label>
                            <textarea
                                rows="4"
                                className="w-full bg-white border-none rounded-2xl p-5 text-dark focus:ring-4 ring-dark/10 outline-none transition-all resize-none"
                                placeholder="Your message here..."
                            ></textarea>
                        </div>
                        <button className="w-full bg-dark text-lime py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-lg hover:bg-black transition-colors duration-300">
                            Send
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
