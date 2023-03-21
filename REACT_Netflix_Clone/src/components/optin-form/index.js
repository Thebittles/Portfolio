import React from 'react';
import {Container, Input, Button, Text, Break} from './styles/optin-form';

export default function OptinForm({ children, ...restProps}) {
return <Container {...restProps}>{children}</Container>;
};

OptinForm.Input = function OptinFormInput({ ...restProps}) {
  return <Input {...restProps} />;
};

OptinForm.Button = function OptinFormButton({ children, ...restProps }) {
  return(
    <Button {...restProps}>
      {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

OptinForm.Text = function OptinFormText({ children, ...restProps}) {
return <Text {...restProps}>{children}</Text>;
};

OptinForm.Break = function OptinFormBreak({ ...restProps}) {
  return <Break { ...restProps} />
}

