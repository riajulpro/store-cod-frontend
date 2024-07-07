"use client";
import { useAppSelector } from "@/redux/hook";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import PhoneInput, {
  isPossiblePhoneNumber,
  isValidPhoneNumber,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { toast } from "sonner";
import * as Yup from "yup";

interface FormValues {
  firstName?: string;
  lastName?: string;
  address?: string;
}
const validationSchema = Yup.object({
  firstName: Yup.string().optional(),
  lastName: Yup.string().optional(),
  address: Yup.string().optional(),
});

// Define the submit handler

const ProfileUpdate = () => {
  const { user } = useAppSelector((state) => state.auth);
  const {
    firstName,
    address,
    lastName,
    contactNumber: userContact,
  } = user || {};
  const [contactNumber, setContactNumber] = useState(userContact || "");
  const [contactErr, setContactErr] = useState("");
  const initialValues = {
    firstName,
    lastName,
    address,
  };
  const onSubmit = (values: FormValues) => {
    if (!contactNumber && userContact) {
      return setContactErr("You can't empty this feild ");
    }


    if (
      contactNumber &&
      (!isPossiblePhoneNumber(contactNumber) ||
        !isValidPhoneNumber(contactNumber))
    ) {
      return setContactErr("Invalid Contact number");
    }

    setContactErr("");
    toast.success("yee");
  };
  return (
    <div className="w-full">
      <h1 className="text-[25px] font-[600] mb-[20px]">Update Information</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="mb-4">
            <label className="block text-primaryTxt text-[18px] font-[600]">
              First Name
            </label>
            <Field
              type="text"
              name="firstName"
              className="mt-1 block w-full px-3 py-2 border border-borderColor rounded-md outline-none"
            />
            <ErrorMessage
              name="firstName"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="mb-4">
            <label className="block text-primaryTxt text-[18px] font-[600]">
              Last Name
            </label>
            <Field
              type="text"
              name="lastName"
              className="mt-1 block w-full px-3 py-2 border border-borderColor rounded-md outline-none"
            />
            <ErrorMessage
              name="lastName"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="mb-4">
            <label className="block text-primaryTxt text-[18px] font-[600]">
              Contact Number
            </label>
            <PhoneInput
              defaultCountry="BD"
              countryCallingCodeEditable={false}
              international
              value={contactNumber}
              onChange={(e) => setContactNumber(e as string)}
              className={`mt-1 block w-full px-3 py-2 border border-borderColor rounded-md outline-none ${
                contactErr ? "border-red-500" : ""
              }`}
            />
            <span className="text-red-500 text-sm">{contactErr}</span>
          </div>

          <div className="mb-4">
            <label className="block text-primaryTxt text-[18px] font-[600]">
              Address
            </label>
            <Field
              type="text"
              name="address"
              className="mt-1 block w-full px-3 py-2 border border-borderColor rounded-md outline-none"
            />
            <ErrorMessage
              name="address"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ProfileUpdate;
