import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  ArrowSquareOut,
  EnvelopeSimple,
  GithubLogo,
  MapPin,
  MoonStars,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr"

type Project = {
  title: string
  description: string
  tech: string[]
  links: { label: string; href: string }[]
  note?: string
  status?: "active" | "archived" | "confidential"
}

const PROJECTS: Project[] = [
  {
    title: "Weather Forecast Application",
    description:
      "Weather app that fetches real-time data by city (OpenWeatherMap), with theme switching and dynamic backgrounds.",
    tech: ["JavaScript", "HTML", "CSS", "OpenWeatherMap API"],
    links: [
      { label: "GitHub", href: "https://github.com/Raozas/weather-forecast-application" },
    ],
    status: "active",
  },
  {
    title: "Django CRM Web Application",
    description:
      "CRM-style web app built with Django (university project).",
    tech: ["Python", "Django", "HTML/CSS"],
    links: [
      { label: "GitHub", href: "https://github.com/Raozas/Django-CRM-Web-Application" },
    ],
    note:
      "Tip: add screenshots + a short README (what it does, how to run).",
    status: "active",
  },
  {
    title: "SNS Web App (Frontend)",
    description:
      "React + Vite frontend app. Backend setup is currently not available (old Firebase config).",
    tech: ["React", "Vite", "Tailwind CSS"],
    links: [{ label: "GitHub", href: "https://github.com/Raozas/sns-web-app" }],
    status: "archived",
  },
  {
    title: "Job Match (Confidential)",
    description:
      "Job matching mobile app (React Native). Client/university project under NDA.",
    tech: ["React Native", "TypeScript"],
    links: [],
    note:
      "Recommended: keep the repo private. You can show screenshots or describe features without sharing code.",
    status: "confidential",
  },
]

const TECH = [
  "React Native",
  "TypeScript",
  "React",
  "Next.js",
  "REST API",
  "Git / GitLab",
  "UI implementation",
]

export default function Page() {
  return (
    <main className="min-h-dvh bg-gradient-to-b from-background to-muted/30">
      <div className="mx-auto w-full max-w-5xl px-4 py-10 md:py-14">
        {/* Header */}
        <div className="flex flex-col gap-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-sm">
                <Sparkle className="h-4 w-4" />
                Internship-ready portfolio
              </div>

              <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Asadbek Rabbimov
              </h1>
              <p className="mt-2 text-base text-muted-foreground md:text-lg">
                React Native / Frontend Developer • 4th-year student
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Uzbekistan (open to Japan)
                </span>
                <span className="inline-flex items-center gap-2">
                  <MoonStars className="h-4 w-4" />
                  Target: Internship 3–6 months (up to 8 by agreement)
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <Button asChild>
                  <a href="mailto:asadbekrabbimov0@gmail.com">
                    <EnvelopeSimple className="mr-2 h-4 w-4" />
                    Email
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://github.com/Raozas" target="_blank" rel="noreferrer">
                    <GithubLogo className="mr-2 h-4 w-4" />
                    GitHub
                    <ArrowSquareOut className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              <p className="mt-4 text-sm text-muted-foreground">
                日本でのインターン（紹介・面談）を探しています。モバイル（React Native）・フロント中心に貢献できます。
              </p>
            </div>
          </div>

          <Separator />

          {/* Tech */}
          <section>
            <h2 className="text-lg font-semibold">Tech Stack</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {TECH.map((t) => (
                <Badge key={t} variant="secondary">
                  {t}
                </Badge>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="mt-2">
            <div className="flex items-end justify-between gap-3">
              <h2 className="text-lg font-semibold">Projects</h2>
              <p className="text-sm text-muted-foreground">
                (Focus: clear README, screenshots, how-to-run)
              </p>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {PROJECTS.map((p) => (
                <Card key={p.title} className="overflow-hidden">
                  <CardHeader>
                    <div className="flex items-center justify-between gap-3">
                      <CardTitle className="text-base">{p.title}</CardTitle>
                      {p.status && (
                        <Badge
                          variant={
                            p.status === "active"
                              ? "default"
                              : p.status === "archived"
                              ? "secondary"
                              : "outline"
                          }
                        >
                          {p.status}
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="mt-1">{p.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <Badge key={t} variant="outline">
                          {t}
                        </Badge>
                      ))}
                    </div>

                    {p.note && (
                      <p className="text-sm text-muted-foreground">{p.note}</p>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {p.links.length ? (
                        p.links.map((l) => (
                          <Button key={l.href} variant="outline" size="sm" asChild>
                            <a href={l.href} target="_blank" rel="noreferrer">
                              {l.label}
                              <ArrowSquareOut className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        ))
                      ) : (
                        <p className="text-sm text-muted-foreground">
                          Code link is not public.
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <Separator />

          {/* Contact */}
          <section>
            <h2 className="text-lg font-semibold">Contact</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Best way to reach me:
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Button asChild>
                <a href="mailto:asadbekrabbimov0@gmail.com">
                  <EnvelopeSimple className="mr-2 h-4 w-4" />
                  asadbekrabbimov0@gmail.com
                </a>
              </Button>
            </div>
          </section>

          <footer className="pt-4 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Asadbek Rabbimov
          </footer>
        </div>
      </div>
    </main>
  )
}
