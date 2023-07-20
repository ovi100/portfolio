import { profileImage } from "@/public/assets/images";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import ReactTypingEffect from "react-typing-effect";

const About = () => {
  return (
    <div className="lg:flex items-center justify-center gap-10 mt-5 lg:mt-20">
      <motion.div
        className="image flex items-center justify-center 2xl:flex-[0.22_1_0%] xl:flex-[0.3_1_0%] lg:flex-[0.4_1_0%]"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          className="w-96 h-80 lg:w-full lg:h-auto rounded-full mx-auto"
          src={profileImage}
          alt="profile picture"
        />
      </motion.div>
      <motion.div
        className="text text-white 2xl:flex-[0.4_1_0%] xl:flex-[0.5_1_0%] lg:flex-[0.8_1_0%] text-center lg:text-left mt-5 lg:mt-0"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="title text-base text-[#aaa] capitalize mb-2">
          <ReactTypingEffect
            text={["full stack developer", "front end developer"]}
            eraseDelay={1000}
            typingDelay={1000}
          />
        </div>
        <div className="name text-5xl text-[#f5f5f5] capitalize mb-2">
          abu sayed
        </div>
        <div className="short-text text-sm text-[#d5d5d5] leading-6">
          To become international standard IT personnel with good technical
          skills and relevant work quality, enthusiastic to begin a career that
          enables to solve IT Firm problems and decision making. Focused on
          developing a highly creative and challenging career in competitive
          software development.
        </div>
        <div className="social-link flex items-center gap-3 my-5 justify-center lg:justify-start">
          <a href="https://www.facebook.com/sayeed2011" target="_blank">
            <FaFacebookSquare className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/sayed2017" target="_blank">
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com/ovi100" target="_blank">
            <FaGithubSquare className="w-6 h-6" />
          </a>
        </div>
        <div className="buttons flex items-center gap-5 mt-5 justify-center lg:justify-start">
          <a
            className="bg-[#333] border-2 border-blue-400 cursor-pointer rounded-3xl px-4 py-2 hover:bg-blue-400"
            href="https://drive.google.com/file/d/1t9pucnMaQpO3aC-MVIlo7LVGByWpVCQu/view?usp=drive_link"
            target="_blank"
          >
            Download CV
          </a>
          <Link
            className="bg-[#333] border-2 border-[#d5d5d5] capitalize cursor-pointer rounded-3xl px-6 py-2 hover:bg-[#d5d5d5]"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            contact
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
