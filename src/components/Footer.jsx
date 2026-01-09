import { Instagram, Youtube, Linkedin, Github } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full bg-dark pt-16 pb-8 px-6 md:px-10 flex flex-col items-center">
            <div className="max-w-7xl w-full">
                <img
                    src="/footer_banner.png"
                    alt="Designing the extraordinary one pixel at a time"
                    className="w-full h-auto"
                />
            </div>
        </footer>
    );
};

export default Footer;
