import React from "react";
import { useFormik } from "formik";
import * as yup from "yup"; // for everything
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
 import 'date-fns'
 import DateFnsUtils from '@date-io/date-fns';

import {   KeyboardDatePicker
     , MuiPickersUtilsProvider } from "@material-ui/pickers";


 const Formthree = ({handleNext}: {handleNext: ()=> void}) => {


  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
   null
  );
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
 console.log(handleDateChange)


  const formik = useFormik({
    initialValues: {
      BankAccount: "",
      AccountNumber: 0,
    },
    onSubmit: (values) => {
      console.log("VALUES"+ values)
      handleNext()
    },

    validationSchema: yup.object().shape({
      BankAccount: yup.string().required(),
      AccountNumber: yup
        .number()
        .min(13, "Your account number contains 13 characters")
        .required(),
    }),
  });

  return (
    <div style= {{width: "100%", height: "100vh", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
      <form
        onSubmit={formik.handleSubmit}
        style={{ width: "70%", margin: "0 auto" }}
      >
        <Grid container spacing={2}>
          
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              id="BankAccount"
              label="Enter Name of Bank"
              name="BankAccount"
              autoComplete="BankAccount"
              value={formik.values.BankAccount}
              onChange={formik.handleChange}
              error={formik.touched.BankAccount && Boolean(formik.errors.BankAccount)}
              helperText={formik.touched.BankAccount && formik.errors.BankAccount}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              id="AccountNumber"
              label="Account Number"
              name="AccountNumber"
              autoComplete="AccountNumber"
              value={formik.values.AccountNumber}
              onChange={formik.handleChange}
              error={formik.touched.AccountNumber && Boolean(formik.errors.AccountNumber)}
              helperText={formik.touched.AccountNumber && formik.errors.AccountNumber}
            />
          </Grid>
          <Grid item xs={12}>
      
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Date picker dialog"
              type="text"
              views={['year', 'month', 'date']}
              value={selectedDate}
              format="dd/MM/yyyy"
              onChange = {setSelectedDate}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            </MuiPickersUtilsProvider>
          </Grid>
        </Grid>  
        <Button color="primary" variant="contained" fullWidth type="submit" style={{marginTop: "20px"}}>
          Submit Details
        </Button>
      </form>
    </div>
  );
        
            }

export default Formthree;
