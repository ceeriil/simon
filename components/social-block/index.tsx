import Link from "next/link";
import React from "react";

import { socialLinks } from "./socalLinks";

export const SocialBlock = () => {
  return (
    <ul className="flex gap-x-4 lg:flex-col">
      {socialLinks.map(social => (
        <li key={social.name} className="my-4 hover:scale-105 duration-200">
          <Link href={social.href}>{social.icon}</Link>
        </li>
      ))}
    </ul>
  );
};
