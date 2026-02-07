import Head from 'next/head';
import Contact from '@/components/home/Contact';

export default function ContactPage() {
    return (
        <>
            <Head>
                <title>Contact Us | ByteNLearn</title>
                <meta name="description" content="Get in touch for training, projects, or collaborations." />
            </Head>
            <div className="pt-20">
                <Contact />
            </div>
        </>
    );
}
