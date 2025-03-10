
const PaymentInstructions = () => {
  return (
    <div className="space-y-2">
      <p>Transfer Payment:</p>
      <p>Tax: 10%</p>
      <p>Sub total: $480 USD</p>
      <p>Total: $580 USD</p>
      <div className="flex gap-4 items-center md:py-0 py-3">
        <img className="pb-10" src="/images/bank-logo1.svg" alt="bank-logo" />
        <div>
          <p>Bank Central Asia</p>
          <p>2208 1996</p>
          <p>Tesla Inc.</p>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <img className="pb-10" src="/images/bank-logo2.svg" alt="bank-logo" />
        <div>
          <p>Bank Mandiri</p>
          <p>2208 1996</p>
          <p>Tesla Inc.</p>
        </div>
      </div>
    </div>
  );
}

export default PaymentInstructions
