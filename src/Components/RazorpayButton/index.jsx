/** @format */

import React, { useEffect } from "react";

const RazorpayButton = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.setAttribute("data-payment_button_id", ""); 
    script.async = true;

    const form = document.getElementById("razorpay-form");
    form.appendChild(script);

    return () => {
      if (form) {
        form.innerHTML = "";
      }
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Make a Payment</h1>
      <form id='razorpay-form'>{/* Razorpay button will load here */}</form>
    </div>
  );
};

export default RazorpayButton;

