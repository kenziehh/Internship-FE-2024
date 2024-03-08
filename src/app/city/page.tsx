import DestinationCard from "@/components/DestinationCard";
import CarouselImage from "@/components/carousel/CarouselImage";

export default function City() {
  return (
    <main className="flex flex-col ">
      <CarouselImage
        image="/carousel-yogya.jpg"
        name="Yogyakarta"
        location="Jawa Tengah, Indonesia"
      />
      <section className="flex flex-col gap-10 radialGradient mt-10">
        <DestinationCard
          image="/images/destination/borobudur.png"
          name="Candi Borobudur"
          desc="Candi Borobudur adalah sebuah kompleks candi Buddha yang terletak di Magelang, Jawa Tengah. Candi ini merupakan salah satu warisan budaya terbesar di dunia. Berdasarkan catatan sejarah, pembangunan Candi Borobudur dimulai pada abad ke-8, dan selesai sekitar abad ke-9 Masehi. Candi Borobudur..."
        />
        <DestinationCard
          image="/images/destination/parangtritis.png"
          name="Pantain Parangtritis"
          desc="Pantai Parangtritis adalah salah satu pantai yang terkenal di Yogyakarta, Indonesia. Pantai ini terletak sekitar 27 kilometer selatan dari pusat kota Yogyakarta dan merupakan tujuan wisata yang populer di daerah tersebut. Pantai ini dikenal dengan pasir putihnya yang luas, dan pemandangan laut yang memukau..."
        />
        <DestinationCard
          image="/images/destination/malioboro.png"
          name="Malioboro"
          desc="Malioboro terkenal sebagai pusat perbelanjaan yang menawarkan berbagai produk, seperti batik, kerajinan tangan, pakaian, aksesoris, dan oleh-oleh khas Yogyakarta. Beberapa toko dan pedagang kaki lima menjajakan barang-barang mereka di sepanjang jalan ini."
        />
        <DestinationCard
          image="/images/destination/heha.png"
          name="Heha Sky View"
          desc="Heha Sky View Jogja, menjadi bukti bahwa daya imajinasi manusia mampu merubah hal yang biasa menjadi luar biasa. Restoran, café, dan spot foto yang dipadukan dengan sentuhan seni kekinian."
        />
      </section>
    </main>
  );
}
