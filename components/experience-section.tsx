"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export function ExperienceSection() {
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
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const experiences = [
    {
      title: "Full-Stack Web Developer",
      company: "Freelance",
      location: "Remote",
      period: "2023 - Present",
      description:
        "Developed and deployed 3 live web applications for clients using modern technologies. Specialized in React, Next.js, and Supabase backend solutions.",
      achievements: [
        "Built 3 production web applications currently serving real users",
        "Implemented full-stack solutions with authentication and database management",
        "Delivered projects on time with 100% client satisfaction",
        "Optimized applications for performance and SEO",
      ],
      technologies: ["React", "Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Vercel"],
    },
    {
      title: "Logistics Specialist ",
      company: "IULT Wrocław",
      location: "Wrocław, Poland",
      period: "2022 - 2025",
      description:
        "Completed comprehensive logistics and supply chain management program while simultaneously learning web development.",
      achievements: [
        "Graduated with expertise in process optimization",
        "Developed analytical and project management skills",
        "Balanced academic studies with self-taught programming",
        "Applied logistics principles to software project management",
      ],
      technologies: ["Project Management", "Process Optimization", "Data Analysis", "Supply Chain"],
    },
    {
      title: "Gadgets Technician",
      company: "Delight Integrated Technology and Services",
      location: "Lagos, Nigeria",
      period: "2019 - 2022",
      description:
        "Provided technical repair services for smartphones, tablets, and electronic devices. Developed strong troubleshooting and problem-solving skills.",
      achievements: [
        "3+ years of hands-on hardware troubleshooting experience",
        "Diagnosed and repaired complex electronic issues",
        "Built reputation for reliable and efficient repairs",
        "Developed systematic approach to problem-solving",
      ],
      technologies: ["Hardware Repair", "Diagnostics", "Troubleshooting", "Customer Service"],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <Badge variant="outline" className="mb-4">
              Experience
            </Badge>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">Professional Journey</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            A diverse career path that combines technical expertise, analytical thinking, and modern web development
            skills.
          </p>
        </motion.div>

        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="overflow-hidden group hover:shadow-xl transition-all duration-500 border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                        <span className="font-medium">{exp.company}</span>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{exp.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-pretty">{exp.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Technologies & Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}