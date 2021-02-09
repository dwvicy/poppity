import React from 'react';
// import ProjectCard from './project-card';

const Tabs = ({ color }) => {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full">
                    <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row" role="tablist">
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    'text-xl   px-5 py-3 shadow-lg rounded block leading-normal ' +
                                    (openTab === 1
                                        ? 'text-white bg-' + color + '-600'
                                        : 'text-' + color + '-600 bg-white')
                                }
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist">
                                <i className="fas fa-space-shuttle text-base mr-1"></i> technical
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    'text-xl   px-5 py-3 shadow-lg rounded block leading-normal ' +
                                    (openTab === 2
                                        ? 'text-white bg-' + color + '-600'
                                        : 'text-' + color + '-600 bg-white')
                                }
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist">
                                <i className="fas fa-cog text-base mr-1"></i> non-technical
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    'text-xl   px-5 py-3 shadow-lg rounded block leading-normal ' +
                                    (openTab === 3
                                        ? 'text-white bg-' + color + '-600'
                                        : 'text-' + color + '-600 bg-white')
                                }
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenTab(3);
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist">
                                <i className="fas fa-briefcase text-base mr-1"></i> misc
                            </a>
                        </li>
                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words bg-purple-200 w-full mb-6 shadow-lg rounded">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space ">
                                <div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
                                    <p>work in progress</p>
                                </div>
                                <div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
                                    <p>work in progress</p>
                                </div>
                                <div className={openTab === 3 ? 'block' : 'hidden'} id="link3">
                                    <p>work in progress</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default function TabsRender() {
    return (
        <>
            <Tabs color="purple" />
        </>
    );
}
