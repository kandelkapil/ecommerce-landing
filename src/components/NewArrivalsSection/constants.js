import Arrival1 from '../../assets/arrival-1.png'
import Arrival2 from '../../assets/arrival-2.png'
import Arrival3 from '../../assets/arrival-3.png'
import Arrival4 from '../../assets/arrival-4.png'
import Arrival5 from '../../assets/arrival-5.png'
import Arrival6 from '../../assets/arrival-6.png'

const womensFashion = [
  {
    image: Arrival1,
    name: "Shiny Dress",
    brand: "Al Karam",
    reviews: "(4.1k) Customer Reviews",
    price: "$95.50",
  },
  {
    image: Arrival2,
    name: "Long Dress",
    brand: "Al Karam",
    reviews: "(4.1k) Customer Reviews",
    price: "$95.50",
  },
  {
    image: Arrival3,
    name: "Full Sweater",
    brand: "Al Karam",
    reviews: "(4.1k) Customer Reviews",
    price: "$95.50",
  },
  {
    image: Arrival4,
    name: "White Dress",
    brand: "Al Karam",
    reviews: "(4.1k) Customer Reviews",
    price: "$95.50",
  },
  {
    image: Arrival5,
    name: "Colorful Dress",
    brand: "Al Karam",
    reviews: "(4.1k) Customer Reviews",
    price: "$95.50",
  },
  {
    image: Arrival6,
    name: "White Shirt",
    brand: "Al Karam",
    reviews: "(4.1k) Customer Reviews",
    price: "$95.50",
  },
];

const mensFashion = [
  {
    image: "https://putra.in/cdn/shop/files/WhatsAppImage2023-08-10at7.41.05PM_1200x.jpg?v=1691816685",
    name: "Casual Shirt",
    brand: "Nike",
    reviews: "(2.3k) Customer Reviews",
    price: "$45.00",
  },
  {
    image: "https://blackberrys.com/cdn/shop/files/Textured-3-Pcs-Suit-In-Wine-Cocktail-LPLM1752E1PA23FL-image3.jpg?v=1703569959",
    name: "Formal Suit",
    brand: "Hugo Boss",
    reviews: "(1.5k) Customer Reviews",
    price: "$299.99",
  },
  {
    image: "https://np.harringtonwear.com/cdn/shop/products/LARK_LEATHER_JACKET-JAC-WT-M-LJ3-C03-B001-Black-High_Quantity-Premium_Quantity-Home_Delivery-Jacket-Leather-Buy_Online-Durable-2_ddca06bc-5a9b-4126-ae4f-a9c5ca46bc5a.jpg?v=1654086316&width=1260",
    name: "Leather Jacket",
    brand: "Adidas",
    reviews: "(3.8k) Customer Reviews",
    price: "$120.00",
  },
];

const womensAccessories = [
  {
    image: "https://m.media-amazon.com/images/I/61UDx9jF0mL._AC_SL1315_.jpg",
    name: "Stylish Handbag",
    brand: "Chanel",
    reviews: "(2.1k) Customer Reviews",
    price: "$350.00",
  },
  {
    image: "https://m.media-amazon.com/images/I/61ckRNjayML._AC_UY1000_.jpg",
    name: "Sunglasses",
    brand: "Ray-Ban",
    reviews: "(5.0k) Customer Reviews",
    price: "$150.00",
  },
];

const mensAccessories = [
  {
    image: "https://i.ebayimg.com/images/g/p24AAOSwtnpXmbbo/s-l1200.webp",
    name: "Leather Wallet",
    brand: "Fossil",
    reviews: "(1.8k) Customer Reviews",
    price: "$60.00",
  },
  {
    image: "https://m.media-amazon.com/images/I/71AyXWWvrJL._AC_SL1500_.jpg",
    name: "Wrist Watch",
    brand: "Rolex",
    reviews: "(3.5k) Customer Reviews",
    price: "$500.00",
  },
];

const discountDeals = [
  {
    image: "https://m.media-amazon.com/images/I/71KVeoFaIVL._AC_UY1000_.jpg",
    name: "Summer Sale Dress",
    brand: "Zara",
    reviews: "(1.2k) Customer Reviews",
    price: "$40.00",
    discount: "20% Off",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ik-uuzhhjiyQ_TdnsMa2ZNkFNJ5cpQyu9w&s",
    name: "Winter Jacket",
    brand: "North Face",
    reviews: "(4.0k) Customer Reviews",
    price: "$100.00",
    discount: "30% Off",
  },
];

const Products = {
  womensFashion,
  mensFashion,
  womensAccessories,
  mensAccessories,
  discountDeals,
};

const productTabs = [
  { id: 0, name: `Men's Fashion`, identity: "mensFashion" },
  { id: 1, name: `Women's Fashion`, identity: "womensFashion" },
  { id: 2, name: `Women Accessories`, identity: "womensAccessories" },
  { id: 3, name: `Men Accessories`, identity: "mensAccessories" },
  { id: 4, name: `Discount Deals`, identity: "discountDeals" },
];

export { Products, productTabs };
