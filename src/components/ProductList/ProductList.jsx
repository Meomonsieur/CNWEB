import './style.css';
import ProductItem from '../ProductItem/ProductItem';
import { useState, useEffect } from 'react';
import axios from 'axios';

function ProductList() {

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://h5ltj4-8080.csb.app/books');
                setProductList(response.data); 
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); 


    return (
        <>
            <div className="product-container">
                <div className="product-list grid grid-cols-5 gap-2 mx-5">
                    {/* {productList.map(product => (
                        <ProductItem key={product.id} product={product} />
                    ))} */}
                    {productList.map((product, index) => (
                        <ProductItem key={index} product={product} />
                    ))}
                </div>
                
                <div className="pagination hideMb hideSm">
                    <ul className="product-list__pagination hideMb hideMd hideSm">
                        <li className="pagination-item">
                            <a href="#" className="pagination-item__link">
                                <i className="pagination-item__icon fa-solid fa-angle-left"></i>
                            </a>
                        </li>
                        <li className="pagination-item">
                            <a href="#" className="pagination-item__link pagination-item--active">1</a>
                        </li>
                        <li className="pagination-item">
                            <a href="#" className="pagination-item__link">2</a>
                        </li>
                        <li className="pagination-item">
                            <a href="#" className="pagination-item__link">3</a>
                        </li>
                        <li className="pagination-item">
                            <a href="#" className="pagination-item__link">4</a>
                        </li>
                        <li className="pagination-item">
                            <a href="#" className="pagination-item__link">5</a>
                        </li>
                        <li className="pagination-item">
                            <a href="#" className="pagination-item__link">...</a>
                        </li>
                        <li className="pagination-item">
                            <a href="#" className="pagination-item__link">50</a>
                        </li>
                        <li className="pagination-item">
                            <a href="#" className="pagination-item__link">
                                <i className="pagination-item__icon fa-solid fa-angle-right"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ProductList