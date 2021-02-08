import React from 'react';
import ProjectCard from '../src/components/project-card';

export default function Projects() {
    return (
        <div>
            <div className="w-28">
                <h1 className="font-black text-2xl underline--magical">Projects</h1>
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-4">
                <ProjectCard
                    img="https://i.imgur.com/4IHOCRG.png"
                    title="niyamo"
                    subtitle="an app to overcome imposter syndrome"
                    label="flutter"
                />
                <ProjectCard
                    img="https://i.imgur.com/4IHOCRG.png"
                    title="cognitionAD"
                    subtitle="an app for early detection of Alzheimer's disease"
                    label="flutter"
                />
                <ProjectCard
                    img="https://i.imgur.com/4IHOCRG.png"
                    title="aereor"
                    subtitle="an app for early detection of Alzheimer's disease"
                    label="flutter"
                />
                <ProjectCard
                    img="https://i.imgur.com/4IHOCRG.png"
                    title="michi"
                    subtitle="an app for early detection of Alzheimer's disease"
                    label="flutter"
                />
                <ProjectCard
                    img="https://i.imgur.com/4IHOCRG.png"
                    title="michi"
                    subtitle="an app for early detection of Alzheimer's disease"
                    label="flutter"
                />
            </div>
        </div>
    );
}
