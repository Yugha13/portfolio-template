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
  avatarUrl: "/assets/image.jpeg",
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
    },
    {
      title: "Distributor Portal",
      href: "https://nudge-distributor.vercel.app/",
      dates: "",
      active: true,
      description: "B2B portal for distributors to manage inventory, place bulk orders, and track shipments in real-time.",
      technologies: ["React", "Tailwind CSS", "Node.js", "PostgreSQL"],
      links: [
        {
          type: "Website",
          href: "https://nudge-distributor.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Yugha13/distributor",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/project/distributor.png",
      video: "",
    },
    {
      title: "Tap2Eat",
      href: "https://github.com/Yugha13/campus-food-stalls",
      dates: "",
      active: true,
      description: "Campus food discovery app helping students find food stalls, view menus, and check real-time crowd status.",
      technologies: ["React Native", "NativeWind", "Supabase"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Yugha13/campus-food-stalls",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/project/tap2eat.png",
      video: "",
    },
    {
      title: "Alicia Portfolio",
      href: "https://alicia.e8pro.com/",
      dates: "",
      active: true,
      description: "A highly interactive, visually stunning personal portfolio designed for a creative professional, featuring advanced Framer Motion animations.",
      technologies: ["Next.js", "React", "Tailwind CSS"],
      links: [
        {
          type: "Website",
          href: "https://alicia.e8pro.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Yugha13/alicia-final-portfolio",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=3200&auto=format&fit=crop",
      video: "",
    },
    {
      title: "KG Food Delivery",
      href: "https://kg-food-delivery.vercel.app/",
      dates: "",
      active: true,
      description: "A blazing-fast, mobile-first web application enabling seamless food ordering, cart management, and real-time order tracking.",
      technologies: ["React", "Node.js", "Tailwind CSS"],
      links: [
        {
          type: "Website",
          href: "https://kg-food-delivery.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?q=80&w=3200&auto=format&fit=crop",
      video: "",
    },
    {
      title: "Thalassery Restaurant",
      href: "https://thalassery-restaurant-website.vercel.app/",
      dates: "",
      active: true,
      description: "A premium, high-conversion marketing website for a highly acclaimed restaurant, featuring digital menus and automated reservations.",
      technologies: ["Next.js", "Tailwind CSS"],
      links: [
        {
          type: "Website",
          href: "https://thalassery-restaurant-website.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=3200&auto=format&fit=crop",
      video: "",
    },
    {
      title: "Closrr",
      href: "",
      dates: "",
      active: true,
      description: "The Ultimate High-Performance Sales Companion. A gamified, data-driven sales productivity app designed to turn sales professionals into top performers.",
      technologies: ["React Native", "Node.js", "TypeScript", "PostgreSQL"],
      links: [],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=3200&auto=format&fit=crop",
      video: "",
    },
    {
      title: "One Thing",
      href: "https://github.com/Yugha13/one-thing",
      dates: "",
      active: true,
      description: "A minimalist productivity application built on the philosophy of hyper-focus. It forces users to accomplish their most critical task first.",
      technologies: ["React Native", "TypeScript"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Yugha13/one-thing",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=3200&auto=format&fit=crop",
      video: "",
    },
    {
      title: "Dear Future",
      href: "https://github.com/Yugha13/dear-future",
      dates: "",
      active: true,
      description: "A deeply personal journaling and time-capsule application allowing users to write letters, set goals, and send messages to their future selves.",
      technologies: ["React Native", "Node.js", "TypeScript"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Yugha13/dear-future",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?q=80&w=3200&auto=format&fit=crop",
      video: "",
    },
    {
      title: "Safe Relay",
      href: "https://github.com/Yugha13/SafeRelay-Android",
      dates: "",
      active: true,
      description: "A critical, Android-native personal security application that allows users to instantly broadcast their live location and emergency status.",
      technologies: ["Android SDK"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Yugha13/SafeRelay-Android",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=3200&auto=format&fit=crop",
      video: "",
    }
  ],
  hackathons: [],
} as const;
