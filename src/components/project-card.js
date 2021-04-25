import React from 'react';

export default function ProjectCard({ title, subtitle, label, img, link }) {
    return (
        <div>
            <a href={link} target="_blank" rel="noreferrer">
                <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
                    <img className="w-full" src={img} alt=" " />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{title}</div>
                        <p className="text-grey-darker text-base">{subtitle}</p>
                    </div>
                    <div className="px-6 py-4">
                        <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
                            {label}
                        </span>
                    </div>
                </div>
            </a>
        </div>
    );
}
