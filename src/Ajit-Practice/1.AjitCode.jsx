/* eslint-disable react-refresh/only-export-components */
import React, { memo, useEffect, useState } from 'react';

const InputComp = ({ value }) => {
  const [inputFields, setInputFields] = useState([]);
  const [sum, setSum] = useState(0);
  console.log('child');

  useEffect(() => {
    const inputArr = [];

    for (let i = 1; i <= value; i++) {
      const obj = {
        id: i,
        name: i,
        value: '',
      };
      inputArr.push(obj);
    }

    setInputFields(inputArr);
  }, [value]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    const updatedVal = inputFields.map((input) => {
      return input.name === name ? { ...input, value: value } : input;
    });
    setInputFields(updatedVal);
    // let sum = 0;
    // for (let i = 0; i < inputFields.length; i++) {
    //   sum += Number(inputFields[i].value);
    // }
    // setSum(sum);
  };
  console.log(inputFields);
  return (
    <div>
      {inputFields.map((input) => {
        return (
          <input
            type='number'
            name={input.name}
            key={input.id}
            value={input.value}
            onChange={handleInputChange}
          />
        );
      })}
      <p>Sum: {sum}</p>
    </div>
  );
};
const Ajit = memo(InputComp);
export default Ajit;
