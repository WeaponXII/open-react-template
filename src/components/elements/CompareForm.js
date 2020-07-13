import React from 'react';
import { useForm } from 'react-hook-form';

export default function Comparer() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <select name="Compare" ref={register}>
        <option value="Red">Red</option>
        <option value="Green">Green</option>
      </select>

      <input type="submit" />
    </form>
  );
}
