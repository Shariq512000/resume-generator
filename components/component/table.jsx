import Link from 'next/link';
import React from 'react';

const ThemeTable = ({data, tableHeading, dataKeys}) => {

  return (
    <table className="tw:min-w-full tw:bg-white tw:rounded-xl tw:shadow-md tw:overflow-hidden">
      <thead>
        <tr className="tw:bg-gray-100 tw:text-gray-700 tw:text-left">
            {tableHeading?.map((heading , i) => (
                <th className="tw:py-3 tw:px-4 tw:text-black tw:text-[16px]" key={i}>{heading}</th>
            ))}
        </tr>
      </thead>
      <tbody>
        {data.map((user, index) => (
          <tr
            key={user.id}
            className={`tw:border-b ${index % 2 === 0 ? "tw:bg-white" : "tw:bg-gray-50"}`}
          >
            {dataKeys?.map((key , newIndex) => {
                if(key?.type == "link"){
                    return(
                        <td className="tw:py-3 tw:px-4 tw:text-gray-800 tw:text-[14px]" key={`${index}-${newIndex}`}>
                            {user[key?.keyName] ? <Link href={`${(key.url == "urlOnly") ? user[key?.keyName] : `${key.url}${user[key?.keyName]}`}`} {...(key?.target !== undefined ? { target: "_blank" } : {})} className='tw:text-blue-800'>{key?.text}</Link> : "-"}
                        </td>
                    )
                }else{
                    return(
                        <td className="tw:py-3 tw:px-4 tw:text-gray-800 tw:text-[14px]" key={`${index}-${newIndex}`}>{user[key?.keyName]}</td>
                    )
                }
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ThemeTable;
