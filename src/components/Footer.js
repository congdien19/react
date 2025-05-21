import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-column">
          <h3>Liên Hệ</h3>
          <p> Thị Trấn Chờ-Yên Phong</p>
          <p>curry@gmail.com</p>
          <p> </p>
          <div className="footer-social-icons">
            <a href="#" aria-label="Facebook">
              <img src="./Images/facebook.png" alt="Facebook" />
            </a>
            <a href="#" aria-label="Twitter">
              <img src="./images/twitter.png" alt="Twitter" />
            </a>
            <a href="#" aria-label="Google Plus">
              <img src="./images/google.png" alt="Google Plus" />
            </a>
            <a href="#" aria-label="YouTube">
              <img src="./images/youtube.png" alt="YouTube" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src="./images/instagram.png" alt="Instagram" />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Liên Kết</h3>
          <ul>
            <li><a href="#">Giới thiệu</a></li>
            <li><a href="#">Liên hệ</a></li>
            <li><a href="#">Câu hỏi thường gặp</a></li>
            <li><a href="#">Chính sách bảo mật</a></li>
            <li><a href="#">Chính sách đổi trả hàng</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Tài Khoản</h3>
          <ul>
            <li><a href="#">Tài khoản</a></li>
            <li><a href="#">Cửa hàng</a></li>
            <li><a href="#">Giỏ hàng</a></li>
            <li><a href="#">Thanh toán</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Đăng Ký Bản Tin Của Chúng Tôi</h3>
          <p>Nếu bạn muốn nhận email từ chúng tôi mỗi khi có ưu đãi đặc biệt mới, hãy đăng ký tại đây!</p>
          <div className="newsletter">
            <input type="email" placeholder="Nhập địa chỉ Email" />
            <button aria-label="Send Email">
              <img src="./images/6422198.png" alt="Send Email" />
            </button>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
      
        <p>© 2025 All Đặng Công Diện & Ngô Bá Chiến</p>
      </div>
    </footer>
  );
}

export default Footer;
