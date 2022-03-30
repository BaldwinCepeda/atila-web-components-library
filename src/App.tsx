import React from 'react';
import './App.css';
import CryptoPaymentForm, { TransactionResponsePayment } from './components/CryptoPaymentForm/CryptoPaymentForm';
import { ConfigurableCryptoPaymentForm } from './components/CryptoPaymentForm/CryptoPaymentForm.compositions';


function App() {

  const onPaymentComplete = (transaction: TransactionResponsePayment ) => { 
    console.log(transaction);
  }
  return (
    <div className="App container py-5">
      <h1>KLEVEL HEY josh is baldwin lol</h1>
    
    <hr/>
    <ConfigurableCryptoPaymentForm />
    <hr />
    <CryptoPaymentForm amount={0.01} 
      isEditableAmount={true} 
      isEditableDestinationAddress={true} 
      onSuccess={onPaymentComplete} />
    </div>
  );
}

export default App;
