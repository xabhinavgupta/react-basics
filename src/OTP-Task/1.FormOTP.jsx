import { useRef, useState } from "react";

const CreateOTPForm = () => {
  const [otp, setOTP] = useState(['', '', '', '']);
  const otpInputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const inputChange = (e, index) => {
    const { value } = e.target;
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);

      if (value.length === 1 && index < otpInputRefs.length - 1) {
        otpInputRefs[index + 1].current.focus();
      }
  };

  const submitOTP = () => {
    const enteredOTP = otp.join('');
    console.log('Entered OTP:', enteredOTP);
  };

  return (
    <div>
      <div>
        Enter OTP:
        <div>
          {otp.map((digit, index) => (
            <input
              key={index}
              type="number"
              value={digit}
              maxLength={1}
              onChange={(e) => inputChange(e, index)}
              ref={otpInputRefs[index]}
            />
          ))}
        </div>
      </div>
      <div><br /></div>
      <button onClick={submitOTP}>Submit OTP</button>
    </div>
  );
};

export default CreateOTPForm;
