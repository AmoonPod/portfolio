import React from "react";
import IconLink from "../core/IconLink";
import Title from "../core/Title";

function Footer() {
  return (
    <footer className='flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8' >
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8"></hr>
      <Title title="Contact" />
      <div className="flex space-x-4">
        <IconLink label="Twitter" href="https://twitter.com/manudecegliee" />
        <IconLink label="Instagram" href="https://instagram.com/manudeceglie" />
        <IconLink label="Github" href="https://github.com/AmoonPod" />
      </div>
    </footer >
  );
}

export default Footer;
