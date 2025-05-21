import React from "react";
import "./haychonchungtoi.css";

function HayChonChungToi() {
  return (
    <div className="why-choose-us">
      <h2>Vì Sao Chọn Chúng Tôi?</h2>
      <p>Sản phẩm luôn chạy theo xu hướng, được giới trẻ ưa chuộng</p>
      <div className="why-cards">
        <div className="why-card">
          <img src="/images/sp1.png" alt="Sản phẩm mới" />
          <h3>Sản Phẩm Mới</h3>
          <p>
            Luôn được đổi mới theo xu hướng, Sản phẩm mẫu mã đa dạng
          </p>
        </div>
        <div className="why-card">
          <img src="/images/sp2.png" alt="Giá rẻ" />
          <h3>Giá Rẻ</h3>
          <p>
            Giá luôn rẻ hơn thị trường nhưng chất lượng luôn được đảm bảo
          </p>
        </div>
        <div className="why-card">
          <img src="/images/sp3.png" alt="Nhân viên thân thiện" />
          <h3>Nhân Viên</h3>
          <p>
            Luôn luôn niềm nở với khách hàng, tạo sự hài lòng tốt nhất
          </p>
        </div>
      </div>
    </div>
  );
}

export default HayChonChungToi;
