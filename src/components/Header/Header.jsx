import './style.css';
import React, { useState, useEffect, useRef } from 'react';


function Header() {
    const [searchHistory, setSearchHistory] = useState([]);
    const [isHistoryVisible, setIsHistoryVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const openHistory = () => {
        setIsHistoryVisible(true);
    };
    const closeHistory = () => {
        setIsHistoryVisible(false);
    };

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const highlightKeyword = (text) => {
        if (!searchTerm) return text;
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        return text.replace(regex, '<span class="highlight">$1</span>');
    };

    useEffect(() => {
        fetch('https://86yfl7-8080.csb.app/books')
            .then(response => response.json())
            .then(data => setSearchHistory(data))
            .catch(error => console.error('Error fetching search history:', error));
    }, []);
    return (
        <>
            <div className="header flex items-center py-2 pb-3 mb-2 hideMb hideSm">
                <div className="header__logo mr-4 hideMb hideSm">
                    <a href="/">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/43/Logo_Tiki_2023.png" alt="" className="header__logo-img"/>
                    </a>
                </div>
                <div className="header__search flex items-center border-2 rounded-md mx-4">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="header__search-icon w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                    <input type="text" placeholder="Freeship giảm đến 30k" className="header__search-input mx-4" onClick={openHistory} onChange={handleInputChange} />
                    <button className="header__search-btn">Tìm kiếm</button>

                    {isHistoryVisible && (
                        <div className="header__search-history">
                            <div className="header__search-history-heading">
                                <h3 className="header__search-history-heading--title">Hàng nhập khẩu</h3>
                                <div className="header__search-history-heading--close" onClick={closeHistory}>
                                    <i className="fa-solid fa-xmark"></i>
                                    <span>Đóng</span>
                                </div>
                            </div>
                            <ul className="header__search-history-list">
                                {searchHistory && searchHistory.length > 0 && searchHistory.map((item, index) => (
                                    <li key={index} className="header__search-history-item">
                                        <a href={item.current_seller?.link}>
                                            <img src="https://salt.tikicdn.com/ts/upload/e8/aa/26/42a11360f906c4e769a0ff144d04bfe1.png" alt="" />
                                            {/* <p>{item.name}</p> */}
                                            <p dangerouslySetInnerHTML={{ __html: highlightKeyword(item.name) }} />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                <div className="header__home mx-5 hideMd hideMb hideSm">
                    <a href="/" className="header__home-link flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        <span className="mx-1">Trang chủ</span>
                    </a>
                </div>
                <div className="header__info mx-5 items-center hideSm">
                    <a href="/" className="header__info-link">
                        <i className="fa-regular fa-face-smile-wink"></i>
                        <span className="mx-1 hideMb hideMd hideSm">Tài khoản</span>
                    </a>
                </div>
                <div className="header__cart mx-4 hideSm">
                    <div className="header__cart-wrap">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        <span className="header__cart-notice flex items-center justify-center">0</span>
                    </div>
                </div>
            </div>

            {/* Header Mobile */}
            <div className="headerMdMb hideLg hideMd">
                <div className="headerMdMb__heading mr-4 flex justify-between items-center">
                    <a href="/">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/43/Logo_Tiki_2023.png" alt="" className="header__logo-img"/>
                    </a>
                    <div className="cart-and-filter flex justify-between items-center">
                        <div className="header__cart mx-4 mr-4">
                            <div className="header__cart-wrap">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                                <span className="header__cart-notice flex items-center justify-center">0</span>
                            </div>
                        </div>
                        {/* Filter */}
                        <div className="headerMdMb__filter ml-4">
                            <label htmlFor="filter-mobile-input">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="filter-icon w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                                </svg>
                            </label>

                            <input type="checkbox" name="" id="filter-mobile-input" className="filter__input" />

                            <label htmlFor="filter-mobile-input" className='filter__overlay'></label>

                            <div className="aside__main-mobile">
                                <label htmlFor="filter-mobile-input">
                                    <i className="filter__mobile-close fa-solid fa-xmark"></i>
                                </label>
                                <div className="aside__main-products">
                                    <h2>Danh mục sản phẩm</h2>
                                    <ul className="aside__main-products-list">
                                        <li className="aside__main-products-item"><a href="/">English book</a></li>
                                        <li className="aside__main-products-item"><a href="/">Sách tiếng việt</a></li>
                                        <li className="aside__main-products-item"><a href="/">Văn phòng phẩm</a></li>
                                        <li className="aside__main-products-item"><a href="/">Quà lưu niệm</a></li>
                                    </ul>
                                </div>
                                <div className="aside__main-vendor">
                                    <h2>Nhà cung cấp</h2>
                                    <ul className="aside__main-vendor-list">
                                        <li className="aside__main-vendor-item">
                                            <input type="checkbox" name="" id="item1" />
                                            <label htmlFor="item1">Nhà sách Fahasa</label>
                                        </li>
                                        <li className="aside__main-vendor-item">
                                            <input type="checkbox" name="" id="item2" />
                                            <label htmlFor="item2">Bamboo Books</label>
                                        </li>
                                        <li className="aside__main-vendor-item">
                                            <input type="checkbox" name="" id="item3" />
                                            <label htmlFor="item3">Time Book</label>
                                        </li>
                                        <li className="aside__main-vendor-item">
                                            <input type="checkbox" name="" id="item4" />
                                            <label htmlFor="item4">Nhà sách Online</label>
                                        </li>
                                        <li className="aside__main-vendor-item">
                                            <input type="checkbox" name="" id="item5" />
                                            <label htmlFor="item5">VBooks</label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="aside__main-rating">
                                    <h2>Đánh giá</h2>
                                    <div className="aside__main-rating--detail">
                                        <div className="aside__main-rating--listStar">
                                            <i className="star-gold fa-solid fa-star"></i>
                                            <i className="star-gold fa-solid fa-star"></i>
                                            <i className="star-gold fa-solid fa-star"></i>
                                            <i className="star-gold fa-solid fa-star"></i>
                                            <i className="star-gold fa-solid fa-star"></i>
                                        </div>
                                        <span>Từ 5 sao</span>
                                    </div>
                                    <div className="aside__main-rating--detail">
                                        <div className="aside__main-rating--listStar">
                                            <i className="star-gold fa-solid fa-star"></i>
                                            <i className="star-gold fa-solid fa-star"></i>
                                            <i className="star-gold fa-solid fa-star"></i>
                                            <i className="star-gold fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <span>Từ 4 sao</span>
                                    </div>
                                    <div className="aside__main-rating--detail">
                                        <div className="aside__main-rating--listStar">
                                            <i className="star-gold fa-solid fa-star"></i>
                                            <i className="star-gold fa-solid fa-star"></i>
                                            <i className="star-gold fa-solid fa-star"></i>                              
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <span>Từ 3 sao</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header__search flex items-center border-2 rounded-md mx-4 mb-4">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="header__search-icon w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                    <input type="text" placeholder="Freeship giảm đến 30k" className="header__search-input mx-4" onClick={openHistory} />
                    <button className="header__search-btn">Tìm kiếm</button>

                    <div className="header__search-history">
                        <div className="header__search-history-heading">
                            <h3 className="header__search-history-heading--title">Hàng nhập khẩu</h3>
                            <div className="header__search-history-heading--close" onClick={() => setIsHistoryVisible(false)}>
                                <i className="fa-solid fa-xmark"></i>
                                <span>Đóng</span>
                            </div>
                        </div>
                        <ul className="header__search-history-list">
                            {searchHistory.map((item, index) => (
                                <li key={index} className="header__search-history-item">
                                    <a href={item.current_seller?.link}>
                                        <img src="https://salt.tikicdn.com/ts/upload/e8/aa/26/42a11360f906c4e769a0ff144d04bfe1.png" alt="" />
                                        <p>{item.name}</p>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="aside__heading flex items-center mb-2 ml-4">
                    <a href='/' className="aside__heading-home">Trang chủ</a>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icon-next w-4 h-4 mx-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                    <a href="/" className="aside__heading-next-content">Nhà sách Tiki</a>
                </div>
            </div>
        </>
    )
}

export default Header