import { ChangeEvent, FormEvent, useState } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/Modal";
import { ProductList, categories, colors, formInputsList } from "./data/index";
import Button from "./components/Button";
import Input from "./components/Input";
import { IProduct } from "./interfaces/interfaces";
import { productValidation } from "./validation";
import ErrorMsg from "./components/ErrorMsg";
import CyrcleColor from "./components/CyrcleColor";
import { uId } from "./utils/functions";
import SelectMenu from "./components/SelectMenu";
import { ProductNameType } from "./interfaces/types";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const defaultProductOpj = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenOnEdit, setIsOpenOnEdit] = useState(false);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });
  const [product, setProduct] = useState<IProduct>(defaultProductOpj);
  const [products, setProducts] = useState<IProduct[]>(ProductList);
  const [tempColors, setTempColors] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [productEdit, setProductEdit] = useState<IProduct>(defaultProductOpj);
  const [productEditIdx, setProductEditIdx] = useState<number>(0);
  // console.log(productEditIdx);

  function onChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;

    setProduct({
      ...product,
      [name]: value,
    });

    // console.log(product);
    setErrors({
      ...errors,
      [name]: "",
    });
  }

  function onChangeHandlerOnEdit(event: ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;

    setProductEdit({
      ...productEdit,
      [name]: value,
    });

    // console.log(product);
    setErrors({
      ...errors,
      [name]: "",
    });
  }

  const handlerSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log(product);

    const { title, description, imageURL, price } = product;
    const errors = productValidation({
      title,
      description,
      imageURL,
      price,
    });
    // console.log(errors);

    const hasErrorMsg = Object.values(errors).every((value) => value === "");
    console.log(hasErrorMsg);
    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }

    setProducts((prev) => [
      { ...product, id: uId(), colors: tempColors, category: selectedCategory },
      ...prev,
    ]);
    toast.success("Product Added Successfully!");
    onCancel();
  };

  const handlerSubmitOnEdit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log(product);

    const { title, description, imageURL, price } = productEdit;
    const errors = productValidation({
      title,
      description,
      imageURL,
      price,
    });
    console.log(errors);

    const hasErrorMsg = Object.values(errors).every((value) => value === "");
    // console.log(hasErrorMsg);
    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }
    console.log("product has Edited");
    const updatedProducts = [...products];
    updatedProducts[productEditIdx] = {
      ...productEdit,
      colors: tempColors.concat(productEdit.colors),
    };
    setProducts(updatedProducts);
    toast.success("You edit product Successfully!");
    onCancelOnEdit();
  };

  const deleteProductHandler = () => {
    console.log("product Id", productEdit.id);
    const filterd = products.filter((product) => product.id !== productEdit.id);
    setProducts(filterd);
    toast.success("Product deleted Successfully!");
    closeModalDelete();
  };

  const onCancel = () => {
    setProduct(defaultProductOpj);
    setTempColors([]);
    closeModal();
  };
  const onCancelOnEdit = () => {
    setProductEdit(defaultProductOpj);
    setTempColors([]);
    closeModalOnedit();
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModalDelete() {
    setIsOpenDelete(false);
  }

  function openModalDelete() {
    setIsOpenDelete(true);
  }

  function closeModalOnedit() {
    setIsOpenOnEdit(false);
  }

  function openModalOnedit() {
    setIsOpenOnEdit(true);
  }

  const renderProductList = products.map((product, idx) => (
    <ProductCard
      Idx={idx}
      key={product.id}
      product={product}
      setProductEdit={setProductEdit}
      openModalOnedit={openModalOnedit}
      setProductEditIdx={setProductEditIdx}
      openModalDelete={openModalDelete}
    />
  ));

  const renderFormInputs = formInputsList.map((input) => (
    <div className="flex flex-col mb-4" key={input.id}>
      <label className="mb-2" htmlFor={input.id}>
        {input.label}
      </label>
      <Input
        type={input.type}
        id={input.id}
        name={input.name}
        value={product[input.name]}
        onChange={onChangeHandler}
      />
      <ErrorMsg msg={errors[input.name]} />
    </div>
  ));

  const renderProductColors = colors.map((color) => (
    <CyrcleColor
      key={color}
      color={color}
      onClick={() => {
        if (tempColors.includes(color)) {
          setTempColors((prev) => prev.filter((item) => item !== color));
          return;
        }
        if (productEdit.colors.includes(color)) {
          setTempColors((prev) => prev.filter((item) => item !== color));
          return;
        }

        setTempColors([...tempColors, color]);
        console.log(tempColors);
        console.log(productEdit.colors);
      }}
    />
  ));

  const renderProductEditWithErrorMsg = (
    id: string,
    label: string,
    name: ProductNameType
  ) => {
    return (
      <div className="flex flex-col mb-4">
        <label className="mb-2" htmlFor={"title"}>
          {label}
        </label>
        <Input
          type={"text"}
          id={id}
          name={name}
          value={productEdit[name]}
          onChange={onChangeHandlerOnEdit}
        />
        <ErrorMsg msg={errors[name]} />
      </div>
    );
  };

  return (
    <main className="container mx-auto my-20">
      <Button className="bg-indigo-600 flex-1 text-center" onClick={openModal}>
        Add New Product
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gri  my-10">
        {renderProductList}
      </div>

      <Modal isOpen={isOpen} closeModal={closeModal} title="Add new product">
        <form action="" onSubmit={handlerSubmit}>
          <div className="flex flex-col mt-5">{renderFormInputs}</div>

          <div className="flex flex-col mb-4 space-x-1">
            <SelectMenu
              selected={selectedCategory}
              setSelected={setSelectedCategory}
            />
          </div>
          <div className="flex mb-4 space-x-2">{renderProductColors}</div>
          <div className="flex flex-wrap mb-4 space-x-1">
            {tempColors.map((color) => (
              <span
                key={color}
                className="text-white rounded-md p-1 mb-1 text-xs"
                style={{ backgroundColor: color }}
              >
                {color}
              </span>
            ))}
          </div>

          <div className="flex space-x-4">
            <Button className="bg-indigo-600 flex-1" width="w-full">
              {" "}
              Submit{" "}
            </Button>
            <Button
              className="bg-red-600 flex-1"
              width="w-full"
              onClick={onCancel}
            >
              {" "}
              Cancel{" "}
            </Button>
          </div>
        </form>
      </Modal>

      <Modal
        isOpen={isOpenOnEdit}
        closeModal={closeModalOnedit}
        title="edit product"
      >
        <form action="" onSubmit={handlerSubmitOnEdit}>
          <div className="flex flex-col mt-5">
            {renderProductEditWithErrorMsg("title", "product title", "title")}
            {renderProductEditWithErrorMsg(
              "description",
              "product description",
              "description"
            )}
            {renderProductEditWithErrorMsg(
              "imageURL",
              "product imageURL",
              "imageURL"
            )}
            {renderProductEditWithErrorMsg("price", "product price", "price")}
          </div>

          <div className="flex flex-col mb-4 space-x-1">
            <SelectMenu
              selected={productEdit.category}
              setSelected={(value) =>
                setProductEdit({ ...productEdit, category: value })
              }
            />
          </div>
          <div className="flex mb-4 space-x-2">{renderProductColors}</div>
          <div className="flex flex-wrap mb-4 space-x-1">
            {tempColors.concat(productEdit.colors).map((color) => (
              <span
                key={color}
                className="text-white rounded-md p-1 mb-1 text-xs"
                style={{ backgroundColor: color }}
              >
                {color}
              </span>
            ))}
          </div>

          <div className="flex space-x-4">
            <Button className="bg-indigo-600 flex-1" width="w-full">
              {" "}
              Submit{" "}
            </Button>
            <Button
              className="bg-red-600 flex-1"
              width="w-full"
              onClick={onCancel}
            >
              {" "}
              Cancel{" "}
            </Button>
          </div>
        </form>
      </Modal>

      <Modal
        isOpen={isOpenDelete}
        closeModal={closeModalDelete}
        title="do yo need remove product ?"
      >
        <div className="flex space-x-4">
          <Button
            className="bg-red-600 flex-1"
            width="w-full"
            onClick={deleteProductHandler}
          >
            {" "}
            yes, remove{" "}
          </Button>
          <Button
            className="bg-gray-600 flex-1"
            width="w-full"
            onClick={closeModalDelete}
          >
            {" "}
            Cancel{" "}
          </Button>
        </div>
      </Modal>

      <Toaster position="top-center" reverseOrder={false} />
    </main>
  );
}

export default App;
