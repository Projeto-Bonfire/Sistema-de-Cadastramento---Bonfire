import React from 'react';
import { Container, ProgressStep, stepActive } from "./styles";

const ProgressBar = ({ currentStep }) => {
  return (
    <Container>
      <ProgressStep as={stepActive} />
      <ProgressStep as={currentStep >= 1 ? stepActive : ''}/>
      <ProgressStep as={currentStep >= 2 ? stepActive : ''}/>
    </Container>
  );
}

export default ProgressBar;
