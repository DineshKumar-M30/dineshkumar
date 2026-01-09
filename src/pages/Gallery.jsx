import { motion } from 'framer-motion';

const Gallery = () => {
    // Using the user-provided vertical strips to create the masonry columns directly
    const columns = [
        { id: 1, src: '/gallery_col_1.png' },
        { id: 2, src: '/gallery_col_2.png' },
        { id: 3, src: '/gallery_col_3.png' },
    ];

    return (
        <div className="pt-24 pb-20 bg-[#0b0c0d] min-h-screen px-4 md:px-8">
            {/* Header */}
            <div className="flex flex-col items-center mb-12">
                <p className="text-lime font-bold uppercase tracking-[0.2em] text-xs mb-4">Gallery</p>
                <div className="w-full bg-black py-6 flex justify-center border-y border-gray-800">
                    <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none font-['Outfit']">
                        GALLERY
                    </h1>
                </div>
            </div>

            <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {columns.map((col, index) => (
                    <motion.div
                        key={col.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        className="flex flex-col gap-6"
                    >
                        <img
                            src={col.src}
                            alt={`Gallery Column ${col.id}`}
                            className="w-full h-auto rounded-xl object-contain hover:scale-[1.02] transition-transform duration-500"
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
