import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { Button, Input, Textarea } from '@nextui-org/react';
import { StepProps } from '../../pages/createcontact';

const StepContact = ({
    contact,
    setContact,
    errMsg,
    setErrMsg,
    step,
    setStep
}: StepProps) => {
    return (
        <div className={`px-5 md:px-10 py-10 ${step !== 1 && 'hidden'}`}>
            <div className='text-4xl font-extrabold mb-10'>Contact Card Creation <span className='font-light'> | Contact</span></div>
            <div className='w-full md:flex pb-10 mb-10 border-b-2 border-neutral-300 dark:border-neutral-700/50'>
                <div className='w-full md:w-4/12'>
                    <div className='text-2xl font-extrabold'>Personal info</div>
                    <div className='text-md font-semibold text-neutral-500'>Basic Personal Contact Information</div>
                </div>
                <div className='w-full md:w-8/12'>

                    {errMsg && (
                        <div className='w-full p-5 bg-red-300 text-red-900 font-semibold rounded-3xl mb-10'>
                            My Error message here
                        </div>
                    )}
                    <div className='mb-10 mt-8'>
                        <Input
                            bordered
                            fullWidth
                            size='lg'
                            labelPlaceholder={'First Name *'}
                            value={contact.contact.firstName}
                            onChange={(e) => setContact({ ...contact, contact: { ...contact.contact, firstName: e.target.value } })}
                        />
                    </div>
                    <div className='mb-10'>
                        <Input
                            bordered
                            fullWidth
                            size='lg'
                            labelPlaceholder={'Middle Name'}
                            value={contact.contact.middleName}
                            onChange={(e) => setContact({ ...contact, contact: { ...contact.contact, middleName: e.target.value } })}
                        />
                    </div>
                    <div className=''>
                        <Input
                            bordered
                            fullWidth
                            size='lg'
                            labelPlaceholder={'Last Name'}
                            value={contact.contact.lastName}
                            onChange={(e) => setContact({ ...contact, contact: { ...contact.contact, lastName: e.target.value } })}
                        />
                    </div>
                </div>
            </div>
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
                    <div className='mb-10 mt-8'>
                        <Input
                            bordered
                            fullWidth
                            size='lg'
                            labelPlaceholder={'Job Title'}
                            value={contact.contact.jobTitle}
                            onChange={(e) => setContact({ ...contact, contact: { ...contact.contact, jobTitle: e.target.value } })}
                        />
                    </div>
                    <div className='mb-10'>
                        <Input
                            bordered
                            fullWidth
                            size='lg'
                            labelPlaceholder={'Email'}
                            value={contact.contact.email}
                            onChange={(e) => setContact({ ...contact, contact: { ...contact.contact, email: e.target.value } })}
                        />
                    </div>
                    <div className='mb-10'>
                        <Textarea
                            bordered
                            fullWidth
                            size='lg'
                            labelPlaceholder={'Description'}
                            value={contact.contact.description}
                            onChange={(e) => setContact({ ...contact, contact: { ...contact.contact, description: e.target.value } })}
                        />
                    </div>
                    <div className='flex items-center justify-between flex-col'>
                        <Button
                            // onClick={(e) => console.log(contact)}
                            onClick={(e) => setStep(2)}
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
        </div>
    )
}

export default StepContact