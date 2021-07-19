import Head from 'next/head';
import Foot from '../src/components/foot';
import Landing from '../src/components/landing';
import socials from '../src/data/socials';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Vaishnavi Dwivedi</title>
                <meta name="title" content="Vaishnavi Dwivedi" />
                <meta
                    name="description"
                    content="Product Strategy and Design | Full Stack Developer | Deep Learning"
                />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://dwvicy.ml" />
                <meta property="og:title" content="Vaishnavi Dwivedi" />
                <meta
                    property="og:description"
                    content="Product Strategy and Design | Full Stack Developer | Deep Learning"
                />
                <meta property="og:image" content="https://i.imgur.com/NMVIzOW.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://dwvicy.ml" />
                <meta property="twitter:title" content="Vaishnavi Dwivedi" />
                <meta
                    property="twitter:description"
                    content="Product Strategy and Design | Full Stack Developer | Deep Learning"
                />
                <meta property="twitter:image" content="https://i.imgur.com/NMVIzOW.png" />
            </Head>
            <div className="flex flex-col sm:flex-row justify-center">
                <div className="m-auto sm:m-7 w-7/12 sm:w-1/4 md:w-1/4 justify-center">
                    <img
                        src="https://i.imgur.com/NMVIzOW.png"
                        alt="..."
                        className="shadow-lg rounded-full border-none"
                    />
                </div>
                <div className="flex flex-col justify-center m-1 sm:m-7">
                    <h1 className="text-center font-semibold sm:text-left text-xl sm:text-3xl font-light pt-3">
                        Vaishnavi Dwivedi
                    </h1>
                    <br></br>
                    <p className="text-center sm:text-left pb-5 sm:pb-10 text-sm sm:text-base">
                        Product Strategy | Frontend Developer | Machine Learning
                    </p>
                    <div className="flex flex-row justify-center sm:justify-start">
                        {socials.map(({ link, logo }) => (
                            <div key={`${link}${logo}`}>
                                <div className="inline-flex flex-row">
                                    <img
                                        className="h-10 w-auto sm:h-12  px-1"
                                        src={logo}
                                        href={link}
                                        alt=""
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex justify-center my-10 sm:my-28">
                <img src="/down-arrow.png" alt="" className="w-auto h-8 animate-bounce" />
            </div>

            <section className="my-12">
                <Landing />
            </section>
            <Foot />
        </div>
    );
}
