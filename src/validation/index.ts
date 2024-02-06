/**
 * 
 * @param product 
 * @returns 
 */

export const productValidation = (product:{  title:string, description:string, imageURL:string, price:string,})=> {

  const errors:{  title:string, description:string, imageURL:string, price:string,} = {
    title:"",
    description:"", 
    imageURL:"", 
    price:"",
  }

  const urlRegex = /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/.test(product.imageURL)

  if (!product.title.trim() || product.title.length < 10 || product.title.length > 80) {
    errors.title ="Product title must be between 10 and 80 characters"
  }

  if (!product.description.trim() || product.description.length < 10 || product.description.length > 80) {
    errors.description ="Product description must be between 10 and 80 characters"
  }

  if (!product.imageURL.trim() || !urlRegex ) {
    errors.imageURL ="Product imageURL not valid"
  }

  if (!product.price.trim() || isNaN(Number(product.price))) {
    errors.price ="Product price must be between 10 and 80 characters"
  }




  return errors;
}