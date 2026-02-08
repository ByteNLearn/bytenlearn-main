import Head from 'next/head';
import About from '@/components/home/About';
import CoreValues from '@/components/about/CoreValues';
import Journey from '@/components/about/Journey';
import Process from '@/components/about/Process';
import LifeAt from '@/components/about/LifeAtByteNLearn';
import Team from '@/components/about/Team';

export default function AboutPage() {
    return (
        <>
            <Head>
                <title>About Us | ByteNLearn</title>
                <meta name="description" content="Learn about ByteNLearn's history, mission, and the team driving digital innovation." />
            </Head>
            <main className="pt-20">
                <About />
                <CoreValues />
                <Journey />
                <Process />
                <Team />
                <LifeAt />
            </main>
        </>
    );
}
