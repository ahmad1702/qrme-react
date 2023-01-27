import { QrCodeIcon, SunIcon } from '@heroicons/react/24/solid';
import { Button, changeTheme, useTheme } from '@nextui-org/react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Step } from '../../pages/createcontact'

type Props = {
    step: Step;
    setStep: React.Dispatch<React.SetStateAction<Step>>;
    scrollPercentage: number;
}

const progressWidthClass = ['w-1/5', 'w-2/5', 'w-3/5', 'w-4/5']
const CreateContactNav = ({ step, setStep }: Props) => {
    const navigate = useNavigate();
    const { type, isDark } = useTheme();
    const toggleDarkMode = (e?: any) => {
        const nextTheme = isDark ? 'light' : 'dark';
        window.localStorage.setItem('data-theme', nextTheme); // you can use any storage
        changeTheme(nextTheme);
    }
    return (
        <nav className='h-[192px] md:h-[96px] py-5 md:py-3 w-full px-5 md:px-10 md:flex items-center justify-between relative'>
            <div className='h-1/2 md:h-full flex items-center justify-between md:justify-start'>
                <div
                    onClick={(e) => navigate('/')}
                    className="flex items-center hover:text-neutral-500 duration-300"
                >
                    <QrCodeIcon className='w-8 h-8 mr-1' />
                    <div
                        className='text-3xl font-extrabold tracking-tighter mr-32 cursor-pointer'
                    >
                        QRme
                    </div>
                </div>
                <Button
                    auto
                    icon={<SunIcon className='w-6 h-6' />}
                    onClick={toggleDarkMode}
                />
            </div>
            <div className='h-1/2 md:h-full w-full md:w-3/5 flex justify-around'>
                <div
                    onClick={(e) => setStep(1)}
                    className={`h-full w-1/3 flex flex-col md:flex-row items-center justify-center rounded-xl md:rounded-full md:border-none border-[1.5px] border-neutral-300 dark:border-neutral-800 cursor-pointer duration-300 mr-2 ${step === 1 ? 'hover:bg-blue-100/50 hover:dark:bg-blue-500/30' : 'hover:bg-neutral-300/50 hover:dark:bg-neutral-500/30'}`}
                >
                    <div className={`h-10 w-10 select-none rounded-full  text-white md:mr-3 flex items-center justify-center ${step === 1 ? 'bg-blue-500' : 'bg-neutral-300 dark:bg-neutral-700'}`}>
                        1
                    </div>
                    <div className={`text-sm select-none md:text-xl mt-1 md:mt-0 ${step === 1 ? 'text-blue-500' : 'text-neutral-500'}`}>
                        Contact
                    </div>
                </div>
                <div
                    onClick={(e) => setStep(2)}
                    className={`h-full w-1/3 flex flex-col md:flex-row items-center justify-center rounded-xl md:rounded-full md:border-none border-[1.5px] border-neutral-300 dark:border-neutral-800 cursor-pointer duration-300 mr-2 ${step === 2 ? 'hover:bg-blue-100/50 hover:dark:bg-blue-500/30' : 'hover:bg-neutral-300/50 hover:dark:bg-neutral-500/30'}`}
                >
                    <div className={`h-10 w-10 select-none rounded-full  text-white md:mr-3 flex items-center justify-center ${step === 2 ? 'bg-blue-500' : 'bg-neutral-300 dark:bg-neutral-700'}`}>
                        2
                    </div>
                    <div className={`text-sm select-none md:text-xl mt-1 md:mt-0 ${step === 2 ? 'text-blue-500' : 'text-neutral-500'}`}>
                        Social
                    </div>
                </div>
                <div
                    onClick={(e) => setStep(3)}
                    className={`h-full w-1/3 flex flex-col md:flex-row items-center justify-center rounded-xl md:rounded-full md:border-none border-[1.5px] border-neutral-300 dark:border-neutral-800 cursor-pointer duration-300 mr-2 ${step === 3 ? 'hover:bg-blue-100/50 hover:dark:bg-blue-500/30' : 'hover:bg-neutral-300/50 hover:dark:bg-neutral-500/30'}`}
                >
                    <div className={`h-10 w-10 select-none rounded-full  text-white md:mr-3 flex items-center justify-center ${step === 3 ? 'bg-blue-500' : 'bg-neutral-300 dark:bg-neutral-700'}`}>
                        3
                    </div>
                    <div className={`text-sm select-none md:text-xl mt-1 md:mt-0 ${step === 3 ? 'text-blue-500' : 'text-neutral-500'}`}>
                        Numbers
                    </div>
                </div>
                <div
                    onClick={(e) => setStep(4)}
                    className={`h-full w-1/3 flex flex-col md:flex-row items-center justify-center rounded-xl md:rounded-full md:border-none border-[1.5px] border-neutral-300 dark:border-neutral-800 cursor-pointer duration-300 ${step === 4 ? 'hover:bg-blue-100/50 hover:dark:bg-blue-500/30' : 'hover:bg-neutral-300/50 hover:dark:bg-neutral-500/30'}`}
                >
                    <div className={`h-10 w-10 select-none rounded-full  text-white md:mr-3 flex items-center justify-center ${step === 4 ? 'bg-blue-500' : 'bg-neutral-300 dark:bg-neutral-700'}`}>
                        4
                    </div>
                    <div className={`text-sm select-none md:text-xl mt-1 md:mt-0 ${step === 4 ? 'text-blue-500' : 'text-neutral-500'}`}>
                        Page Setup
                    </div>
                </div>
            </div>
            <div className={`absolute left-0 bottom-0 h-[3px] w-full flex`}>
                <div className={`h-full duration-700 ${progressWidthClass[step - 1]} bg-blue-500`}></div>
                <div className={`h-full duration-700 ${progressWidthClass[progressWidthClass.length - step]} bg-neutral-300 dark:bg-neutral-700`}></div>
            </div>
        </nav>
    )
}

export default CreateContactNav