

import ProductCard from './components/ProductCard'
import { ProductList } from './data/index'

function App() {

  const renderProductList = ProductList.map(product => <ProductCard key={product.id} product={product} />)

  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gri max-w-7xl m-auto'>
      {renderProductList}
    </div>

    </>
  )
}

export default App
