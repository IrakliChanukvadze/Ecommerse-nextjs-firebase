"use client";
import Modal, { ModalProps } from "@mui/material/Modal";

import React from "react";

function MuiModal(props: ModalProps) {
  return <Modal {...props}>{props.children}</Modal>;
}

export default MuiModal;
