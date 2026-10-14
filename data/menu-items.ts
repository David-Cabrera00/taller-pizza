export type MenuItem = {
  name: string;
  description: string;
  image: string;
  price: string;
};

export const menuItems: MenuItem[] = [
  {
    name: "Chicken Parm",
    description: "Breaded chicken, marinara, and melted cheese.",
    image: "/images/comida1.png",
    price: "$9",
  },
  {
    name: "Chicken Alfredo",
    description: "Creamy sauce with seasoned chicken and herbs.",
    image: "/images/pasta1.jpg",
    price: "$10",
  },
  {
    name: "Spaghetti & Meatballs",
    description: "Loving care from our kitchen in every bite.",
    image: "/images/pizza1.jpg",
    price: "$10",
  },
  {
    name: "Baked Mac & Cheese",
    description: "Four cheeses, baked until golden and bubbly.",
    image: "/images/pastaqueso.jpg",
    price: "$10",
  },
];
