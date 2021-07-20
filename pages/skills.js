// import React from 'react';

// export default function Skills() {
//     return (
//         <div className="flex flex-col min-h-screen">
//             <h1>Skills</h1>
//             <p>Work in progress</p>
//             {/* <TabsRender /> */}
//         </div>
//     );
// }

import React from 'react';
import Image from 'next/image';
import skills from '../src/data/skills-data';
export default function Skills() {
    return (
        <div>
            <div>
                <h1 className="font-black text-2xl underline--magical w-20">skills</h1>
                <p> still a work in progress but working on adding more skills soon </p>
                <br></br>
            </div>
            <div className="my-24 grid mx-5 sm:mx-10 grid-col-1 grid-rows-16 sm:grid-flow-col sm:grid-cols-5 sm:grid-rows-5  gap-5">
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
    );
}
