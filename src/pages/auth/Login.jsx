import { useState } from "react";
import { LockIcon } from "../../shared/Icons/LockIcon";
import { UserIcon } from "../../shared/Icons/UserIcon";
import { Button } from "../../shared/UI/Button/Button";
import { Input } from "../../shared/UI/Input/Input";
import "./Login.scss";

export const Login = () => {
  const [value, setValue] = useState();
  const handleValueChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <div className="login">
      <Input value={value} setValue={handleValueChange} placeholder="Enter your email" type="email" className="login__input" icon={<UserIcon/>} />
      <Input placeholder="Enter your password" type="password" className="login__input" icon={<LockIcon/>} />
      <Button className="login__btn" type="submit" variant="primary" label="Login to Continue"/>
    </div>
  )
}

