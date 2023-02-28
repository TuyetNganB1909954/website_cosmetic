
// import StripeCheckout from 'react-stripe-checkout';
// import React, {useContext, useEffect, useState} from "react";
// import {GlobalState} from '../../../GlobalState'



 
// export default class PaypalButton extends React.Component {

    
//   onToken = (token) => {
//     fetch('/save-stripe-token', {
//       method: 'POST',
//       body: JSON.stringify(token),
//     }).then(response => {
//       response.json().then(data => {
//         alert(`We are in business, ${data.email}`);
//       });
//     });
//   }
 
//   // ...
 
//   render() {
//     return (
//       // ...
//       <StripeCheckout
//         token={this.onToken}
//         stripeKey="my_PUBLISHABLE_stripekey"
       
//       />
//     )
//   }
// }