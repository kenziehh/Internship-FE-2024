import CarouselImage from "@/components/carousel/CarouselImage";

export default function Destination() {
  return (
    <main>
      <CarouselImage
        image="/carousel-borobudur.jpg"
        name="Candi Borobudur"
        location="Jawa Tengah, Indonesia"
      />
      <section className="flex flex-col gap-5 md:gap-11 mt-[72px]">
        <div className="flex flex-col gap-5">
          <h1 className="text-white bold">Deskripsi</h1>
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
          <h1 className="text-white bold">Alamat</h1>
          <p className="text-neutral">
            Jl. Badrawati, Kw. Candi Borobudur, Borobudur, Magelang, Jawa
            Tengah, Indonesia, 56553
          </p>
        </div>
        <div className="flex flex-col gap-5 md:flex-row md:gap-80">
          <div className="flex flex-col gap-5">
            <h1 className="text-white bold">Jam Buka</h1>
            <p className="text-neutral">05.00 WIB</p>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-white bold">Jam Tutup</h1>
            <p className="text-neutral">05.00 WIB</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-white bold">Tiket Masuk</h1>
          <p className="text-neutral">Rp. 50.000</p>
        </div>
      </section>
    </main>
  );
}
