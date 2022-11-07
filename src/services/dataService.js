const catalog = [
    {
        _id:" 123abc",
        title:"Strawberries",
        price:12.99,
        category:"fruit",
        image:"Strawberries_web.png",
    },
    {
        _id:" Mango",
        title:"Mango",
        price:7.99,
        category:"fruit",
        image:"mango-Agroponiente.png",
    },
    {
        _id:"Orange",
        title:"Orange",
        price:8.99,
        category:"fruit",
        image:"orange.jpg"
    },
    {
        _id:"banana",
        title:"Banana",
        price:9.99,
        category:"fruit",
        image:"banana.jpg"
    },
    {
        _id:"garlic",
        title:"Garlic",
        price:"5.99",
        category:"herb",
        image:"garlic.jpeg",
    }
];


class DataService {

    getCatalog() {
        return catalog;
 //to do: get the catalog fromt the server
}
}
export default DataService;