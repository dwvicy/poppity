import Head from 'next/head';
import Nav from '../src/components/nav';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
        </div>
    );
}
