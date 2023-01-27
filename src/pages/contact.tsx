import { Button, Loading } from '@nextui-org/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ContactObj } from '../models/models';
import { convertEasyContactToTSContact } from '../utils/utils';
import { get } from 'lodash-es'
import { EnvelopeIcon } from '@heroicons/react/24/solid';
type Props = {}

const API_URL = process.env.REACT_APP_API_URL;

const Contact = (props: Props) => {
    const navigate = useNavigate()
    let { path } = useParams();

    type ContentType = 'images' | 'videos'
    const [contentType, setContentType] = useState('images')

    const [con, setCon] = useState<ContactObj | null>(null);

    useEffect(() => {
        const callContactByPageName = async () => {

            // const res = await axios.get(`${API_URL}/api/contact/${path}`);
            try {
                const res = await axios.get(`${API_URL}/api/contacts/${path}`);
                console.log('res:', res.data)

                if (res.status === 200) {
                    setCon(convertEasyContactToTSContact(res.data))
                } else if (res.status === 404) {
                    navigate('/contact-not-found')
                }
            } catch (error) {
                console.log(error)
                navigate('/contact-not-found')
            }
        }
        callContactByPageName();
    }, [])
    useEffect(() => console.log(con), [con])
    return (
        <div className='text-white'>
            <div>
                <div className='h-[30rem] relative'>
                    <div className='absolute top-0 left-0 h-[calc(100%+2px)] w-full bg-gradient-to-b from-transparent to-neutral-900'></div>
                    <img className='h-full w-full' src='https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' />
                </div>
                <div className='bg-neutral-900 h-full'></div>
            </div>
            {con ? (
                <div className='absolute top-0 left-0 w-full'>
                    <div className='w-full h-full'>
                        <div className='w-full flex items-center justify-center py-20'>
                            <div className='h-full w-[80vw]'>
                                <img className='rounded-full h-32 w-32 md:h-52 md:w-52 mb-2 md:mb-5 object-cover border-2 border-white mx-auto' src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="" />
                                <div className="w-full flex flex-col items-center mb-3 md:mb-6">
                                    <div className="inline-block text-2xl font-extrabold md:text-5xl">{con.contact.firstName + ' ' + (con.contact.middleName && con.contact.middleName !== 'null' ? con.contact.middleName + ' ' : '') + (con.contact.lastName || '')}</div>
                                    <div className="text-xs font-light md:text-lg ">{con.contact.description}</div>
                                </div>
                                <div className="flex mb-3 md:mb-6 w-full items-center justify-center">
                                    {
                                        con.contact.email && (
                                            <Button
                                                auto
                                                rounded
                                                size='lg'
                                                color='gradient'
                                                className='mr-3 font-light'
                                                css={{
                                                    '@md': {
                                                        px: '5rem'
                                                    }
                                                }}
                                                onClick={(e) => window.open("mailto:" + con.contact.email, '_blank')}
                                                icon={<EnvelopeIcon className='w-6 h-6' />}
                                            >
                                                <div className='font-extrabold'>Contact</div>
                                            </Button>
                                        )
                                    }
                                    <Button
                                        auto
                                        rounded
                                        size='lg'
                                        css={{
                                            bg: 'rgb(82, 82, 82)',
                                            '@md': {
                                                px: '5rem'
                                            }
                                        }}
                                    >
                                        <div className='font-extrabold'>Message</div>
                                    </Button>
                                </div>
                                <div className='h-20 md:h-32 w-full bg-neutral-600 rounded-2xl flex mb-3 md:mb-6'>
                                    <div className='w-1/3 h-full flex items-center justify-center flex-col'>
                                        <div className='font-extrabold text-2xl md:text-5xl h-7 md:h-12'>100</div>
                                        <div className='text-sm md:text-lg'>Posts</div>
                                    </div>
                                    <div className='w-1/3 h-full flex items-center justify-center flex-col'>
                                        <div className='font-extrabold text-2xl md:text-5xl h-7 md:h-12'>125k</div>
                                        <div className='text-sm md:text-lg'>Followers</div>
                                    </div>
                                    <div className='w-1/3 h-full flex items-center justify-center flex-col'>
                                        <div className='font-extrabold text-2xl md:text-5xl h-7 md:h-12'>25</div>
                                        <div className='text-sm md:text-lg'>Following</div>
                                    </div>
                                </div>
                                <div className='h-16 w-full bg-neutral-800 mb-3 border-4 border-neutral-800 rounded-full flex relative overflow-hidden'>
                                    <div className="w-full h-full z-20 flex">
                                        <div
                                            onClick={(e) => setContentType('images')}
                                            className='w-1/2 h-full flex items-center justify-center flex-col  cursor-pointer duration-300 rounded-full'
                                        >
                                            <div className='font-semibold  select-none'>Bio</div>
                                        </div>
                                        <div
                                            onClick={(e) => setContentType('videos')}
                                            className='w-1/2 h-full flex items-center justify-center flex-col  cursor-pointer duration-300 rounded-full'
                                        >
                                            <div className='font-semibold  select-none'>Images</div>
                                        </div>
                                    </div>
                                    <div className={`w-1/2 h-full rounded-full bg-blue-500 absolute top-0 duration-300 ${contentType === 'images' ? 'left-0' : 'left-[50%]'}`}></div>
                                </div>
                                {Object.keys(con.contact).map((key: string, i: number) => {
                                    if (get(con, `contact.${key}`) && get(con, `contact.${key}`) !== 'null' && key !== 'id') {
                                        return (
                                            <div className='w-full h-16 bg-neutral-800 rounded-full mb-3 px-5 flex items-center'>
                                                <span className='font-extrabold'>{key}</span>{': ' + get(con, `contact.${key}`)}
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='h-screen flex items-center justify-center'>
                    <Loading />
                </div>
            )}
        </div>
    )
}

export default Contact