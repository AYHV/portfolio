"use client";
import {
  Github,
  Mail,
  Linkedin,
  ExternalLink,
  ArrowRight,
  Home,
  MessageCircle,
  Briefcase,
  Star,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { motion } from "framer-motion";
import { LogOut } from "lucide-react";


import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { useRouter } from "next/navigation";
import React from "react";


// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

// Replace Card component with animated version
const AnimatedCard = motion(Card);

export default function Portfolio() {
  const router = useRouter();
  const [authentication, setAuthentication] = React.useState(false);
  const [confirm, setconfirm] = React.useState(true);
 
  return (
    <div className="flex min-h-screen">
      {/* Left Sidebar */}
      <motion.aside
        className="w-64 bg-blue-400 text-white flex flex-col fixed h-screen z-40"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center pt-8 pb-4">
          <motion.div
            className="relative h-36 w-36 overflow-hidden mb-4 border-1 border-background"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Image
              src="/2.jpg"
              alt="Profile"
              width={144}
              height={144}
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
        <div className="bg-secondary py-3 text-center text-secondary-foreground font-medium">
          <motion.h2
            className="text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >

            Yenghoua
          </motion.h2>
        </div>
        <nav className="flex-1 px-4 py-6">
          <motion.ul
            className="space-y-4"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                href: "#home",
                icon: <Home className="h-5 w-5" />,
                text: "Home",
              },
              {
                href: "#about",
                icon: <MessageCircle className="h-5 w-5" />,
                text: "About",
              },
              {
                href: "#projects",
                icon: <Briefcase className="h-5 w-5" />,
                text: "Projects",
              },
              {
                href: "#skills",
                icon: <Star className="h-5 w-5" />,
                text: "Skills",
              },
              {
                href: "#contact",
                icon: <User className="h-5 w-5" />,
                text: "Contact",
              },
            ].map((item, index) => (
              <motion.li key={item.href} variants={itemFadeIn}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 py-2 px-3 rounded-md hover:bg-white/10 transition-colors"
                >
                  {item.icon}
                  <span>{item.text}</span>
                  {item.href === "#home" && (
                    <span className="ml-auto">
                      <div className="h-2 w-2 rounded-full bg-secondary"></div>
                    </span>
                  )}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
        <div className="p-4 text-sm text-white/70">
          <p>© {new Date().getFullYear()} Yenghoua Vue</p>

        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="ml-64 flex-1 bg-background">
        <motion.header
          className="sticky top-0 z-10 w-full border-b bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/40"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container flex h-16 items-center justify-end">
            <div className="flex items-center justify-end  gap-2 ">
              <ThemeToggle />
              <Button
                variant="outline"
                size="icon"
                asChild
                className="hover:bg-blue-400 hover:shadow-lg"
              >
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4 " />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button
                asChild
                className="bg-blue-400 hover:bg-blue-400 hover:shadow-lg"
              >
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </motion.header>

        {/* Hero Section */}
        <section
          id="home"
          className="container relative py-16 md:py-24 lg:py-32 overflow-hidden"
        >
          <div className="absolute inset-0 -z-10">
            <motion.div
              className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 0.9, 0.7],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            ></motion.div>
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.6, 0.8, 0.6],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            ></motion.div>
          </div>
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
              variants={fadeInUp}
            >
              Hi, I'm{" "}
              <motion.span
                className="text-blue-400"
                animate={{
                  color: ["#60a5fa", "#3b82f6", "#60a5fa"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                
              >
                {/* <p className="font-hand">This text uses Edu NSW ACT Foundation font</p> */}

                Yenghoua Vue
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground max-w-2xl mt-4"
              variants={fadeInUp}
            >
              A passionate full-stack developer specializing in creating
              beautiful and functional web experiences.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4 mt-6"
              variants={fadeInUp}
            >
              <Button
                size="lg"
                className="rounded-full px-8 bg-blue-400"
                asChild
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-400 hover:bg-gray-400"
                >
                  <Link href="#projects">View My Work</Link>
                </motion.div>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8"
                asChild
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="#contact">Get In Touch</Link>
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="container py-16 md:py-24 lg:py-32 bg-muted/30"
        >
          <motion.div
            className="max-w-5xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <motion.div className="mb-12" variants={fadeInUp}>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                About Me
              </h2>
              <motion.div
                className="mt-2 h-1 w-20 bg-blue-400 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              ></motion.div>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                className="relative h-[400px] overflow-hidden rounded-lg"
                variants={scaleIn}
              >
                <Image
                  src="/1.jpg?height=400&width=600"
                  alt="About me"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div className="space-y-4" variants={staggerContainer}>
                <motion.p variants={fadeInUp}>
                  I'm a biggner developer with over 1 years of experience
                  building web applications. I specialize in JavaScript, React,
                  and Next.JS, and I'm always eager to learn new technologies.
                </motion.p>
                <motion.p variants={fadeInUp}>
                  My journey in web development started when I built my first
                  website in college. Since then, I've worked on numerous
                  projects ranging from small business websites to complex
                  enterprise applications.
                </motion.p>
                <motion.p variants={fadeInUp}>
                  When I'm not coding, you can find me hiking, reading, or
                  experimenting with new recipes in the kitchen.
                </motion.p>
                <motion.div className="pt-4" variants={fadeInUp}>
                  <Button
                    variant="outline"
                    className="bg-red-400 group"
                    asChild
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href="/resume.pdf"
                        className="inline-flex items-center gap-2"
                      >
                        Download Resume
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="h-4 w-4" />
                        </motion.span>
                      </Link>
                    </motion.div>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container py-16 md:py-24 lg:py-32">
          <motion.div
            className="max-w-5xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeIn}
          >
            <motion.div className="mb-12" variants={fadeInUp}>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Featured Projects
              </h2>
              <motion.div
                className="mt-2 h-1 w-20 bg-blue-400 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              ></motion.div>
              <p className="text-muted-foreground mt-4">
                Check out some of my recent work
              </p>
            </motion.div>
            <motion.div
              className="flex flex-row justify-between  md:grid-cols-2 lg:grid-cols-3 "
              variants={staggerContainer}
            >
              <AnimatedProjectCard
                title="Bigger Portfolio"
                // description="A full-featured online store with payment processing, inventory management, and analytics."
                description="A personal portfolio website showcasing my skills, projects, and professional experience."
                image="/web1.png" // ← inserted here!
                tags={["HTML", "CSS", "JAVA Script"]}
                link="https://yeng-profolio-001.netlify.app/"
                variants={scaleIn}
               
              />

              <AnimatedProjectCard
                title="Task Management App"
                description="A productivity application for teams to manage projects, tasks, and deadlines efficiently."
                image="/image.png"
                tags={["HTML", "TypeScript", "CSS"]}
                link="#"
                variants={scaleIn}
              />

              
            </motion.div>
            {/* <motion.div className="text-center mt-10" variants={fadeInUp}>
              <Button variant="outline" asChild>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2"
                  >
                    View All Projects
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>
                  </Link>
                </motion.div>
              </Button>
            </motion.div> */}
          </motion.div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="container py-16 md:py-24 lg:py-32 bg-muted/30"
        >
          <motion.div
            className="max-w-5xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeIn}
          >
            <motion.div className="mb-12" variants={fadeInUp}>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Skills & Expertise
              </h2>
              <motion.div
                className="mt-2 h-1 w-20 bg-blue-400 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              ></motion.div>
              <p className="text-muted-foreground mt-4">
                Technologies and tools I work with
              </p>
            </motion.div>
            <motion.div
              className="grid gap-8 md:grid-cols-2"
              variants={staggerContainer}
            >
              <AnimatedSkillCategory
                title="Frontend Development"
                skills={[
                  "HTML/CSS",
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Tailwind CSS",
                  "Redux",
                ]}
                variants={scaleIn}
              />
              <AnimatedSkillCategory
                title="Backend Development"
                skills={[
                  "Node.js",
                  "MY sql",
                  // "Python",
                  // "Django",
                  "RESTful APIs",
                  "GraphQL",
                ]}
                variants={scaleIn}
              />
              <AnimatedSkillCategory
                title="Tools & Others"
                skills={[
                  "Canva",
                  "Git",
                  "ChatGPT",
                  "Microft Word",
                ]}
                variants={scaleIn}
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container py-16 md:py-24 lg:py-32">
          <motion.div
            className="max-w-5xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeIn}
          >
            <motion.div className="mb-12" variants={fadeInUp}>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Get In Touch
              </h2>
              <motion.div
                className="mt-2 h-1 w-20 bg-blue-400 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              ></motion.div>
              <p className="text-muted-foreground mt-4">
                Interested in working together? Let's connect!
              </p>
            </motion.div>
            <motion.div
              className="grid gap-8 md:grid-cols-2"
              variants={staggerContainer}
            >
              <AnimatedCard variants={scaleIn}>
                <CardHeader className="space-y-2">
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>
                    Feel free to reach out through any of these channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 ">
                  <motion.div
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring" }}
                  >
                    <FaWhatsapp className="h-5 w-5 text-primary text-blue-400" />
                    <p className="hover:underline"> +856 2098625055</p>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring" }}
                  >
                    <FaFacebook className="h-5 w-5 text-primary text-blue-400  " />
                    <a
                      href="https://web.facebook.com/profile.php?id=100026593781386"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      FaceBook.com
                    </a>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-3  peer-hover:bg-blue-400"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring" }}
                  >
                    <Github className="h-5 w-5 text-primary" />
                    <a
                      href="https://github.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      github.com/yourusername
                    </a>
                  </motion.div>
                </CardContent>
              </AnimatedCard>
              <AnimatedCard variants={scaleIn}>
                <CardHeader>
                  <CardTitle>Send Me a Message</CardTitle>
                  <CardDescription>
                    I'll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                {/* <CardContent>
                  <form className="space-y-4">
                    <motion.div
                      className="grid gap-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        placeholder="Your Name"
                      />
                    </motion.div>
                    <motion.div
                      className="grid gap-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        placeholder="your.email@example.com"
                      />
                    </motion.div>
                    <motion.div
                      className="grid gap-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 min-h-[120px]"
                        placeholder="Your message..."
                      />
                    </motion.div>
                  </form>
                </CardContent> */}
                <CardFooter>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full"
                  >
                    <a className="bg-blue-400 border-black flex justify-center items-center w-full py-2 rounded-md hover:bg-blue-500" href="https://mail.google.com/mail/u/0/#inbox">Send</a>
                  </motion.div>
                </CardFooter>
              </AnimatedCard>
            </motion.div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="border-t py-8">
          <div className="container">
            <motion.div
              className="flex flex-col items-center justify-center gap-4 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Yenghoua Vue. All rights reserved.
              </p>
            </motion.div>
          </div>
        </footer>
      </main>
    </div>
  );
}

// Animated project card component
interface AnimatedProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  variants: any;
}

function AnimatedProjectCard({
  title,
  description,
  image,
  tags,
  link,
  variants
}: AnimatedProjectCardProps) {
  return (
    <motion.div variants={variants}>
      <AnimatedCard className="overflow-hidden hover:shadow-md transition-all duration-300">
        <motion.div 
          className="relative h-48 w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover"
          />
        </motion.div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <motion.div 
            className="flex flex-wrap gap-2"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {tags.map((tag) => (
              <motion.div key={tag} variants={itemFadeIn}>
                <Badge variant="secondary">
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" asChild className="w-full">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full"
            >
              <Link
                href={link}
                className="inline-flex items-center justify-center gap-2"
              >
                View Project 
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ExternalLink className="h-4 w-4" />
                </motion.span>
              </Link>
            </motion.div>
          </Button>
        </CardFooter>
      </AnimatedCard>
    </motion.div>
  );
}

// Animated skill category component
interface AnimatedSkillCategoryProps {
  title: string;
  skills: string[];
  variants: any;
}

function AnimatedSkillCategory({ title, skills, variants }: AnimatedSkillCategoryProps) {
  return (
    <motion.div variants={variants}>
      <AnimatedCard>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <motion.div 
            className="flex flex-wrap gap-2"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {skills.map((skill) => (
              <motion.div 
                key={skill} 
                variants={itemFadeIn}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "rgba(96, 165, 250, 0.2)" 
                }}
              >
                <Badge variant="outline" className="px-3 py-1">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </AnimatedCard>
    </motion.div>
  );
}