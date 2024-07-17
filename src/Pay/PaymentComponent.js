import React, { useEffect } from 'react';
import 'https://checkout.razorpay.com/v1/checkout.js';

const PaymentComponent = () => {
  let rzp1;

  const paymentHandler = () => {
    if (rzp1) {
      rzp1.open();
    }
  };

  useEffect(() => {
    const options = {
      key: 'rzp_test_NfO316MIhBBNhz',
      amount: '500',
      currency: 'INR',
      name: 'NIT_market',
      description: 'Test Transaction',
      image: 'https://example.com/your_logo',
      order_id: 'order_NyCThDwZaOZ8zH',
      handler: (response) => {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: 'Gaurav Kumar',
        email: 'gaurav.kumar@example.com',
        contact: '9000090000',
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#3399cc',
      },
    };

    rzp1 = new window.Razorpay(options);

    rzp1.on('payment.failed', (response) => {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });

    return () => {
      // rzp1.removeAllEventListeners();
    };
  }, [paymentHandler]);

  return (
    <button className="rzp-button1" onClick={paymentHandler}>
      Pay
    </button>
  );
};

export default PaymentComponent;