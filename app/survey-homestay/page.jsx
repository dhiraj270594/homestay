import React from "react"
import StepForm from "@/components/MultiStepForm/StepForm";
import Steps from "@/components/MultiStepForm/Steps";

export default function SurveyHomestayPage(){

    const steps = [
        {
          number: 1,
          title: "IDENTIFICATION PARTICULAR",
        },
        {
            number: 2,
            title: "DETAILS OF ESTABLISHMENT",
        },
        {
            number: 3,
            title: "ACTIVITIES",
        },
        {
            number: 4,
            title: "REGISTRATION WITH ONLINE TRAVEL",
        },
        {
            number: 5,
            title: "RECORD KEEPING, OCCUPANCY DETAILS AND OTHER INFORMATION",
        },
        {
            number: 6,
            title: "ACCOUNTING/BOOK KEEPING",
        },
        {
            number: 7,
            title: "CONTACT DETAILS",
        },
        {
            number: 8,
          title: "Submit and Confirmation",
        },
      ];


    return (
        <div className="bg-blue-50 min-h-screen p-4">
          <div className="mx-auto w-full max-w-5xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-4 md:p-6 dark:bg-grey-800 dark:border-gray-700 grid grid-cols-12 gap-4 min-h-screen">
            {/* Steps */}
           
           <Steps steps={steps}/> 
            {/* Form */}
            <div className="rounded-lg col-span-full md:col-span-8">
             <StepForm /> 
            </div>
          </div>
        </div>
      );
    }







