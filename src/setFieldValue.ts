import { FormikProps } from "formik";

export const setFieldValue = (form: FormikProps<any>, name: string, value: any, 
              shouldValidate? : boolean) => {
    form.setFieldValue(name, value, shouldValidate);
    form.setFieldTouched(name, true, shouldValidate);
  };