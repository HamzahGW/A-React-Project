import React from "react";

type Props = {};

export function Authorities({}: Props) {
  return (
    <div className="mx-auto my-20 max-w-7xl px-6 text-center lg:px-8">
      <h2 className="my-10 text-3xl font-bold text-gray-900 sm:text-4xl">
        خبرة في بناء حلول متوافقة مع متطلبات الجهات التشريعية
      </h2>
      <div className="grid items-center gap-16 pt-8 md:grid-cols-3">
        <img
          className="mx-auto w-60"
          src={"/images/capital_market_authority.png"}
        />
        <img
          className="mx-auto h-20 w-auto"
          src={"/images/ministry_of_commerce.png"}
        />
        <img
          className="mx-auto h-20 w-auto"
          src={"/images/saudi_central_bank.png"}
        />
      </div>
    </div>
  );
}
