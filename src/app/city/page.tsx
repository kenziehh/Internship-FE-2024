import DestinationCard from "@/components/DestinationCard";
import CarouselImage from "@/components/carousel/CarouselImage";

export default function City() {
  return (
    <main className="flex flex-col ">
      <CarouselImage image="/carousel-yogya.jpg" />
      <section className="flex flex-col gap-10 radialGradient mt-10">
        <DestinationCard
          image="/images/destination-image.png"
          name="Gunung Bromo"
          desc="Bromo, atau Gunung Bromo adalah gunung berapi somma aktif dan bagian
          dari pegunungan Tengger, di Jawa Timur, Indonesia. Kawasan tersebut
          merupakan destinasi di Jawa Timur yang paling banyak dikunjungi, dan
          gunung berapi tersebut termasuk dalam Taman Nasional Bromo Tengger
          Semeru."
        />
        <DestinationCard
          image="/images/destination-image.png"
          name="Gunung Bromo"
          desc="Bromo, atau Gunung Bromo adalah gunung berapi somma aktif dan bagian
          dari pegunungan Tengger, di Jawa Timur, Indonesia. Kawasan tersebut
          merupakan destinasi di Jawa Timur yang paling banyak dikunjungi, dan
          gunung berapi tersebut termasuk dalam Taman Nasional Bromo Tengger
          Semeru."
        />
        <DestinationCard
          image="/images/destination-image.png"
          name="Gunung Bromo"
          desc="Bromo, atau Gunung Bromo adalah gunung berapi somma aktif dan bagian
        dari pegunungan Tengger, di Jawa Timur, Indonesia. Kawasan tersebut
        merupakan destinasi di Jawa Timur yang paling banyak dikunjungi, dan
        gunung berapi tersebut termasuk dalam Taman Nasional Bromo Tengger
        Semeru."
        />
        <DestinationCard
          image="/images/destination-image.png"
          name="Gunung Bromo"
          desc="Bromo, atau Gunung Bromo adalah gunung berapi somma aktif dan bagian
      dari pegunungan Tengger, di Jawa Timur, Indonesia. Kawasan tersebut
      merupakan destinasi di Jawa Timur yang paling banyak dikunjungi, dan
      gunung berapi tersebut termasuk dalam Taman Nasional Bromo Tengger
      Semeru."
        />
      </section>
    </main>
  );
}
