"use client";

import { TextField } from "@/components/muiComponents/Mui";
import React, { ChangeEvent, useState } from "react";

function PromoCodeInput() {
  // TODO: Add promo code validation
  const [promoCode, setPromoCode] = useState("");

  function handlePromoCode(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setPromoCode(e.target.value);
  }

  return (
    <TextField
      label="Promo Code"
      onChange={handlePromoCode}
      value={promoCode}
    />
  );
}

export default PromoCodeInput;
