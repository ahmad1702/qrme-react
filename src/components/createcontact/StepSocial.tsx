import React from 'react'
import { Button, FormElement, Input, Textarea } from '@nextui-org/react';
import { StepProps } from '../../pages/createcontact'
import { ArrowRightIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/solid';
import { SocialUrl } from '../../models/models';

const StepSocial = ({
    contact,
    setContact,
    errMsg,
    setErrMsg,
    step,
    setStep
}: StepProps) => {

    const handleAddUrl = (e?: any) => {
        const adjustedSocials: SocialUrl[] = contact.socials
        adjustedSocials.push({
            platform: '',
            url: '',
        })
        setContact({ ...contact, socials: adjustedSocials })
    }
    const handleMinusUrl = (inputSocial: SocialUrl) => {
        setContact(currContact => {
            return { ...currContact, socials: currContact.socials.filter((currSocial: SocialUrl) => currSocial !== inputSocial) }
        })
    }
    const handlePlatformChange = (e: React.ChangeEvent<FormElement>, inputSocial: SocialUrl, index: number) => {
        setContact(currContact => {
            const newSocials: SocialUrl[] = currContact.socials.map((currSocial: SocialUrl, i: number) => {
                if (i === index) {
                    return {
                        platform: e.target.value,
                        url: currSocial.url
                    }
                } else {
                    return currSocial
                }
            })
            return {
                ...currContact,
                socials: newSocials,
            }
        })
    }
    const handleUrlChange = (e: React.ChangeEvent<FormElement>, inputSocial: SocialUrl, index: number) => {
        setContact(currContact => {
            const newSocials: SocialUrl[] = currContact.socials.map((currSocial: SocialUrl, i: number) => {
                if (i === index) {
                    return {
                        platform: currSocial.platform,
                        url: e.target.value,
                    }
                } else {
                    return currSocial
                }
            })
            return {
                ...currContact,
                socials: newSocials,
            }
        })
    }
    return (
        <div className={`px-5 md:px-10 py-10 ${step !== 2 && 'hidden'}`}>
            <div className='text-4xl font-extrabold mb-10'>Contact Card Creation <span className='font-light'> | Social</span></div>
            <div className='w-full md:flex pb-10 mb-10'>
                <div className='w-full md:w-4/12'>
                    <div className='text-2xl font-extrabold'>Social URLs</div>
                    <div className='text-md font-semibold text-neutral-500'>Basic Personal Contact Information</div>
                </div>
                <div className='w-full md:w-8/12'>

                    {errMsg && (
                        <div className='w-full p-5 bg-red-300 text-red-900 font-semibold rounded-3xl mb-10'>
                            My Error message here
                        </div>
                    )}
                    {contact.socials.map((social: SocialUrl, i: number) => (
                        <div key={i} className='mb-10 mt-8 md:flex items-center justify-between'>
                            <Input
                                bordered
                                fullWidth
                                size='lg'
                                labelPlaceholder={'Platform'}
                                value={social.platform}
                                css={{
                                    width: '100%',
                                    mb: '1rem',
                                    '@sm': {
                                        width: '20%',
                                        mb: '0rem'
                                    }
                                }}
                                onChange={(e) => handlePlatformChange(e, social, i)}
                            />
                            <div className="w-5"></div>
                            <div className='md:w-[80%] flex'>
                                <Input
                                    bordered
                                    fullWidth
                                    size='lg'
                                    labelPlaceholder={'URL'}
                                    value={social.url}
                                    css={{
                                        width: '100%'
                                    }}
                                    onChange={(e) => handleUrlChange(e, social, i)}
                                />
                                {
                                    i === contact.socials.length - 1 ? (
                                        <Button
                                            auto
                                            onClick={handleAddUrl}
                                            css={{
                                                ml: '1rem',
                                                px: '10px'
                                            }}
                                        >
                                            <PlusIcon className='w-6 h-6' />
                                        </Button>
                                    ) : (
                                        <Button
                                            auto
                                            color={'error'}
                                            onClick={(e) => handleMinusUrl(social)}
                                            css={{
                                                ml: '1rem',
                                                px: '10px'
                                            }}
                                        >
                                            <MinusIcon className='w-6 h-6' />
                                        </Button>
                                    )
                                }
                            </div>
                        </div>
                    ))}
                    <div className=''>
                        <Button
                            // onClick={(e) => console.log(contact)}
                            onClick={(e) => setStep(3)}
                            size='lg'
                            css={{
                                fontWeight: '$extrabold',
                                w: '100%'
                            }}
                            iconRight={<ArrowRightIcon className='h-6 w-6' />}
                        >
                            Next
                        </Button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default StepSocial