"use client";

//import { useSelector } from "react-redux";
import IdentificationParticularForm from "./StepForms/IdentificationParticularForm";
import FormConfirmation from "./StepForms/FormConfirmation";
import DetailsOfEstablishmentForm from "./StepForms/DetailsOfEstablishmentForm";
import ActivitiesForm from "./StepForms/ActivitiesForm";
import RegistrationWithOTAForm from "./StepForms/RegistrationWithOTAForm";
import RKODOIForm from "./StepForms/RKODOIForm";
import AccountingBookKeepingForm from "./StepForms/AccountingBookKeepingForm";
import ContactDetailsForm from "./StepForms/ContactDetailsForm";


export default function StepForm() {
  //const currentStep = useSelector((store) => store.onboarding.currentStep);
  const currentStep=3;
  function renderFormByStep(step) {
    if (step === 1) {
      return <IdentificationParticularForm />;
    } else if (step === 2) {
      return <DetailsOfEstablishmentForm />;
    } else if (step === 3) {
      return <ActivitiesForm />;
    } else if (step === 4) {
      return <RegistrationWithOTAForm />;
    } else if (step === 5) {
      return <RKODOIForm />;
    } else if (step === 6) {
      return <AccountingBookKeepingForm />;
    } else if (step === 7) {
      return <ContactDetailsForm />;
    } else if (step === 8) {
      return <FormConfirmation />;
    }
  }
  return <>{renderFormByStep(currentStep)}</>;
}
