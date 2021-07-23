import React from "react";
import LoginForm from "../components/LoginForm";
import { Card, Tab, Tabs } from "@blueprintjs/core";
import { useState } from "react";
import Login from "../components/LoginForm";
import Signup from "../components/SignupForm";

function LoginScreen() {
  const [currentTab, setCurrentTab] = useState("login");
  return (<Card elevation="1">
    <Tabs id="Tabs" onChange={setCurrentTab} selectedTabId={currentTab}>
      <Tab id="login" title="Login" panel={<Login />} />
      <Tab id="Signup" title="Signup" panel={<Signup />} />
      <Tabs.Expander />
    </Tabs>
  </Card>)(<LoginForm />);
}
export default LoginScreen;
