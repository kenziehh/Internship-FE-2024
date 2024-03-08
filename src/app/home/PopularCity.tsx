import Card from "@/components/Card";
import React from "react";

const PopularCity = () => {
  return (
    <section className="flex flex-col gap-12 pb-20">
      <div className="flex flex-col items-center gap-3">
        <h3 className="text-3xl text-white bold">Populer</h3>
        <p className="text-2xl text-neutral text-center">
          Yuk mulai jelajahi kota tujuanmu!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 md:gap-40 justify-between radialGradient">
        <Card image="/yogya.jpg" name="Yogyakarta"/>
        <Card image="/bali.jpg" name="Bali" />
        <Card image="/surabaya.jpg" name="Surabaya" />
        <Card image="/malang.jpg" name="Malang" />
        <Card image="/bandung.jpg" name="Bandung" />
        <Card image="/bogor.jpg" name="Bogor" />
      </div>
    </section>
  );
};

export default PopularCity;
