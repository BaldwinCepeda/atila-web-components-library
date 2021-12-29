import React from 'react';
import CryptoPaymentForm from './CryptoPaymentForm';
import 'bootstrap/dist/css/bootstrap.css';
import 'antd/dist/antd.css';

export const BasicCryptoPaymentForm = () => (
    <CryptoPaymentForm amount={0.01} />
);