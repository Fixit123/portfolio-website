"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Star, Zap } from "lucide-react"
import { motion } from "framer-motion"

export function ProjectsSection() {
  const projects = [
    {
      title: "Biggest Alpha",
      description:
        "A professional service platform featuring modern design, responsive layout, and seamless user experience. Built with React and deployed on Vercel.",
      image: "/image/biggestalpha.com.ng.webp",
      technologies: ["React", "Next.js", "Tailwind CSS", "Vercel"],
      liveUrl: "https://biggestalpha.com.ng",
      githubUrl: null, // Client project - no code access
      featured: true,
      gradient: "from-blue-600 to-purple-600",
    },
    {
      title: "Nickoshair",
      description:
        "A beautiful hair salon website with booking functionality, service showcase, and client testimonials. Features smooth animations and mobile-first design.",
      image: "/image/nickoshair.com.webp",
      technologies: ["React", "Next.js", "Supabase", "Tailwind CSS"],
      liveUrl: "https://nickoshair.com",
      githubUrl: null, // Client project - no code access
      featured: true,
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "Adam Zschabitz Energy Healing",
      description:
        "A professional energy healing and wellness website featuring modern design, client testimonials, and service booking functionality. Built with clean, calming aesthetics to reflect the healing practice.",
      image: "/image/adam-zschabitz.com.webp",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      liveUrl: "https://www.adam-zschabitz.com/",
      githubUrl: null, // Client project - no code access
      featured: true,
      gradient: "from-green-500 to-teal-500",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  }

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-40 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-48 h-48 bg-accent/5 rounded-full blur-2xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 3 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
              <Star className="w-4 h-4 mr-2" />
              Featured Projects
            </Badge>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Live Client Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Real-world applications built for clients, showcasing modern web development practices and user-centered
            design.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 bg-card/50 backdrop-blur-sm">
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  />
                  {project.featured && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Badge className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    </motion.div>
                  )}
                </div>

                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-pretty leading-relaxed">{project.description}</p>

                  <motion.div
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div key={techIndex} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Badge
                          variant="secondary"
                          className="text-xs hover:bg-primary/10 transition-colors duration-200"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>

                  <div className="flex gap-3 pt-2">
                    <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        size="sm"
                        asChild
                        className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-primary-foreground"
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live
                        </a>
                      </Button>
                    </motion.div>
                    {project.githubUrl && (
                      <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      </motion.div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card className="max-w-2xl mx-auto border-0 bg-gradient-to-br from-card/80 to-muted/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center justify-center gap-2 mb-4"
              >
                <Zap className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold">Ready for Your Next Project?</h3>
              </motion.div>
              <motion.p
                className="text-muted-foreground mb-6 text-pretty leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                I'm currently available for new opportunities and would love to discuss how I can contribute to your
                team's success.
              </motion.p>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-primary-foreground"
                >
                  Let's Work Together
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
