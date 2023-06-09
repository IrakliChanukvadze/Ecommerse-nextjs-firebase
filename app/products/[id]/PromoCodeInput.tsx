"use client";
import { TextField } from "@/components/muiComponents/Mui";
import React, { ChangeEvent, useEffect, useState } from "react";

type PromoCodeInputProps = {
  promoCodes: PromoCodes;
};

function PromoCodeInput(props: PromoCodeInputProps) {
  // TODO: Add promo code validation
  const [promoCode, setPromoCode] = useState("");
  const [promoCodeIsValid, setPromoCodeIsValid] = useState<boolean>(false);

  useEffect(() => {
    if (promoCode) {
      const validCodes = Object.keys(props.promoCodes[0]);
      validCodes.forEach((code) => {
        if (code === promoCode) {
          console.log("success", code);
        }
      });
    }
  }, [promoCode, props.promoCodes]);

  function handlePromoCode(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setPromoCode(e.target.value);
  }

  return (
    <>
      <TextField
        label="Promo Code"
        onChange={handlePromoCode}
        value={promoCode}
      />
    </>
  );
}

export default PromoCodeInput;
