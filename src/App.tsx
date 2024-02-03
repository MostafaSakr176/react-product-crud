

import { useState } from 'react'
import ProductCard from './components/ProductCard'
import Modal from './components/modal'
import { ProductList } from './data/index'
import Button from './components/Button'

function App() {

  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }



  const renderProductList = ProductList.map(product => <ProductCard key={product.id} product={product} />)

  return (
    <main className='container mx-auto my-20'>
    <Button className="bg-green-600 flex-1" onClick={openModal}>open modal</Button>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gri  my-10'>
      {renderProductList}
    </div>
    <Modal isOpen={isOpen} closeModal={closeModal} title='Add new product'>
      <div className='flex space-x-4'>
      <Button className="bg-indigo-600 flex-1" width='w-full'>Submit</Button>
      <Button className="bg-red-600 flex-1" width='w-full' onClick={closeModal}>Cancel</Button>
      </div>
    </Modal>
    </main>
  )
}

export default App
