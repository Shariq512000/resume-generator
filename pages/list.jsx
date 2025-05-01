import ThemeTable from '@/components/component/table'
import React from 'react'

const List = () => {
    const data = [
        {
            "id": 1,
            "full_name": "Muhammad Farrukh",
            "email": "farrukh@legendesk.com",
            "phone": "+92300-3003001",
            "linkedin_profile": "yes",
            "linkedin_url": "https://www.linkedin.com/in/johndoe",
            "position_focus": "PPC Specialist",
            "job_titles": "PPC Specialist",
            "professional_qualification": "MS\nKU\n2022 - 2024\n\nBS\nKU\n2018 - 2022\n\nInter\nABC College\n2017",
            "certifications": "NA",
            "current_job": "AVP\nLEGENDESK \n2024 - Preseny",
            "past_experience": "SR MANAGER\nLEGENDESK \n2023 - 2024\n\nSR MANAGER\nAXACT \n2020 - 2023",
            "cv_references": "Umair\ntest company",
            "resume_summary": "i am experienced PPC with sms and email marketing",
            "template": 1,
            "insert_time": "1746094914",
            "file_url": "Shariq512000"
        },
        {
            "id": 2,
            "full_name": "Muhammad Sumair",
            "email": "farrukh@legendesk.com",
            "phone": "+92300-3003001",
            "linkedin_profile": "yes",
            "linkedin_url": "https://www.linkedin.com/in/johndoe",
            "position_focus": "PPC Specialist",
            "job_titles": "PPC Specialist",
            "professional_qualification": "MS\nKU\n2022 - 2024\n\nBS\nKU\n2018 - 2022\n\nInter\nABC College\n2017",
            "certifications": "NA",
            "current_job": "AVP\nLEGENDESK \n2024 - Preseny",
            "past_experience": "SR MANAGER\nLEGENDESK \n2023 - 2024\n\nSR MANAGER\nAXACT \n2020 - 2023",
            "cv_references": "Umair\ntest company",
            "resume_summary": "i am experienced PPC with sms and email marketing",
            "template": 1,
            "insert_time": "1746094914",
            "file_url": "Shariq512000"
        },
        {
            "id": 3,
            "full_name": "Muhammad Shariq",
            "email": "farrukh@legendesk.com",
            "phone": "+92300-3003001",
            "linkedin_profile": "yes",
            "linkedin_url": "https://www.linkedin.com/in/johndoe",
            "position_focus": "PPC Specialist",
            "job_titles": "PPC Specialist",
            "professional_qualification": "MS\nKU\n2022 - 2024\n\nBS\nKU\n2018 - 2022\n\nInter\nABC College\n2017",
            "certifications": "NA",
            "current_job": "AVP\nLEGENDESK \n2024 - Preseny",
            "past_experience": "SR MANAGER\nLEGENDESK \n2023 - 2024\n\nSR MANAGER\nAXACT \n2020 - 2023",
            "cv_references": "Umair\ntest company",
            "resume_summary": "i am experienced PPC with sms and email marketing",
            "template": 1,
            "insert_time": "1746094914",
            "file_url": "Shariq512000"
        },
        {
            "id": 4,
            "full_name": "Shazaib Khalid",
            "email": "farrukh@legendesk.com",
            "phone": "+92300-3003001",
            "linkedin_profile": "yes",
            "linkedin_url": "https://www.linkedin.com/in/johndoe",
            "position_focus": "PPC Specialist",
            "job_titles": "PPC Specialist",
            "professional_qualification": "MS\nKU\n2022 - 2024\n\nBS\nKU\n2018 - 2022\n\nInter\nABC College\n2017",
            "certifications": "NA",
            "current_job": "AVP\nLEGENDESK \n2024 - Preseny",
            "past_experience": "SR MANAGER\nLEGENDESK \n2023 - 2024\n\nSR MANAGER\nAXACT \n2020 - 2023",
            "cv_references": "Umair\ntest company",
            "resume_summary": "i am experienced PPC with sms and email marketing",
            "template": 1,
            "insert_time": "1746094914",
            "file_url": "Shariq512000"
        },
        {
            "id": 5,
            "full_name": "Noman Khan",
            "email": "farrukh@legendesk.com",
            "phone": "+92300-3003001",
            "linkedin_profile": "yes",
            "linkedin_url": "https://www.linkedin.com/in/johndoe",
            "position_focus": "PPC Specialist",
            "job_titles": "PPC Specialist",
            "professional_qualification": "MS\nKU\n2022 - 2024\n\nBS\nKU\n2018 - 2022\n\nInter\nABC College\n2017",
            "certifications": "NA",
            "current_job": "AVP\nLEGENDESK \n2024 - Preseny",
            "past_experience": "SR MANAGER\nLEGENDESK \n2023 - 2024\n\nSR MANAGER\nAXACT \n2020 - 2023",
            "cv_references": "Umair\ntest company",
            "resume_summary": "i am experienced PPC with sms and email marketing",
            "template": 1,
            "insert_time": "1746094914",
            "file_url": null
        }
    ];

    const tableHeading = ["Name", "Email", "Phone", "File"];

    const dataKeys = [
        {keyName: "full_name", type: "normal"},
        {keyName: "email", type: "normal"},
        {keyName: "phone", type: "normal"},
        {keyName: "file_url", type: "link", url:"https://github.com/", text: "Download", target: 'blank'},
    ]
  return (
    <div className='tw:bg-white tw:min-h-screen'>
      <div className="tw:pt-48 tw:px-[8%]">
        <ThemeTable data={data} dataKeys={dataKeys} tableHeading={tableHeading} />
      </div>
    </div>
  )
}

export default List
