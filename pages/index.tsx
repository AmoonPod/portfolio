import Head from "next/head";
import Image from "next/image";
import manuel from "../public/manuel.jpeg";
import ProjectCard from "../components/core/ProjectCard";
import { projects } from "../constants/projects";
import ScrambleText from "../components/scramble";
export default function Home() {
  return (
    <div className='flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto relative'>
      <Head>
        <title>Manuel De Ceglie - Web and App Wizard Developer | Flutter and Next.js Pro</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="Manuel De Ceglie, Web Developer, App Developer, Flutter, Next.js, Wizard Developer, Software Engineering" />
        <meta name="description" content="Manuel De Ceglie, a Web and App Wizard Developer. Crafting on the Web, One Pixel at a Time. Specializing in Flutter and Next.js. Discover the projects I've worked on and what I'm currently developing." />
        <meta property="og:title" content="Manuel De Ceglie - Web and App Wizard Developer | Flutter and Next.js Pro" />
        <meta property="og:description" content="Manuel De Ceglie, a Web and App Wizard Developer. Crafting on the Web, One Pixel at a Time. Specializing in Flutter and Next.js. Discover the projects I've worked on and what I'm currently developing." />
        <meta property="og:url" content="https://www.manueldeceglie.it" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.manueldeceglie.it" />
      </Head>

      <div className="absolute top-0 -left-4 w-[400px] h-[400px] bg-purple-300 dark:bg-[#A78BFF] dark:opacity-5 dark:mix-blend-screen rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob1 pointer-events-none"></div>
      <div className="absolute top-0 -right-4 w-[400px] h-[400px] bg-yellow-300 dark:opacity-5 dark:mix-blend-screen rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob2 pointer-events-none"></div>
      <div className="absolute -bottom-8 left-20 w-[400px] h-[400px] dark:opacity-5 dark:mix-blend-screen bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob3 pointer-events-none"></div>
      <div className="absolute -bottom-5 right-20 w-[400px] h-[400px] dark:opacity-5 dark:mix-blend-screen bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob4 pointer-events-none"></div>
      <section className="py-12">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">Manuel De Ceglie</h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4 font-light">
              Web and App
              <span className="font-bold animate-text text-transparent bg-clip-text bg-gradient-to-r from-[#293E8F] to-[#562594] animate-fade-in-up duration-150 pl-1 pr-1">
                Wizard
              </span>
              Developer
            </h2>
            <ScrambleText text="Crafting on the Web, One Pixel at a Time. Flutter and Next.js Pro." />
          </div>
          <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              src={manuel}
              width={250}
              height={250}
              alt="Manuel De Ceglie"
              className="rounded-full shadow-md hover:scale-110 duration-500"
              draggable={false}
            />
          </div>
        </div>
      </section>
      <section className=" flex flex-col-reverse sm:flex-row items-start max-w-5xl min-w-full pb-16">
        <div className="min-w-full">
          <h1 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">Projects</h1>
          <div className="flex gap-6 flex-col md:flex-row">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => {
                return <ProjectCard project={project} key={project.id} />;
              })}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
