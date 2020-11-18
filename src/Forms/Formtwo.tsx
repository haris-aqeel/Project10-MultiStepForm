import React from "react";
import { useFormik } from "formik";
import * as yup from "yup"; // for everything
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";


const Formtwo = ({handleNext}: {handleNext: ()=> void}) => {



  const formik = useFormik({
    initialValues: {
      description: "",
      github: "",
      linkeden: "",
      facebook: "",
    },
    onSubmit: (values) => {
      console.log(values);
      handleNext()
    },

    validationSchema: yup.object({
      description: yup
        .string()
        .min(50, "(Description < 50) Enter more words...")
        .required(),

      github: yup.string().url().required(),

      linkeden: yup.string().url().required(),

      facebook: yup.string().url().required(),
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
              id="outlined-multiline-static"
              label="description"
              multiline
              fullWidth
              rows={4}
              variant="outlined"
              name = "description"
              onChange={formik.handleChange}
              value = {formik.values.description}
              error = {formik.touched.description && Boolean(formik.errors.description)}
              helperText = {formik.touched.description && formik.errors.description}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              id="github"
              label="Github URL"
              name="github"
              autoComplete="github"
              value={formik.values.github}
              onChange={formik.handleChange}
              error={
                formik.touched.github &&
                Boolean(formik.errors.github)
              }
              helperText={
                formik.touched.github && formik.errors.github
              }
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              id="linkeden"
              label="Linkeden URL"
              name="linkeden"
              autoComplete="linkeden"
              value={formik.values.linkeden}
              onChange={formik.handleChange}
              error={
                formik.touched.linkeden &&
                Boolean(formik.errors.linkeden)
              }
              helperText={
                formik.touched.linkeden && formik.errors.linkeden
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              id="facebook"
              label="Facebook URL"
              name="facebook"
              autoComplete="facebook"
              value={formik.values.facebook}
              onChange={formik.handleChange}
              error={
                formik.touched.facebook &&
                Boolean(formik.errors.facebook)
              }
              helperText={
                formik.touched.facebook && formik.errors.facebook
              }
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

export default Formtwo;
