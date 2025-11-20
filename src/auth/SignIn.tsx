import { useForm } from "react-hook-form";
import { CenterWrapper, FormBox, StyledForm, StyledFormDiv, StyledImage, StyledPara } from "./SignUp.styles";
import { FormLabel } from "../utils/FormLabel";
import { Button } from "../utils/Button";
import illus from "../assets/Wavy_Tech-28_Single-10.jpg";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store/store";
import { loginUser } from "./slices/authThunks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // if you are using react-router
import { fetchUsers } from "../components/users/slices/userThunks";

interface FormValues {
  email: string;
  password: string;
}

const SignIn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { loading, error, role } = useSelector((state: RootState) => state.auth);

  const onSubmit = async (data: FormValues) => {
     const result = await dispatch(loginUser(data));

  if (result.meta.requestStatus === "fulfilled") {
    console.log("TRIGGER");
    dispatch(fetchUsers());  // ← THIS WAS MISSING
  }
  
    
  };

  // Redirect based on role when login succeeds
  useEffect(() => {
    if (role === "admin") {
      navigate("/");
    } else if (role === "user") {
      navigate("/manageUser");
    }
  }, [role, navigate]);

  return (
    <CenterWrapper>
      <FormBox>
        <StyledFormDiv>
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            
            <StyledPara>Login</StyledPara>

            {/* Display errors from backend */}
            {error && (
              <p style={{ color: "red", marginBottom: "1rem" }}>
                {error}
              </p>
            )}

            <FormLabel htmlFor="email">Email</FormLabel>
            <input 
              {...register("email", { required: "Email is required" })}
              style={{ marginBottom: "1rem" }}
            />
            {errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}

            <FormLabel htmlFor="password">Password</FormLabel>
            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              style={{ marginBottom: "1rem" }}
            />
            {errors.password && <span style={{ color: "red" }}>{errors.password.message}</span>}

            <Button 
              type="submit" 
              primary="orangeDark" 
              radius="2rem"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Log in"}
            </Button>

          </StyledForm>
        </StyledFormDiv>
      </FormBox>

      <StyledImage src={illus} alt="signup illustration" />
    </CenterWrapper>
  );
};

export default SignIn;
