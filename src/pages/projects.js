import Head from 'next/head';
import ProjectsGrid from '@/components/projects/ProjectsGrid';
import HappyClients from '@/components/home/HappyClients';

export default function ProjectsPage() {
    return (
        <>
            <Head>
                <title>Projects & Portfolio | ByteNLearn</title>
                <meta name="description" content="View our latest projects in web development, app development, and data visualization." />
            </Head>
            <main>
                <ProjectsGrid />
                <HappyClients />
            </main>
        </>
    );
}
