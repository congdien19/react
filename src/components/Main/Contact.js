import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h2>Liên Hệ</h2>
        <p>Trang chủ &gt; Liên hệ</p>
      </div>

      <div className="contact-info-boxes">
        <div className="info-box">
          <img src="/images/map.png" alt="map" />
          <h4>Địa chỉ</h4>
          <p>Số 1 Đào Duy Anh</p>
        </div>
        <div className="info-box">
          <img src="/images/mail.png" alt="email" />
          <h4>Địa chỉ Email</h4>
          <p>theme@gmail.com</p>
        </div>
        <div className="info-box">
          <img src="/images/phone.png" alt="phone" />
          <h4>Số điện thoại</h4>
          <p>0897654323</p>
        </div>
      </div>

      <div className="contact-form-section">
        <div className="contact-form">
          <h3>Liên Hệ</h3>
          <p>Công ty chúng tôi luôn hướng đến sự hài lòng cho khách hàng</p>
          <form>
            <div className="form-row">
              <input type="text" placeholder="Nhập tên *" required />
              <input type="email" placeholder="Nhập Email *" required />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Nhập số điện thoại *" required />
              <input type="text" placeholder="Nhập chủ đề" />
            </div>
            <textarea placeholder="Tin nhắn *" required></textarea>
            <button type="submit">Gửi Đi</button>
          </form>
        </div>
        <div className="contact-map">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.627713569365!2d105.8345199750361!3d21.007391980634116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab729b8a6173%3A0xfde5c4eafe1e621f!2zMSDEkMaw4bubIMSQw6BvIER1eSBBbmgsIFBoxrDhu51uZyBMacOqbiwgxJDhu5NuZyBCw6AsIEjDoCBO4buZaSwgVmlldG5hbQ!5e0!3m2!1svi!2s!4v1715920457722!5m2!1svi!2s"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
