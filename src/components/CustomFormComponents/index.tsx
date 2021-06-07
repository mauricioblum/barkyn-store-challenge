import { FieldProps } from 'formik';
import React from 'react';
import styled from '../../modules/styled';

const CustomInput = styled.input<{ hasError?: boolean }>`
  padding: 0.3rem;
  min-width: 250px;
  border: ${({ hasError, theme }) =>
    hasError
      ? `1px solid ${theme.colors.error}`
      : `1px solid ${theme.colors.primary}`};
`;

const CustomSelect = styled.select<{ hasError?: boolean }>`
  padding: 0.3rem 0;
  min-width: 250px;
  border: ${({ hasError, theme }) =>
    hasError
      ? `1px solid ${theme.colors.error}`
      : `1px solid ${theme.colors.primary}`};
`;

export const CustomErrorMessage = styled.span`
  display: block;
  font-size: 0.7rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.error};
  margin-top: -0.5rem;
  margin-bottom: 0.5rem;
`;

export const CustomInputComponent = ({
  field, 
  form: { touched, errors },
  ...props
}: FieldProps) => (
  <>
    <CustomInput {...field} {...props} hasError={!!errors[field.name]} />
    {touched[field.name] &&
      errors[field.name] && <CustomErrorMessage className="error">{errors[field.name]}</CustomErrorMessage>}
  </>
);

export const CustomSelectComponent = ({
  field, 
  form: { touched, errors },
  ...props
}: FieldProps) => (
  <>
    <CustomSelect {...field} {...props} hasError={!!errors[field.name]} />
    {touched[field.name] &&
      errors[field.name] && <CustomErrorMessage className="error">{errors[field.name]}</CustomErrorMessage>}
  </>
);