


import './style.css'
import { useState, useEffect } from 'react';
import Header from '../Header/Header';

function ProductDetail({ product }) {
    const { name, authors, rating_average, list_price, list_image } = product
    const quantitySoldText = product.quantity_sold?.text
    const discount = Math.floor(Math.random() * 100) + 1

    const [hoverImage, setHoverImage] = useState(null)
    const [selectedImage, setSelectedImage] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const unitPrice = product.current_seller?.price;
    const [totalCost, setTotalCost] = useState(unitPrice);
    const handleHoverImage = (image) => {
        setHoverImage(image)
    }
    const handleClick = (image) => {
        setSelectedImage(image)
    }
    const handleIncrease = () => {
        const newQuantity = quantity + 1;
        const newTotalCost = newQuantity * unitPrice; // Sửa totalCost thành unitPrice
    
        setQuantity(newQuantity);
        setTotalCost(newTotalCost);
    };
    
    const handleReduce = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            const newTotalCost = newQuantity * unitPrice; // Sửa totalCost thành unitPrice
    
            setQuantity(newQuantity);
            setTotalCost(newTotalCost);
        }
    };
    const listImage = [
        "https://salt.tikicdn.com/ts/product/82/82/80/c542073200c6e95d3e89840b2f41ce2e.jpg",
        "https://salt.tikicdn.com/ts/product/17/7c/ee/170e84629d730657e2e43c0ebaae4fb6.jpg",
        "https://salt.tikicdn.com/ts/product/be/65/38/fa6e7be4f1681d71757deb81edf00ac7.jpg",
        "https://salt.tikicdn.com/ts/product/29/c6/6d/64243ee01d5a0786fdb3c3977ec9c63e.jpg",
        "https://salt.tikicdn.com/ts/product/fe/a7/bc/124b200ee6602ca58f69ad0e7f30e8d4.jpg"
    ]
    return (
        <>
            <Header />
            <div className="product-detail gap-x-8 flex">
                <div className="w-3/12">
                    <div className="product-detail__left">
                        <div className="product-detail__left-image">
                            <div className="product-detail__left-image--main active" >
                                <img src={hoverImage || selectedImage || listImage[0]} alt="" />
                            </div>
                            <div className="product-detail__left-image--block">
                                <ul className="product-detail__left-image-list">
                                    {list_image && list_image.map((image, index) => (
                                        <li key={index} 
                                            className="product-detail__left-image-item"
                                            onMouseEnter={() => handleHoverImage(image)}
                                            onMouseLeave={() => handleHoverImage(null)}
                                            onClick={() => handleClick(image)}
                                        >
                                                <img
                                                    src={image}
                                                    alt=""
                                                    className={`product-detail__left-image-second ${
                                                    selectedImage === image ? "active" : ""
                                                    }`}
                                                />
                                            {/* <img src={image} alt="" className="product-detail__left-image-second" /> */}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="special-features">
                            <h3>Đặc điểm nổi bật</h3>
                            <ul className="special-features-list">
                                <li className="special-features-item">
                                    <i className="special-features-icon fa-solid fa-circle-check"></i>
                                    <span className="special-features-text">Màu sắc trong vỏ kim loại</span>
                                </li>
                                <li className="special-features-item">
                                    <i className="special-features-icon fa-solid fa-circle-check"></i>
                                    <span className="special-features-text">Màu sắc trong vỏ kim loại</span>
                                </li>
                                <li className="special-features-item">
                                    <i className="special-features-icon fa-solid fa-circle-check"></i>
                                    <span className="special-features-text">Màu sắc trong vỏ kim loại</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-6/12 px-4">
                    <div className="product-detail__center">
                        <div className="center__heading">
                            <div className="verify-and-author flex items-baseline">
                                <div className="verify flex items-center ">
                                    <i className="special-features-icon fa-solid fa-circle-check"></i>
                                    <span>Chính hãng</span>
                                </div>
                                <div className="author flex items-center">
                                    <span className="author__title">Tác giả: </span>
                                    <a href='/' className="author__name-link">{product.authors}</a>
                                </div>
                            </div>
                            <h1 className="product__name">{product.name}</h1>
                            <div className="rate-and-sold flex items-baseline">
                                <div className="rating">
                                    <span className="rate-star">4.8</span>
                                    {[...Array(5).keys()].map(index => (
                                        <i key={index} className={`fa-solid fa-star ${index < rating_average ? 'star-gold' : 'star-gray'}`}></i>
                                    ))}
                                    <span className="quantity-star">(928)</span>
                                </div>
                                <div className="sold">
                                    <span className="sold-quantity">{quantitySoldText}</span>
                                </div>
                            </div>
                            <div className="price-and-discount flex items-baseline">
                                <span className="price">{list_price}<sup>đ</sup></span>
                                <div className="discount">-{discount}%</div>
                            </div>
                        </div>
                        <div className="center__body mt-6">
                            <div className="info-detail">
                                <div className="info-detail__title">Thông tin chi tiết</div>
                                <div className="info-detail__product flex flex-col">
                                    <div className="info-detail__product-item">
                                        <span>Công ty phát hành</span>
                                        <span>CÔNG TY CỔ PHẦN RIO BOOK VIỆT NAM</span>
                                    </div>
                                    <div className="info-detail__product-item">
                                        <span>Ngày xuất bản</span>
                                        <span>2024-01-01 00:00:00</span>
                                    </div>
                                    <div className="info-detail__product-item">
                                        <span>Kích thước</span>
                                        <span>22,5X17,5cm</span>
                                    </div>
                                    <div className="info-detail__product-item">
                                        <span>Loại bìa</span>
                                        <span>Bìa cứng</span>
                                    </div>
                                    <div className="info-detail__product-item">
                                        <span>Số trang</span>
                                        <span>392</span>
                                    </div>
                                    <div className="info-detail__product-item">
                                        <span>Nhà xuất bản</span>
                                        <span>Nhà Xuất Bản Dân Trí</span>
                                    </div>
                                </div>
                            </div>
                            <div className="prod-desc mt-12">
                                <div className="prod-desc__title mb-4">Mô tả sách</div>
                                <img src="https://salt.tikicdn.com/ts/product/be/65/38/fa6e7be4f1681d71757deb81edf00ac7.jpg" alt="" className="prod-desc__img mb-6" />
                                {product.description}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-3/12">
                    <div className="product-detail__right">
                        <div className="shop flex items-center mb-6">
                            <img src="https://vcdn.tikicdn.com/cache/w100/ts/seller/6e/22/e8/d93176a20c412291b6ce538508af25c2.jpg" alt="" className="shop-img" />
                            <span className="shop-name">Nhà sách Fahasa</span>
                        </div>
                        <div className="quantity-book mb-6">
                            <p>Số lượng</p>
                            <div className="group-input">
                                <button className={quantity > 1 ? "" : "disable"} onClick={handleReduce}><img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-remove.svg" alt="remove-icon" width="20" height="20"/></button>
                                <input type="text" value={quantity} className="input" onChange={(e) => setQuantity(e.target.value)}></input>
                                <button onClick={handleIncrease}><img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-add.svg" alt="add-icon" width="20" height="20"/></button>
                            </div>
                        </div>
                        <div className="total-cost">
                            <p>Tạm tính</p>
                            <div className="price">{totalCost}<sup>đ</sup></div>
                        </div>
                        <div className="buy">
                            <button className="buying">Mua ngay</button>
                            <button className="add-to-cart">Thêm vào giỏ hàng</button>
                            <button className="before-buy-after-pay">Mua sau khi thanh toán</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail