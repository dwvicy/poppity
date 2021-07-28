import React from 'react';
import skills from '../data/skills-data';
import tools from '../data/proficient';
import Image from 'next/image';
// import recenttalks from '../data/recent-talk';
// import RecentTalkCard from './recent-card';
export default function Landing() {
    return (
        <div>
            <div className="flex flex-col sm:flex-row justify-between">
                <div className="container w-11/12 sm:w-2/3 flex flex-col justify-start p-2 sm:p-10">
                    <h1 className="font-bold text-lg">Summary</h1>
                    <p>
                        I&apos;m a versatile person with a lot of experience in the tech community
                        and working at many startups. I&apos;ve hosted 30+ workshops in the past
                        year on a variety of topics ranging from machine learning to UI/UX. I like
                        designing & building products that positively impact the lives of users. I
                        don&apos;t associate myself with specific tools and technology. They are
                        merely the means to build. This mindset has helped me be a quick learner and
                        concentrate more on solving the problem at hand.
                    </p>
                    &nbsp;
                    <h1 className="font-bold text-lg">Tools</h1>
                    <div className="flex flex-row space-x-1">
                        {tools.map(({ logo }) => (
                            <div key={`${logo}`}>
                                <div className="inline-flex flex-row ">
                                    <Image
                                        className="h-6 w-auto sm:h-12 px-1"
                                        src={logo}
                                        alt=""
                                        width="50%"
                                        height="50%"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="p-8 sm:p-10">
                    {' '}
                    <h1 className="font-bold text-lg">Tech I&apos;ve worked with</h1>
                    <div className="my-5 grid mx-5 sm:mx-5 grid-col-2 grid-rows-5 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-7  gap-5 ">
                        {skills.map(({ logo, name }) => (
                            <div key={`${logo}${name}`}>
                                <div className="inline-flex flex-row space-x-1">
                                    <Image
                                        className="  px-1"
                                        src={logo}
                                        alt=""
                                        width="25%"
                                        height="19%"
                                        layout=""
                                    />
                                    <p>{name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* <div className=" w-11/12 sm:w-full flex flex-col justify-start p-2 sm:p-10">
                <h1 className="font-bold text-lg">Upcoming Workshops</h1>
                <div className="flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1">
                    {recenttalks.map(({ title, subtitle, label, link, date }) => (
                        <div
                            className="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-1/4 xl:my-1 xl:px-1 xl:w-1/4"
                            key={`${title}${subtitle}${label}${link}${date}`}>
                            <RecentTalkCard
                                title={title}
                                subtitle={subtitle}
                                label={label}
                                link={link}
                                date={date}
                            />
                        </div>
                    ))}
                </div>
            </div> */}
            <div>
                <h1 className="font-bold text-lg">Informative Videos</h1>
                <div className="flex flex-col sm:flex-row justify-center space-y-1 sm:space-x-5 sm:space-y-0">
                    <iframe
                        width="450"
                        height="315"
                        src="https://www.youtube.com/embed/fqhLNTkzPJI?start=404"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>

                    <iframe
                        width="450"
                        height="315"
                        src="https://www.youtube-nocookie.com/embed/KB0gJ9G_Q-I?start=44"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                    <iframe
                        width="450"
                        height="315"
                        src="https://www.youtube.com/embed/VPZ00MEc5gY?start=184"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                </div>
            </div>
        </div>
    );
}
