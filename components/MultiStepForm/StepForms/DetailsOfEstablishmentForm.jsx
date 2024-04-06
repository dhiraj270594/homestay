 "use client";
 import NavButtons from "@/components/FormInputs/NavButtons";
 import SelectInput from "@/components/FormInputs/SelectInput";
 import TextInput from "@/components/FormInputs/TextInput";
 import RadioButtonInput from "@/components/FormInputs/RadioButtonInput";
 import TextareaInput from "@/components/FormInputs/TextAreaInput";
// import {
//   setCurrentStep,
//   updateFormData,
// } from "@/redux/slices/onboardingStudentsSlice";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";

export default function DetailsOfEstablishmentForm() {
  // const currentStep = useSelector((store) => store.onboarding.currentStep);
  // const formData = useSelector((store) => store.onboarding.formData);
  // console.log(formData, currentStep);
  // const [loading, setLoading] = useState(false);
  // const gender = [
  //   {
  //     id: "male",
  //     title: "Male",
  //   },
  //   {
  //     id: "female",
  //     title: "Female",
  //   },
  // ];

  const districtList = [
    {
      id: "javascript",
      title: "JavaScript",
    },
    {
      id: "python",
      title: "Python",
    },
    {
      id: "php",
      title: "PHP",
    },
    {
      id: "c++",
      title: "C++",
    },
    {
      id: "java",
      title: "Java",
    },
  ];
  const constituencyList = [
    {
      id: "javascript",
      title: "JavaScript",
    },
    {
      id: "python",
      title: "Python",
    },
    {
      id: "php",
      title: "PHP",
    },
    {
      id: "c++",
      title: "C++",
    },
    {
      id: "java",
      title: "Java",
    },
  ];
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm(
  //   {
  //   defaultValues: {
  //     ...formData,
  //   },
  // }
);
  // const dispatch = useDispatch();
  async function processData(data) {
    // All Data is Valid
    //Collect all the data
    //Update Data in the Global state
    // dispatch(updateFormData(data));
    // //Make API Request to Save the Data also in the DB

    // //Update the Current Step
    // dispatch(setCurrentStep(currentStep + 1));
    console.log(data);
  }
  return (
    <form className="px-12 py-4" onSubmit={handleSubmit(processData)}>
      <div className="mb-8">
        <h5 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-black">
        Block B: Details of Establishment
        </h5>
        <p>Please provide the following details.</p>
      </div>
      <div className="grid gap-2 sm:grid-cols-2">
    
      <TextInput
          label="Name of Homestay"
          name="homestay-name"
          register={register}
          errors={errors}
        />

<TextInput
          label="Name of Owner"
          name="owner-name"
          register={register}
          errors={errors}
        />
      
         <label  className="block text-sm font-medium leading-6 text-gray-900 dark:text-black-50 ">Gender</label>
       
        <RadioButtonInput
          name="gender"
          options={[
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
            { label: "Others", value: "others" },
            // Add more options as needed
          ]}
          register={register}
          errors={errors}
        />

<TextInput
          label="Educational Qualification of the Owner"
          name="owner-education"
          register={register}
          errors={errors}
        />

<TextInput
          label="Property Managed by"
          name="property-manager"
          register={register}
          errors={errors}
        />

<label  className="block text-sm font-medium leading-6 text-gray-900 dark:text-black-50 ">Registered with DOT and CAV</label>
       
       <RadioButtonInput
         name="registeredDOT"
         options={[
           { label: "Yes", value: "yes" },
           { label: "No", value: "no" },
           // Add more options as needed
         ]}
         register={register}
         errors={errors}
       />

<TextInput
  label="Registration Number"
  name="registration-number-dept"
  register={register}
  errors={errors}
/>

<TextInput
  label="Year of Establishment"
  name="year-of-establishment"
  type="date"
  register={register}
  errors={errors}
  />

<TextInput
  label="Renewed Upto"
  name="renewed-upto"
  type="date"
  register={register}
  errors={errors}
  />

<label  className="block text-sm font-medium leading-6 text-gray-900 dark:text-black-50 w-full">Registered with Nagar Panchayat / GMC / BDO / Other Local Bodies</label>
       
       <RadioButtonInput
         name="registered-with-NPGBL"
         options={[
           { label: "Yes", value: "yes" },
           { label: "No", value: "no" },
           // Add more options as needed
         ]}
         register={register}
         errors={errors}
       />

       
<TextInput
  label="Registration Number"
  name="registration-number-gmc"
  register={register}
  errors={errors}
/>


<TextInput
  label="License Renewed Upto"
  name="license-renewed-upto"
  type="date"
  register={register}
  errors={errors}
  />

<TextInput
  label="Number of Rooms"
  type="number"
  name="number-of-rooms"
  register={register}
  errors={errors}
/>

<TextInput
  label="Number of Single Rooms"
  type="number"
  name="number-of-srooms"
  register={register}
  errors={errors}
/>


<TextInput
  label="Number of Double Rooms"
  type="number"
  name="number-of-drooms"
  register={register}
  errors={errors}
/>

<TextInput
  label="Carrying Capacity"
  type="number"
  name="carrying-capacity"
  register={register}
  errors={errors}
/>

<TextInput
  label="Total Number of Local Staff"
  type="number"
  name="local-staff"
  register={register}
  errors={errors}
/>

<TextInput
  label="Total Number of Non-Local Staff"
  type="number"
  name="non-local-staff"
  register={register}
  errors={errors}
/>

<TextInput
  label="Total Number of Trained Staff"
  type="number"
  name="trained-staff"
  register={register}
  errors={errors}
/>

<TextInput
  label="Total Number of Untrained Staff"
  type="number"
  name="untrained-staff"
  register={register}
  errors={errors}
/>

      </div>

     <NavButtons /> 
    </form>
  );
}
