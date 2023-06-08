"use client";
import { TextField } from "@/components/muiComponents/Mui";
import { useDebounce } from "@/libs/useDebounce";
import React, { ChangeEvent, useState } from "react";

function PromoCodeInput() {
  // TODO: Add promo code validation
  const [promoCode, setPromoCode] = useState("");
  const [dummyCode, setDummyCode] = useState("promo");
  const debounce = useDebounce;

  function handlePromoCode(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setPromoCode(e.target.value);
  }

  function handleChange() {
    debounce(handlePromoCode, 1000);
  }

  return (
    <TextField label="Promo Code" onChange={handleChange} value={promoCode} />
  );
}

export default PromoCodeInput;
