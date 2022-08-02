import { gql, useMutation } from '@apollo/client';
import React from 'react'

const ADD_NEW_PRODUCT = gql`
mutation productCreate($title:String!, $productType:String!, $vendor:String!){
    productCreate(input : {title: $title, productType: $productType, vendor: $vendor}){
       product{
        id
        title
        productType
        vendor
       }
    }
}`;



export default function AddNewProduct() {
  let title, productType, vendor;
  const [productCreate, {data,loading,error}] = useMutation(ADD_NEW_PRODUCT);

  if(loading) return 'Submitting....';
  if(error) return `Submission error ! ${error.message}`;
  if(data) return `Product Added Successfully!`;

  return (
    <div>
        <form onSubmit={ e => {
            e.preventDefault();
            productCreate({variables:{title: title.value, productType: productType.value, vendor: vendor.value}})
        }}
        className='pure-form pure-form-aligned'
        >
        <fieldset>
            <div className='pure-control-group'>
                <label htmlFor="title">Title</label>
                <input ref={node => {title = node}} id='title' />
            </div>
            <div className='pure-control-group'>
                <label htmlFor="productType">productType</label>
                 <input ref={node => {productType = node}} id='productType' />
            </div>
            <div className='pure-control-group'>
                <label htmlFor="vendor">vendor</label>
                <input ref={node => {vendor = node}} id='vendor' />
            </div>
            <div className='pure-control-group'>
                <label htmlFor="button"></label>
                <button type='submit'>Add Product</button>
            </div>
            
        </fieldset>
        </form>
    </div>
  )
}
