import React from 'react';

export default function TalkCard({ title, subtitle, image, link }) {
    return (
        <div className="w-1/3 md:w-1/2">
            <div className="bg-white rounded-lg shadow-lg">
                <img src={image} alt="" className="rounded-t-lg" />
                <div className="p-6">
                    <h2 className="font-bold mb-2 text-xl text-purple-800 md:text-2xl">{title}</h2>
                    <p className="text-purple-700 mb-2">{subtitle}</p>
                    <a
                        href={link}
                        className="text-purple-600 hover:text-purple-500 underline text-sm">
                        Read More
                    </a>
                </div>
            </div>
        </div>
    );
}
