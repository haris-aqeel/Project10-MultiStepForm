import React from "react";
import { useFormik } from "formik";
import * as yup from "yup"; // for everything
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DateFnsUtils from '@date-io/date-fns';


import {   KeyboardDatePicker
    , MuiPickersUtilsProvider } from "@material-ui/pickers";
const Formthree = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const formik = useFormik({
    initialValues: {
      BankAccount: "",
      AccountNumber: 0,
      CardExpiryDate: "",
    },
    onSubmit: (values) => {
        console.log(values)
    },

    validationSchema: yup.object().shape({
      BankAccount: yup.string().required(),
      AccountNumber: yup
        .number()
        .min(13, "Your account number contains 13 characters")
        .max(13, "Your account number must contain 13 characters")
        .required(),
      CardExpiryDate: yup.date().required(),
    }),
  });

  return (
    <div>
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
              format="MM/dd/yyyy"
              value={formik.values.CardExpiryDate}
              onChange={formik.handleChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
              error={formik.touched.CardExpiryDate && Boolean(formik.errors.CardExpiryDate)}
              helperText={formik.touched.CardExpiryDate && formik.errors.CardExpiryDate}
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
};

export default Formthree;
