import { IProduct } from "../interfaces/interfaces";
import { getDate, txtSlicer } from "../utils/functions";
import Button from "./Button";
import CyrcleColor from "./CyrcleColor";
import Image from "./Image";

interface IProps {
  product: IProduct;
  setProductEdit: (product: IProduct) => void;
  openModalOnedit: () => void;
  Idx: number;
  setProductEditIdx: (value: number) => void;
  openModalDelete: () => void
}

const ProductCard = ({
  product,
  setProductEdit,
  openModalOnedit,
  Idx,
  setProductEditIdx,
  openModalDelete
}: IProps) => {
  const { title, price, imageURL, colors, category, description } = product;

  const onEdit = () => {
    openModalOnedit();
    setProductEdit(product);
    setProductEditIdx(Idx);
  };

  const onRemove = ()=>{
    setProductEdit(product)
    openModalDelete()
  }

  return (
    <article className="overflow-hidden rounded-md shadow bg-gray-100 transition hover:shadow-xl ">
      <div className="h-48 w-full p-2">
        <Image
          alt={title}
          url={imageURL}
          className="h-full w-full object-cover object-center rounded-md"
        />
      </div>

      <div className=" p-2 sm:p-3">
        <time className="block text-xs text-gray-500"> {getDate()} </time>

        <h3 className="mt-0.5 text-lg text-gray-900">{title}</h3>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          {txtSlicer(description)}
        </p>

        <div className="flex mt-3 items-center space-x-1">
          {colors.map((ele) => (
            <CyrcleColor key={ele} color={ele} />
          ))}
        </div>

        <div className="flex items-center justify-between mt-2">
          <span>{price} $</span>
          <div className="flex items-center space-x-2">
            <span>{category.name}</span>
            <Image
              url={category.imageURL}
              alt="product 1"
              className="w-10 h-10 rounded-full object-center"
            />
          </div>
        </div>

        <div className="flex items-center justify-between space-x-2 mt-4">
          <Button className="bg-indigo-600 flex-1" onClick={onEdit}>
            edit
          </Button>
          <Button className="bg-red-600 flex-1" onClick={onRemove}>delete</Button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
