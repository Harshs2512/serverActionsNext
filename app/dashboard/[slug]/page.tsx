import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchInvoiceById, fetchCustomers, fetchBlogsById } from '@/app/lib/data';
import { notFound } from 'next/navigation';


export default async function Page({ params }: { params: { slug: string } }) {
    const slug = params.slug;
    const data = await fetchBlogsById(slug);

    if (!data) {
        notFound();
    }
    return (
        <main>
            <div className="px-20">
                <div
                    dangerouslySetInnerHTML={{
                        __html: ('<h1>sdfghjkl;</h1>'),
                    }}
                ></div>
            </div>
        </main>
    );
}