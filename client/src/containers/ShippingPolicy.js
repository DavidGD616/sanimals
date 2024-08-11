import React from "react";

function ShippingPolicy() {
    return (
      <div className="p-6 max-w-3xl mx-auto">
        <h2 className="text-center text-2xl md:text-4xl font-bold mb-12">Shipping Policy</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Processing Time</h3>
          <p className="text-gray-700">All orders are processed within 1 business day. Orders are not processed or shipped on weekends or holidays.</p>
        </div>
  
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Domestic Shipping</h3>
          <p className="text-gray-700">We offer free standard shipping for all orders within the country. The estimated delivery time is 2-5 business days once shipped.</p>
        </div>
  
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">International Shipping</h3>
          <p className="text-gray-700">We currently do not offer international shipping. We apologize for any inconvenience this may cause.</p>
        </div>
  
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Shipping Tracking</h3>
          <p className="text-gray-700">Once your order has been shipped, you will receive a confirmation email with the tracking number. You can use this number to track the status of your order online.</p>
        </div>
  
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Shipping Address</h3>
          <p className="text-gray-700">Please ensure you provide an accurate and complete shipping address. We are not responsible for orders shipped to incorrect addresses provided by the customer.</p>
        </div>
  
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Package Receipt</h3>
          <p className="text-gray-700">It is the customer's responsibility to be available to receive and sign for the package at the time of delivery. If the customer is unavailable, a notice will be left to pick up the package at the nearest post office.</p>
        </div>
  
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Lost or Damaged Shipments</h3>
          <p className="text-gray-700">If your order is lost in transit or arrives damaged, contact us immediately at [contact email] so we can resolve the issue.</p>
        </div>
  
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Changes to the Shipping Policy</h3>
          <p className="text-gray-700">We reserve the right to modify this shipping policy at any time. You will be notified of significant changes to our shipping policy via email.</p>
        </div>
  
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Questions and Contact</h3>
          <p className="text-gray-700">If you have any questions about our shipping policy, contact us by email.</p>
        </div>
      </div>
    );
  }
  
  export { ShippingPolicy }