import React from "react";
import "./gioithieu.css";

function GioiThieu() {
  return (
    <div className="gioithieu-wrapper">
      {/* Tiêu đề + breadcrumb */}
      <div className="gioithieu-header">
        <div className="gioithieu-header-inner">
          <h2>Giới Thiệu</h2>
          <div className="gioithieu-breadcrumb">
            <a href="/">Trang chủ</a> &gt; <span>Giới thiệu</span>
          </div>
        </div>
      </div>

      {/* Nội dung chính */}
      <div className="gioithieu-content">
        <div className="gioithieu-image">
          <img src="/images/540.jpg" alt="Giới thiệu" />
        </div>
        <div className="gioithieu-text">
          <h3>Chúng Tôi Là Ai?</h3>
          <p>
Sportsbook là thương hiệu thời trang tiên phong, chuyên thiết kế và cung cấp các sản phẩm thời trang hiện đại, năng động, phù hợp với xu hướng toàn cầu. Với phương châm hoạt động "We work for your style", Sportsbook không ngừng đổi mới trong thiết kế, cải tiến chất liệu và quy trình sản xuất nhằm mang đến những sản phẩm chất lượng cao, thời thượng và bền vững. Sportsbook luôn hướng tới việc tạo ra giá trị thực cho khách hàng thông qua phong cách sống đậm chất riêng, đồng thời xây dựng một môi trường làm việc sáng tạo, nơi mỗi cá nhân đều có cơ hội phát triển và thể hiện bản sắc thời trang của mình.
          </p>
        </div>
      </div>
    </div>
  );
}

export default GioiThieu;
