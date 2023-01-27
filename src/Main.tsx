import { getDocumentTheme, NextUIProvider } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { darkTheme, lightTheme } from './utils/theme';

type Props = {
    children: React.ReactNode;
}


const Main = ({ children }: Props) => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // you can use any storage
        let theme = window.localStorage.getItem('data-theme');
        setIsDark(theme === 'dark');

        const observer = new MutationObserver((mutation) => {
            let newTheme = getDocumentTheme(document?.documentElement);
            setIsDark(newTheme === 'dark');
        });

        // Observe the document theme changes
        observer.observe(document?.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme', 'style']
        });

        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        document.documentElement.classList.add()

        return () => observer.disconnect();
    }, [isDark]);

    return (
        <NextUIProvider theme={isDark ? darkTheme : lightTheme}>
            {children}
        </NextUIProvider>
    )
}

export default Main;