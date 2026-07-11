import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Yugha Sattampillai",
  initials: "YS",
  url: "https://yugha.me",
  location: "India",
  locationLink: "https://www.google.com/maps/place/India",
  description:
    "I'm Yugha Sattampillai (S Yugha) — a Full Stack Developer, Copywriter and Open Source Contributor from India. I specialize in building scalable web applications, mobile apps, and MVPs.",
  summary:
    "I build interactive web applications using TypeScript, React Native, React, Next.js, Bun and PostgreSQL. With a focus on System Architecture design, I am enthusiastic about Finding Solutions and crafting reliable, scalable systems for modern cloud native environments.",
  avatarUrl: "/me.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "React Native", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Go", icon: Golang },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "syugha13@gmail.com",
    tel: "+918883370107",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/yugha13",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yugha/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Website: {
        name: "Main Portfolio",
        url: "https://yugha.me",
        icon: Icons.globe,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/yugha_13",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:syugha13@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Elev8 Digital Agency",
      href: "https://school.e8pro.com/",
      badges: [],
      location: "India",
      title: "Founder CTO",
      logoUrl: "/company/e8pro.png",
      start: "August 2024",
      end: "September 2025",
      description: "Built from scratch into a fullstack digital agency delivering high performance websites, web apps, and digital solutions for SMBs and enterprises. Architected and shipped dozens of production grade websites, handling everything end-to-end UX, UI, engineering, deployment, analytics, and optimization."
    },
    {
      company: "Nudge",
      href: "https://erp-nudge.framer.website",
      badges: [],
      location: "Bangalore, India (remote)",
      title: "Fullstack Developer",
      logoUrl: "/company/nudge.png",
      start: "June 2025",
      end: "July 2025",
      description: "Built the core React.js front-end for Nudge’s analytics dashboard, including real-time data views, charts, and AI-driven insights modules. Designed and optimized Supabase database schemas, RLS policies, triggers, and edge functions to manage multi-platform operations data securely."
    },
    {
      company: "KiudTech",
      href: "https://kiudtech.com",
      badges: [],
      location: "Bangalore, India (remote)",
      title: "Backend Senior Developer",
      logoUrl: "/company/ki-logo.png",
      start: "June 2025",
      end: "July 2025",
      description: "Built and maintained React Native mobile applications for students, parents, and teachers with real-time access to attendance, homework, results, notifications, and school updates. Integrated the mobile apps with Supabase Auth for secure login."
    }
  ],
  education: [
    {
      school: "VET Institute of Arts and Science",
      href: "https://vetias.ac.in",
      degree: "Degree",
      logoUrl: "",
      start: "",
      end: "",
    }
  ],
  projects: [
    {
      title: "Career Guidance App",
      href: "https://expo.dev/accounts/yugha13/projects/career-guidance-app/builds/cbd750bb-ea66-482a-b490-be82e30a27dc",
      dates: "",
      active: true,
      description: "An AI-powered career development platform helping students with personalized roadmaps, AI career advisors, smart CV building, and comprehensive interview preparation.",
      technologies: ["React Native", "NativeWind", "Bun", "Supabase", "TypeScript"],
      links: [
        {
          type: "Website",
          href: "https://expo.dev/accounts/yugha13/projects/career-guidance-app/builds/cbd750bb-ea66-482a-b490-be82e30a27dc",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Yugha13/career-guidance-app",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/project/career-guidance.png",
      video: "",
    },
    {
      title: "Ecom Website",
      href: "https://ecom-demo-two.vercel.app/",
      dates: "",
      active: true,
      description: "A modern e-commerce storefront featuring a seamless shopping card experience, payment integration, and a responsive design optimized for conversions.",
      technologies: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL", "Supabase"],
      links: [
        {
          type: "Website",
          href: "https://ecom-demo-two.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Yugha13/ecom_demo",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/project/ecom-demo.png",
      video: "",
    },
    {
      title: "Hospital App",
      href: "https://github.com/Yugha13/hospital-app",
      dates: "",
      active: true,
      description: "A dedicated patient-focused mobile application allowing users to book appointments, view medical records, and receive medication reminders.",
      technologies: ["React Native", "NativeWind", "Node.js", "TypeScript"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Yugha13/hospital-app",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/project/hospital-app.png",
      video: "",
    },
    {
      title: "Gatex",
      href: "https://github.com/Yugha13/gatex-v1",
      dates: "",
      active: true,
      description: "A security management app for residential communities to track visitor entries, approve guests, and maintain digital security logs.",
      technologies: ["React Native", "NativeWind", "Supabase", "TypeScript"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Yugha13/gatex-v1",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/project/gatex.png",
      video: "",
    }
  ],
  hackathons: [
    {
      title: "InnovateX Hackathon",
      dates: "",
      location: "",
      description: "Won 1st place in InnovateX Hackathon out of numerous participants, demonstrating innovative problem-solving and rapid prototyping skills.",
      image: "",
      links: [] as any[]
    },
    {
      title: "Multiple Hackathons (Top 3)",
      dates: "",
      location: "",
      description: "Secured Top 3 placements in 2 different hackathons.",
      image: "",
      links: [] as any[]
    },
    {
      title: "Various Hackathons (Top 10)",
      dates: "",
      location: "",
      description: "Participated in 10+ hackathons overall, and ranked in the Top 10 in 5 of them.",
      image: "",
      links: [] as any[]
    }
  ],
} as const;
