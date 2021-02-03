import React from 'react';

export default function TalkCard({ title, subtitle }) {
    return (
        <div className="p-20 bg-purple-100 w-full md:w-1/3">
            <div className="bg-white rounded-lg shadow-lg">
                <img
                    src="https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
                    alt=""
                    className="rounded-t-lg"
                />
                <div className="p-6">
                    <h2 className="font-bold mb-2 text-2xl text-purple-800">{title}</h2>
                    <p className="text-purple-700 mb-2">{subtitle}</p>
                    <a href="/" className="text-purple-600 hover:text-purple-500 underline text-sm">
                        Read More
                    </a>
                </div>
            </div>
        </div>
    );
}
