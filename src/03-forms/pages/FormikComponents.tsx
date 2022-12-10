import { useFormik, Formik, Field, Form, ErrorMessage } from "formik";

import * as Yup from "yup";

import "../styles/styles.css";
export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik components </h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe tener 15 caraceteres o menos")
            .required("Requerido"),
          lastName: Yup.string()
            .max(10, "Debe tener 10 caraceteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .email("El formato del correo no es correcto")
            .required("Requerido"),
          jobType: Yup.string()
            .required("Requeridp")
            .notOneOf(["it-junior"], "Esta opción no es permitida"),
          terms: Yup.boolean().oneOf([true], "Debe de aceptar las condicinoes"),
        })}
      >
        {(formik) => (
          <Form>
            <label htmlFor="firstName">First name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage name="firstName" component="span" />
            <label htmlFor="lastName">Last name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" component="span" />
            <label htmlFor="email">Email address</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="span" />
            <label htmlFor="jobType">Job type</label>
            <Field name="jobType" type="jobType" as="select">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-junior">It junior</option>
              <option value="it-senior">It senior</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />
            <label>
              <Field name="terms" type="checkbox" />
              Terms and conditions
            </label>
            <ErrorMessage name="terms" component="span" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
