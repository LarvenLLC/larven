import React from 'react'
import Image from 'next/image'

import NavBar from '@/components/navbar'
import { blogs } from '../page'

function Blog({ params }: { params: { case_study_id: string } }) {
    let blog = blogs.find(blog => blog.id === Number(params.case_study_id))

    return (
        <>
            <NavBar page={1} hackathon={false} />
            <section>
                {
                    blog && <>
                        <div className='w-2/4 mx-auto my-10'>
                            <h2 className='font-bold text-4xl mb-4'>{blog.title}</h2>
                            <h4 className='text-neutral-500 font-semibold'>{blog.date}</h4>
                        </div>
                        <div className='mx-10 h-96'>
                            <Image
                                src={blog.image}
                                alt={blog.title || "blog image"}
                                width={0}
                                height={0}
                                sizes='100vw'
                                className='w-full h-full object-cover'
                            />
                        </div>
                        <p className='w-3/4 mx-auto my-20 whitespace-pre-line'>
                            {blog.content}
                        </p>
                    </>
                }

            </section>
        </>
    )
}

export default Blog