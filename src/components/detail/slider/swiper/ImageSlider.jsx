import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function ImageSlider() {
  const [modalImage, setModalImage] = useState(null);

  const images = [
    "../../../../image/mobile/dummy-image-1.png",
    "../../../../image/mobile/dummy-image-2.png",
    "../../../../image/mobile/dummy-image-3.png",
  ];

  return (
    <>
      {/* スライダー */}
      <Swiper spaceBetween={10} slidesPerView={1} loop>
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`slide-${index}`}
              className="cursor-pointer rounded-lg"
              onClick={() => setModalImage(src)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* モーダル */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setModalImage(null)}
        >
          <div className="relative max-w-4xl w-full px-4">
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setModalImage(null)}
            >
              ✕
            </button>
            <img
              src={modalImage}
              alt="modal"
              className="w-full h-auto rounded-lg shadow-lg"
              onClick={(e) => e.stopPropagation()} // 画像クリックで閉じない
            />
          </div>
        </div>
      )}
    </>
  );
}
