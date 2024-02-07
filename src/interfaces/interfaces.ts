import {  ProductNameType } from "./types"

export interface IProduct {
  id?:string | undefined ,
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
  name: ProductNameType ,
  label: string,
  type: string
}

export interface ICategory {
  id?: string | undefined,
  name:string,
  imageURL:string
}