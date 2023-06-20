import { Context } from "@/Context/context";
import { Box, Typography } from "@/components/muiComponents/Mui";
import { acceptTransaction } from "@/libs/acceptTransaction";
import { declineTransaction } from "@/libs/declineTransaction";
import React, { useContext } from "react";

function AdminMessages() {
  const { currentUser, setCurrentUser } = useContext(Context);

  return (
    <Box>
      {currentUser?.messages?.map((item, index, array) => (
        <Box
          key={index}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box>
            <Typography>{item.from}</Typography>
          </Box>
          <Box>
            <Typography>{item.message}</Typography>
          </Box>
          <Box display={"flex"} gap={"10px"}>
            <Typography
              sx={{ cursor: "pointer" }}
              onClick={() => {
                acceptTransaction({
                  ...item,
                  messages: [
                    ...array.filter((k) => k.transferId !== item.transferId),
                  ],
                });
                setCurrentUser({
                  ...currentUser,
                  messages: [
                    ...array.filter((k) => k.transferId !== item.transferId),
                  ],
                });
              }}
            >
              Accept
            </Typography>
            <Typography
              sx={{ cursor: "pointer" }}
              color="error"
              onClick={() => {
                declineTransaction({
                  messages: [
                    ...array.filter((k) => k.transferId !== item.transferId),
                  ],
                });
                setCurrentUser({
                  ...currentUser,
                  messages: [
                    ...array.filter((k) => k.transferId !== item.transferId),
                  ],
                });
              }}
            >
              Decline
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default AdminMessages;
