import React from 'react'

const ThemeInput = ({type="text", name="", value, isLabel=false, label="", required=false, onChange=()=>{}}) => {
  return (
    <>
        {(isLabel) ?
            <label className="block mb-1 font-bold">{label}</label>
            :
            null
        }
        <input type={type} name={name} className="w-full border p-2 rounded" {...(value !== undefined ? { value } : {})} onChange={onChange} required={required} />
    </>
  )
}

export default ThemeInput
