import React from 'react';
import ProjectCard from '../src/components/project-card';

export default function Projects() {
    return (
        <div className="flex flex-col min-h-screen">
            <h1>Projects</h1>
            <ProjectCard
                img="https://i.imgur.com/4IHOCRG.png"
                title="Niyamo"
                subtitle="An app to overcome imposter syndrome"
                label="flutter"
            />
            <ProjectCard
                img="https://i.imgur.com/4IHOCRG.png"
                title="CognitionAD"
                subtitle="An app for early detection of Alzheimer's disease"
                label="flutter"
            />
        </div>
    );
}
