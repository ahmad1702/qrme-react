import { Button, Input } from '@nextui-org/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormLayout from '../components/FormLayout'

type Props = {}
export type Register = {
  username: string;
  email: string;
  password: string;
  confirmation: string;
}
const SignUp = (props: Props) => {
  const navigate = useNavigate();
  const [register, setRegister] = useState<Register>({
    username: '',
    email: '',
    password: '',
    confirmation: '',
  });
  const [errMsg, setErrMsg] = useState<string>('');

  return (
    <FormLayout>
      <div className='h-full w-full flex flex-col justify-center'>
        <div className='text-5xl font-extrabold mb-10'>QRME | <span className='font-light'>Sign Up</span></div>
        {errMsg.length > 0 && (
          <div className='w-full p-5 bg-red-300 text-red-900 font-semibold rounded-3xl mb-10'>
            My Error message here
          </div>
        )}
        <div className='mb-10'>
          <Input
            bordered
            fullWidth
            size='lg'
            labelPlaceholder={'Username'}
            value={register.username}
            onChange={(e) => setRegister({ ...register, username: e.target.value })}
          />
        </div>
        <div className='mb-10'>
          <Input
            bordered
            fullWidth
            size='lg'
            labelPlaceholder={'Email'}
            value={register.email}
            onChange={(e) => setRegister({ ...register, email: e.target.value })}
          />
        </div>
        <div className='mb-10'>
          <Input
            bordered
            fullWidth
            size='lg'
            labelPlaceholder={'Password'}
            value={register.password}
            onChange={(e) => setRegister({ ...register, password: e.target.value })}
          />
        </div>
        <div className='mb-8'>
          <Input
            bordered
            fullWidth
            size='lg'
            labelPlaceholder={'Confirm Password'}
            value={register.password}
            onChange={(e) => setRegister({ ...register, confirmation: e.target.value })}
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
            Sign Up
          </Button>
          <div className='mx-5'>Or</div>
          <Button
            onClick={(e) => navigate('/login')}
            color='default'
            size='lg'
            css={{
              fontWeight: '$extrabold',
              w: '100%',
              bg: 'white',
              color: 'black',
            }}
          >
            Login
          </Button>
        </div>
      </div>
    </FormLayout>
  )
}

export default SignUp