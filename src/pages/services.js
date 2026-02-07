import Head from 'next/head';
import Services from '@/components/home/Services';

export default function ServicesPage() {
    return (
        <>
            <Head>
                <title>Services | ByteNLearn</title>
                <meta name="description" content="Custom web development, corporate training, data science consulting, and more." />
            </Head>
            <div className="pt-20">
                <Services />
            </div>
        </>
    );
}
