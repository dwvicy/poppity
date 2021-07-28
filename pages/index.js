import Head from 'next/head';
import Foot from '../src/components/foot';
import Landing from '../src/components/landing';
import socials from '../src/data/socials';
import Image from 'next/image';

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
                <div className="m-auto sm:m-10 w-7/12 sm:w-1/4 md:w-1/4 justify-center">
                    <Image
                        src="https://i.imgur.com/NMVIzOW.png"
                        alt="..."
                        width="100%"
                        height="100%"
                        layout="responsive"
                        className="rounded-full border-none"
                    />
                </div>
                <div className="flex flex-col justify-center m-1 sm:m-7">
                    <h1 className="text-center font-semibold sm:text-left text-xl sm:text-7xl font-light pt-3">
                        Vaishnavi Dwivedi
                    </h1>
                    <br></br>
                    <p className="text-center sm:text-left pb-5 sm:pb-10 text-sm sm:text-xl">
                        Product Strategy | Frontend Developer | Machine Learning
                    </p>
                    <div className="flex flex-row space-x-3 justify-center sm:justify-start w-9/12 sm:w-full m-auto sm:m-0">
                        {socials.map(({ link, logo }) => (
                            <div key={`${link}${logo}`}>
                                <div className="inline-flex flex-row">
                                    <a href={link} target="_blank" rel="noreferrer">
                                        <div>
                                            <Image
                                                className=" px-1"
                                                href={link}
                                                src={logo}
                                                alt=""
                                                height="40%"
                                                width="40%"
                                                // layout="responsive"
                                            />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex justify-center my-10 sm:my-20 w-auto h-8 animate-bounce">
                <Image
                    src="/down-arrow.png"
                    alt=""
                    className=""
                    layout="fill"
                    objectFit="contain"
                />
            </div>

            <section className="my-10">
                <Landing />
            </section>
            <Foot />
        </div>
    );
}
