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
//import { useDispatch, useSelector } from "react-redux";

export default function IdentificationParticularForm() {
  //const currentStep = useSelector((store) => store.onboarding.currentStep);
  //const formData = useSelector((store) => store.onboarding.formData);
  //console.log(formData, currentStep);
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
  const [loading, setLoading] = useState(false);
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
  //const dispatch = useDispatch();
  async function processData(data) {
    // All Data is Valid
    //Collect all the data
    //Update Data in the Global state
    //dispatch(updateFormData(data));
    //Make API Request to Save the Data also in the DB

    //Update the Current Step
    //dispatch(setCurrentStep(currentStep + 1));
     console.log(data);
  }
  return (
    <form className="px-12 py-4" onSubmit={handleSubmit(processData)}>
      <div className="mb-8">
        <h5 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-black">
        Block A: Identification Particular
        </h5>
        <p>Please provide the following details.</p>
      </div>
      <div className="grid gap-2 sm:grid-cols-2">
    
      
         <label  className="block text-sm font-medium leading-6 text-gray-900 dark:text-black-50 ">Homestay Type</label>
       
        <RadioButtonInput
          name="areatype1"
          options={[
            { label: "Urban", value: "urban" },
            { label: "Rural", value: "rural" },
            // Add more options as needed
          ]}
          register={register}
          errors={errors}
        />

        <RadioButtonInput
          name="areatype2"
          options={[
            { label: "Private", value: "private" },
            { label: "Government Funded", value: "government" },
            // Add more options as needed
          ]}
          register={register}
          errors={errors}
        />

        <RadioButtonInput
          name="areatype3"
          options={[
            { label: "Normal", value: "normal" },
            { label: "Heritage", value: "heritage" },
            // Add more options as needed
          ]}
          register={register}
          errors={errors}
        />

<TextInput
  label="State"
  name="state"
  defaultValue="Sikkim"
  register={register}
  errors={errors}
  readOnly={true}
  disabled={true}
/>

<SelectInput
          label="District "
          name="district"
          register={register}
          options={districtList}
          errors={errors}
        />

<SelectInput
          label="Constituency "
          name="constituency"
          register={register}
          options={constituencyList}
          errors={errors}
        />


        <TextInput
          label="Village/Town"
          name="village-town"
          register={register}
          errors={errors}
        />

<TextInput
          label="Municiapl Corporation/Nagar Panchayat/GPU/Ward"
          name="municiapl-corporation-nagar-panchayat-gpu-ward"
          register={register}
          errors={errors}
        />


<TextareaInput
          label="Address"
          name="address"
          register={register}
          errors={errors}
        />

      </div>

     <NavButtons /> 
    </form>

  );
}
