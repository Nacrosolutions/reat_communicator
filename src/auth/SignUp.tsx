import { useForm } from "react-hook-form";
import { CenterWrapper, FormBox, StyledForm, StyledFormDiv, StyledImage } from "./SignUp.styles";
import { FormLabel } from "../utils/FormLabel";
import { Button } from "../utils/Button";
import illus from "../assets/Wavy_Tech-28_Single-10.jpg"; // added import
import { useNavigate } from "react-router-dom"; // if you are using react-router
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { signUpUser } from "./slices/authThunks";
import { useEffect } from "react";


interface FormValues {
  email: string;
  password: string;
  confirmpassword: string;
  name: string;
}

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  console.log("HELLO")  
  const { loading, role } = useSelector((state: RootState) => state.auth);


  const onSubmit = (data: FormValues) => {
    console.log("[DATA]",data);
    if (data.password !== data.confirmpassword) {
      throw new Error("Passowrd  does not match")
    }
   
      dispatch(signUpUser(data))
      navigate('/')
    
  };
    useEffect(() => {
      if (role === "admin") {
        navigate("/signup");
      } else if (role === "user") {
        navigate("/manageUser");
      }
    }, [role, navigate]);

  return (
    <CenterWrapper>

  <FormBox>
    <StyledFormDiv>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        
        <FormLabel htmlFor="name">Name</FormLabel>
        <input {...register("name", { required: true })} style={{marginBottom:"2rem"}} />
        {errors.name && <span>Name is required</span>}

        <FormLabel htmlFor="email">Email</FormLabel>
        <input {...register("email", { required: true })} style={{marginBottom:"2rem"}} />
        {errors.email && <span>Email is required</span>}

        <FormLabel htmlFor="password">Password</FormLabel>
        <input {...register("password", { required: true })} type="password"  style={{marginBottom:"2rem"}}/>
        {errors.password && <span>Password is required</span>}

        <FormLabel htmlFor="confirmpassword">Confirm Password</FormLabel>
        <input {...register("confirmpassword", { required: true })} type="password" style={{marginBottom:"2rem"}} />
        {errors.confirmpassword && <span>Confirm password is required</span>}

        {/* <button type="submit" style={{borderRadius:"1rem"}}>Submit</button> */}
            <Button 
              type="submit" 
              primary="orangeDark" 
              radius="2rem"
              disabled={loading}
            >
              {loading ? "Siginig in..." : "Register"}
            </Button>      </StyledForm>
          </StyledFormDiv>

      </FormBox>
             <StyledImage src={illus} alt="signup illustration" />

       </CenterWrapper>
  );
};

export default SignUp;
