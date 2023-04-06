import React from 'react'

function ProjectCard() {
    const [active, setActive] = React.useState(false);
    return (
        <div
          onMouseOver={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
          className={`flex flex-col justify-between hover:cursor-pointer p-2 h-[225px] w-[175px]  rounded-2xl  ${
            active ? " outline outline-lightPink " : " bg-white shadow-md "
          } transition-all duration-100 relative
          `}
        >
          <div className="self-center grow w-3/5 bg-transparent  flex items-center justify-center text-white relative z-50">
            <h1 className={`z-50 ${!active ? "text-[#C1B5E3]" : "text-lightPink"} font-quicksand text-2xl font-semibold transition-all duration-100 `}>Paluba</h1>
      
          </div>
          <div className={`self-center h-fit font-k2d mb-4 text-sm text-orange-400 absolute bottom-0 font-light bg-orange-300/20 p-1 px-2 rounded-md transition-all duration-100 `}>Redesign</div>
        </div>
    );
}

export default ProjectCard