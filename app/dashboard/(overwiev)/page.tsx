import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { fetchCardData } from '@/app/lib/data';
import { Suspense } from 'react';
import { LatestInvoicesSkeleton, RevenueChartSkeleton, CardsSkeleton, BlogsSkeleton } from '@/app/ui/skeletons';
import CardWrapper from '@/app/ui/dashboard/cards';
import BlogCards from '@/app/ui/dashboard/blog-card';
import { fetchBlogs } from '@/app/lib/data';

export default async function Page() {
    const blogs = await fetchBlogs();

    return (
        <section>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Blogs
            </h1>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3">
                {blogs?.map((item, index) =>
                    <Suspense key={index} fallback={<BlogsSkeleton />}>
                        <BlogCards items={item} />
                    </Suspense>
                    // nbv
                )}
            </div>
        </section>
    );
}