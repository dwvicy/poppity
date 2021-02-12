import Head from 'next/head';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Vaishnavi Dwivedi</title>
                <meta name="title" content="Vaishnavi Dwivedi" />
                <meta
                    name="description"
                    content="Full Stack Developer | Data Engineer | Designer"
                />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://dwvicy.ml" />
                <meta property="og:title" content="Vaishnavi Dwivedi" />
                <meta
                    property="og:description"
                    content="Full Stack Developer | Data Engineer | Designer"
                />
                <meta property="og:image" content="https://i.imgur.com/NMVIzOW.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://dwvicy.ml" />
                <meta property="twitter:title" content="Vaishnavi Dwivedi" />
                <meta
                    property="twitter:description"
                    content="Full Stack Developer | Data Engineer | Designer"
                />
                <meta property="twitter:image" content="https://i.imgur.com/NMVIzOW.png" />
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
