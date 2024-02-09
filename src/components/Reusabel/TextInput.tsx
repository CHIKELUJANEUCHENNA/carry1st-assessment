import React, { ChangeEvent } from 'react';

interface TextInputProps {
    type: string;
    placeholder: string;
    value: string | number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    id: string
  }
  
  const TextInput: React.FC<TextInputProps> = ({ type, placeholder, value, onChange, error, id }) => {
  return (
    <div className="mb-4">
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500 ${error ? 'border-red-500' : ''}`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default TextInput;
