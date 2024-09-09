import './style.css';

function Footer() {
    return (
        <footer className="footer mt-12">
            <div className="wide footer__content">
                <div className="row grid grid-cols-5">
                    <FooterColumn heading="Hỗ trợ khách hàng">
                        <FooterItem text="Hotline: 1900-6035" />
                        <FooterItem text="(1000 đ/phút, 8-21h kể cả T7, CN)" />
                        <FooterItem text="Các câu hỏi thường gặp" />
                        <FooterItem text="Gửi yêu cầu hỗ trợ" />
                        <FooterItem text="Hướng dẫn đặt hàng" />
                        <FooterItem text="Phương thức vận chuyển" />
                        <FooterItem text="Chính sách đổi trả" />
                        <FooterItem text="Hướng dẫn trả góp" />
                        <FooterItem text="Chính sách hàng nhập khẩu" />
                        <FooterItem text="Hỗ trợ khách hàng: hotro@tiki.vn" />
                        <FooterItem text="Báo lỗi bảo mật: security@tiki.vn" />
                    </FooterColumn>
                    
                    <FooterColumn heading="Về Tiki">
                        <FooterItem text="Giới thiệu Tiki" />
                        <FooterItem text="Tiki Blog" />
                        <FooterItem text="Tuyển dụng" />
                        <FooterItem text="Chính sách bảo mật thanh toán" />
                        <FooterItem text="Chính sách bảo mật thông tin cá nhân" />
                        <FooterItem text="Chính sách giải quyết khiếu nại" />
                        <FooterItem text="Điều khoản sử dụng" />
                        <FooterItem text="Giới thiệu Tiki Xu" />
                        <FooterItem text="Gói hội viên VIP" />
                        <FooterItem text="Tiếp thị liên kết cùng Tiki" />
                        <FooterItem text="Bán hàng doanh nghiệp" />
                        <FooterItem text="Điều kiện vận chuyển" />
                    </FooterColumn>
                    
                    <FooterColumn heading="Hợp tác và liên kết">
                        <FooterItem text="Quy chế hoạt động Sàn GDTMĐT" />
                        <FooterItem text="Bán hàng cùng Tiki" />
                        <h3 className="footer__heading">Chứng nhận bởi</h3>
                        <img src="https://example.com/path/to/certification-image" alt="Certification" className="footer__certification-img" />
                    </FooterColumn>
                    
                    <FooterColumn heading="Phương thức thanh toán">
                        <FooterPayment />
                        <h3 className="footer__heading">Dịch vụ giao hàng</h3>
                        <FooterTransport />
                    </FooterColumn>
                    
                    <FooterColumn heading="Kết nối với chúng tôi">
                        <FooterItem link="#" text="Facebook" icon="fa-facebook" />
                        <FooterItem link="#" text="YouTube" icon="fa-youtube" />
                        <FooterItem link="#" text="Zalo" icon="fa-zalo" />
                        <h3 className="footer__heading">Tải ứng dụng trên điện thoại</h3>
                        <FooterDownload />
                    </FooterColumn>
                </div>
            </div>

            <FooterBottom text="© 2023 - Bản quyền thuộc về Công ty TIKI" />
        </footer>
    );
}

function FooterColumn({ heading, children }) {
    return (
        <div className="col l-2-4 m-6 c-12">
            <h3 className="footer__heading">{heading}</h3>
            <ul className="footer-list">{children}</ul>
        </div>
    );
}

function FooterItem({ link, text, icon }) {
    return (
        <li className="footer-item">
            {link ? (
                <a href={link} className="footer-item__link">
                    {icon && <i className={`footer-item__icon fa-brands ${icon}`}></i>}
                    <span className="footer-item-text">{text}</span>
                </a>
            ) : (
                <span className="footer-item-text">{text}</span>
            )}
        </li>
    );
}

function FooterPayment() {
    const paymentIcons = [
        "https://cf.shopee.vn/file/a0a9062ebe19b45c1ae0506f16af5c16",
        "https://cf.shopee.vn/file/38fd98e55806c3b2e4535c4e4a6c4c08",
        "https://cf.shopee.vn/file/bc2a874caeee705449c164be385b796c",
        "https://cf.shopee.vn/file/2c46b83d84111ddc32cfd3b5995d9281",
        "https://cf.shopee.vn/file/5e3f0bee86058637ff23cfdf2e14ca09",
        "https://cf.shopee.vn/file/9263fa8c83628f5deff55e2a90758b06",
        "https://cf.shopee.vn/file/0217f1d345587aa0a300e69e2195c492"
    ];

    return (
        <ul className="footer__heading--payment">
            {paymentIcons.map((icon, index) => (
                <li key={index} className="footer__heading--payment-img">
                    <a href="#" className="footer__heading--payment-link">
                        <img src={icon} alt="Payment method" className="footer__heading--payment-bank" />
                    </a>
                </li>
            ))}
        </ul>
    );
}

function FooterTransport() {
    const transportIcons = [
        "https://cf.shopee.vn/file/0b3014da32de48c03340a4e4154328f6",
        "https://cf.shopee.vn/file/b8348201b4611fc3315b82765d35fc63",
        "https://cf.shopee.vn/file/6e3be504f08f88a15a28a9a447d94d3d",
        "https://cf.shopee.vn/file/3900aefbf52b1c180ba66e5ec91190e5",
        "https://cf.shopee.vn/file/0d349e22ca8d4337d11c9b134cf9fe63",
        "https://cf.shopee.vn/file/957f4eec32b963115f952835c779cd2c",
        "https://cf.shopee.vn/file/59270fb2f3fbb7cbc92fca3877edde3f"
    ];

    return (
        <ul className="footer__heading--transport">
            {transportIcons.map((icon, index) => (
                <li key={index} className="footer__heading--transport-img">
                    <a href="#" className="footer__heading--transport-link">
                        <img src={icon} alt="Transport method" className="footer__heading--transport-shipped" />
                    </a>
                </li>
            ))}
        </ul>
    );
}

function FooterDownload() {
    return (
        <div className="footer__download">
            <a href="#" className="footer__download-qr-link">
                <img src="https://baohothuonghieu.com/wp-content/uploads/2021/10/1536893974-QR-CODE-LA-GI-sblaw.jpeg" alt="Download QR" className="footer__download-qr" />
            </a>
            <div className="footer__download-apps">
                <a href="#" className="footer__download-apps-link">
                    <img src="https://downloadlogomienphi.com/sites/default/files/logos/download-logo-vector-googleplay-mien-phi.jpg" alt="Google Play" className="footer__download-apps-img" />
                </a>
                <a href="#" className="footer__download-apps-link">
                    <img src="https://media.techmaster.vn/api/wp-content/uploads/2014/10/Apple-App-Store.png" alt="AppStore" className="footer__download-apps-img" />
                </a>
            </div>
        </div>
    );
}

function FooterBottom({ text }) {
    return (
        <div className="footer__bottom">
            <div className="grid wide">
                <p className="footer__text">{text}</p>
            </div>
        </div>
    );
}

export default Footer;
