import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyCheckbox, MySelect, MyTextInput } from "../components";
import "../styles/styles.css";
export const FormikAbstractation = () => {
  return (
    <div>
      <h1>Formik Abstractation </h1>
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
            <MyTextInput
              label="First name"
              name="firstName"
              placeholder="Santiago"
            />
            <MyTextInput
              label="Last name"
              name="lastName"
              placeholder="Landaburo"
            />
            <MyTextInput
              label="Email"
              name="email"
              placeholder="santiagol@bombieri.com.ar"
              type="email"
            />
            <MySelect label="Job type" name="jobType">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-junior">It junior</option>
              <option value="it-senior">It senior</option>
            </MySelect>
            <MyCheckbox label="Terms and conditions" name="terms" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
