import React from "react";
import LoginForm from 'grommet/components/LoginForm';
import Layout from "../components/layout";
import Card from "grommet/components/Card";
import Box from "grommet/components/Box";
import Grommet from "grommet";

export default () => (
    <Layout>
    <LoginForm onSubmit={f=>f}
  title='Admin login'
  rememberMe={true}
  secondaryText='Welcome, 형'
  usernameType='text' />
  </Layout>
 );