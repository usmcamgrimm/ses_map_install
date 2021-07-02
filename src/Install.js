import React, { Component } from 'react';
import { useFormik } from 'formik'
import './App.css';
import { jsx, css } from '@emotion/react'
import styled from '@emotion/styled'

const FormWrapper = styled.div`
  margin: 0 auto;
  background-color: #031f30;
`

function Install() {
  const formik = useFormik({
    initialValues: {
      csNumber: '',
      customerName: '',
      addressField: '',
      cityField: '',
      stateField: '',
      zipField: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  })
  return (
    <FormWrapper>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="csNumber">CS Number</label>
        <input
          id="csNumber"
          name="csNumber"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.csNumber}
        />
        <label htmlFor="customerName">Customer</label>
        <input
          id="customerName"
          name="customerName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.customerName}
        />
        <label htmlFor="addressField">Address</label>
        <input
          id="addressField"
          name="addressField"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.addressField}
        />
        <label htmlFor="cityField">City</label>
        <input
          id="cityField"
          name="cityField"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.cityFIeld}
        />
        <label htmlFor="stateField">State</label>
        <input
          id="stateField"
          name="stateField"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.stateField}
        />
        <label htmlFor="zipField">ZIP</label>
        <input
          id="zipField"
          name="zipField"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.zipField}
        />
        <button type="submit">Submit</button>
      </form>
    </FormWrapper>
  );
}

export default Install;
