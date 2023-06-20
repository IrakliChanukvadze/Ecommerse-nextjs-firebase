"use client";
import { TextField } from "@/components/muiComponents/Mui";
import React, { ChangeEvent, useEffect, useState } from "react";

type PromoCodeInputProps = {
  promoCodes: PromoCodes;
  price: number;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
};

function PromoCodeInput(props: PromoCodeInputProps) {
  const [promoCode, setPromoCode] = useState("");
  const [promoCodeIsValid, setPromoCodeIsValid] = useState<boolean>(false);

  useEffect(() => {
    let timeout = setTimeout(() => {
      const validCodes = Object.keys(props.promoCodes[0]);
      let validation = false;
      validCodes.forEach((code) => {
        if (code === promoCode) {
          validation = true;
          console.log("success", code);
        }
      });
      if (validation) {
        setPromoCodeIsValid(true);
        props.setPrice((prev) => prev * props.promoCodes[0][promoCode]);
      } else {
        setPromoCodeIsValid(false);
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [promoCode]);

  const handlePromoCode =
    (setPromoCode: any) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setPromoCode(e.target.value);
    };

  return (
    <>
      <TextField
        label="Promo Code"
        onChange={handlePromoCode(setPromoCode)}
        value={promoCode}
        color={promoCodeIsValid ? "success" : !promoCode ? "info" : "error"}
        helperText={!promoCodeIsValid && promoCode && "Incorrect Promo Code"}
      />
    </>
  );
}

export default PromoCodeInput;
