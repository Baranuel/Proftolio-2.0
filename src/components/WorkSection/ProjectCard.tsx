import React from 'react'

function ProjectCard() {
    const [active, setActive] = React.useState(false);
    return (
        <div
          onMouseOver={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
          className={`flex flex-col justify-between hover:cursor-pointer p-2 h-[225px] w-[175px] bg-gradient-to-b ${
            !active ? "from-[#FCFCFC]" : "from-[#F4E8F8]"
          }  to-white  rounded-2xl outline ${
            active ? "outline-2 outline-[#B863FF]" : "outline-[#C1B5E3]"
          } transition-all duration-100           relative
          `}
        >
          <div className="self-center grow w-3/5 bg-transparent  flex items-center justify-center text-white relative z-50">
            <h1 className={`z-50 ${!active ? "text-[#C1B5E3]" : "text-[#B863FF]"} font-quicksand text-2xl font-semibold transition-all duration-100 `}>Paluba</h1>
            <div
              className={` w-full ${
                !active ? "bg-[#FCFCFC]" : "bg-[#EDCFFF]"
              } h-full blur-3xl rounded-full absolute`}
            ></div>
          </div>
          <div className={`self-center h-fit font-k2d mb-4 ${!active ? "text-[#C1B5E3] " : "text-[#B863FF] "} absolute bottom-0 font-light transition-all duration-100 `}>Redesign</div>
        </div>
    );
}

export default ProjectCard