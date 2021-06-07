import { FieldProps } from 'formik';
import React from 'react';
import styled from '../../modules/styled';

const CustomInput = styled.input<{ hasError?: boolean }>`
  padding: 1rem 0.4rem;
  min-width: 250px;
  border: ${({ hasError, theme }) =>
    hasError
      ? `1.5px solid ${theme.colors.error}`
      : `none`};
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  font-size: 1.25rem;
  transition: 0.2s;

  @media (max-width: 435px) {
    font-size: 1rem;
  }
`;

const CustomSelect = styled.select<{ hasError?: boolean }>`
  padding: 1rem 0;
  min-width: 250px;
  border: ${({ hasError, theme }) =>
    hasError
      ? `1.5px solid ${theme.colors.error}`
      : `none`};
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  font-size: 1.25rem;
  transition: 0.2s;
  @media (max-width: 435px) {
    font-size: 1rem;
  }
`;

export const CustomErrorMessage = styled.span`
  display: block;
  font-size: 0.9rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.error};
  margin-top: -0.5rem;
  margin-bottom: 0.5rem;
`;

export const CustomInputComponent = ({
  field, 
  form: { touched, errors },
  type,
  ...props
}: FieldProps & { type?: string }) => (
  <>
    <CustomInput type={type} {...field} {...props} hasError={!!errors[field.name]} />
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