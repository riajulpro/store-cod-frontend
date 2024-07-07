"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  orderId: Yup.string().required("Order ID is required"),
});

const trackOrder = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white p-8 rounded w-full">
        <h2 className="text-2xl font-bold mb-6">Orders tracking</h2>
        <p className="mb-6">
          To track your order please enter your Order ID in the box below and
          press &quot;Track&quot; button. This was given to you on your receipt
          and in the confirmation email you should have received.
        </p>
        <Formik
          initialValues={{ orderId: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
            // Add your tracking logic here
          }}
        >
          {({ touched, errors }) => (
            <Form>
              <div className="mb-4">
                <label htmlFor="orderId" className="block text-primaryTxt">
                  Order ID
                </label>
                <Field
                  id="orderId"
                  name="orderId"
                  type="text"
                  className={`mt-1 outline-none block w-full p-2 border rounded ${
                    touched.orderId && errors.orderId
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                <ErrorMessage
                  name="orderId"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primaryMat text-white p-2 rounded"
              >
                Track
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default trackOrder;
