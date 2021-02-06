import Head from 'next/head';
import Foto from '../src/components/foto';

export default function Home() {
    return (
        <div
            style={{ flexBasis: 0, flexGrow: 4 }}
            className="flex flex-col min-h-screen items-center">
            <Head>
                <title>dwvicy</title>
                <link rel="icon" href="../public/ww-logo.png" />
            </Head>

            <Foto />
            <h1 className="text-2xl font-light py-2">Vaishnavi Dwivedi</h1>
            <p>Full Stack Developer | Data Engineer | Designer</p>
        </div>
    );
}
