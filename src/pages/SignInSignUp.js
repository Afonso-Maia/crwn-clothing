import React from 'react'

import SignIn from '@components/SignIn'
import SignUp from '@components/SignUp'

import StyledSignInSignUp from '@styled/StyledSignInSignUp'

const SignInSignUp = () => {
  return (
    <StyledSignInSignUp>
      <SignIn />
      <SignUp />
    </StyledSignInSignUp>
  )
}

export default SignInSignUp
