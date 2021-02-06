import Head from 'next/head';

export default function Home() {
    return (
        <div className="items-center justify-center">
            <Head>
                <title>dwvicy</title>
                <link rel="icon" href="../public/ww-logo.png" />
            </Head>

            <div className="w-10/12 sm:w-5/12 px-4">
                <img
                    src="https://i.imgur.com/NMVIzOW.png"
                    alt="..."
                    className="shadow-lg rounded-full max-w-full h-auto align-middle border-none"
                />
            </div>
            <h1 className="text-2xl font-light py-2">Vaishnavi Dwivedi</h1>
            <br></br>
            <p>Full Stack Developer | Data Engineer | Designer</p>
        </div>
    );
}
