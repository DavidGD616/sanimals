import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Refund Policy</h1>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Returns</h2>
        <p className="mt-2">Our policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately, we can’t offer you a refund or exchange.</p>
        <p className="mt-2">To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.</p>
        <p className="mt-2">Several types of goods are exempt from being returned. Perishable goods such as food, flowers, newspapers, or magazines cannot be returned. We also do not accept products that are intimate or sanitary goods, hazardous materials, or flammable liquids or gases.</p>
        <p className="mt-2">Additional non-returnable items:</p>
        <ul className="list-disc ml-6 mt-2">
          <li>Gift cards</li>
          <li>Downloadable software products</li>
          <li>Some health and personal care items</li>
        </ul>
        <p className="mt-2">To complete your return, we require a receipt or proof of purchase.</p>
        <p className="mt-2">Please do not send your purchase back to the manufacturer.</p>
        <p className="mt-2">There are certain situations where only partial refunds are granted (if applicable):</p>
        <ul className="list-disc ml-6 mt-2">
          <li>Book with obvious signs of use</li>
          <li>CD, DVD, VHS tape, software, video game, cassette tape, or vinyl record that has been opened</li>
          <li>Any item not in its original condition, is damaged or missing parts for reasons not due to our error</li>
          <li>Any item that is returned more than 30 days after delivery</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Refunds (if applicable)</h2>
        <p className="mt-2">Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.</p>
        <p className="mt-2">If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Late or missing refunds (if applicable)</h2>
        <p className="mt-2">If you haven’t received a refund yet, first check your bank account again.</p>
        <p className="mt-2">Then contact your credit card company, it may take some time before your refund is officially posted.</p>
        <p className="mt-2">Next contact your bank. There is often some processing time before a refund is posted.</p>
        <p className="mt-2">If you’ve done all of this and you still have not received your refund yet, please contact us at davidguerrerodiaz12@gmail.com.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Sale items (if applicable)</h2>
        <p className="mt-2">Only regular priced items may be refunded, unfortunately sale items cannot be refunded.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Exchanges (if applicable)</h2>
        <p className="mt-2">We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at davidguerrerodiaz12@gmail.com and send your item to: 1512 Laurel Street, 92058 Oceanside, California, United States.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Gifts</h2>
        <p className="mt-2">If the item was marked as a gift when purchased and shipped directly to you, you’ll receive a gift credit for the value of your return. Once the returned item is received, a gift certificate will be mailed to you.</p>
        <p className="mt-2">If the item wasn’t marked as a gift when purchased, or the gift giver had the order shipped to themselves to give to you later, we will send a refund to the gift giver and he will find out about your return.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Shipping</h2>
        <p className="mt-2">To return your product, you should mail your product to: 1512 Laurel Street, 92058 Oceanside, California, United States.</p>
        <p className="mt-2">You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.</p>
        <p className="mt-2">Depending on where you live, the time it may take for your exchanged product to reach you, may vary.</p>
        <p className="mt-2">If you are shipping an item over $75, you should consider using a trackable shipping service or purchasing shipping insurance. We don’t guarantee that we will receive your returned item.</p>
      </section>
    </div>
  );
};

export { RefundPolicy }