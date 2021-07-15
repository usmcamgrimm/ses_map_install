import React from 'react'
import { Formik, Form, useField, Field } from 'formik'
import * as Yup from 'yup'
import Layout from '../components/Layout'

import styled from '@emotion/styled'

const Title = styled.h1`
  font-family: Securitas;
  font-size: 1.8rem;
  font-weight: normal;
  margin: 2rem;
  text-align: center;
`

const FormFields = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 125px 125px 125px 125pxx;
  grid-template-rows: auto;
  grid-template-areas:
    "csLabel . customerLabel ."
    "cs-area cs-area customer-area customer-area"
    "addressLabel . . ."
    "address-area address-area address-area address-area"
    "cityLabel . stateLabel zipLabel"
    "city-area city-area state-area zip-area";
  grid-gap: 12px;
  // border: 2px solid #fc273f;
  // border-radius: 6px;
  // padding: 12px 18px 12px 2px;
  // box-shadow: 0 4px 12px rgba(0, 0, 0, .5);
  margin-bottom: 2rem;
  width: 60vw;
  @media screen and (min-width: 1024px) {
    width: 30vw;
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
            css={{
              gridArea: "csLabel",
              paddingLeft: "2px"
            }}
          >
            CS Number
          </label>
          <InputField
            label="CS Number"
            name="csNumber"
            className="csInputField"
            type="text"
            placeholder="CS Number"
            css={{
              gridArea: "cs-area",
              padding: "4px",
              borderRadius: "4px"
            }}
          />

          <label
            htmlFor="customer"
            className="customerLabel"
            css={{
              gridArea: "customerLabel",
              paddingLeft: "2px"
            }}
          >
            Customer
          </label>
          <InputField
            label="Customer"
            name="customer"
            className="customerInputField"
            type="text"
            placeholder="Customer Name"
            css={{
              gridArea: "customer-area",
              padding: "4px",
              borderRadius: "4px"
            }}
          />

          <label
            htmlFor="address"
            className="addressLabel"
            css={{
              gridArea: "addressLabel",
              paddingLeft: "2px"
            }}
          >
            Address
          </label>
          <InputField
            label="Address"
            name="address"
            className="addressInputField"
            type="text"
            placeholder="Address"
            css={{
              gridArea: "address-area",
              padding: "8px",
              borderRadius: "4px"
            }}
          />

          <label
            htmlFor="city"
            className="cityLabel"
            css={{
              gridArea: "cityLabel",
              paddingLeft: "2px"
            }}
          >
            City
          </label>
          <InputField
            label="City"
            name="city"
            className="cityInputField"
            type="text"
            placeholder="City"
            css={{
              gridArea: "city-area",
              padding: "8px",
              borderRadius: "4px"
            }}
          />

          <label
            htmlFor="stateField"
            className="stateLabel"
            css={{
              gridArea: "stateLabel",
              paddingLeft: "2px"
            }}
          >
            State
          </label>
          <InputField
            label="State"
            name="stateField"
            className="stateInputField"
            type="text"
            placeholder="State"
            css={{
              gridArea: "state-area",
              padding: "8px",
              borderRadius: "4px"
            }}
          />

          <label
            htmlFor="zip"
            className="zipLabel"
            css={{
              gridArea: "zipLabel",
              paddingLeft: "2px"
            }}
          >
            Zip Code
          </label>
          <InputField
            label="ZIP"
            name="zip"
            className="zipInputField"
            type="text"
            placeholder="ZIP"
            css={{
              gridArea: "zip-area",
              padding: "8px",
              borderRadius: "4px"
            }}
          />
        </FormFields>

        <div class="checklistItems">
          {/* Radio button option groups will go in this section */}
          <div class="radioListOptions">
            This is a selection option.
          </div>
          <div role="group" aria-labelledby="radioListGroup">
            <label>
              <Field type="radio" name="select" value="Yes" />
              Yes
            </label>
            <label>
              <Field type="radio" name="select" value="N/A" />
              N/A
            </label>
          </div>

          <label htmlFor="installNotes">Install Notes</label>
          <Field
            name="installNotes"
            className="installNotes"
            placeholder="Enter any additional information here"
            type="text-area"
          />

          <button type="submit">Generate PCC</button>
        </div>
      </Form>
    </Layout>
    </Formik>
  )
}