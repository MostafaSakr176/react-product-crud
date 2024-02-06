import { IProduct } from "../interfaces/interfaces"
import { txtSlicer } from "../utils/functions"
import Button from "./Button"
import Image from "./Image"

interface IProps {
  product: IProduct
}

const ProductCard = ({product}:IProps) => {

  const {title , price , imageURL , colors , category , description } = product;

  return (

  <article className="overflow-hidden rounded-md shadow transition hover:shadow-lg ">
  <Image
    alt="Office"
    url={imageURL}
    className="h-40 w-full object-cover object-center"
  />

  <div className="bg-white p-2 sm:p-3">
    <time className="block text-xs text-gray-500"> 10th Oct 2022 </time>

    
      <h3 className="mt-0.5 text-lg text-gray-900">{title}</h3>

    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
      {txtSlicer(description)}
    </p>

    <div className="flex mt-3 items-center space-x-1">
      {colors.map(ele => <span className={'w-5 h-5 rounded-full'} style={{backgroundColor: ele}} key={ele}></span>)}
    </div>

      <div className="flex items-center justify-between mt-2">
        <span>{price} $</span>
        <Image url={category.imageURL}
          alt="product 1" className="w-10 h-10 rounded-full object-center" />
      </div>

      <div className="flex items-center justify-between space-x-2 mt-4">
        <Button className="bg-indigo-600 flex-1">edit</Button>
        <Button className="bg-red-600 flex-1">delete</Button>
      </div>
  </div>
</article>

  )
}

export default ProductCard