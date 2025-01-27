"use client";
import Button from "@mui/material/Button";

function sendMessage(){

}

export default function ClientButton({ children }) {
  return (
    <Button onClick={sendMessage} className="w-full">
      {children}
    </Button>
  );
}