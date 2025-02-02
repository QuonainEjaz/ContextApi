import React, { createContext, useContext, useState } from 'react';

// Create a context for the form data
const FormContext = createContext();
// FormProvider component is used to provide form data and state management to its children components
const initializeFormData = () => ({
  name: 'Dr. Floyd Miles',
  nationalId: '',
  phone: '+966 123 455 5625',
  email: '',
  selectedGender: 'Male',
  selectedLanguage: '',
  dateOfBirth: '16 Dec 2000',
  selectedSpecialization: '',
  licenseNo: '1225466652',
  licenseExpirationDate: '',
  selectedRole: '',
  password: '',
  bio: 'Pellentesque placerat arcu in risus facilisis, sed laoreet eros laoreet...',
  isSaudi: false,
  imageUri: null,
  date: new Date(),
  showDateOfBirthPicker: false,
  showLicenseExpirationDatePicker: false,
  emailError: '',
  phoneError: '',
  checkEmail: '',
  checkPassword: '',
  signature: null,
  isPasswordVisible: true,
    errorMessage: {
      email: '',
      password: '',
    },
  });
export const FormProvider = ({children}) => {
  const [formData, setFormData] = useState(initializeFormData());
  return (
    <FormContext.Provider value={{formData, setFormData}}>
      {children}
    </FormContext.Provider>
  );
};

// Custom hook to use the form context
// This hook provides access to formData and setFormData
export const useForm = () => useContext(FormContext);
