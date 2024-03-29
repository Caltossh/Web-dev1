
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image:string[];
  link: string;
  rating: number;
  sum: number,
  cnt: number,
  category:string,
  like:number,
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    image:['https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=preview-large','https://object.pscloud.io/cms/cms/Photo/img_0_77_3123_8_1.jpg','https://object.pscloud.io/cms/cms/Photo/img_0_77_3123_10_1.jpg'],
    link:'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000',
    rating:0,
    sum: 0,
    cnt: 0,
    category:'phone',
    like:0,
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    image:['https://resources.cdn-kaspi.kz/img/m/p/h99/hbf/64083553681438.jpg?format=gallery-medium','https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTI2LUiCDkojK_uybSOClUVfgFZOISG-MJPj0jYEDi9P2lM0B04','https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRe3Ichy0uQrGQk9nGpJE9URzb2ZQQNX2xYdF45mcnPAiC4jT8o'],
    link:'https://kaspi.kz/shop/p/apple-iphone-12-mini-64gb-sinii-100657852/',
    rating:0,
    sum: 0,
    cnt: 0,
    category:'phone',
    like:0,
  },
  {
    id: 3,
    name: 'Iphone Se',
    price: 299,
    description: 'Смартфон Apple iPhone SE 2022 64Gb черный',
    image:['https://resources.cdn-kaspi.kz/img/m/p/h92/haa/63993960136734.jpg?format=gallery-medium','https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSYI4ECBgHOb7dnWL_oFUEc1TC8LqWGDOIJAS_ZjMbBCppRBDCn', ],
    link:'https://kaspi.kz/shop/p/apple-iphone-se-2022-64gb-chernyi-104153727/?c=750000000',
    rating:0,
    sum: 0,
    cnt: 0,
    category:'phone',
    like:0,
  }, 
  {
    id: 4,
    name: 'Applephone',
    price: 255,
    description: 'Смартфон Apple iPhone 15 Pro Max 256Gb серый',
    image:['https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-medium','https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-model-unselect-gallery-2-202309_GEO_US?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1693010535312'],
    link:'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000',
    rating:0,
    sum: 0,
    cnt: 0,
    category:'phone',
    like:0,
  },
  {
    id: 5,
    name: 'Xiaomis',
    price: 255,
    description: 'Смартфон Xiaomi Redmi 12C 4 ГБ/128 ГБ серый',
    image:['https://resources.cdn-kaspi.kz/img/m/p/ha6/h82/69586957697054.jpg?format=gallery-medium'],
    link:'https://kaspi.kz/shop/p/xiaomi-redmi-12c-4-gb-128-gb-seryi-109149311/?c=750000000',
    rating:0,
    sum: 0,
    cnt: 0,
    category:'phone',
    like:0,
  },
  {
  id: 6,
  name: 'Apple iPhone 11',
  price: 1000,
  description: 'Смартфон Apple iPhone 11 128Gb Slim Box черный',
  image:['https://resources.cdn-kaspi.kz/img/m/p/hd8/hac/63897052413982.jpg?format=gallery-medium'],
  link:'https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000',
  rating:0, 
  sum: 0,
  cnt: 0,
  category:'phone',
  like:0
},
  {
    id: 7,
    name: 'Apple MacBook',
    price: 255,
    description: 'Ноутбук Apple MacBook Air 13 MGN93 серебристый',
    image:['https://resources.cdn-kaspi.kz/img/m/p/h9a/h35/64082972704798.jpg?format=gallery-medium'],
    link:'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn93-serebristyi-100798912/?c=750000000',
    rating:0,
    sum: 0,
    cnt: 0,
    category:'laptop',
    like:0,
  },  {
    id: 8,
    name: 'Ноутбук HP ',
    price: 255,
    description: 'Ноутбук HP 15s-fq0017ci 9R257EA темно-серый',
    image:['https://resources.cdn-kaspi.kz/img/m/p/hc2/h4e/84818607276062.jpg?format=gallery-medium'],
    link:'https://kaspi.kz/shop/p/hp-15s-fq0017ci-9r257ea-temno-seryi-115752629/?c=750000000',
    rating:0,
    sum: 0,
    cnt: 0,
    category:'laptop',
    like:0,
  },
  {
    id: 8,
    name: 'Lenovo IdeaPad 3',
    price: 255,
    description:'Ноутбук Lenovo IdeaPad 3 15IGL05 81WQ00EMRK серый',
    image:['https://resources.cdn-kaspi.kz/img/m/p/h89/haa/64373052571678.jpg?format=gallery-medium'],
    link:'https://kaspi.kz/shop/p/lenovo-ideapad-3-15igl05-81wq00emrk-seryi-102878742/?c=750000000',
    rating:0,
    sum: 0,
    cnt: 0,
    category:'laptop',
    like:0,
  },
  {
    id: 8,
    name: 'Ноутбук HP ',
    price: 255,
    description: 'Ноутбук HP 15s-fq0017ci 9R257EA темно-серый',
    image:['https://resources.cdn-kaspi.kz/img/m/p/hc2/h4e/84818607276062.jpg?format=gallery-medium'],
    link:'https://kaspi.kz/shop/p/hp-15s-fq0017ci-9r257ea-temno-seryi-115752629/?c=750000000',
    rating:0,
    sum: 0,
    cnt: 0,
    category:'laptop',
    like:0,
  },
];