import React from 'react';
import skills from '../data/skills-data';
import tools from '../data/proficient';
export default function Landing() {
    return (
        <div>
            <div className="flex flex-col sm:flex-row justify-between">
                <div className=" container w-11/12 sm:w-2/3 flex flex-col justify-start p-2 sm:p-10">
                    <h1 className="font-bold text-lg">Summary</h1>
                    <p>
                        I&apos;m a versatile person with a lot of experience in the tech community
                        and working at working at several startups. I&apos;ve hosted 30+ workshops
                        in the past year on a variety of topics ranging from machine learning to
                        UI/UX. I like designing & building products that positively impact the lives
                        of users. I don&apos;t associate myself with specific tools and technology.
                        They are merely the means to build. This mindset has helped me be a quick
                        learner and concentrate more on solving the problem at hand.
                    </p>
                    &nbsp;
                    <h1 className="font-bold text-lg">Tools</h1>
                    <div className="flex flex-row">
                        {tools.map(({ logo }) => (
                            <div key={`${logo}`}>
                                <div className="inline-flex flex-row">
                                    <img className="h-10 w-auto sm:h-12  px-1" src={logo} alt="" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="p-8 sm:p-10">
                    {' '}
                    <h1 className="font-bold text-lg">Tech I&apos;ve worked with</h1>
                    <div className="my-5 grid mx-5 sm:mx-5 grid-col-2 grid-rows-5 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-7  gap-5">
                        {skills.map(({ logo, name }) => (
                            <div key={`${logo}${name}`}>
                                <div className="inline-flex flex-row">
                                    <img className="h-4 w-auto sm:h-6  px-1" src={logo} alt="" />
                                    <p>{name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
