import { DiscordIcon } from "../assets/Discord";
import { GithubIcon } from "../assets/Github";
import { LinkedinIcon } from "../assets/Linkedin";
import { TwitterIcon } from "../assets/Twitter";

export interface ISocialLinks {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export const socialLinks: ISocialLinks[] = [
  {
    name: "github",
    href: "https://github.com/ceeriil",
    icon: <GithubIcon />,
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/simon-cyril/",
    icon: <LinkedinIcon />,
  },
  {
    name: "twitter",
    href: "https://x.com/ceeriil",
    icon: <TwitterIcon />,
  },
  {
    name: "discord",
    href: "https://discord.com/users/ceeriil",
    icon: <DiscordIcon />,
  },
];
