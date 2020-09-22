import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey =
    'pk_test_51HUA4iLV3Nv9G9XhrGz2H7T34Q0cf27yWjSwHz04DCBUCjL95MeIfT63oFQfnGl3O6OvUJu0F6CYARTamBWAqOPI00ZuBD5qKu'

  const onToken = token => {
    console.log(token)
    alert('Payment successfull')
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAdress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
