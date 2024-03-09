import CommentBubble from "@/components/CommentBubble";
import Separator from "@/components/Separator";
import ThumbCard from "@/components/ThumbCard";
import CarouselContainer from "@/components/carousel/CarouselContainer";
import CarouselImage from "@/components/carousel/CarouselImage";
import { CarouselImageData } from "@/models/interface/CarouselImageData";
import Image from "next/image";

export default function Destination() {
  const data: CarouselImageData = {
    name: "Yogyakarta",
    location: "Jawa Tengah, Indonesia",
  };
  const imageArray = [
    "/images/carousel/carousel-borobudur.jpg",
    "/images/carousel/carousel-yogya.jpg",
  ];
  return (
    <main>
      <CarouselContainer images={imageArray} data={data} />
      <section className="flex flex-col gap-5 md:gap-11 mt-[72px]">
        <div className="flex flex-col gap-5">
          <h3 className="text-white bold text-2xl md:h1">Deskripsi</h3>
          <p className="text-neutral">
            Candi Borobudur adalah sebuah kompleks candi Buddha yang terletak di
            Magelang, Jawa Tengah. Candi ini merupakan salah satu warisan budaya
            terbesar di dunia. Berdasarkan catatan sejarah, pembangunan Candi
            Borobudur dimulai pada abad ke-8, dan selesai sekitar abad ke-9
            Masehi. Candi Borobudur merupakan destinasi wisata yang sangat
            populer di Indonesia dan menarik wisatawan dari seluruh dunia untuk
            mengagumi keindahan seni dan arsitekturnya.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-white bold text-2xl md:h1">Alamat</h3>
          <p className="text-neutral">
            Jl. Badrawati, Kw. Candi Borobudur, Borobudur, Magelang, Jawa
            Tengah, Indonesia, 56553
          </p>
        </div>
        <div className="flex flex-col gap-5 md:flex-row md:gap-80">
          <div className="flex flex-col gap-5">
            <h3 className="text-white bold text-2xl md:h1">Jam Buka</h3>
            <p className="text-neutral">05.00 WIB</p>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-white bold text-2xl md:h1">Jam Tutup</h3>
            <p className="text-neutral">15.00 WIB</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-white bold text-2xl md:h1">Tiket Masuk</h3>
          <p className="text-neutral">Rp. 50.000</p>
        </div>
      </section>
      <div className="py-11">
        <Separator />
      </div>
      <section className="flex flex-col gap-8">
        <h3 className="text-white bold text-2xl md:h1">Ulasan</h3>
        <div className="flex flex-col gap-10">
          <h4 className="text-2xl text-neutral">Terbaru :</h4>
          <div className="flex justify-between">
            <div className="bg-white py-8 pl-8 pr-20 rounded-[20px] max-w-[550px] flex flex-col gap-9 relative">
              <ThumbCard
                direction="up"
                count={34}
                className="absolute hidden md:block right-0 -top-10 md:-right-3 md:-top-8"
              />
              <ThumbCard
                direction="down"
                count={4}
                className="absolute hidden md:block right-0 -bottom-10 md:bottom-10 md:-right-14"
              />

              <div className="flex items-center gap-6 relative">
                <Image
                  src={"/icons/profile.png"}
                  alt=""
                  width={70}
                  height={70}
                />
                <div>
                  <h5 className="text-2xl bold">Fenita Coppen</h5>
                  <h6 className="large text-neutral">01 Maret 2024</h6>
                </div>
              </div>
              <div className="flex flex-col gap-2 text-sm md:text-[22px]">
                <span className="text-purple">Indah banget!</span>
                <p className="text-neutral max-w-[440px]">
                  “Ini pengalaman pertamaku ke Bromo dan ga ngecewain!
                  Pemandangannya beneran kaya difoto, tour guidenya juga asikk,
                  mantap pokonya!!”
                </p>
              </div>
            </div>
            <div></div>
          </div>
          <div className="flex flex-col gap-9">
            <h4 className="text-neutral text-2xl">Lainnya :</h4>
            <div className="overflow-x-visible grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-center">
              <CommentBubble
                name="Aira Dermieza"
                date="06 Maret 2024"
                comment="Emang udah gak perlu diraguin lagi yaa pemandangannya, saran buat kalian coba dateng pas sunrise dehh, indah bgt!!"
              />
              <CommentBubble
                name="Steffi Amozarea"
                date="09 Maret 2024"
                comment="Gatau udah berapa kali kesini tapi selalu jatuh cintaa, apalagi jajanannya murah murah, top markotopp!!"
              />
              <CommentBubble
                name="Naura Vizemieta"
                date="01 Maret 2024"
                comment="Banyak bulee disinii hahah hati hati tapi temenku baru aja kehilangan dompet , tapi pemandangan mah oke bgtt!!"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
