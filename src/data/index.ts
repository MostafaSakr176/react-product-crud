import { ICategory, IFormInput, IProduct } from "../interfaces/interfaces";
import { uId } from "../utils/functions";



export const ProductList:IProduct[] = [
  {
    id: uId() ,
    title: "aaaaaaaaaaaaaaa",
    description: "Mercedes-AMG G 63 Grand Edition Launched In India At Rs 4 Crore",
    imageURL:"https://media.zigcdn.com/media/content/2023/Sep/cover_651417aa1554c.jpg",
    price: "500.000",
    colors:[  "#3C2A21","#6C4AB6","#000000",],
    category:{
      name: "mercedes",
    imageURL: "https://a.allegroimg.com/s512/11fe7f/14071f1e46ce83c20aa1868310d6/Naklejka-na-samochod-auto-szybe-lakier-tuning-mercedes-benz-logo-15cm" 
    }
  },
  {
    id: uId() ,
    title: "bbbbbbbbbbbb",
    description: "bbbbb bbbbb bbbbbbbbbbbb bbb bbbb",
    imageURL:"https://img.freepik.com/free-photo/sports-car-driving-asphalt-road-night-generative-ai_188544-8052.jpg",
    price: "500.000",
    colors:[  "#3C2A21","#6C4AB6","#000000",],
    category:{
      name: "BMW",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/1200px-BMW.svg.png" 
    }
  },
  {
    id: uId() ,
    title: "cccccccccc cccccccccc",
    description: "ccccccccc ccccccc ccccc ccccc",
    imageURL:"https://edgecast-img.yahoo.net/mysterio/api/AAF2337E5A659931DE25CBFE268CE27FFE187DE39FC7548C2445BB6F27B5F73E/autoblog/resizefill_w660_h372;quality_80;format_webp;cc_31536000;/https://s.aolcdn.com/os/ab/_cms/2023/02/06044004/lamborgnini_invencible_002.jpg",
    price: "500.000",
    colors:[ "#3C2A21","#6C4AB6","#000000",],
    category:{
      name: "volkswagen",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Volkswagen_logo_2019.svg" 
    }
  }
]


export const formInputsList:IFormInput[] = [
  {
    id: 'title',
    name: 'title',
    label: 'product title',
    type: 'text'
  },
  {
    id: 'description',
    name: 'description',
    label: 'product description',
    type: 'text'
  },
  {
    id: 'imageURL',
    name: 'imageURL',
    label: 'product image URL',
    type: 'text'
  },
  {
    id: 'price',
    name: 'price',
    label: 'product price',
    type: 'text'
  },
]

export const colors:string[] = [
  "#a855f7",
  "#2563eb",
  "#84d2c5",
  "#13005A",
  "#A31ACB",
  "#FF6E31",
  "#3C2A21",
  "#6C4AB6",
  "#000000",
  "#645CB8",
  "#1FBA70",
  "#820000",
  "#FF0032"
]

export const categories:ICategory[] = [
  {
    id:uId(),
    name: "mercedes",
    imageURL: "https://a.allegroimg.com/s512/11fe7f/14071f1e46ce83c20aa1868310d6/Naklejka-na-samochod-auto-szybe-lakier-tuning-mercedes-benz-logo-15cm" 
  },
  {
    id:uId(),
    name: "BMW",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/1200px-BMW.svg.png" 
  },
  {
    id:uId(),
    name: "volkswagen",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Volkswagen_logo_2019.svg" 
  }
]