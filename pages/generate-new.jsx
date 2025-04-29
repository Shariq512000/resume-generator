import ThemeInput from '@/components/forms/input'
import ThemeTextarea from '@/components/forms/textarea'
import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'

const GenerateNew = () => {
    const [currentStep , setCurrentStep] = useState(1);
    const [file , setFile] = useState();

    const formik = useFormik({
        initialValues:{
            template: '',
            fullName: '',
            email: '',
            phoneNumber: '',
            isLinkedIn: '',
            linkedInUrl: '',
            jobTile: '',
            position: '',
            currentJob: '',
            pastExperience: '',
            qualification: '',
            certification: '',
            refrence: '',
            summary: '',
        },
        onSubmit: (values) => {
            console.log("Values" , values);
            let data = new FormData();
            data.append('full_name', values.fullName);
            data.append('email', values.email);
            data.append('phone', values.phoneNumber);
            data.append('linkedin_profile', values.isLinkedIn);
            data.append('linkedin_url', values.linkedInUrl);
            data.append('position_focus', values.position);
            data.append('job_titles', values.jobTile);
            data.append('professional_qualification', values.qualification);
            data.append('certifications', values.certification);
            data.append('current_job', values.currentJob);
            data.append('past_experience', values.pastExperience);
            data.append('references', values.refrence);
            data.append('resume_summary', values.summary);
            data.append('existing_resume', file);
            data.append('template', values.template);

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'https://resume-generator-backend-g92s.onrender.com/generate',
                headers: { 
                    // ...data.getHeaders()
                    'Accept': 'application/json'
                },
                data : data
            };

            axios.request(config)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        }
    })

    const fileUploader = (e) => {
        // setFile()
        // console.log(e.target.files[0])
        setFile(e.target.files[0]);
    }

  return (
    <div className="bg-gray-100 min-h-screen generate-page flex items-center justify-center p-6">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl p-5">
            <div id="step-1" className={`${currentStep != 1 ? "hidden" : ""}`}>
                <h2 className="text-2xl font-bold mb-4">Step 1: Choose a Template</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div className="border p-4 rounded hover:shadow cursor-pointer" onClick={() => {formik.setFieldValue("template","1");setCurrentStep(2)}}>
                        <h3 className="text-lg font-semibold">Template 1</h3>
                        <p className="text-sm text-gray-500">Simple and clean design</p>
                    </div>
                    <div className="border p-4 rounded hover:shadow cursor-pointer" onClick={() => {formik.setFieldValue("template","2");setCurrentStep(2)}}>
                        <h3 className="text-lg font-semibold">Template 2</h3>
                        <p className="text-sm text-gray-500">Modern and professional</p>
                    </div>
                </div>
            </div>

            <div id="step-2" className={`${currentStep != 2 ? "hidden" : ""}`}>
                <h2 className="text-2xl font-bold mb-4">Step 2: Fill Your Details</h2>
                <form id="cvForm" onSubmit={(e) => {e.preventDefault();setCurrentStep(3)}}>
                    <div className="mb-4">
                        <ThemeInput type='text' name='fullName' value={formik.values.fullName} onChange={formik.handleChange} isLabel={true} label='Full Name' required={true} />
                    </div>
                    <div className="mb-4">
                        <ThemeInput type='email' name='email' value={formik.values.email} onChange={formik.handleChange} isLabel={true} label='Email' required={true} />
                    </div>
                    <div className="mb-4">
                        <ThemeInput type='tel' name='phoneNumber' value={formik.values.phoneNumber} onChange={formik.handleChange} isLabel={true} label='Phone Number' required={true} />
                    </div>

                    <div className="mb-4">
                        {/* <ThemeInput type='tel' isLabel={true} label='Phone Number' /> */}
                        <label className="block mb-1 font-bold">{"Linkedin Profile"}</label>
                        <div className="flex gap-x-8 ps-3">
                            <div className="flex gap-x-2">
                                <input type="radio" id='linkedYes' name='isLinkedIn' onChange={formik.handleChange} value={"yes"} />
                                <label htmlFor="linkedYes">Yes</label>
                            </div>
                            <div className="flex gap-x-2">
                                <input type="radio" id='linkedNo' name='isLinkedIn' onChange={formik.handleChange} value={"no"} />
                                <label htmlFor="linkedNo">No</label>
                            </div>
                            
                        </div>
                    </div>

                    {(formik.values?.isLinkedIn == "yes") ?
                        <div className="mb-4">
                            <ThemeInput type='url' isLabel={true} name='linkedInUrl' value={formik.values.linkedInUrl} onChange={formik.handleChange} label='Linkedin Url' />
                        </div>
                        :
                        null
                    }


                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
                </form>
            </div>

            <div id="step-3" className={`${currentStep != 3 ? "hidden" : ""}`}>
                <h2 className="text-2xl font-bold mb-4">Step 3: Fill Job Details</h2>
                <form id="cvForm" onSubmit={(e) => {e.preventDefault();setCurrentStep(4)}}>
                    <div className="mb-4">
                        <ThemeInput type='text' name='jobTile' value={formik.values.jobTile} onChange={formik.handleChange} isLabel={true} label='Job Title' required={true} />
                    </div>
                    <div className="mb-4">
                        <ThemeInput type='text' name='position' value={formik.values.position} onChange={formik.handleChange} isLabel={true} label='Position Focus' required={true} />
                    </div>
                    {/* <div className="mb-4">
                        <ThemeTextarea isLabel={true} label='Summary' />
                    </div> */}
                    <div className="mb-4">
                        <ThemeInput type='text' name='currentJob' value={formik.values.currentJob} onChange={formik.handleChange} isLabel={true} label='Current Job' required={true} />
                    </div>

                    <div className="mb-4">
                        <ThemeInput type='text' name='pastExperience' value={formik.values.pastExperience} onChange={formik.handleChange} isLabel={true} label='Past Experience' required={true} />
                    </div>

                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
                </form>
            </div>

            <div id="step-4" className={`${currentStep != 4 ? "hidden" : ""}`}>
                <h2 className="text-2xl font-bold mb-4">Step 4: Fill Qualification Details</h2>
                <form id="cvForm" onSubmit={(e) => {e.preventDefault();setCurrentStep(5)}}>
                    <div className="mb-4">
                        <ThemeInput type='text' name='qualification' value={formik.values.qualification} onChange={formik.handleChange} isLabel={true} label='Professional Qualification' required={true} />
                    </div>
                    <div className="mb-4">
                        <ThemeInput type='text' name='certification' value={formik.values.certification} onChange={formik.handleChange} isLabel={true} label='Certifications' />
                    </div>

                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
                </form>
            </div>

            <div id="step-5" className={`${currentStep != 5 ? "hidden" : ""}`}>
                <h2 className="text-2xl font-bold mb-4">Step 5: Fill Resume Details</h2>
                <form id="cvForm" onSubmit={(e) => {formik.handleSubmit(e);setCurrentStep(6)}}>
                    <div className="mb-4">
                        <ThemeInput type='text' name='refrence' value={formik.values.refrence} onChange={formik.handleChange} isLabel={true} label='References' />
                    </div>

                    <div className="mb-4">
                        <ThemeTextarea isLabel={true} name='summary' value={formik.values.summary} onChange={formik.handleChange} label='Summary' />
                        {/* <ThemeInput type='text' isLabel={true} label='Certifications' /> */}
                    </div>

                    <div className="mb-4">
                        <ThemeInput type='file' onChange={fileUploader} isLabel={true} label='Existing Resume' />
                    </div>

                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
                </form>
            </div>

            {/* <div id="step-3" className={`${currentStep != 3 ? "hidden" : ""}`}>
                <h2 className="text-2xl font-bold mb-4">Step 3: Preview & Download</h2>
                <div className="border p-4 mb-4" id="cvPreview"></div>
                <button onclick="downloadCV()" className="bg-green-500 text-white px-4 py-2 rounded">Download PDF</button>
            </div> */}
        </div>
    </div>
  )
}

export default GenerateNew;
