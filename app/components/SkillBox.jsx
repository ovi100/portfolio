import Image from "next/image";

const SkillBox = ({ icon, title, skill }) => {
  return (
    <div
      className="skill-box flex gap-5 border-2 border-blue-400 rounded-md mb-4 
      transition duration-300 ease-linear hover:shadow-[0_0_10px_6px_rgba(0,0,0,.8)] hover:cursor-pointer"
    >
      <div className="image bg-blue-400 h-full md:flex items-center flex-col justify-center hidden p-8">
        <Image
          className={`${skill[0] === "React Js" ? "w-[72px]" : "w-14"} h-auto`}
          src={icon}
          alt="icon"
        />
        {/* <div className="title text-xs capitalize mt-3">{title}</div> */}
      </div>
      <div className="content p-2">
        <div className="title text-white text-base capitalize my-3">
          {title}
        </div>
        <div className="skill-items text-xs text-[#777] flex flex-wrap gap-2 lg:gap-3 capitalize my-2">
          {skill.map((item, index) => (
            <div
              className="item bg-black text-white text-sm lg:text-xs rounded-3xl px-3 py-1.5"
              key={index}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillBox;
