import { Facebook, Github, Linkedin } from "lucide-react";
import { type FC } from "react";

const SocialLinks: FC = () => {
    return (
        <>
            <div>
                <h3 className="text-base font-semibold mb-3">Follow Us</h3>
                <div className="flex gap-4">
                    <a href="https://www.facebook.com/H.Kabir.dev" aria-label="Facebook" className="hover:text-blue-600 transition" target="_blank" rel="noopener noreferrer">
                        <Facebook size={20} />
                    </a>
                    <a href="https://bd.linkedin.com/in/kabir63" aria-label="Linkedin" className="hover:text-sky-500 transition" target="_blank" rel="noopener noreferrer">
                        <Linkedin size={20} />
                    </a>
                    <a href="https://github.com/humayun63" aria-label="Github" className="hover:text-gray-900 dark:hover:text-white transition" target="_blank" rel="noopener noreferrer">
                        <Github size={20} />
                    </a>
                </div>
            </div>
        </>
    );
};

export default SocialLinks;