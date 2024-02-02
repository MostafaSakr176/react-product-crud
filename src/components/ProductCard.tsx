import { IProduct } from "../interfaces/interfaces"
import { txtSlicer } from "../utils/functions"
import Button from "./Button"
import Image from "./Image"

interface IProps {
  product: IProduct
}

const ProductCard = ({product}:IProps) => {

  const {title , price , imageURL , colors , category , description } = product;

  const avilableColors = colors.map(color => <span className={`w-5 h-5 rounded-full bg-[${color}]`} ></span> )

  return (
    <div className="border rounded-md p-2 flex-col">

      <Image url={imageURL}
          alt="product 1" className="rounded-tr-md rounded-tl-md h-40 w-full" />

      <h3 className="text-xl">{title}</h3>
      <p className="text-gray-700">{txtSlicer(description)}</p>

      <div className="flex mt-4 items-center space-x-2">
      {avilableColors}
      </div>

      <div className="flex items-center justify-between mt-4">
        <span>{price} $</span>
        <Image url={category.imageURL}
          alt="product 1" className="w-10 h-10 rounded-full object-center" />
      </div>

      <div className="flex items-center justify-between space-x-2 mt-4">
        <Button className="bg-indigo-600 flex-1">edit</Button>
        <Button className="bg-red-600 flex-1">delete</Button>
      </div>
    </div>
  )
}

export default ProductCard