import * as yup from "yup";

const formSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required("a username must be provided")
    .min(3, "must be at least 3 characters long"),
  password: yup
    .string()
    .required("no password provided")
    .min(5, "passwords must be at least 5 characters"),
});
export default formSchema;
