import { useForm } from "react-hook-form";
import { CenterWrapper, FormBox, StyledForm, StyledFormDiv, StyledImage } from "./SignUp.styles";
import { FormLabel } from "../utils/FormLabel";
import { Button } from "../utils/Button";
import illus from "../assets/Wavy_Tech-28_Single-10.jpg"; // added import

interface FormValues {
  email: string;
  password: string;
}

const SignIn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <CenterWrapper>

  <FormBox>
    <StyledFormDiv>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        
     
        <FormLabel htmlFor="email">Email</FormLabel>
        <input {...register("email", { required: true })} style={{marginBottom:"2rem"}} />
        {errors.email && <span>Email is required</span>}

        <FormLabel htmlFor="password">Password</FormLabel>
        <input {...register("password", { required: true })} type="password"  style={{marginBottom:"2rem"}}/>
        {errors.password && <span>Password is required</span>}


        {/* <button type="submit" style={{borderRadius:"1rem"}}>Submit</button> */}
        <Button type="submit" primary radius="1rem">Log in</Button>
      </StyledForm>
          </StyledFormDiv>

      </FormBox>
             <StyledImage src={illus} alt="signup illustration" />

       </CenterWrapper>
  );
};

export default SignIn;
