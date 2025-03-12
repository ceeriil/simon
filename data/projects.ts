export interface IAwards {
  name: string;
  link: string;
}

export interface IVideo {
  url: string;
  name: string;
}

export interface ISnapShots {
  url: string;
  name: string;
}

export interface ICollaborators {
  name: string;
  link: string;
  role: string;
}

export interface IProject {
  name: string;
  slug: string;
  description: string;
  liveLink: string | null;
  githubLink: string;
  tag: string;
  projectTags: string[];
  snapshots: ISnapShots[] | null;
  demoVideo: IVideo | null;
  collaborators: ICollaborators[];
  awards: IAwards[];
}

const projects: IProject[] = [
  {
    name: "Beatbridge",
    slug: "beatbridge",
    description:
      "BeatBridge allows fans to support their favorite artists directly. By engaging with music, sharing, and promoting it, fans earn tokens redeemable for exclusive rewards. It's a unique platform where every beat builds bridges between artists and fans. We leveraged the noir to veify off-chain data on-chain securely. The Spotify API allowed us to collect various user-related data (such as favorite songs, playlists, time spent on music, etc.), but this data inherently resided off-chain.",
    liveLink: "",
    githubLink: "https://github.com/Beat-Bridge/BeatBridge",
    tag: "Reconstructing",
    projectTags: ["Ethereum", "Next.js", "Tailwind CSS", "Noir", "Spotify Api"],
    snapshots: [],
    demoVideo: null,
    collaborators: [
      {
        name: "Cracka",
        link: "https://github.com/0xcracka",
        role: "Developer",
      },
      {
        name: "Daniel",
        link: "https://github.com/Ifechukwudaniel",
        role: "Blockchain Engineer",
      },
    ],
    awards: [
      {
        name: "Chainlink Spring 2023 Hackathon",
        link: "https://devpost.com/software/beatbridge",
      },
    ],
  },
  {
    name: "Paystream",
    slug: "paystream",
    description:
      "A programmable, automated payroll solution that leverages Streamflow SDK to simplify crypto payments. With built-in automation, it enables seamless payroll management—track transactions in real time, schedule payouts with precision, and eliminate payment delays. Whether paying employees, contractors, or managing token distributions, Paystream ensures recipients get paid on time, every time, with full transparency and control",
    liveLink: "https://paystreamfi.vercel.app/",
    githubLink: "https://github.com/ceeriil/paystream",
    tag: "Open Source",
    projectTags: ["Defi", "Next.js", "Streamflow SDK", "Solana"],
    snapshots: [],
    demoVideo: null,
    collaborators: [],
    awards: [],
  },
  {
    name: "Daily Loogies",
    slug: "daily-loogies",
    description:
      "Daily Loogie is a platform where oner random Loogie NFT is available for auction every day. People interested can participate by placing their bids on the NFT and at the end of the day, the Loogie is awarded to the highest bidder. This process repeats daily, and a chance for users to acquire unique Loogie NFTs till 3728 loogies have been minted. Users are also allowed to vote for the next Loogie for the Next day from a selection of four randomly chosen Loogie NFTs.",
    liveLink: "https://dailyloogies.vercel.app",
    githubLink: "https://github.com/ceeriil/DailyLoogies",
    tag: "Open Source",
    projectTags: ["Ethereum", "Next.js", "Tailwind CSS", "Subgraph", "NFT"],
    snapshots: [],
    demoVideo: null,
    collaborators: [
      {
        name: "Daniel",
        link: "https://github.com/Ifechukwudaniel",
        role: "Developer",
      },
    ],
    awards: [
      {
        name: "Scaffold Eth2 Bounty",
        link: "",
      },
    ],
  },
  {
    name: "Touchswap",
    slug: "touchswap",
    description:
      "Touchswap is a telegram mini-app is an interactive tap-to-earn game designed to boost engagement and build a strong community before the token launch. Users tap to complete milestones, earning points based on their activity. When the token officially launches, active participants are rewardedc based on their engagement levels.",
    liveLink: null,
    githubLink: "https://github.com/Touch-Swap/Web-App",
    tag: "Open Source",
    projectTags: ["Ethereum", "Next.js", "Tailwind CSS", "Noir", "Spotify Api"],
    snapshots: [],
    demoVideo: null,
    collaborators: [
      {
        name: "Daniel",
        link: "https://github.com/Ifechukwudaniel",
        role: "Developer",
      },
    ],
    awards: [],
  },
];

export default projects;
