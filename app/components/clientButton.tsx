"use client";
import Button from "@mui/material/Button";

function sendMessage(){

}

export default function ClientButton({ children }) {
  return (
    <Button onClick={sendMessage} className="w-full !border-2 !border-solid !border-white !text-white">
      {children}
    </Button>
  );
}