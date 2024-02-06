
export interface IProduct {
  id?:number,
  title:string,
  description:string,
  imageURL:string,
  price:string,
  colors:string[],
  category:{
    name:string,
    imageURL:string
  }
}

export interface IFormInput {
  id: string,
  name: "title" | "description" | "imageURL" | "price" ,
  label: string,
  type: string
}