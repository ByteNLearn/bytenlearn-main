import Head from 'next/head';
import Internships from '@/components/home/Internships';
import InternTestimonials from '@/components/home/InternTestimonials';

export default function InternshipsPage() {
    return (
        <>
            <Head>
                <title>Internship Programs | ByteNLearn</title>
                <meta name="description" content="Launch your career with hands-on internships in MERN Stack, Data Science, and more." />
            </Head>
            <div className="pt-20">
                <Internships />
                <InternTestimonials />
            </div>
        </>
    );
}
