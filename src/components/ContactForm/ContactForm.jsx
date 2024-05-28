import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Phone number is not valid")
    .required("Required"),
});

const ContactForm = ({ onAdd }) => {
  const nameField = useId();
  const numberField = useId();

  const handleSubmit = (values, actions) => {
    onAdd({ ...values, id: nanoid() });
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={FormSchema}
    >
      <Form className={css.formContainer}>
        <label htmlFor={nameField}>Name</label>
        <Field
          className={css.input}
          type="text"
          name="name"
          id={nameField}
        ></Field>
        <label htmlFor={numberField}>Number</label>
        <Field
          className={css.input}
          type="number"
          name="number"
          id={numberField}
        ></Field>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
