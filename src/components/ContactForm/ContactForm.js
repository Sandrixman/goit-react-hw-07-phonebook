import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/phonebookSlice/slice';
import { Formik, Field, ErrorMessage } from 'formik';
import { string, number, object } from 'yup';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { FormStyled, ErrorText, Label, Button } from './ContactForm.styled';

const id = nanoid();

const ContactForm = () => {
  const contacts = useSelector(state => state.phonebook.contacts);
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    number: '',
  };

  const schema = object({
    name: string().required(),
    number: number().required().positive().integer(),
  });

  const FormError = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={message => <ErrorText>{message}</ErrorText>}
      />
    );
  };

  const handleSubmit = (values, { resetForm }) => {
    const isContactExists = contacts.some(
      contact => contact.name === values.name
    );

    isContactExists
      ? toast.error(`${values.name} is already in contacts`, {
          position: 'top-center',
        })
      : dispatch(addContact({ ...values, id: nanoid() }));

    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <FormStyled>
          <Label htmlFor={id}>Name</Label>
          <Field
            id={id}
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <FormError name="name" />
          <Label htmlFor={id}>Number</Label>
          <Field
            id={id}
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <FormError name="number" />
          <Button type="submit">Add contact</Button>
        </FormStyled>
      </Formik>
    </>
  );
};

export default ContactForm;
