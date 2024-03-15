"use client";

import Separator from "@/components/Separator";
import { TourGuide } from "@/models/interface/TourGuide";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function GuideDetail() {
  const params = useParams<{
    city: string;
    destination: string;
    guideId: string;
  }>();
  const { data } = useQuery<TourGuide>({
    queryFn: async () => {
      const response = await axios.get(
        `/api/${params.city}/${params.destination}/${params.guideId}`
      );
      return response.data.data;
    },
    queryKey: ["guideDetail"],
  });
  return (
    <main className="flex flex-col md:flex-row">
      <section className="flex flex-col gap-[120px] bg-darkPurple px-24 py-[72px]">
        <div className="text-white flex gap-5">
          <Link href={`/${params.city}/${params.destination}/guide`}>
            Tour Guide
          </Link>
          <span>{`>`}</span>
          <span>Profile</span>
        </div>
        <div className="flex flex-col items-center gap-14 text-center">
          <Image
            width={270}
            height={270}
            alt=""
            src={data?.image ?? ""}
            className="rounded-full"
          />
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl bold text-white">
              {data?.name ?? "Tour Guide"}
            </h3>
            <h4 className="text-xl text-neutral">Tour Guide</h4>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-white">
          <div className="flex items-center gap-3">
            <Image
              src={"/icons/tourguide-profile/location.png"}
              width={20}
              height={20}
              alt=""
            />
            <span>{data?.location.city}</span>
          </div>
          <div className="flex items-center gap-3">
            <Image
              src={"/icons/tourguide-profile/rating.png"}
              width={20}
              height={20}
              alt=""
            />
            <span>{`${data?.rating ?? ""} (${
              data?.review.total ?? ""
            } Reviews)`}</span>
          </div>
          <div className="flex items-center gap-3">
            <Image
              src={"/icons/tourguide-profile/clock.png"}
              width={20}
              height={20}
              alt=""
            />
            <span>{data?.lastActive ?? "-"}</span>
          </div>
          <div className="flex items-center gap-3">
            <Image
              src={"/icons/tourguide-profile/chat.png"}
              width={20}
              height={20}
              alt=""
            />
            <span>{data?.responseTimeRate ?? "-"}</span>
          </div>
        </div>
      </section>
      <section className="radialGradient px-20 py-24 text-white">
        <div className="flex flex-col gap-11 items-start">
          <div className="flex flex-col gap-4">
            <h3 className="bold text-2xl">Tentang</h3>
            <p className="text-2xl">{data?.desc ?? ""}</p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="bold text-2xl">Alamat</h3>
            <p className="text-2xl">{data?.address ?? "-"}</p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="bold text-2xl">Kontak</h3>
            <span className="bg-darkPurple py-2 px-8 rounded-[55px]">
              {data?.phoneNumber ?? "-"}
            </span>
          </div>
        </div>
        <section className="pt-11 pb-20">
          <Separator />
        </section>
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-5">
              <Image
                src={data?.image ?? ""}
                width={50}
                height={50}
                alt=""
                className="rounded-full"
              />
              <div className="flex flex-col gap-1">
                <h4 className="text-xl bold">{data?.review.reviews[0].name}</h4>
                <div className="flex items-center gap-1">
                  <Image
                    alt=""
                    src={"/icons/star.png"}
                    width={20}
                    height={20}
                  />
                  <Image
                    alt=""
                    src={"/icons/star.png"}
                    width={20}
                    height={20}
                  />
                  <Image
                    alt=""
                    src={"/icons/star.png"}
                    width={20}
                    height={20}
                  />
                  <Image
                    alt=""
                    src={"/icons/star.png"}
                    width={20}
                    height={20}
                  />
                  <Image
                    alt=""
                    src={"/icons/star.png"}
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>
            <p>{data?.review.reviews[0].date}</p>
          </div>
          <p className="text-2xl">{data?.review.reviews[0].comment}</p>
        </div>
      </section>
    </main>
  );
}
