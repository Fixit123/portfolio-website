"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Wrench } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

// Custom animated progress bar component
function AnimatedProgressBar({ level, skillName }: { level: number; skillName: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium">{skillName}</span>
      </div>
      <div className="relative h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
          initial={{ width: "0%" }}
          animate={isInView ? { width: `${level}%` } : { width: "0%" }}
          transition={{ 
            duration: 1.5, 
            ease: "easeOut",
            delay: 0.2
          }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
      </div>
    </div>
  )
}

export function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: [
        { name: "React", level: 96 },
        { name: "Next.js", level: 92 },
        { name: "TypeScript", level: 88 },
        { name: "JavaScript", level: 94 },
        { name: "HTML/CSS", level: 98 },
        { name: "Tailwind CSS", level: 95 },
      ],
    },
    {
      icon: Database,
      title: "Backend & Database",
      skills: [
        { name: "Node.js", level: 89 },
        { name: "Express.js", level: 85 },
        { name: "Supabase", level: 92 },
        { name: "MongoDB", level: 87 },
        { name: "Firebase", level: 86 },
        { name: "SQL", level: 88 },
      ],
    },
    {
      icon: Globe,
      title: "Tools & Deployment",
      skills: [
        { name: "Vercel", level: 95 },
        { name: "Git/GitHub", level: 91 },
        { name: "Docker", level: 85 },
        { name: "Cursor IDE", level: 98 },
        { name: "Insomnia", level: 88 },
        { name: "Semantic UI", level: 86 },
      ],
    },
    {
      icon: Wrench,
      title: "Additional Skills",
      skills: [
        { name: "Problem Solving", level: 97 },
        { name: "System Debugging", level: 94 },
        { name: "Project Management", level: 89 },
        { name: "Client Communication", level: 92 },
        { name: "Process Optimization", level: 90 },
        { name: "Technical Documentation", level: 87 },
      ],
    },
  ]

  const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "Supabase",
    "MongoDB",
    "Firebase",
    "Tailwind CSS",
    "HTML/CSS",
    "Git",
    "Vercel",
    "Docker",
    "Semantic UI",
    "Cursor",
    "Insomnia",
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Skills & Technologies
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">Technical Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            A comprehensive skill set built through hands-on experience and continuous learning.
          </p>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full group hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto p-3 bg-accent/10 rounded-lg w-fit mb-4">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <AnimatedProgressBar 
                        key={skillIndex} 
                        level={skill.level} 
                        skillName={skill.name} 
                      />
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Technology Stack</CardTitle>
              <p className="text-muted-foreground">Technologies I work with regularly</p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-3">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge variant="outline" className="text-sm py-2 px-4 hover:bg-primary/10 transition-colors">
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}