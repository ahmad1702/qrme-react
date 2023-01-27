import { Button, Input } from '@nextui-org/react';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import FormLayout from '../components/FormLayout'

type Props = {}

const Login = (props: Props) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errMsg, setErrMsg] = useState<string>('');
  return (
    <FormLayout>
      <div className='h-full w-full flex flex-col justify-center'>
        <div className='text-5xl font-extrabold mb-10'>QRME | <span className='font-light'>Login</span></div>
        {errMsg.length > 0 && (
          <div className='w-full p-5 bg-red-300 text-red-900 font-semibold rounded-3xl mb-10'>
            My Error message here
          </div>
        )}
        <div className='mb-14'>
          <Input
            bordered
            fullWidth
            size='xl'
            labelPlaceholder={'Username'}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='mb-8'>
          <Input
            bordered
            fullWidth
            size='xl'
            labelPlaceholder={'Password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='flex items-center justify-between'>
          <Button
            color='gradient'
            size='lg'
            css={{
              fontWeight: '$extrabold',
              w: '100%'
            }}
          >
            Login
          </Button>
          <div className='mx-5'>Or</div>
          <Button
            onClick={(e) => navigate('/signup')}
            color='default'
            size='lg'
            css={{
              fontWeight: '$extrabold',
              w: '100%',
              bg: 'white',
              color: 'black',
            }}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </FormLayout>
  )
}

export default Login