import { useState } from "react";
import { Button, Input, Link, Checkbox, Divider } from "@nextui-org/react";
import { Formik } from "formik";
import * as yup from "yup";
//import PhoneInput from 'react-phone-number-input'
//import flags from 'react-phone-number-input/flags'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import {Select, SelectItem} from "@nextui-org/react";
import {countries} from "./countrys";

const registerSchema = yup.object().shape({
  firstName: yup.string().required("required"),

  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

const residencySchema = yup.object().shape({
  phone: yup
  .string().required('required'),
  address: yup
  .string().required('required'),
  country: yup
  .string().required('required'),
});

const initialValuesRegister = {
  firstName: "",
  email: "",
  password: "",
  polityc: "",
};

const initialValuesResidency = {
  phone: "",
  address: "",
  country: "",
};

const Form = () => {
  const [pageType, setPageType] = useState("complete");
 
  
  const isResidency = pageType === "home";
  const isRegister = pageType === "register";
  const isProfile = pageType === "complete";
  const isComplete = pageType === "completeprofile";
  

  const register = async (values, onSubmitProps) => {
    const formData = new FormData();
    for (let value in values) {
      formData.append(value, values[value]);
    }
    // Afficher toutes les paires clé-valeur de formData dans la console
  for (let pair of formData.entries()) {
    console.log(pair[0] + ': ' + pair[1]);
  }
    onSubmitProps.resetForm();

    if (formData) {
      
      setPageType("home");
    }
  };

  

  const handleFormSubmit = async (values, onSubmitProps) => {
    
    if (isRegister) await register(values, onSubmitProps);
  };

  const colors = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
  ];

  return (
    
    <div className="p-4 min-w-full">
      {isProfile ? (<div><Link
              onClick={() => {
                setPageType(isProfile? "register" : "complete");
                
              }}
              className="text-blue-500 underline cursor-pointer hover:text-blue-400"
              as="span"
            >
              {isProfile ? "Already have an account?Sign in" : "Back"}
            </Link></div>) 
      
      
      
      : (<Formik
        onSubmit={handleFormSubmit}
        initialValues={isResidency ? initialValuesResidency : initialValuesRegister}
        validationSchema={isResidency ? residencySchema: registerSchema}
        
      >

        
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          resetForm,
        }) => (
          <form onSubmit={handleSubmit} className=" bg-white ">
            
            {
              isRegister ? (
                <div className="flex flex-col items-end">
                    <h4 className="text-lg font-semibold">STEP 01/03</h4>
                    <span className="text-gray-600">Personal Info</span>
                  </div>
              ) : (
                <div className="flex flex-col items-end">
                    <h4 className="text-lg font-semibold">STEP 01/03</h4>
                    <span className="text-gray-600">Residency Info</span>
                  </div>
              )
            }
            {isRegister ? (
                         <h1 className="text-lg font-semibold">
                         Register Individual Account
                         </h1>
                        ) : (
                          <h1 className="text-lg font-semibold">
                          Complete Your Profile
                          </h1>
                         ) }
                  
                  <h6 className="text-gray-600 mb-4">
                    For the purpose of industry regulation,
                    <br /> details are required
                  </h6>
                  <br/>
                  
                  <Divider />

                  <br/>

            <div className="flex flex-col gap-3 ">
              {isRegister ? (
                <>
                  

                  
                  <Input
                    label="Your fullname*"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.firstName}
                    name="firstName"
                    status={
                      touched.firstName && errors.firstName
                        ? "error"
                        : "default"
                    }
                    helperText={touched.firstName && errors.firstName}
                    placeholder="invictus Innocent"
                    variant="bordered"
                    labelPlacement="outside"
                    size="lg"
                  />

                  <Input
                    label="Email adress*"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    error={Boolean(touched.email) && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    placeholder="Enter email adress"
                    variant="bordered"
                    labelPlacement="outside"
                    size="lg"
                  />
                  <Input
                    label="Create password*"
                    type="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                    name="password"
                    error={
                      Boolean(touched.password) && Boolean(errors.password)
                    }
                    helperText={touched.password && errors.password}
                    placeholder="Enter your password"
                    variant="bordered"
                    labelPlacement="outside"
                    size="lg"
                  />

                  <Checkbox
                    defaultSelected
                    radius="none"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.polityc}
                    name="polytic"
                    status={
                      touched.polityc && errors.polityc ? "error" : "default"
                    }
                    helperText={touched.polityc && errors.polityc}
                  >
                    I agree to terms & conditions
                  </Checkbox>
                  <Button
                    type="submit"
                    color="primary"
                    className="w-full hover:bg-blue-600 text-black"
                       >
                    {isRegister ? "Register Account" : "Save & Continue"}
                 </Button>
              <div className="flex items-center my-4">
                <Divider className="flex-grow w-10" />
                <span className="mx-2 text-gray-500"> Or </span>
                <Divider className="flex-grow w-10" />
              </div>

              <Button color="primary" className="w-full  text-black">
                Continue with Google
              </Button>
                </>
              ) : (
                <>
                
                <Link
              onClick={() => {
                setPageType(isRegister? "home" : "register");
                resetForm();
              }}
              className="text-blue-500 underline cursor-pointer hover:text-blue-400"
              as="span"
            >
              {isRegister ? "Back" : "Back"}
            </Link>
            <div className="flex flex-col gap-3 ">
      {isResidency ? (<div>
        
        <div className="flex flex-col mb-4">
      <label className="text-gray-700 mb-1">Phone Number</label>
      <PhoneInput
        country={'us'}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.phone}
        inputClass={`
          border 
          ${phone ? 'border-gray-300' : 'border-red-500'} 
          p-2 
          rounded-lg 
          transition 
          duration-200 
          ease-in-out 
          focus:outline-none 
          focus:ring-2 
          focus:ring-blue-500 
          w-full 
        `}
        buttonClass="bg-gray-200"
        dropdownClass="bg-white"
        specialLabel=""
      />
    </div>
    <Input
                    label="Your address*"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.address}
                    name="address"
                    status={
                      touched.address && errors.address
                        ? "error"
                        : "default"
                    }
                    helperText={touched.address && errors.address}
                    placeholder="Please enter address"
                    variant="bordered"
                    labelPlacement="outside"
                    size="lg"
                  />



<Select
      items={countries}
      label="Country of residence*"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.country}
                    name="address"
                    status={
                      touched.country && errors.country
                        ? "error"
                        : "default"
                    }
                    helperText={touched.country && errors.country}
                    placeholder="Please select"
                    variant="bordered"
                    labelPlacement="outside"
                    size="lg"
    >
      {(countrie) => (
        <SelectItem key={countrie.code} textValue={countrie.name}>
          <div className="flex gap-2 items-center">
            
            <div className="flex flex-col">
              <span className="text-small">{countrie.name}</span>
              
            </div>
          </div>
        </SelectItem>
      )}
    </Select>

    <Button
                    type="submit"
                    color="primary"
                    className="w-full hover:bg-blue-600 text-black"
                       >
                    Save & Continue
                 </Button></div>) : (<div>hello</div>)}</div>
                 </>
                
              )}
            
            
            
             
              
            </div>
          </form>
        )}
      </Formik>)}
      
    </div>
  );
};

export default Form;
