import { ArrowRightIcon, MinusIcon, PlusIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { Button, FormElement, Input } from '@nextui-org/react';
import axios from 'axios';
import React from 'react';
import { ContactNumber, ContactObj } from '../../models/models';
import { StepProps } from '../../pages/createcontact';

const StepNumbers = ({
    contact,
    setContact,
    errMsg,
    setErrMsg,
    step,
    setStep
}: StepProps) => {

    const handleAddUrl = (e?: any) => {
        const adjustedNums: ContactNumber[] = contact.contactNumbers;
        adjustedNums.push({
            type: '',
            number: '',
        })
        setContact({ ...contact, contactNumbers: adjustedNums })
    }
    const handleMinusUrl = (inputContactNum: ContactNumber) => {
        setContact(currContact => {
            return { ...currContact, contactNumbers: currContact.contactNumbers.filter((currNum: ContactNumber) => currNum !== inputContactNum) }
        })
    }
    const handleTypeChange = (e: React.ChangeEvent<FormElement>, inputContactNum: ContactNumber, index: number) => {
        setContact(currContact => {
            const newContactNums: ContactNumber[] = currContact.contactNumbers.map((currContactNum: ContactNumber, i: number) => {
                if (i === index) {
                    return {
                        type: e.target.value,
                        number: currContactNum.number
                    }
                } else {
                    return currContactNum
                }
            })
            return {
                ...currContact,
                contactNumbers: newContactNums,
            }
        })
    }
    const handleNumberChange = (e: React.ChangeEvent<FormElement>, inputContactNum: ContactNumber, index: number) => {
        setContact(currContact => {
            const newContactNums: ContactNumber[] = currContact.contactNumbers.map((currContactNum: ContactNumber, i: number) => {
                if (i === index) {
                    return {
                        type: currContactNum.type,
                        number: e.target.value,
                    }
                } else {
                    return currContactNum
                }
            })
            return {
                ...currContact,
                contactNumbers: newContactNums,
            }
        })
    }
    return (
        <div className={`px-5 md:px-10 py-10 ${step !== 3 && 'hidden'}`}>
            <div className='text-4xl font-extrabold mb-10'>Contact Card Creation <span className='font-light'> | Contact Numbers</span></div>
            <div className='w-full md:flex pb-10 mb-10'>
                <div className='w-full md:w-4/12 md:pr-10'>
                    <div className='text-2xl font-extrabold'>Numbers</div>
                    <div className='text-md font-semibold text-neutral-500'>Contact Numbers that people can react you at, with various types that you can specify such as 'Cell', 'Fax', 'Work'</div>
                </div>
                <div className='w-full md:w-8/12'>

                    {errMsg && (
                        <div className='w-full p-5 bg-red-300 text-red-900 font-semibold rounded-3xl mb-10'>
                            My Error message here
                        </div>
                    )}
                    {contact.contactNumbers.map((number: ContactNumber, i: number) => (
                        <div key={i} className='mb-10 mt-8 flex items-center justify-between'>
                            <Input
                                bordered
                                fullWidth
                                size='lg'
                                labelPlaceholder={'Type (Ex: Cell, Fax, etc.)'}
                                value={number.type}
                                css={{
                                    width: '30%'
                                }}
                                onChange={(e) => handleTypeChange(e, number, i)}
                            />
                            <div className="w-5"></div>
                            <div className='w-[70%] flex'>
                                <Input
                                    bordered
                                    fullWidth
                                    size='lg'
                                    labelPlaceholder={'# Number'}
                                    value={number.number}
                                    css={{
                                        width: '100%'
                                    }}
                                    onChange={(e) => handleNumberChange(e, number, i)}
                                />
                                {
                                    i === contact.contactNumbers.length - 1 ? (
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
                                            onClick={(e) => handleMinusUrl(number)}
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
                    <div className='flex items-center justify-between flex-col'>
                        <Button
                            // onClick={(e) => console.log(contact)}
                            onClick={(e) => setStep(4)}
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

export default StepNumbers