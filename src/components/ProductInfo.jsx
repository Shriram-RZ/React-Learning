import React from 'react'

const ProductInfo = () => {
    const date = new Date();
    const product = {
        "name":"Some-name",
        "Date":date,
        "Description":"Product Description"
    }
  return (
    <section>
        <h4>
            {product.name}
            {date.getDate()}
            {product.Description}
        </h4>
        <p>Date : {date.getDate()}</p>
    </section>
  )
}

export default ProductInfo