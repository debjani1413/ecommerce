import {useState,useEffect} from "react";
import { response } from "../utils/data";

const useProduct = () => {

    const [products,setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setProducts(response.data.products.edges);
        };
        fetchData();
    },[]);

    return products;
}

export default useProduct;