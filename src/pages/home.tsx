import { Button } from '@nextui-org/react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import CustomNav from '../components/CustomNav';

const HERO_IMG = 'https://images.unsplash.com/photo-1576579254913-fcab479f7f33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80';
type Props = {}

const Home = (props: Props) => {
    const navigate = useNavigate();
    return (
        <>
            <CustomNav />
            <section>
                <div className="bg-blue-600">
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-50">
                            A One-Stop Shop Where Every Product is you
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-50">
                            Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!
                        </p>
                        <div className="flex flex-wrap justify-center">
                            <Button
                                onClick={(e) => navigate('/createcontact')}
                                size='lg'
                                type="button"
                                color='gradient'
                                className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-100 text-gray-900"
                            >
                                Get started
                            </Button>
                            <Button
                                bordered
                                size='lg'
                                type="button"
                                css={{
                                    color: 'white',
                                    borderColor: 'white',
                                }}
                                className="px-8 py-3 m-2 text-lg border rounded border-gray-300 text-gray-50"
                            >
                                Learn more
                            </Button>
                        </div>
                    </div>
                </div>
                <img src={HERO_IMG} alt="" className="h-96 object-cover w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500" />
            </section>
        </>
    );
}

export default Home