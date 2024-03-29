import { FC } from "react";
import Image from "next/image";
import profilePicture from "../assets/profile_picture.jpeg";

export const Hero: FC = () => {
  return (
    <section className="flex justify-center lg:space-x-20" id="hero">
      <Image
        src={profilePicture}
        alt="Profile Image"
        className="w-3/12 h-3/12 justify-start items-start rounded-full hidden lg:flex lg:visible"
      />
      <div className="space-y-1">
        <h3 className="text-4xl text-[#5FA8FF] font-beatriceBold">
          Gautam Paranjape
        </h3>
        <p className="text-base text-primary-light">
          Developer, Designer & Student
        </p>
        <p className="text-sm text-gray-50">Bay Area, California</p>
      </div>
    </section>
  );
};
