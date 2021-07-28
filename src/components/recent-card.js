import React from 'react';

export default function RecentTalkCard({ title, subtitle, label, link, date }) {
    return (
        <div>
            <a href={link} target="_blank" rel="noreferrer">
                <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{title}</div>
                        <p className="text-grey-darker text-base">{subtitle}</p>
                    </div>
                    <div className="px-6 py-4">
                        <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
                            {label}
                        </span>
                    </div>
                    <div className="px-6 py-4">
                        <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
                            {date}
                        </span>
                    </div>
                </div>
            </a>
        </div>
    );
}
