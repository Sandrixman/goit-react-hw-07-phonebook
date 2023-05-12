import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operation';
import { Formik, Field, ErrorMessage } from 'formik';
import { string, object } from 'yup';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { FormStyled, ErrorText, Label, Button } from './ContactForm.styled';

const id = nanoid();

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    phone: '',
  };

  const schema = object({
    name: string().required(),
    phone: string().required(),
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
      : dispatch(addContact(values));

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
            name="phone"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <FormError name="phone" />
          <Button type="submit">Add contact</Button>
        </FormStyled>
      </Formik>
    </>
  );
};

export default ContactForm;
