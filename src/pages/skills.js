import Head from 'next/head';
import Skills from '@/components/home/Skills';

export default function SkillsPage() {
    return (
        <>
            <Head>
                <title>Our Skills | ByteNLearn</title>
                <meta name="description" content="Explore the technologies and tools we master: MERN Stack, Python, Data Science, and more." />
            </Head>
            <div className="pt-20">
                <Skills />
            </div>
        </>
    );
}
