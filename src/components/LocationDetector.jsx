"use client";

import { useEffect, useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Image from "next/image";
const LocationDetector = () => {
  const [loading, setLoading] = useState(false);

  const searcParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();
  useEffect(() => {
    setLoading(true);

    const params = new URLSearchParams(searcParams);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        params.set("latitude", position.coords.latitude);
        params.set("longitude", position.coords.longitude);

        setLoading(false);
        router.push(`/current?${params.toString()}`);
      });
    }
  }, [router, searcParams, pathName]);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-700 text-white">
      {loading && (
        <>
          <Image
            src={"/network.gif"}
            width={500}
            height={500}
            alt={"loading"}
            className="border rounded-md my-4"
          />
          <p className="text-4xl text-center">Detecting your location......</p>
        </>
      )}
    </div>
  );
};
export default LocationDetector;
