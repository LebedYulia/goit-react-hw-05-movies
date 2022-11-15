import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { IoIosSearch } from 'react-icons/io';
import { Form, Field, SearchFormButton } from './SearchForm.styled';

const schema = yup.object().shape({
  inputValue: yup.string(),
});



export const SearchForm = ({ searchValue, onSubmit }) => { 


  const handleSubmit = value => {
    if (value.inputValue.trim() === '') {
      toast.error('Please, enter search query!');
      return;
    }
    onSubmit(value);};

 

  return (
    <>
      <Formik
        initialValues={{ inputValue: searchValue }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <SearchFormButton type="submit">
            <IoIosSearch size="1.5em" />
          </SearchFormButton>

          <Field
            type="text"
            name="inputValue"                      
            placeholder="Search movies"
          />
          <ErrorMessage name="inputValue" />
        </Form>
      </Formik>
    </>
  );
};

SearchForm.propTypes = {
  searchValue: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
