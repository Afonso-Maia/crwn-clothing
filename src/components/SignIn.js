import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'

import StyledSignIn from '@styled/StyledSignIn'

import FormInput from '@components/FormInput'
import Button from '@components/Button'
import { SignInWithGoogle } from '../firebase/firebase.utils'
import { UserContext } from '@contexts/UserContext'

const SignIn = () => {
  const { user } = useContext(UserContext)

  const { register, handleSubmit, errors, reset, watch } = useForm()
  const isEmailShrink = watch('email')?.length ? true : false
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
          ref={register({ required: true })}
        />
        {errors.email && <span>This field is required</span>}
        <FormInput
          type="password"
          name="password"
          label="Password"
          ref={register({ required: true })}
        />
        {errors.password && <span>This field is required</span>}
        <div className="buttons-group">
          <Button type="submit">Sign In</Button>
          <Button
            className={`${user ? '' : 'google-sign-in'}`}
            onClick={e => {
              e.preventDefault()
              SignInWithGoogle()
            }}
          >
            Sign In With Google
          </Button>
        </div>
      </form>
    </StyledSignIn>
  )
}

export default SignIn
