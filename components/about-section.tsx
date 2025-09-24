"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wrench, Truck, Code, Sparkles, TrendingUp, Settings, Package, Laptop } from "lucide-react"
import { motion } from "framer-motion"

export function AboutSection() {
  const journey = [
    {
      icon: Settings,
      title: "Gadgets Technician",
      period: "2019 - 2022",
      description:
        "3+ years of hands-on experience repairing and troubleshooting electronic devices, developing strong problem-solving skills and attention to detail.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Package,
      title: "Logistics Specialist",
      period: "2022 - 2025",
      description:
        "Graduated from IULT Wrocław with expertise in supply chain management, process optimization, and analytical thinking.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Laptop,
      title: "Web Developer",
      period: "2023 - Present",
      description:
        "Self-taught full-stack developer with 2+ years of experience building modern web applications for real clients.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-accent/5 rounded-full blur-2xl"
          animate={{
            scale: [1, 0.8, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
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
              <Sparkles className="w-4 h-4 mr-2" />
              About Me
            </Badge>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            From Hardware to Software
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            My unique journey from gadgets technician to logistics specialist to web developer has given me a
            distinctive perspective on problem-solving and system thinking.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {journey.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div 
                key={index} 
                variants={itemVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-500 border-0 bg-card/50 backdrop-blur-sm">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />
                  <div className="absolute inset-[1px] bg-card rounded-[inherit]" />

                  <CardContent className="p-6 relative z-10">
                    <motion.div
                      className="flex items-center mb-4"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className={`p-3 ${step.bgColor} rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 5 }}
                      >
                        <Icon className={`w-6 h-6 text-foreground`} />
                      </motion.div>
                      <div>
                        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-sm text-muted-foreground font-medium">{step.period}</p>
                      </div>
                    </motion.div>
                    <p className="text-muted-foreground text-pretty leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card className="max-w-4xl mx-auto border-0 bg-gradient-to-br from-card/80 to-muted/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center justify-center gap-2 mb-4"
              >
                <TrendingUp className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold">Why This Journey Matters</h3>
              </motion.div>
              <motion.p
                className="text-lg text-muted-foreground text-pretty leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                My diverse background brings unique value to web development. Hardware troubleshooting taught me
                systematic debugging, logistics showed me process optimization, and now I apply both to create
                efficient, scalable web solutions. I understand technology from the ground up and can bridge the gap
                between technical complexity and business needs.
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
