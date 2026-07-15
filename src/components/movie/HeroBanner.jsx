import { useState, useEffect } from "react";
import hinh1 from "../../assets/img/hinh-nen-1920-1080-thumbnail.jpg";
import hinh2 from "../../assets/img/hinh-nen-may-tinh-anime-4k (111).jpg";
import hinh3 from "../../assets/img/ironman_800x450.jpg";

const banners = [
  {
    image: hinh1,
    title: "Avatar",
    description:
      "Một hành trình khám phá thế giới mới đầy bí ẩn và hấp dẫn."
  },
  {
    image: hinh2,
    title: "Anime Movie",
    description:
      "Những bộ phim hoạt hình Nhật Bản đặc sắc."
  },
  {
    image: hinh3,
    title: "Iron Man",
    description:
      "Siêu anh hùng Marvel với công nghệ vượt bậc."
  }
];


  function HeroBanner(){
  const [current,setCurrent] = useState(0);
  // Tự động chuyển slide
  useEffect(()=>{
    const timer = setInterval(()=>{
    setCurrent(prev => 
    (prev + 1) % banners.length
    )
    },5000); // 5 giây đổi ảnh
    // Xóa timer khi component bị hủy
    return ()=>clearInterval(timer);
  },[]);


  return (

    <section className="
      relative 
      h-[600px]
      overflow-hidden
    ">

      <img
        src={banners[current].image}
        alt={banners[current].title}
        className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        transition-opacity
        duration-1000
      "
      />

      <div className="
        absolute
        inset-0
        bg-gradient-to-r
        from-black
        via-black/60
        to-transparent
      ">
      </div>

      <div className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-10
        pt-40
      ">

        <h1 className="
          text-5xl
          font-bold
        ">
        {banners[current].title}
        </h1>

        <p className="
          mt-5
          max-w-xl
          text-gray-300
        ">
        {banners[current].description}
        </p>
      </div>
    </section>
    )
}


export default HeroBanner;