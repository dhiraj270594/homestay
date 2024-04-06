import React from "react";

export default function RadioButtonInput({
  label,
  name,
  options,
  errors,
  register,
  className = "sm:col-span-2 flex flex-wrap",
}) {
  return (
    <div className={`${className}`}>
      <div className="flex items-center mb-2">
        <h2 className="block text-sm font-medium leading-6 text-gray-900 dark:text-black-50">
          {label}
        </h2>
      </div>
      
      <div className="flex flex-wrap">
        {options.map((option, index) => (
          <label
            key={index}
            className="relative inline-flex items-center cursor-pointer mb-2">
            
            <input
              {...register(`${name}`)}
              type="radio"
              value={option.value}
              className="sr-only peer"
            />

            <div className="w-4 h-4 bg-gray-200 rounded-full peer dark:bg-gray-300 peer-checked:bg-green-800"></div>
            <span className="ml-0 text-sm font-medium text-gray-900 dark:text-black-300 px-2">
              {option.label}
            </span>
            
          </label>
        ))}

{errors[`${name}`] && (
          <span className="text-sm text-red-600 ">{label} is required</span>
        )}
      </div>
    </div>
  );
}
