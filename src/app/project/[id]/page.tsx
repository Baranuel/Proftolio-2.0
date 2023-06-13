import Image from "next/image";
import { RiArrowGoBackLine } from "react-icons/ri";
import colors from "../../colors";
import TriggerPreview from "./(components)/TriggerPreview";
import { BASE_URL } from "../../../helpers";
import Carousel from "./(components)/Carousel";

const getData = async (url: string) => {
  const res = await fetch(url, { next: { revalidate: 60 } });
  return res.json();
};
async function ProjectPage({ params }: any) {
  const project = await getData(BASE_URL + `/api/projects/${params.id}`);

  return (
    <>
      <div className="flex relative   w-screen px-48 2xl:px-24 xl:px-12 lg:px-12 sm:px-4 py-24 md:py-4">
        <div className="w-screen grid grid-rows-2  mt-4 text-black  ">
          <a
            href="/#work"
            className={`flex gap-1  items-center text-lg  mb-4 ${
              colors.textHovered[project?.color ?? "purple"]
            } hover:cursor-pointer`}
          >
            <RiArrowGoBackLine />
            <h1>Back</h1>
          </a>
          <div className="  flex items-center w-full justify-between gap-4">
            {/* {isLoading && <Skeleton />} */}
            <h1
              className={`text-6xl md:text-3xl font-inter font-bold ${
                colors.text[project?.color ?? "purple"]
              }`}
            >
              {project?.title}
            </h1>
            <button className="text-lg font-inter">Next Project</button>
          </div>
          <hr className="my-6 md:my-3" />
          <div>
            <div className="relative h-[30vh] md:h-[20vh] min-h-[175px] bg-gray-200 rounded-xl">
              {
                <Image
                  src={project?.thumbnail ?? ""}
                  alt="thumbnail"
                  fill
                  className="rounded-xl object-cover"
                />
              }
            </div>
            <TriggerPreview project={project} />
            <div className="flex gap-4 xl:flex-col justify-between">
              <div className="mt-4">
                <h1 className={`text-lg text-[#333] font-semibold`}>
                  Deliverables
                </h1>
                {/* {isLoading && (
                  <div className="flex flex-col gap-2">
                    <SkeletonText />
                    <SkeletonText />
                    <SkeletonText />
                    <SkeletonText />
                  </div>
                )} */}
                <Carousel
                  color={project?.color}
                  items={project?.deliverables}
                />
              </div>

              <div className="  flex md:flex-col gap-6 justify-between">
                <div className="mt-4">
                  <h1 className="text-lg text-[#333] font-semibold">
                    Overview
                  </h1>
                  {/* {isLoading && (
                    <div className="flex flex-col gap-2">
                      <SkeletonTextLong />
                      <SkeletonTextLong />
                      <SkeletonText />
                    </div>
                  )} */}

                  <p className="w-[75ch] md:w-full mt-2 text-justify text-sm">
                    {project?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12"></div>
        </div>
      </div>
    </>
  );
}

export default ProjectPage;
