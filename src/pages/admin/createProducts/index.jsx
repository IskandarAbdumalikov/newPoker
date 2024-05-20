import React, { useRef } from "react";
import "./createproducts.scss";
import { toast } from "react-toastify";

const CreateProducts = () => {
  let brand = useRef();
  let title = useRef();
  let price = useRef();
  let url = useRef();
  let form = useRef();

  let handleOuter = (e) => {
    e.preventDefault();
    toast.success("Console log ni ko'ring");

    let InputValues = {
      Brand: brand.current.value,
      Title: title.current.value,
      Price: price.current.value,
      url: url.current.value,
    };
    console.log(InputValues);
    form.current.reset();
  };
  return (
    <div className="container">
      <form ref={form} onSubmit={handleOuter} className="admin__form" action="">
        <input required ref={brand} placeholder="Enter brand" type="text" />
        <input required ref={title} placeholder="Enter title" type="text" />
        <input required ref={price} placeholder="Enter price" type="number" />
        <input required ref={url} placeholder="Enter image url" type="text" />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateProducts;
