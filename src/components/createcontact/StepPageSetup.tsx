import { ArrowLeftIcon, ArrowPathIcon, ArrowRightIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { Button, Input, Textarea } from '@nextui-org/react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ContactObj, SOCIAL_MEDIAS } from '../../models/models';
import { StepProps } from '../../pages/createcontact';

const API_URL: string | undefined = process.env.REACT_APP_API_URL;
const StepPageSetup = ({
    contact,
    setContact,
    errMsg,
    setErrMsg,
    step,
    setStep
}: StepProps) => {

    const handleSubmit = async (contact: ContactObj) => {
        if (!API_URL) {
            console.log('Server endpoint not found')
        } else {
            const res = await axios.post(`${API_URL}/api/contacts`, contact)
            if (res.status === 200) {
                console.log(res.data)
            } else {
                console.error(res)
            }
        }
    }
    const getSrcIfExists = (pageName: string): string => {
        let path: string = SOCIAL_MEDIAS[0].path;
        for (const socialMedia of SOCIAL_MEDIAS) {
            if (pageName.includes(socialMedia.name.toLowerCase())) {
                path = socialMedia.path
            }
        }
        return path
    }
    return (
        <div className={`px-5 md:px-10 py-10 ${step !== 4 && 'hidden'}`}>

            <div className='text-4xl font-extrabold mb-10'>Contact Card Creation <span className='font-light'> | Contact</span></div>
            <div className='w-full pb-10 mb-10 border-b-2 border-neutral-300 dark:border-neutral-700/50'>
                <div className='w-full'>
                    <div className='text-2xl font-extrabold'>Page Name</div>
                    <div className='text-md font-semibold text-neutral-500'>
                        A page name which is a unique name that will exist at the end of your contact link.
                        If your page name is 'scoobydoobydoo' then people can reach you at "
                        <span className='underline'>{window.location.origin}</span>
                        <span className='text-blue-500 underline'>{'/scoobydoobydoo'}</span>
                        ".
                    </div>
                </div>
                <div className='w-full'>

                    {errMsg && (
                        <div className='w-full p-5 bg-red-300 text-red-900 font-semibold rounded-3xl mb-10'>
                            My Error message here
                        </div>
                    )}
                    <div className='mt-4'>
                        <Input
                            bordered
                            fullWidth
                            size='lg'
                            placeholder='Page Name*'
                            aria-label='pageName'
                            value={contact.contact.pageName}
                            onChange={(e) => setContact({ ...contact, contact: { ...contact.contact, pageName: e.target.value } })}
                        />
                    </div>
                </div>
            </div>
            <motion.div
                initial={{
                    y: 2
                }}
                animate={{
                    y: 0
                }}
                className='w-full md:flex pb-10 mb-10 border-b-2 border-neutral-300 dark:border-neutral-700/50'
            >
                <div className="h-[30rem] w-full shadow-lg border-2 border-neutral-700 dark:border-neutral-700 rounded-xl overflow-hidden">
                    <div className="h-20 md:h-14 w-full bg-neutral-700 flex flex-col md:flex-row justify-between items-center px-5 py-2">
                        <div className='h-1/2 md:h-full flex items-center w-full md:w-auto justify-between md:justify-start'>
                            <div className='flex mr-3'>
                                <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                                <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                                <div className="h-3 w-3 rounded-full bg-green-500 "></div>
                            </div>
                            <div className='flex'>
                                <ArrowLeftIcon className='h-6 w-6 fill-white mr-3' />
                                <ArrowRightIcon className='h-6 w-6 fill-white mr-3' />
                                <ArrowPathIcon className='h-6 w-6 fill-white mr-3' />
                            </div>
                        </div>
                        <div className='h-1/2 md:h-full w-full bg-neutral-500 text-white font-semibold rounded-full flex items-center px-5'>
                            <img className='h-6 w-6 mr-3' src={getSrcIfExists(contact.contact.pageName)} alt="" />
                            <div className="my-auto">{window.location.origin + '/' + contact.contact.pageName || 'http://your.link.here'}</div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </motion.div>
            <div className='w-full md:flex pb-10'>
                <div className='w-full md:w-4/12'>
                    <div className='text-2xl font-extrabold'>Contact Info</div>
                    <div className='text-md font-semibold text-neutral-500'>How People Can Reach You</div>
                </div>
                <div className='w-full md:w-8/12'>

                    {errMsg && (
                        <div className='w-full p-5 bg-red-300 text-red-900 font-semibold rounded-3xl mb-10'>
                            My Error message here
                        </div>
                    )}
                    <div className=''>
                        <Button
                            // onClick={(e) => console.log(contact)}
                            onClick={(e) => handleSubmit(contact)}
                            color='gradient'
                            size='lg'
                            css={{
                                fontWeight: '$extrabold',
                                w: '100%'
                            }}
                            icon={<UserCircleIcon className='h-6 w-6' />}
                        >
                            Create Contact
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default StepPageSetup