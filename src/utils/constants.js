import { v4 as uuidv4 } from "uuid";

export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "shop",
    url: "/shop",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
  {
    id: 4,
    text: "blog",
    url: "/blog",
  },
  {
    id: 5,
    text: "contact",
    url: "/contact",
  },
];

export const categories = [
  "shirt",
  "pant",
  "glasses",
  "jacket",
  "electronic",
  "entertainment",
];

export const products = [
  {
    id: uuidv4(),
    name: "Lee Men's Performance Series Extreme Motion Straight Fit Tapered Leg Jean",
    images: [
      "https://m.media-amazon.com/images/I/715vC+ezhdS._AC_UX569_.jpg",
      "https://m.media-amazon.com/images/I/71h3w1d4eEL._AC_UX569_.jpg",
      "https://m.media-amazon.com/images/I/71ziuDok16S._AC_UX569_.jpg",
    ],
    category: "pant",
    price: 62.57,
    stock: 13,
    description: `STRAIGHT FIT. With a straight fit through the hip and thigh, these jeans sit just below the waist with an Extreme Flex waistband for natural comfort.`,
  },
  {
    id: uuidv4(),
    name: "Amazon Essentials Unisex Blue Light & UV400 Blocking Glasses, Non Prescription",
    images: [
      "https://m.media-amazon.com/images/I/61OiKQ45sKL._AC_UX679_.jpg",
      "https://m.media-amazon.com/images/I/61FHVoRg1dL._AC_UX679_.jpg",
      "https://m.media-amazon.com/images/I/61fZuckFHzL._AC_UX679_.jpg",
      "https://m.media-amazon.com/images/I/61F-23ye3YL._AC_UX679_.jpg",
    ],
    category: "glasses",
    price: 13.99,
    stock: 5,
    description: `
    Soft and Comfortable Material - The frame is made of Eco-friendly TR90 material. It's durable, lightweight, and comfortable to wear. The transparent lens are made of multi-layer blue filter coating, improving blue light-blocking efficacy and vision`,
  },
  {
    id: uuidv4(),
    name: "Legendary Whitetails Men's Navigator Fleece Button Up Shirt",
    images: [
      "https://m.media-amazon.com/images/I/81sAktXlrHS._AC_UX522_.jpg",
      "https://m.media-amazon.com/images/I/813LrVtyl8S._AC_UX522_.jpg",
      "https://m.media-amazon.com/images/I/81rzXWmrUiS._AC_UX425_.jpg",
    ],
    category: "shirt",
    price: 37.99,
    stock: 13,
    description: `Heavyweight Fleece`,
  },
  {
    id: uuidv4(),
    name: "Blue Duo Poet - Premium Round Blue Light Blocking Glasses for Women and Men",
    images: [
      "https://m.media-amazon.com/images/I/61nx5ZfsHtS._AC_UX569_.jpg",
      "https://m.media-amazon.com/images/I/71q8bbcRkfS._AC_UX569_.jpg",
      "https://m.media-amazon.com/images/I/71N99QuOmAS._AC_UX569_.jpg",
    ],
    category: "glasses",
    price: 34.99,
    stock: 7,
    description: `PROTECT YOUR EYES: Our Blue Light Blocking lenses can effectively block 100% of harmful UV rays and relieve our eye fatigue when watching TV, using our phones, or looking at a computer.`,
  },
  {
    id: uuidv4(),
    name: "Nike 835573 Men's Epic Training Pants",
    images: [
      "https://m.media-amazon.com/images/I/51yl2LZvqIL._AC_UX569_.jpg",
      "https://m.media-amazon.com/images/I/514kM7D1k1L._AC_SY550._SX._UX._SY._UY_.jpg",
    ],
    category: "pant",
    price: 160.85,
    stock: 6,
    description: `These Nike men's pants are the perfect coverage for training day.`,
  },
];
