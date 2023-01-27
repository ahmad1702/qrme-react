import React, { useEffect, useState } from 'react'

type Props = {
    children: React.ReactNode;
    link?: string;
}
const DEFAULT_IMG: string = 'https://images.unsplash.com/photo-1663208841736-f7da2ec6703c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1828&q=80'
const FormLayout = ({ children, link }: Props) => {
    const [matches, setMatches] = useState<boolean>(false);
    useEffect(() => {
        setMatches(window.innerWidth < 768)
    })
    const sides = [
        <div key={'form'} className='h-full w-1/2 p-20'>{children}</div>,
        <img key={'background'}className='h-full w-1/2' src={link || DEFAULT_IMG} />
    ]
    return (
        <div className={`h-screen overflow-hidden ${matches ? 'block' : 'flex'}`}>
            {matches ? sides.reverse().map((side: React.ReactNode, i: number) => side) : sides.map((side: React.ReactNode, i: number) => side)}
        </div >
    )
}

export default FormLayout