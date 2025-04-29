import React from 'react'

const ThemeTextarea = ({name="", value, isLabel=false, label="", rows="4", required=false, onChange=()=>{}}) => {
  return (
    <>
        {isLabel ?
            <label className="block mb-1 font-bold">{label}</label>
            :
            null
        }
        <textarea name={name} {...(value !== undefined ? { value } : {})} className="w-full border p-2 rounded" rows={rows} onChange={onChange} required={required}></textarea>
    </>
  )
}

export default ThemeTextarea
