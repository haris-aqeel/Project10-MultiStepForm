import React from "react";
import { useFormik } from "formik";
import * as yup from "yup"; // for everything
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "70%",
    margin: "0 auto",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Formone = ({ handleNext }: { handleNext: () => void }) => {
  const classes = useStyles();

  let validationSchema = yup.object({
    firstName: yup
      .string()
      .required("Please enter your First Name")
      .min(3, "Name must be of more than 3 characters"),
    lastName: yup
      .string()
      .required("Please enter your Last Name")
      .min(3, "Name must be of more than 3 characters"),
    emailAddress: yup.string().email().required("Please enter valid email Address"),
    password: yup.string().min(5, 'Password must contain atleast 5 characters').required("Please enter valid password"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("js");
      console.log(values);
      handleNext();
    },
    validationSchema: validationSchema
  });

  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Personal Information
      </Typography>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="fname"
              name="firstName"
              variant="outlined"
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lname"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              id="email"
              label="Email Address"
              name="emailAddress"
              autoComplete="email"
              value={formik.values.emailAddress}
              onChange={formik.handleChange}
              error={
                formik.touched.emailAddress &&
                Boolean(formik.errors.emailAddress)
              }
              helperText={
                formik.touched.emailAddress && formik.errors.emailAddress
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I want to receive inspiration, marketing promotions and updates via email."
            />
          </Grid>
        </Grid>

        <Button color="primary" variant="contained" fullWidth type="submit" style={{marginTop: "20px"}}>
          Next
        </Button>
      </form>
    </div>
  );
};

export default Formone;
