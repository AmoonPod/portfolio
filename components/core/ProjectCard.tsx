import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


function ProjectCard({ project }: any) {
    const { id, title, subtitle, coverImage, coverImageDark, images } = project || {};
    return (
        //<Link className="" href={`/projects/${id}`}>
        <div>
            <div className="table-cell flex-col justify-between h-full transform transition-all w-full ">

                <Image
                    src={coverImage}
                    alt={title}
                    width={2000}
                    height={1000}
                    className="rounded-xl hover:scale-105 duration-500 hover:cursor-pointer hover:transform hover:-translate-y-2 hover:rotate-2 hover:shadow-xl"
                />
            </div>
            <h1 className="text-gray-500 dark:text-gray-400 p-2 text-center font-normal text-sm">
                {title}
            </h1>
        </div>
        //</Link>
    );
}

export default ProjectCard;
