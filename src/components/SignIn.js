import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers'

import StyledSignIn from '@styled/StyledSignIn'

import FormInput from '@components/FormInput'
import Button from '@components/Button'
import { SignInWithGoogle } from '../firebase/firebase.utils'
import { UserContext } from '@contexts/UserContext'

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  password: yup.string().required('Password is required'),
})

const SignIn = () => {
  const { user } = useContext(UserContext)

  const { register, handleSubmit, errors, reset, watch } = useForm({
    resolver: yupResolver(validationSchema),
  })
  const isEmailShrink = watch('email')?.length ? true : false
  const isPasswordShrink = watch('password')?.length ? true : false
  const onSubmit = data => {
    console.log(data)
    reset()
  }

  return (
    <StyledSignIn>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="email"
          name="email"
          label="Email"
          shrinked={isEmailShrink}
          ref={register}
        />
        {errors.email && <span>{errors.email.message}</span>}
        <FormInput
          type="password"
          name="password"
          label="Password"
          shrinked={isPasswordShrink}
          ref={register}
        />
        {errors.password && <span>{errors.password.message}</span>}
        <div className="buttons-group">
          <Button type="submit">Sign In</Button>
          <Button
            className={`${user.currentUser ? '' : 'google-sign-in'}`}
            type="button"
            onClick={SignInWithGoogle}
          >
            Sign In With Google
          </Button>
        </div>
      </form>
    </StyledSignIn>
  )
}

export default SignIn
