"use client";
import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Modal,
  TextField,
  Typography,
} from "../muiComponents/Mui";
import { useForm } from "react-hook-form";
import { Context } from "@/Context/context";
import { getCurrentUser } from "@/libs/getCurrentUser";
import { BalanceRequest } from "@/libs/BalanceRequests";

type Props = {
  open: boolean;
  onClose: () => void;
};

interface FormTypes {
  card: number;
  amount: number;
}

function DepositModal({ open, onClose }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormTypes>();

  const { currentUser, toggler } = useContext(Context);
  const [showPass, setShowPass] = useState<boolean>(false);
  const onSubmit = handleSubmit(async (data) => {
    const admin: any = await getCurrentUser("admin@gurommerce.com");
    BalanceRequest({
      from: currentUser?.email || "",
      uid: currentUser?.uid || "",
      type: "deposit",
      transferId: crypto.randomUUID(),
      messages: admin[0].messages,
      amount: Number(data.amount),
    });
    reset({
      card: 0,
      amount: 0,
    });
    onClose();
  });

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        position={"absolute"}
        top={"50%"}
        left={"50%"}
        width={"500px"}
        height={"380px"}
        sx={{
          transform: "translate(-50%, -50%)",
          backgroundColor: toggler === "dark" ? "black" : "white",
        }}
      >
        <Typography variant="h6" textAlign={"center"} marginY={"20px"}>
          Deposit
        </Typography>
        <FormControl
          component={"form"}
          onSubmit={onSubmit}
          sx={{ width: "100%" }}
        >
          <TextField
            color={errors.card ? "error" : "primary"}
            label="Card Number"
            sx={{
              width: "60%",
              minWidth: "230px",
              margin: "auto",
              marginBottom: "20px",
            }}
            {...register("card", {
              required: "required",
              pattern: {
                // value: /^\d*$/,
                value: /\b\d{4}[ -]?\d{4}[ -]?\d{4}[ -]?\d{4}\b/,
                message: "Value for price field does not match price format",
              },
            })}
          />

          <TextField
            color={errors.amount ? "error" : "primary"}
            label="Amount"
            type={showPass ? "text" : "amount"}
            sx={{
              width: "60%",
              minWidth: "230px",
              margin: "auto",
              marginBottom: "20px",
            }}
            {...register("amount", {
              required: "required",
              pattern: {
                value: /^\d*\.?\d*$/,
                message: "Value for price field does not match price format",
              },
            })}
          />

          <Button
            type="submit"
            variant="outlined"
            sx={{ width: "200px", margin: "auto", marginTop: "20px" }}
          >
            Deposit
          </Button>
        </FormControl>
      </Box>
    </Modal>
  );
}

export default DepositModal;
