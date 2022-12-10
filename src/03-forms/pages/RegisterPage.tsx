import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";
import "../styles/styles.css";
export const RegisterPage = () => {
  const {
    onChange,
    formData,
    name,
    password,
    email,
    password2,
    resetForm,
    isValidEmail,
  } = useForm({
    name: "asd",
    email: "asd@asd.com",
    password: "asd",
    password2: "asdasdsa",
  });
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={onSubmit}>
        <input
          name="name"
          onChange={onChange}
          value={name}
          type="text"
          placeholder="Name"
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}
        <input
          name="email"
          onChange={onChange}
          value={email}
          type="email"
          placeholder="Email"
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>El email no es valido</span>}
        <input
          name="password"
          onChange={onChange}
          value={password}
          type="password"
          placeholder="Password"
        />
        {password.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password.trim().length < 6 && (
          <span>La contraseña tiene que tener mas de 6 caracteres</span>
        )}
        <input
          name="password2"
          onChange={onChange}
          value={password2}
          type="password"
          placeholder="Repeat password"
        />
        {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password2.trim().length > 0 && password !== password2 && (
          <span>Las contraseñas deben ser iguales</span>
        )}

        <button type="submit">Create</button>
        <button onClick={resetForm}>Reset</button>
      </form>
    </div>
  );
};
