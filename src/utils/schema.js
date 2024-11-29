// import * as Yup from "yup";

// export const Loginvalidationschema = Yup.object({
//   email: Yup.string()
//     .min(3, "must be at least 3 characters long")
//     .email("must be a valid email")
//     .required("Email is Required"),
//   password: Yup.string()
//     .required("Password is required")
//     .matches(
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{10,})/,
//       "Password Is Invalid"
//     ),
// });

// export const Signupvalidationschema = Yup.object({
//   first_name: Yup.string()
//     .min(2, "Too Short!")
//     .max(15, "Too Long!")
//     .required("First Name is Required"),
//   last_name: Yup.string()
//     .min(3, "Too Short!")
//     .max(15, "Too Long!")
//     .required("Last Name is Required"),
//   test_name: Yup.string()
//     .min(3, "Too Short!")
//     .max(15, "Too Long!")
//     .required("Test Name is Required"),
//   language: Yup.string()
//     .min(4, "Too Short!")
//     .max(15, "Too Long!")
//     .required("Language is Required"),
//   email: Yup.string()
//     .min(3, "must be at least 3 characters long")
//     .email("must be a valid email")
//     .required("Email is Required"),
//   password: Yup.string()
//     .required("Password is required")
//     .matches(
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{10,}$/,
//       "Min 10 chars, 1 upper, 1 lower, 1 number, 1 special"
//     ),

//   password_confirmation: Yup.string()
//     .required("Confirm Password is required")
//     .oneOf(
//       [Yup.ref("password"), null],
//       "Confirm Password must match with Password"
//     ),
// });

// export const Forgotvalidationschema = Yup.object({
//   email: Yup.string()
//     .min(3, "must be at least 3 characters long")
//     .email("must be a valid email")
//     .required("Email is Required"),
// });

// export const VerifyOtpschema = Yup.object({
//   code: Yup.string()
//     .min(3, "must be at least 3 characters long")
//     .max(7, "must be at least 3 characters long")
//     .required("Otp is Required"),
// });

// export const ResetPasswordschema = Yup.object({
//   password: Yup.string()
//     .required("Password is required")
//     .matches(
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{10,})/,
//       "Must Contain 10 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
//     ),
//     password_confirmation: Yup.string()
//     .required("Confirm Password is required")
//     .oneOf(
//       [Yup.ref("password"), null],
//       "Confirm Password must match with  Password"
//     ),
// });
