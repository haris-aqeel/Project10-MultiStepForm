import React from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup'; // for everything
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: "20px",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: "70%",
      margin: "0 auto"
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));



const Formone = () => {

    const classes = useStyles();


    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            emailaddress: "",
            password: "",
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validationSchema: yup.object().shape({
            firstName: yup.string()
                       .required('Please enter your First Name')
                       .min(3, 'Name must be of more than 3 characters'),
            lastName: yup.string()
                       .required('Please enter your Last Name')
                       .min(3, 'Name must be of more than 3 characters'),
            emailaddress: yup.string().required('Please enter valid email Address'), 
            password: yup.string().required('Please enter valid password'), 
        })

    })

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
                onChange = {formik.handleChange}
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
                onChange = {formik.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={formik.values.emailaddress}
                onChange = {formik.handleChange}
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
                onChange = {formik.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <button type="submit">submit</button>
          
        </form>
      </div>
    )
}

export default Formone
