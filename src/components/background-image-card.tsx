import React from "react";
import { Typography } from "@material-tailwind/react";

interface BackgroundCardProps {
  title: string;
  children: React.ReactNode;
  imageUrl: string;
}

export function BackgroundImageCard({ title, children, imageUrl }: BackgroundCardProps) {
  const cardStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="grid place-items-center h-full px-8 py-6 rounded-xl" style={cardStyle}>
      <div className="text-white">
        <Typography variant="h2" className="text-center"
        placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
          {title}
        </Typography>
        <Typography className="my-2 text-base w-full text-center font-normal"
        placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
          {children}
        </Typography>
      </div>
    </div>
  );
}
export default BackgroundImageCard;
