import styled from 'styled-components';
import { Button, Card, TextField, Typography } from '@material-ui/core';
import { Spinner, SpinnerProps } from '../../molecules/Spinner/Styled';
import React from 'react';
import { CardProps } from '@material-ui/core/Card';

export const StyledTitleField = styled(TextField)`
  grid-column: 1 / span 2;
`;

export const StyledContentField = styled(TextField)`
  grid-column: 1 / span 3;
`;

export const StyledTypography = styled(Typography)`
  grid-column: 1 / span 3;
`;

export const StyledCard = styled(({ isLoading, ...props }: SpinnerProps & CardProps) => <Card {...props} />)`
  ${Spinner}
  margin: 16px;
`;

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-gap: 1rem;
  margin: 16px;
  padding: 16px;
`;

export const StyledWrapper = styled.div`
  position: relative;
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 16px;
  padding: 16px;
`;

export const StyledCancelButton = styled(Button)`
  margin-left: 16px;
`;
