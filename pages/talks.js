import React from 'react';
import TalkCard from '../src/components/talk-card';
import talks from '../src/data/talks-data';

export default function Talks() {
    return (
        <div>
            <div>
                <h1 className="font-black text-2xl underline--magical w-20">talks</h1>
                <p> imma bit talkative but i listen too :) invite me for a talk if you want </p>
                <br></br>
            </div>
            <div className="flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1">
                {talks.map(({ title, subtitle, label, link }) => (
                    <div
                        className="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-1/4 xl:my-1 xl:px-1 xl:w-1/4"
                        key={`${title}${subtitle}${label}${link}`}>
                        <TalkCard title={title} subtitle={subtitle} label={label} link={link} />
                    </div>
                ))}
            </div>
        </div>
    );
}
