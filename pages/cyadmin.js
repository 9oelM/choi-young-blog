import React from "react";
import LoginForm from 'grommet/components/LoginForm';

export default () => (<LoginForm onSubmit={f=>f}
  title='Sample Title'
  rememberMe={false}
  usernameType='text' />);