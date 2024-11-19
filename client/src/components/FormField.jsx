import React from 'react'

const FormField = ({labelName, type, name, placeholder, value, handleChange, 
  handleSupriseMe, isSupriseMe}) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label 
        htmlFor={name}
        className='block text-sm font-medium text-gray-900'
        >
        {label}
        </label>
        {isSupriseMe && (
          <button
          type='button'
          onClick={handleSupriseMe}
          className='font-semibold text-xs bg-[#ececf1] py-1
          px-2 rounded-[5px] text-black'
          >
            Suprise Me
          </button>
        )}
      </div>
    </div>
  )
}

export default FormField