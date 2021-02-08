import Head from 'next/head';

export default function Home() {
    return (
        <div>
            <Head>
                <title>dwvicy</title>
                <link rel="icon" href="https://i.imgur.com/JdQEZPs.png" />
            </Head>

            <div className="container m-auto w-10/2 sm:w-4/12 px-4 justify-center">
                <img
                    src="https://i.imgur.com/NMVIzOW.png"
                    alt="..."
                    className="shadow-lg rounded-full align-middle border-none"
                />
            </div>
            <h1 className="text-center text-2xl font-light pt-3">Vaishnavi Dwivedi</h1>
            <br></br>
            <p className="text-center pb-10">Full Stack Developer | Data Engineer | Designer</p>
        </div>
    );
}
