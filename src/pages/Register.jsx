import React, { useEffect, useState } from "react";
import { Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/user/userSlice";
import { loginUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

function Register() {
  const [values, setValues] = useState(initialState);
 const navigate = useNavigate()
  const { user, isLoading } = useSelector((store) => store.user);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(`${name} and ${value}`);
    setValues({ ...values, [name]: value });
  };
   useEffect(() => {
     if (user) {
       setTimeout(() => {
         navigate("/");
       }, 2000);
     }
   }, [user]);

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error("Please fill out fields");
      return;
    }

   

    if (isMember) {
      dispatch(loginUser({ email, password }));
      return;
    }
    dispatch(registerUser({ name, email, password }));
  };
  return (
    <Wrapper className="full-page">
      <form action="" onSubmit={onSubmit} className="form">
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>

        {/* name field*/}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}
        <FormRow
          type={"email"}
          name={"email"}
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
          type={"password"}
          name={"password"}
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          {isLoading? 'Loading...' : 'Submit'}
        </button>

        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}

          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
}

export default Register;
