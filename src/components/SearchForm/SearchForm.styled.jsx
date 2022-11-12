import {
    Form as FormikForm,
    Field as FormikField,    
  } from 'formik';
  import styled from '@emotion/styled';  

  
  export const Form = styled(FormikForm)`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
  `;
  
  export const Field = styled(FormikField)`
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 20px;
    border: 1px solid grey;
    border-radius: 4px;
    outline: none;
    padding: 10px;
    
      &::placeholder {
    font: inherit;
    font-size: 18px;
  }
  `;
  
  export const SearchFormButton = styled.button`
    display: inline-block;
    width: 48px;
    height: 48px;
    border: 0; 
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
     &:hover {
      opacity: 1;
  }
  `;