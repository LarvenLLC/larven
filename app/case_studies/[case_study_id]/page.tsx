import React, { Fragment } from 'react'
import Image from 'next/image'
import NavBar from '@/components/navbar'
import { getBlocks, getDatabase, getPage } from '@/components/notion'
import Head from 'next/head'
import Link from 'next/link'
import Text from '@/components/text'
import styles from "./index.module.css"
import { renderBlock } from '@/components/notion/renderer'

// Return a list of `params` to populate the [id] dynamic segment
export async function generateStaticParams() {
    const database = await getDatabase();
    return database?.map((page) => ({ id: page.id }));
}

async function getPost({ params }: { params: { case_study_id: string } }) {
    const { case_study_id } = params;
    const page = await getPage(case_study_id);
    const blocks = await getBlocks(case_study_id);

    return {
        page,
        blocks,
    };
}

async function Blog({ params }: { params: { case_study_id: string } }) {
    // let blog = blogs.find(blog => blog.id === Number(params.case_study_id))
    const { page, blocks } = await getPost({ params });

    return (
        <div>
            {/* TODO: use generate metadata function */}
            <Head>
                {/* @ts-ignore */}
                <title>{page.properties.Title?.title[0].plain_text}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBar page={1} hackathon={false} />

            <article className={styles.container}>
                <h1 className={styles.name}>
                    {/* @ts-ignore */}
                    <Text title={page.properties.Title?.title} />
                </h1>
                <section>
                    {/* @ts-ignore */}
                    {blocks.map((block) => (
                        <Fragment key={block.id}>{renderBlock(block)}</Fragment>
                    ))}
                    <Link href="/" className={styles.back}>
                        ← Go home
                    </Link>
                </section>
            </article>
        </div>
    );

}

export default Blog