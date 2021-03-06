import React, { forwardRef } from 'react'
import StyledFormInput from '@styled/StyledFormInput'

const FormInput = forwardRef((props, ref) => {
  const { label, name } = props
  const { shrinked, ...inputProps } = props
  return (
    <StyledFormInput>
      <input className="form-input" {...inputProps} ref={ref} />
      {label ? (
        <label
          className={`${shrinked ? 'shrink' : ''} form-input-label`}
          htmlFor={name}
        >
          {label}
        </label>
      ) : null}
    </StyledFormInput>
  )
})

export default FormInput
