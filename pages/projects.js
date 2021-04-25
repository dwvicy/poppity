import React from 'react';
import ProjectCard from '../src/components/project-card';
import { projects } from '../src/data/project-data';

export default function Projects() {
    return (
        <div>
            <div className="w-56">
                <h1 className="font-black text-2xl underline--magical">personal projects</h1>
            </div>
            <div className="flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1">
                {projects.map(({ img, title, subtitle, label, link }) => (
                    <div
                        className="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-1/4 xl:my-1 xl:px-1 xl:w-1/4"
                        key={`${img}${title}${subtitle}${label}${link}`}>
                        <ProjectCard
                            img={img}
                            title={title}
                            subtitle={subtitle}
                            label={label}
                            link={link}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
