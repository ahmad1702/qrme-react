import { Button } from '@nextui-org/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {}

const NotFound = (props: Props) => {
  const navigate = useNavigate();
  return (
    <section className="h-screen flex items-center justify-center p-16 dark:bg-neutral-900 dark:text-gray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
          <p className="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
          <Button
            flat
            size='lg'
            onClick={(e) => navigate('/')}
            css={{
              mx: 'auto'
            }}
          >
            Back to homepage
          </Button>
        </div>
      </div>
    </section>
  )
}

export default NotFound