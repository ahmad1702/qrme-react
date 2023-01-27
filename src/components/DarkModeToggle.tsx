import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { Button, changeTheme, useTheme } from '@nextui-org/react';
import React from 'react'

type Props = {}

const DarkModeToggle = (props: Props) => {
    const { type, isDark } = useTheme();
    const toggleDarkMode = (e?: any) => {
        const nextTheme = isDark ? 'light' : 'dark';
        window.localStorage.setItem('data-theme', nextTheme); // you can use any storage
        changeTheme(nextTheme);
    }
    return (
        <Button
            auto
            css={{
                bg: '$blue200',
            }}
            icon={isDark ? <SunIcon className='w-6 h-6' /> : <MoonIcon className='w-6 h-6' />}
            iconLeftCss={{
                color: '$blue600'
            }}
            onClick={toggleDarkMode}
        />
    )
}

export default DarkModeToggle