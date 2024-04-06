"use client";
import NavButtons from "@/components/FormInputs/NavButtons";
import SelectInput from "@/components/FormInputs/SelectInput";
import TextInput from "@/components/FormInputs/TextInput";
import TextareaInput from "@/components/FormInputs/TextAreaInput";
import RadioButtonInput from "@/components/FormInputs/RadioButtonInput";

// import {
//   setCurrentStep,
//   updateFormData,
// } from "@/redux/slices/onboardingStudentsSlice";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";

export default function ActivitiesForm() {
//   const currentStep = useSelector((store) => store.onboarding.currentStep);
//   const formData = useSelector((store) => store.onboarding.formData);
//   console.log(formData, currentStep);
const [loading, setLoading] = useState(false);
//   const languages = [
//     {
//       id: "javascript",
//       title: "JavaScript",
//     },
//     {
//       id: "python",
//       title: "Python",
//     },
//     {
//       id: "php",
//       title: "PHP",
//     },
//     {
//       id: "c++",
//       title: "C++",
//     },
//     {
//       id: "java",
//       title: "Java",
//     },
//   ];
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
//   const dispatch = useDispatch();
async function processData(data) {
//     // All Data is Valid
//     //Collect all the data
//     //Update Data in the Global state
//     dispatch(updateFormData(data));
//     //Make API Request to Save the Data also in the DB

//     //Update the Current Step
//     dispatch(setCurrentStep(currentStep + 1));
console.log(data);
 }
 return (
<form className="px-12 py-4" onSubmit={handleSubmit(processData)}>
      <div className="mb-8">
        <h5 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-black">
        Block C: Activities
        </h5>
        <p>Please provide the following details.</p>
      </div>
      <div className="grid gap-2 sm:grid-cols">
    
      
      <fieldset className="border py-5 px-5 border-green-800">
    <legend>Specify Nearest Point Where This Activity is Done</legend>  

    <TextareaInput
          label="Local Village Tour/Walk"
          name="village-tour-walk"
          register={register}
          errors={errors}
        />

<TextareaInput
          label="Bird Watching"
          name="bird-watching"
          register={register}
          errors={errors}
        />

    <TextareaInput
          label="Organic Farm Visits"
          name="organic-farm-visits"
          register={register}
          errors={errors}
        />


<TextareaInput
          label="Any Others"
          name="any-others"
          register={register}
          errors={errors}
        />

      </fieldset>

      <fieldset className="border py-5 px-5 border-green-800">
    <legend>Major Tourist Attractions Nearby</legend>  

    <TextInput
          label="Place - 1"
          name="place1"
          register={register}
          errors={errors}
        />

<TextInput
          label="Distance (In Kms.)"
          name="place1-distance"
          type="number"
          register={register}
          errors={errors}
        />

<TextInput
          label="Place - 2"
          name="place2"
          register={register}
          errors={errors}
        />

<TextInput
          label="Distance (In Kms.)"
          name="place2-distance"
          type="number"
          register={register}
          errors={errors}
        />

<TextInput
          label="Place - 3"
          name="place3"
          register={register}
          errors={errors}
        />

<TextInput
          label="Distance (In Kms.)"
          name="place3-distance"
          type="number"
          register={register}
          errors={errors}
        />



      </fieldset>

      <fieldset className="border py-5 px-5 border-green-800">
    <legend>Other Facilities</legend>  

    <TextareaInput
          label="Transportation Facilities"
          name="transportation-facilities"
          register={register}
          errors={errors}
        />

<TextareaInput
          label="Accessibility"
          name="accessibility"
          register={register}
          errors={errors}
        />

<label  className="block text-sm font-medium leading-6 text-gray-900 dark:text-black-50 ">Proper Waste Disposal System</label>
       
       <RadioButtonInput
         name="waste-system"
         options={[
           { label: "Yes", value: "yes" },
           { label: "No", value: "no" },
           // Add more options as needed
         ]}
         register={register}
         errors={errors}
       />

<label  className="block text-sm font-medium leading-6 text-gray-900 dark:text-black-50 ">Safe Drinkinmg Water</label>
       
       <RadioButtonInput
         name="drinking-water"
         options={[
           { label: "Yes", value: "yes" },
           { label: "No", value: "no" },
           // Add more options as needed
         ]}
         register={register}
         errors={errors}
       />

<label  className="block text-sm font-medium leading-6 text-gray-900 dark:text-black-50 ">First Aid</label>
       
       <RadioButtonInput
         name="first-aid"
         options={[
           { label: "Yes", value: "yes" },
           { label: "No", value: "no" },
           // Add more options as needed
         ]}
         register={register}
         errors={errors}
       />
       
       <label  className="block text-sm font-medium leading-6 text-gray-900 dark:text-black-50 ">Eco-Friendly/Sustainable Practices</label>
       
       <RadioButtonInput
         name="eco-system"
         options={[
           { label: "Yes", value: "yes" },
           { label: "No", value: "no" },
           // Add more options as needed
         ]}
         register={register}
         errors={errors}
       />

<label  className="block text-sm font-medium leading-6 text-gray-900 dark:text-black-50 ">Clean Surrounding</label>
       
       <RadioButtonInput
         name="clean-surrounding"
         options={[
           { label: "Yes", value: "yes" },
           { label: "No", value: "no" },
           // Add more options as needed
         ]}
         register={register}
         errors={errors}
       />

<TextareaInput
          label="If Yes, Specify"
          name="specify"
          register={register}
          errors={errors}
        />

      </fieldset>

      </div>

     <NavButtons /> 
    </form>
  );
}
