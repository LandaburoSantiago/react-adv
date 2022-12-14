import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components";

import "../styles/styles.css";
export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page </h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "Debe tener minimo 2 caracteres")
            .max(15, "Debe tener 15 caraceteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .email("El formato del correo no es correcto")
            .required("Requerido"),
          password: Yup.string()
            .min(6, "Debe tener por lo menos 6 caracteres")
            .required("Requerido"),
          password2: Yup.string()
            .oneOf([Yup.ref("password")], "Las contraseñas no son iguales")
            .required("Requerido"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput name="name" label="Nombre" placeholder="Santiago" />
            <MyTextInput
              name="email"
              label="Correo electrónico"
              type="email"
              placeholder="Santiago"
            />
            <MyTextInput
              name="password"
              label="Contraseña"
              type="password"
              placeholder="Ingrese contraseña"
            />
            <MyTextInput
              name="password2"
              label="Repetir contraseña"
              type="password"
              placeholder="Repetir contraseña"
            />
            <button type="submit">Submit</button>
            <button type="button" onClick={formik.handleReset}>
              Resetear formulario
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
