import Product from "@/ui/dashboard/products/singleProduct/Product";
import React from "react";

const SingleProductpage = ({ params: { id } }) => {
  return (
    <div>
      <Product id={id} />
    </div>
  );
};

export default SingleProductpage;
