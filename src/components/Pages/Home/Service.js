import React from 'react';
import './Service.css';

const Service = () => {
  return (
    <div className="service-container">
      {/* Dịch vụ 1: Giao Hàng Miễn Phí */}
      <div className="service-item">
        <div className="service-icon">
          <img src="/Images/giaohang.png" alt="Shipping Icon" />
        </div>
        <div className="service-text">
          <h3>Giao Hàng Miễn Phí</h3>
          <p>Trên toàn quốc</p>
        </div>
      </div>

      {/* Dịch vụ 2: Hoàn Tiền */}
      <div className="service-item">
        <div className="service-icon">
          <img src="/images/thanhtoan.png" alt="Refund Icon" />
        </div>
        <div className="service-text">
          <h3>Hoàn Tiền</h3>
          <p>Hoàn tiền 30 ngày</p>
        </div>
      </div>

      {/* Dịch vụ 3: Hỗ Trợ Khách Hàng */}
      <div className="service-item">
        <div className="service-icon">
          <img src="/images/hotro.png" alt="Support Icon" />
        </div>
        <div className="service-text">
          <h3>Hỗ Trợ Khách Hàng</h3>
          <p>Hỗ trợ 24/7</p>
        </div>
      </div>

      {/* Dịch vụ 4: Bảo Mật Thanh Toán */}
      <div className="service-item">
        <div className="service-icon">
          <img src="/images/thanhtoan2.png" alt="Payment Icon" />
        </div>
        <div className="service-text">
          <h3>Bảo Mật Thanh Toán</h3>
          <p>Thanh toán an toàn</p>
        </div>
      </div>
    </div>
  );
};

export default Service;