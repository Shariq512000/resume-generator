import ThemeInput from '@/components/forms/input'
import ThemeTextarea from '@/components/forms/textarea'
import { CircularProgress } from '@mui/material';
import axios from 'axios';
import { useFormik } from 'formik';
import Link from 'next/link';
import React, { useState } from 'react'
import Swal from 'sweetalert2';

const GenerateNew = () => {
    const [currentStep , setCurrentStep] = useState(1);
    const [file , setFile] = useState();
    const [isResponse , setIsResponse] = useState(true);
    const [downloadLink , setDownloadLink] = useState("")

    const formik = useFormik({
        initialValues:{
          template: '',
          fullName: '',
          email: '',
          phoneNumber: '',
          isLinkedIn: 'yes',
          linkedInUrl: '',
          jobTile: '',
          position: '',
          currentJob: '-',
          pastExperience: '',
          qualification: '',
          certification: '',
          refrence: '',
          summary: '',
          address: '',
          skills: ''
        },
        onSubmit: (values) => {
          console.log("Values" , values);
          setIsResponse(false);
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
          data.append('existing_resume', file || "");
          data.append('template', values.template);
          data.append('address', values.address);
          data.append('skills', values.skills);

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
              let res = response.data?.resume.split("/")
              setDownloadLink(`https://resume-generator-backend-g92s.onrender.com/download-resume/${res[1]}`)
              Swal.fire({
                title: "Resume Ready for Download",
                text: "Your resume has been created successfully. Click the button below to download your document.",
                icon: "success",
                showCancelButton: false,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Download"
              }).then((result) => {
                if (result.isConfirmed) {
                  setTimeout(() => {
                    document.getElementById("downloadBtn").click();
                  } , 1500)
                  setTimeout(() => {
                    setIsResponse(true)
                    formik.resetForm();
                    setCurrentStep(6)
                  } , 2000)
                  // Swal.fire({
                  //     title: "Deleted!",
                  //     text: "Your file has been deleted.",
                  //     icon: "success"
                  // });
                }
              });
          })
          .catch((error) => {
            console.log(error);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
            });
            setIsResponse(true)
          });
        }
    })

    const fileUploader = (e) => {
        // setFile()
        // console.log(e.target.files[0])
        setFile(e.target.files[0]);
    }

  return (
    <div className="tw:bg-gray-100 tw:min-h-screen generate-page tw:flex flex-column tw:items-center tw:justify-center tw:p-6">
        {(currentStep != 6) ?
          <div className="py-5 text-center w-50">
            <div className="currentStage__card pb-4">
              <div className="d-flex">

                <div className="currentStage__card_items position-relative">
                  <div className="d-flex align-items-stretch flex-column gap-3">
                    <div className=" flex-shrink-0 d-flex flex-column ps-0 ">
                      <span className={`border border-2 rounded-circle icon d-flex align-items-center justify-content-center bg-${(currentStep > 1) ? "blue" : "DD"}`}>
                        <span className="fill-1 fg-white">
                          {(currentStep > 1) ? <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 -960 960 960" width="1em" fill="currentColor"><path d="m423.23-309.85 268.92-268.92L650-620.92 423.23-394.15l-114-114L267.08-466l156.15 156.15ZM480.07-100q-78.84 0-148.21-29.92t-120.68-81.21q-51.31-51.29-81.25-120.63Q100-401.1 100-479.93q0-78.84 29.92-148.21t81.21-120.68q51.29-51.31 120.63-81.25Q401.1-860 479.93-860q78.84 0 148.21 29.92t120.68 81.21q51.31 51.29 81.25 120.63Q860-558.9 860-480.07q0 78.84-29.92 148.21t-81.21 120.68q-51.29 51.31-120.63 81.25Q558.9-100 480.07-100Zm-.07-60q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 -960 960 960" width="1em" fill="currentColor"><path d="M480.07-100q-78.84 0-148.21-29.92t-120.68-81.21q-51.31-51.29-81.25-120.63Q100-401.1 100-479.93q0-78.84 29.92-148.21t81.21-120.68q51.29-51.31 120.63-81.25Q401.1-860 479.93-860q78.84 0 148.21 29.92t120.68 81.21q51.31 51.29 81.25 120.63Q860-558.9 860-480.07q0 78.84-29.92 148.21t-81.21 120.68q-51.29 51.31-120.63 81.25Q558.9-100 480.07-100Zm-.07-60q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>}
                        </span>
                      </span>
                      <div className="title pt-3">
                        <h6 className="fg-1D fs-16 fw-5 lh-normal pb-1">
                          Template
                        </h6>
                        {/* <p className="fg-66 fs-14 fw-4 lh-normal">
                          Create Job with details
                        </p> */}
                      </div>
                    </div>
                    <span className={`line bg-${(currentStep > 1) ? "blue" : "DD"}`}></span>
                  </div>
                </div>

                <div className="currentStage__card_items position-relative">
                  <div className="d-flex align-items-stretch flex-column gap-3">
                    <div className=" flex-shrink-0 d-flex flex-column ps-0">
                      <span className={`border border-2 rounded-circle icon d-flex align-items-center justify-content-center bg-${(currentStep > 2) ? "blue" : "DD"}`}>
                        <span className="fill-1 fg-white">
                          {(currentStep > 2) ? <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 -960 960 960" width="1em" fill="currentColor"><path d="m423.23-309.85 268.92-268.92L650-620.92 423.23-394.15l-114-114L267.08-466l156.15 156.15ZM480.07-100q-78.84 0-148.21-29.92t-120.68-81.21q-51.31-51.29-81.25-120.63Q100-401.1 100-479.93q0-78.84 29.92-148.21t81.21-120.68q51.29-51.31 120.63-81.25Q401.1-860 479.93-860q78.84 0 148.21 29.92t120.68 81.21q51.31 51.29 81.25 120.63Q860-558.9 860-480.07q0 78.84-29.92 148.21t-81.21 120.68q-51.29 51.31-120.63 81.25Q558.9-100 480.07-100Zm-.07-60q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 -960 960 960" width="1em" fill="currentColor"><path d="M480.07-100q-78.84 0-148.21-29.92t-120.68-81.21q-51.31-51.29-81.25-120.63Q100-401.1 100-479.93q0-78.84 29.92-148.21t81.21-120.68q51.29-51.31 120.63-81.25Q401.1-860 479.93-860q78.84 0 148.21 29.92t120.68 81.21q51.31 51.29 81.25 120.63Q860-558.9 860-480.07q0 78.84-29.92 148.21t-81.21 120.68q-51.29 51.31-120.63 81.25Q558.9-100 480.07-100Zm-.07-60q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>}
                        </span>
                      </span>
                      <div className="title pt-3">
                        <h6 className="fg-1D fs-16 fw-5 lh-normal pb-1">
                          Personal Details
                        </h6>
                        {/* <p className="fg-66 fs-14 fw-4 lh-normal">
                        Set application format
                        </p> */}
                      </div>
                    </div>
                    <span className={`line bg-${(currentStep > 2) ? "blue" : "DD"}`}></span>
                  </div>
                </div>

                <div className="currentStage__card_items position-relative">
                  <div className="d-flex align-items-stretch flex-column gap-3">
                    <div className=" flex-shrink-0 d-flex flex-column ps-0">
                      <span className={`border border-2 rounded-circle icon d-flex align-items-center justify-content-center bg-${(currentStep > 3) ? "blue" : "DD"}`}>
                        <span className="fill-1 fg-white">
                          {(currentStep > 3) ? <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 -960 960 960" width="1em" fill="currentColor"><path d="m423.23-309.85 268.92-268.92L650-620.92 423.23-394.15l-114-114L267.08-466l156.15 156.15ZM480.07-100q-78.84 0-148.21-29.92t-120.68-81.21q-51.31-51.29-81.25-120.63Q100-401.1 100-479.93q0-78.84 29.92-148.21t81.21-120.68q51.29-51.31 120.63-81.25Q401.1-860 479.93-860q78.84 0 148.21 29.92t120.68 81.21q51.31 51.29 81.25 120.63Q860-558.9 860-480.07q0 78.84-29.92 148.21t-81.21 120.68q-51.29 51.31-120.63 81.25Q558.9-100 480.07-100Zm-.07-60q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 -960 960 960" width="1em" fill="currentColor"><path d="M480.07-100q-78.84 0-148.21-29.92t-120.68-81.21q-51.31-51.29-81.25-120.63Q100-401.1 100-479.93q0-78.84 29.92-148.21t81.21-120.68q51.29-51.31 120.63-81.25Q401.1-860 479.93-860q78.84 0 148.21 29.92t120.68 81.21q51.31 51.29 81.25 120.63Q860-558.9 860-480.07q0 78.84-29.92 148.21t-81.21 120.68q-51.29 51.31-120.63 81.25Q558.9-100 480.07-100Zm-.07-60q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>}
                        </span>
                      </span>
                      <div className="title pt-3">
                        <h6 className="fg-1D fs-16 fw-5 lh-normal pb-1">
                            Job Details
                        </h6>
                        {/* <p className="fg-66 fs-14 fw-4 lh-normal">
                        Application Under process
                        </p> */}
                      </div>
                    </div>
                    <span className={`line bg-${(currentStep > 3) ? "blue" : "DD"}`}></span>
                  </div>
                </div>

                <div className="currentStage__card_items position-relative">
                  <div className="d-flex align-items-stretch flex-column gap-3">
                    <div className=" flex-shrink-0 d-flex flex-column ps-0">
                      <span className={`border border-2 rounded-circle icon d-flex align-items-center justify-content-center bg-${(currentStep > 4) ? "blue" : "DD"}`}>
                        <span className="fill-1 fg-white">
                        {(currentStep > 4) ? <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 -960 960 960" width="1em" fill="currentColor"><path d="m423.23-309.85 268.92-268.92L650-620.92 423.23-394.15l-114-114L267.08-466l156.15 156.15ZM480.07-100q-78.84 0-148.21-29.92t-120.68-81.21q-51.31-51.29-81.25-120.63Q100-401.1 100-479.93q0-78.84 29.92-148.21t81.21-120.68q51.29-51.31 120.63-81.25Q401.1-860 479.93-860q78.84 0 148.21 29.92t120.68 81.21q51.31 51.29 81.25 120.63Q860-558.9 860-480.07q0 78.84-29.92 148.21t-81.21 120.68q-51.29 51.31-120.63 81.25Q558.9-100 480.07-100Zm-.07-60q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 -960 960 960" width="1em" fill="currentColor"><path d="M480.07-100q-78.84 0-148.21-29.92t-120.68-81.21q-51.31-51.29-81.25-120.63Q100-401.1 100-479.93q0-78.84 29.92-148.21t81.21-120.68q51.29-51.31 120.63-81.25Q401.1-860 479.93-860q78.84 0 148.21 29.92t120.68 81.21q51.31 51.29 81.25 120.63Q860-558.9 860-480.07q0 78.84-29.92 148.21t-81.21 120.68q-51.29 51.31-120.63 81.25Q558.9-100 480.07-100Zm-.07-60q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>}
                        </span>
                      </span>
                      <div className="title pt-3">
                        <h6 className="fg-1D fs-16 fw-5 lh-normal pb-1">
                            Academic Details
                        </h6>
                        {/* <p className="fg-66 fs-14 fw-4 lh-normal">
                        Review & Publish your job
                        </p> */}
                      </div>
                    </div>
                    <span className={`line bg-${(currentStep > 4) ? "blue" : "DD"}`}></span>
                  </div>
                </div>

                <div className="currentStage__card_items position-relative">
                  <div className="d-flex align-items-stretch flex-column gap-3">
                    <div className=" flex-shrink-0 d-flex flex-column ps-0">
                      <span className={`border border-2 rounded-circle icon d-flex align-items-center justify-content-center bg-${(currentStep > 5) ? "blue" : "DD"}`}>
                        <span className="fill-1 fg-white">
                        {(currentStep > 5) ? <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 -960 960 960" width="1em" fill="currentColor"><path d="m423.23-309.85 268.92-268.92L650-620.92 423.23-394.15l-114-114L267.08-466l156.15 156.15ZM480.07-100q-78.84 0-148.21-29.92t-120.68-81.21q-51.31-51.29-81.25-120.63Q100-401.1 100-479.93q0-78.84 29.92-148.21t81.21-120.68q51.29-51.31 120.63-81.25Q401.1-860 479.93-860q78.84 0 148.21 29.92t120.68 81.21q51.31 51.29 81.25 120.63Q860-558.9 860-480.07q0 78.84-29.92 148.21t-81.21 120.68q-51.29 51.31-120.63 81.25Q558.9-100 480.07-100Zm-.07-60q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 -960 960 960" width="1em" fill="currentColor"><path d="M480.07-100q-78.84 0-148.21-29.92t-120.68-81.21q-51.31-51.29-81.25-120.63Q100-401.1 100-479.93q0-78.84 29.92-148.21t81.21-120.68q51.29-51.31 120.63-81.25Q401.1-860 479.93-860q78.84 0 148.21 29.92t120.68 81.21q51.31 51.29 81.25 120.63Q860-558.9 860-480.07q0 78.84-29.92 148.21t-81.21 120.68q-51.29 51.31-120.63 81.25Q558.9-100 480.07-100Zm-.07-60q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>}
                        </span>
                      </span>
                      <div className="title pt-3">
                        <h6 className="fg-1D fs-16 fw-5 lh-normal pb-1">
                          Additional Details
                        </h6>
                        {/* <p className="fg-66 fs-14 fw-4 lh-normal">
                        Review & Publish your job
                        </p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          :
          null
        }
        <div className="tw:bg-white tw:shadow-lg tw:rounded-lg tw:w-full tw:max-w-4xl p-5">
            <div id="step-1" className={`${currentStep != 1 ? "tw:hidden" : ""}`}>
                <h2 className="tw:text-2xl tw:font-bold mb-4">Choose a Template</h2>
                <div className="tw:grid tw:grid-cols-2 tw:gap-4">
                    <div className="border p-4 rounded tw:hover:shadow tw:cursor-pointer" onClick={() => {formik.setFieldValue("template","1");setCurrentStep(2)}}>
                        <h3 className="tw:text-lg tw:font-semibold">Template 1</h3>
                        <p className="tw:text-sm tw:text-gray-500">Simple and clean design</p>
                    </div>
                    <div className="border p-4 rounded tw:hover:shadow tw:cursor-pointer" onClick={() => {formik.setFieldValue("template","2");setCurrentStep(2)}}>
                        <h3 className="tw:text-lg tw:font-semibold">Template 2</h3>
                        <p className="tw:text-sm tw:text-gray-500">Modern and professional</p>
                    </div>
                </div>
            </div>

            <div id="step-2" className={`${currentStep != 2 ? "tw:hidden" : ""}`}>
              <h2 className="tw:text-2xl tw:font-bold mb-4"> Personal Details</h2>
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
                      <ThemeInput type='text' name='address' value={formik.values.address} onChange={formik.handleChange} isLabel={true} label='Address' required={true} />
                  </div>

                  {/* <div className="mb-4">
                     
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
                  </div> */}

                  {(formik.values?.isLinkedIn == "yes") ?
                      <div className="mb-4">
                          <ThemeInput type='url' required={true} isLabel={true} name='linkedInUrl' value={formik.values.linkedInUrl} onChange={formik.handleChange} label='Linkedin Url' />
                      </div>
                      :
                      null
                  }
                  <div className="tw:flex tw:gap-x-2">
                    <div role='button' className="tw:bg-orange-500 d-inline-block text-white px-4 py-2 rounded" onClick={() => {setCurrentStep(1)}}>Back</div>
                    <button type="submit" className="tw:bg-blue-500 text-white px-4 py-2 rounded">Next</button>
                  </div>
              </form>
            </div>

            <div id="step-3" className={`${currentStep != 3 ? "tw:hidden" : ""}`}>
              <h2 className="tw:text-2xl tw:font-bold mb-4">Job Details</h2>
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
                {/* <div className="mb-4">
                    <ThemeInput type='text' name='currentJob' value={formik.values.currentJob} onChange={formik.handleChange} isLabel={true} label='Current Job' required={true} /> 
                    <ThemeTextarea name='currentJob' value={formik.values.currentJob} onChange={formik.handleChange} isLabel={true} label='Current Job' required={true} />
                </div> */}

                <div className="mb-4">
                  {/* <ThemeInput type='text' name='pastExperience' value={formik.values.pastExperience} onChange={formik.handleChange} isLabel={true} label='Past Experience' required={true} /> */}
                  <ThemeTextarea name='pastExperience' value={formik.values.pastExperience} onChange={formik.handleChange} isLabel={true} label='Experiences' required={true} />
                </div>
                <div className="tw:flex tw:gap-x-2">
                  <div role='button' className="tw:bg-orange-500 d-inline-block text-white px-4 py-2 rounded" onClick={() => {setCurrentStep(2)}}>Back</div>
                  <button type="submit" className="tw:bg-blue-500 text-white px-4 py-2 rounded">Next</button>
                </div>
              </form>
            </div>

            <div id="step-4" className={`${currentStep != 4 ? "tw:hidden" : ""}`}>
                <h2 className="tw:text-2xl tw:font-bold mb-4">Academic Details</h2>
                <form id="cvForm" onSubmit={(e) => {e.preventDefault();setCurrentStep(5)}}>
                    <div className="mb-4">
                        {/* <ThemeInput type='text' name='qualification' value={formik.values.qualification} onChange={formik.handleChange} isLabel={true} label='Professional Qualification' required={true} /> */}
                        <ThemeTextarea name='qualification' value={formik.values.qualification} onChange={formik.handleChange} isLabel={true} label='Professional Qualification' required={true} />
                    </div>
                    <div className="mb-4">
                        {/* <ThemeInput type='text' name='certification' value={formik.values.certification} onChange={formik.handleChange} isLabel={true} label='Certifications' /> */}
                        <ThemeTextarea name='certification' value={formik.values.certification} onChange={formik.handleChange} isLabel={true} label='Certifications' />
                    </div>
                    <div className="mb-4">
                        {/* <ThemeInput type='text' name='skills' value={formik.values.skills} onChange={formik.handleChange} isLabel={true} label='Skills' required={true} /> */}
                        <ThemeTextarea name='skills' value={formik.values.skills} onChange={formik.handleChange} isLabel={true} label='Skills' required={true} />
                    </div>

                    <div className="tw:flex tw:gap-x-2">
                      <div role='button' className="tw:bg-orange-500 d-inline-block text-white px-4 py-2 rounded" onClick={() => {setCurrentStep(3)}}>Back</div>
                      <button type="submit" className="tw:bg-blue-500 text-white px-4 py-2 rounded">Next</button>
                    </div>
                </form>
            </div>

            <div id="step-5" className={`${currentStep != 5 ? "tw:hidden" : ""}`}>
                <h2 className="tw:text-2xl tw:font-bold mb-4">Additional Details</h2>
                <form id="cvForm" onSubmit={(e) => {formik.handleSubmit(e)}}>
                    <div className="mb-4">
                        {/* <ThemeInput type='text' name='refrence' value={formik.values.refrence} onChange={formik.handleChange} isLabel={true} label='References' /> */}
                        <ThemeTextarea name='refrence' value={formik.values.refrence} onChange={formik.handleChange} isLabel={true} label='References' />
                    </div>

                    <div className="mb-4">
                        <ThemeTextarea isLabel={true} name='summary' value={formik.values.summary} onChange={formik.handleChange} label='Summary' />
                        {/* <ThemeInput type='text' isLabel={true} label='Certifications' /> */}
                    </div>

                    <div className="mb-4">
                      <ThemeInput type='file' onChange={fileUploader} isLabel={true} label='Existing Resume' />
                    </div>
                    {(isResponse)?
                    <div className="tw:flex tw:gap-x-2">
                        <div role='button' className="tw:bg-orange-500 d-inline-block text-white px-4 py-2 rounded" onClick={() => {setCurrentStep(4)}}>Back</div>
                          <button type="submit" className="tw:bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
                        </div>
                        :
                        <CircularProgress color='#2978F1' />
                    }

                    <Link href={downloadLink} target='_blank' id='downloadBtn' className='d-none'> Some Text </Link>
                </form>
            </div>

            <div id="step-6" className={`${currentStep != 6 ? "tw:hidden" : ""}`}>
              <h6 className='fs-20 fg-33 mb-3 text-center fw-7'>Thank You!</h6>
              <div className="px-5">
                <p className='fs-18 fg-66 text-center px-5'>Your resume has been downloaded successfully. We wish you success in your next opportunity.</p>
              </div>
              <div className="mt-4 tw:flex align-items-center justify-content-center">
                <button className="tw:bg-blue-500 text-white px-4 py-2 rounded" onClick={() => {setCurrentStep(1)}}>Create a New Resume</button>
              </div>
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
