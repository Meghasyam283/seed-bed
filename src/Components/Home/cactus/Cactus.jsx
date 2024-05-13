import Plant from "../../AllPlants/Plant";
function Cactus() {
  const cactus = [
    {
      id: 1,
      img: "https://i.postimg.cc/3wJqqLVh/pic1.jpg",
      name: "Saguaro",
      price: 1000,
      desc: "The saguaro is a tree-like cactus species in the monotypic genus Carnegiea that can grow to be over 12 meters tall.",
    },
    {
      id: 2,
      img: "https://i.ibb.co/TmN3Nhj/alovera.jpg",
      name: "Alovera",
      price: 1000,
      desc: "Aloe vera is a succulent plant species of the genus Aloe. It is widely distributed, and is considered an invasive species.",
    },
    {
      id: 3,
      img: "https://i.ibb.co/wdtsJ8t/kasturi.jpg",
      name: "Kasturi",
      price: 1000,
      desc: "Flower-heads purple, cylindrical 1.3-2 cm long, deeply embedded in woolly hairs and densely clustered at the top of the stem",
    },
    {
      id: 4,
      img: "https://i.ibb.co/9YZdcMH/TULSI.jpg",
      name: "Tulsi",
      price: 1000,
      desc: "holy basil or tulsi, is an aromatic perennial plant in the family Lamiaceae. It is native to tropical and subtropical regions ",
    },
    {
      id: 5,
      img: "https://i.postimg.cc/3wJqqLVh/pic1.jpg",
      name: "Saguaro",
      price: 1000,
      desc: "The saguaro is a tree-like cactus species in the monotypic genus Carnegiea that can grow to be over 12 meters tall.",
    },
    {
      id: 6,
      img: "https://i.ibb.co/TmN3Nhj/alovera.jpg",
      name: "Alovera",
      price: 1000,
      desc: "Aloe vera is a succulent plant species of the genus Aloe. It is widely distributed, and is considered an invasive species.",
    },
    {
      id: 7,
      img: "https://i.ibb.co/wdtsJ8t/kasturi.jpg",
      name: "Kasturi",
      price: 1000,
      desc: "Flower-heads purple, cylindrical 1.3-2 cm long, deeply embedded in woolly hairs and densely clustered at the top of the stem",
    },
    {
      id: 8,
      img: "https://i.ibb.co/9YZdcMH/TULSI.jpg",
      name: "Tulsi",
      price: 1000,
      desc: "holy basil or tulsi, is an aromatic perennial plant in the family Lamiaceae. It is native to tropical and subtropical regions ",
    },
  ];
  return <Plant items={cactus} category="Cactus Plants" />;
}
export default Cactus;
