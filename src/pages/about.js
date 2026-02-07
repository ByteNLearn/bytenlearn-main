import Head from 'next/head';
import About from '@/components/home/About';

export default function AboutPage() {
    return (
        <>
            <Head>
                <title>About Us | ByteNLearn</title>
                <meta name="description" content="Learn about ByteNLearn's history, mission, and the team driving digital innovation." />
            </Head>
            <div className="pt-20">
                <About />
            </div>
        </>
    );
}
