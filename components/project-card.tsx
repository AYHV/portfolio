"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
  github?: string
  featured?: boolean
}

export function ProjectCard({ title, description, image, tags, link, github, featured = false }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className={`overflow-hidden project-card transition-all duration-300 ${featured ? "border-primary/20" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className={`object-cover transition-all duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
        />
        {featured && (
          <div className="absolute top-3 left-3">
            <Badge className="bg-primary text-primary-foreground">Featured</Badge>
          </div>
        )}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 transition-opacity duration-300 ${
            isHovered ? "opacity-70" : ""
          }`}
        />
      </div>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="px-2.5 py-0.5 text-xs font-medium">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button variant="default" asChild className="flex-1">
          <Link href={link} className="inline-flex items-center justify-center gap-2">
            View Project <ExternalLink className="h-4 w-4" />
          </Link>
        </Button>
        {github && (
          <Button variant="outline" size="icon" asChild>
            <Link href={github}>
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub Repository</span>
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
