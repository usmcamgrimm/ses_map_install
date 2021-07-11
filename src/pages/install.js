import React from 'react'
import { Formik, Form, useField, Field } from 'formik'
import * as Yup from 'yup'
import Layout from '../components/Layout'

import styled from '@emotion/styled'

const title = styled.h1`
  font-family: Securitas;
  font-size: 1.8rem;
  font-weight: normal;
  margin-top: 2rem;
  text-align: center;
`
const InputField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="input-field" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  )
}

export default function Install() {
  return (
    <Formik
      initialValues={{
        csNumber: '',
        customer: '',
        address: '',
        city: '',
        stateField: '',
        zip: '',
      }}
      validationSchema={Yup.object({
        csNumber: Yup.string()
          .max(8, 'Enter a valid CS Number')
          .required('Required'),
        customer: Yup.string()
          .required('Required'),
        address: Yup.string()
          .required('Required'),
        city: Yup.string()
          .required('Required'),
        stateField: Yup.string()
          .max(2, 'Enter a valid State')
          .required('Required'),
        zip: Yup.string()
          .max(5, 'Enter a valid zip code')
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
    <Layout>
      <title>
        Installation Checklist
      </title>
      <Form>
        <InputField
          label="CS Number"
          name="csNumber"
          type="text"
          placeholder="CS Number"
        />

        <InputField
          label="Customer"
          name="customer"
          type="text"
          placeholder="Customer Name"
        />

        <InputField
          label="Address"
          name="address"
          type="text"
          placeholder="Address"
        />

        <InputField
          label="City"
          name="city"
          type="text"
          placeholder="City"
        />

        <InputField
          label="State"
          name="stateField"
          type="text"
          placeholder="State"
        />

        <InputField
          label="ZIP"
          name="zip"
          type="text"
          placeholder="ZIP"
        />

        {/* Radio button option groups will go in this section */}

        <label htmlFor="installNotes">Install Notes</label>
        <Field
          name="installNotes"
          className="installNotes"
          placeholder="Enter any additional information here"
          type="text-area"
        />

        <button type="submit">Generate PCC</button>
      </Form>
    </Layout>
    </Formik>
  )
}