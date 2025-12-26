"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Code, Sparkles, Download, User } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function HeroSection() {
  const textVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateY: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
    },
  }

  const title = "Crafting Digital Solutions That Work"
  const subtitle = "3+ years transforming complex problems into elegant web solutions"

  const handleViewWork = () => {
    const projectsSection = document.querySelector("#projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleDownloadCV = () => {
    // Check if CV file exists
    const link = document.createElement("a")
    link.href = "/AHMED%20OLAYINKA%20%23CV%20Resume%20(1).pdf"
    link.download = "Ahmed Olayinka CV.pdf"
    
    // Add error handling
    link.onerror = () => {
      alert("CV file is currently being updated. Please contact me directly for a copy of my resume.")
    }
    
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl"
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 left-20 w-32 h-32 bg-gradient-to-r from-secondary/30 to-primary/30 rounded-full blur-xl"
          animate={{
            y: [0, 50, 0],
            x: [0, -25, 0],
            scale: [1, 0.8, 1],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-32 right-32 w-28 h-28 bg-gradient-to-r from-accent/25 to-secondary/25 rounded-full blur-lg"
          animate={{
            y: [0, -35, 0],
            x: [0, 15, 0],
            rotate: [0, 270, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute bottom-20 left-40 w-24 h-24 bg-gradient-to-r from-primary/20 to-accent/30 rounded-full blur-md"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.4, 1],
            rotate: [0, -180, -360],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Left side - Text content */}
          <div className="space-y-8 text-center lg:text-left">
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-3 text-primary font-semibold text-lg"
              initial={{ opacity: 0, scale: 0.5, rotateZ: -180 }}
              animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "backOut" }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6" />
              </motion.div>
              <span className="gradient-text">Hello, I'm a Full-Stack Developer</span>
              <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6" />
              </motion.div>
            </motion.div>

            <div className="text-3xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">
              {title.split(" ").map((word, wordIndex) => (
                <motion.div
                  key={wordIndex}
                  className="inline-block mr-4 mb-2"
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                  transition={{ delay: wordIndex * 0.1, duration: 0.8, ease: "easeOut" }}
                >
                  {word.split("").map((letter, letterIndex) => (
                    <motion.span
                      key={letterIndex}
                      className={wordIndex === 1 ? "gradient-text" : "text-foreground"}
                      initial="hidden"
                      animate="visible"
                      variants={letterVariants}
                      transition={{ delay: (wordIndex * 10 + letterIndex) * 0.05, duration: 0.6, ease: "easeOut" }}
                      style={{ display: "inline-block" }}
                      whileHover={{
                        scale: 1.1,
                        color: "oklch(0.65 0.18 45)",
                        transition: { duration: 0.2 },
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 text-pretty"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              {subtitle.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 + index * 0.02, duration: 0.1 }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>

            <motion.p
              className="text-base text-muted-foreground max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3 }}
            >
              I turn your ideas into reality with clean code, modern design, and real-world problem-solving skills.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.5 }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 20px 40px rgba(255, 138, 76, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="glow-effect"
              >
                <Button
                  size="lg"
                  onClick={handleViewWork}
                  className="text-lg px-8 py-6 bg-primary text-white hover:bg-accent transition-all duration-500 shadow-2xl border-0 font-semibold"
                  style={{
                    background: "linear-gradient(135deg, oklch(0.65 0.18 45), oklch(0.55 0.2 50))",
                    color: "white",
                  }}
                >
                  <Code className="w-5 h-5 mr-3" />
                  View My Work
                </Button>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  backgroundColor: "oklch(0.65 0.18 45)",
                  color: "white",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleDownloadCV}
                  className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-500 bg-transparent font-semibold"
                >
                  <Download className="w-5 h-5 mr-3" />
                  Download CV
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex justify-center lg:justify-start space-x-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 4 }}
            >
              {[
                { icon: Github, href: "https://github.com/Fixit123", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/ahmed-olayinka-a74778260", label: "LinkedIn" },
                { icon: Mail, href: "mailto:olayinkaahmed123@gmail.com", label: "Email" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-all duration-300 group"
                  whileHover={{
                    scale: 1.3,
                    y: -8,
                    color: "oklch(0.65 0.18 45)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 30, rotateY: -90 }}
                  animate={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ duration: 0.6, delay: 4.2 + index * 0.1 }}
                >
                  <social.icon className="w-7 h-7 group-hover:drop-shadow-lg" />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right side - Professional picture space */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative">
              {/* Animated background elements */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />

              {/* Picture placeholder with professional styling */}
              <motion.div
                className="relative w-80 h-80 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 border-4 border-primary/20 flex items-center justify-center overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.05 }}
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.02, 1]
                }}
                transition={{ 
                  rotate: { duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
                }}
              >
                {/* Your actual image */}
                <Image
                  src="/image/ahmed.webp"
                  alt="Ahmed Olayinka - Full-Stack Web Developer"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 300px, (max-width: 1200px) 320px, 320px"
                />
              </motion.div>

              {/* Floating elements around picture */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full"
                animate={{
                  y: [0, -20, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full"
                animate={{
                  y: [0, 15, 0],
                  scale: [1, 0.8, 1],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4.5 }}
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3 cursor-pointer group"
            onClick={() => {
              const aboutSection = document.querySelector("#about")
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
              Scroll to explore
            </span>
            <motion.div
              whileHover={{ scale: 1.2, color: "oklch(0.65 0.18 45)" }}
              className="p-2 rounded-full border border-primary/20 group-hover:border-primary/50 transition-all"
            >
              <ArrowDown className="w-6 h-6 text-primary" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
