import React from 'react'
import { Formik, Form, useField, Field } from 'formik'
import * as Yup from 'yup'
import Layout from '../components/Layout'

import styled from '@emotion/styled'

const Title = styled.h1`
  font-family: Securitas;
  font-size: 1.8rem;
  font-weight: normal;
  margin-top: 2rem;
  text-align: center;
`

const FormFields = styled.div`
  display: grid;
  grid-template-columns: 125px 125px 125px 125pxx;
  grid-template-rows: auto;
  grid-template-areas:
    "csLabel . customerLabel ."
    "cs-area cs-area customer-area customer-area"
    "address-label . . ."
    "address-area address-area address-area address-area"
    "city-label . state-label zip-label"
    "city-area city-area state-area zip-area";
  grid-gap: 12px;
  border: 2px solid #fc273f;
  border-radius: 6px;
  padding: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, .5);
  margin-bottom: 2rem;
`

const InputField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
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
      <Title>
        Installation Checklist
      </Title>
      <Form>
        <FormFields>
          <label
            htmlFor="csNumber"
            className="csLabel"
          >
            CS Number
          </label>
          <InputField
            label="CS Number"
            name="csNumber"
            className="csInputField"
            type="text"
            placeholder="CS Number"
          />

          <label
            htmlFor="customer"
            className="customerLabel"
          >
            Customer
          </label>
          <InputField
            label="Customer"
            name="customer"
            className="customerInputField"
            type="text"
            placeholder="Customer Name"
          />

          <label
            htmlFor="address"
            className="addressLabel"
          >
            Address
          </label>
          <InputField
            label="Address"
            name="address"
            className="addressInputField"
            type="text"
            placeholder="Address"
          />

          <label
            htmlFor="city"
            className="cityLabel"
          >
            City
          </label>
          <InputField
            label="City"
            name="city"
            className="cityInputField"
            type="text"
            placeholder="City"
          />

          <label
            htmlFor="stateField"
            className="stateLabel"
          >
            State
          </label>
          <InputField
            label="State"
            name="stateField"
            className="stateInputField"
            type="text"
            placeholder="State"
          />

          <label
            htmlFor="zip"
            className="zipLabel"
          >
            Zip Code
          </label>
          <InputField
            label="ZIP"
            name="zip"
            className="zipInputField"
            type="text"
            placeholder="ZIP"
          />
        </FormFields>

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