import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers'

import { auth, createUserProfileDocument } from '../firebase/firebase.utils'

import FormInput from '@components/FormInput'
import Button from '@components/Button'

import StyledSignUp from '@styled/StyledSignUp'

const validationSchema = yup.object({
  displayName: yup
    .string()
    .min(3, 'Must be at least 3 letters')
    .required('Name is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'must be at least 8 characters long')
    .required('Passord is required'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
})

const SignUp = () => {
  const { register, handleSubmit, errors, reset, watch } = useForm({
    resolver: yupResolver(validationSchema),
  })

  const isDisplayNameShrink = watch('displayName')?.length ? true : false
  const isEmailShrink = watch('email')?.length ? true : false
  const isPasswordShrink = watch('password')?.length ? true : false
  const isPasswordConfirmShrink = watch('passwordConfirm')?.length
    ? true
    : false

  const onSubmit = async data => {
    if (errors.length) return
    const { displayName, email, password } = data

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      )
      await createUserProfileDocument(user, { displayName })
      reset()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <StyledSignUp>
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="text"
          name="displayName"
          label="Display Name"
          shrinked={isDisplayNameShrink}
          ref={register}
        />
        {errors.displayName && <div>{errors.displayName.message}</div>}
        <FormInput
          type="email"
          name="email"
          label="Email"
          shrinked={isEmailShrink}
          ref={register}
        />
        {errors.email && <div>{errors.email.message}</div>}
        <FormInput
          type="password"
          name="password"
          label="Password"
          shrinked={isPasswordShrink}
          ref={register}
        />
        {errors.password && <div>{errors.password.message}</div>}
        <FormInput
          type="password"
          name="passwordConfirm"
          label="Password Confirmation"
          shrinked={isPasswordConfirmShrink}
          ref={register}
        />
        {errors.passwordConfirm && <div>{errors.passwordConfirm.message}</div>}
        <Button type="submit">Sign Up</Button>
      </form>
    </StyledSignUp>
  )
}

export default SignUp
