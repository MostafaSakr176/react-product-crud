import { ChangeEvent, FormEvent, useState } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/Modal";
import { ProductList, formInputsList } from "./data/index";
import Button from "./components/Button";
import Input from "./components/Input";
import { IProduct } from "./interfaces/interfaces";
import { useFormik } from "formik";
import { productValidation } from "./validation";
import ErrorMsg from "./components/ErrorMsg";

function App() {

  const defaultProductOpj = {
    title: "",
    description:"",
    imageURL:"",
    price:"",
    colors: [],
    category: {
      name:"",
      imageURL:""
    } 
  }
  const [isOpen, setIsOpen] = useState(false);
  const [errors , setErrors] = useState({ title:"", description:"", imageURL:"", price:""})
  const [product, setProduct] = useState<IProduct>(defaultProductOpj)

  function onChangeHandler(event:ChangeEvent<HTMLInputElement>){
    const {value , name} = event.target;

    setProduct({
      ...product,
      [name]:value
    })

    // console.log(product);
    setErrors({
      ...errors,
      [name]:''
    })
    
  }

  const handlerSubmit = (event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
    // console.log(product);

    const {title , description , imageURL , price} = product
    const errors = productValidation({
      title,
      description,
      imageURL,
      price,
    })
    console.log(errors);

    const hasErrorMsg =  Object.values(errors).every(value => value === '');
    console.log(hasErrorMsg);
    if (!hasErrorMsg) {
      setErrors(errors)
      return ;
    }
    console.log("product has submitted");
    
    
  }





  const onCancel = ()=>{
    setProduct(defaultProductOpj)
    closeModal()
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const renderProductList = ProductList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  const renderFormInputs = formInputsList.map((input) => (
    <div className="flex flex-col mb-4" key={input.id}>
      <label className="mb-2" htmlFor={input.id}>
        {input.label}
      </label>
      <Input type={input.type} id={input.id} name={input.name} value={product[input.name]} onChange={onChangeHandler} />
      <ErrorMsg msg={errors[input.name]} />
    </div>
  ));

  return (
    <main className="container mx-auto my-20">
      <Button className="bg-green-600 flex-1" onClick={openModal}>
        open modal
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gri  my-10">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="Add new product">
        <form action="" onSubmit={handlerSubmit}>
          <div className="flex flex-col mt-7">{renderFormInputs}</div>
          <div className="flex space-x-4">
            <Button className="bg-indigo-600 flex-1" width="w-full"> Submit </Button>
            <Button className="bg-red-600 flex-1" width="w-full" onClick={onCancel} > Cancel </Button>
          </div>
        </form>
      </Modal>
    </main>
  );
}

export default App;
