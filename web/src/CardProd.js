// Coffee: price_1NJ4A0SEEgTWuyuaubMMvb8r
// Sunglasses: price_1NJ4BfSEEgTWuyuax2BXYUta
// Camera: price_1NJ4CBSEEgTWuyuaFsiOPiTF
// Chicken Burger + Fries: price_1NJGgNSEEgTWuyua1NATcdtL
// Veg Burger: price_1NJGcrSEEgTWuyua5FJDotiK
// Chicken Burger: price_1NJGe1SEEgTWuyua5yWPPufd
// Veg Sandwich: price_1NJGfLSEEgTWuyuaTrKESapZ

const productsArray = [
  {
    id: "price_1NJGcrSEEgTWuyua5FJDotiK",
    Category: "Veg",
    title: "Veg Burger",
    imageUrl:
      "https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1220&q=80",
    price: 20.0,
  },
  {
    id: "price_1NJGfLSEEgTWuyuaTrKESapZ",
    Category: "Veg",
    title: "Veg Sandwich",
    imageUrl:
      "https://images.unsplash.com/photo-1592415499556-74fcb9f18667?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=725&q=80",
    price: 40.0,
  },
  {
    id: "price_1NJGe1SEEgTWuyua5yWPPufd",
    Category: "Non-Veg",
    title: "Chicken Burger",
    imageUrl:
      "https://images.unsplash.com/photo-1549611016-3a70d82b5040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=830&q=80",
    price: 30.0,
  },
  {
    id: "price_1NJGgNSEEgTWuyua1NATcdtL",
    Category: "Combo",
    title: "Chicken Burger + Fries",
    imageUrl:
      "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    price: 50.0,
  },
  {
    id: "price_1NL70oSEEgTWuyua4qz9CfSR",
    Category: "Special Burger",
    title: "Beef + Chicken burger",
    imageUrl:
      "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=768&q=80",
    price: 50.0,
  },
  {
    id: "price_1NL71rSEEgTWuyuadzMaSGGw",
    Category: "Pizza",
    title: "Margerita Pizza",
    imageUrl:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    price: 30.0,
  },
  {
    id: "price_1NL72hSEEgTWuyuaWf1JUbMW",
    Category: "Pizza",
    title: "Italian Pizza",
    imageUrl:
      "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    price: 40.0,
  },
  {
    id: "price_1NL73VSEEgTWuyuameW62DQb",
    Category: "Pasta",
    title: "Creamy Pasta",
    imageUrl:
      "https://images.unsplash.com/photo-1662478839788-7d2898ca66cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    price: 20.0,
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData === undefined) {
    console.log("Product does not exist for ID: " + id);
    return undefined;
  }

  return productData;
}

export { productsArray, getProductData };
