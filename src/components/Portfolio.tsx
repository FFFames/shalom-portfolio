import { Link } from "@tanstack/react-router";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Transition,
  type Variants,
} from "motion/react";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  Briefcase,
  Code2,
  Download,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  User,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import {
  CONTACT_EMAIL,
  GITHUB,
  LINKEDIN,
  PROFILE_IMAGE,
  RESUME_PATH,
  type PortfolioContent,
  type Project,
} from "../lib/content";

const EASE: Transition["ease"] = [0.22, 1, 0.36, 1];

// Scroll-reveal: fade + slight slide-up. Honors reduced-motion (handled by the
// parent disabling variants). Used both standalone and as a stagger child.
const revealVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

const staggerParent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

/** A section/element that fades and slides up the first time it scrolls into view. */
function Reveal({
  children,
  className,
  as = "div",
  stagger = false,
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
  stagger?: boolean;
}) {
  const reduced = useReducedMotion();
  const MotionTag = as === "section" ? motion.section : motion.div;
  return (
    <MotionTag
      className={className}
      variants={reduced ? undefined : stagger ? staggerParent : revealVariants}
      initial={reduced ? undefined : "hidden"}
      whileInView={reduced ? undefined : "visible"}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -60px 0px" }}
    >
      {children}
    </MotionTag>
  );
}

/** A child inside a stagger parent; inherits the parent's visible trigger. */
function RevealItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={reduced ? undefined : revealVariants}
    >
      {children}
    </motion.div>
  );
}

const hoverTap = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { type: "spring" as const, stiffness: 400, damping: 28 },
};

export function Portfolio({ c }: { c: PortfolioContent }) {
  const reduced = useReducedMotion();
  return (
    <div className="relative min-h-dvh overflow-x-clip">
      <Nav c={c} />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={c.lang}
          initial={reduced ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduced ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: EASE }}
        >
          <Hero c={c} />
          <About c={c} />
          <Projects c={c} />
          <Contact c={c} />
        </motion.main>
      </AnimatePresence>
      <Footer c={c} />
    </div>
  );
}

function Nav({ c }: { c: PortfolioContent }) {
  const navLink =
    "hidden rounded-md px-3 py-2 text-label font-medium text-(--muted) transition-colors hover:text-(--ink) sm:block";
  return (
    <header className="sticky top-0 z-20 border-b border-(--line) bg-(--surface)/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-5 sm:px-8">
        <motion.a
          href="#hero"
          {...hoverTap}
          className="flex size-9 items-center justify-center rounded-lg bg-accent text-[15px] font-semibold tracking-wide text-accent-ink"
          aria-label={c.name}
        >
          SI
        </motion.a>
        <div className="flex items-center gap-1 sm:gap-2">
          <motion.a href="#about" whileTap={{ scale: 0.96 }} className={navLink}>
            {c.nav.about}
          </motion.a>
          <motion.a href="#projects" whileTap={{ scale: 0.96 }} className={navLink}>
            {c.nav.projects}
          </motion.a>
          <motion.a href="#contact" whileTap={{ scale: 0.96 }} className={navLink}>
            {c.nav.contact}
          </motion.a>
          <motion.a
            href={RESUME_PATH}
            target="_blank"
            rel="noopener"
            whileTap={{ scale: 0.96 }}
            className="rounded-md px-3 py-2 text-label font-medium text-(--ink) transition-colors hover:text-accent"
          >
            {c.nav.resume}
          </motion.a>
          <motion.div {...hoverTap}>
            <Link
              to={c.langHref}
              className="ml-1 block rounded-md border border-(--line) px-3 py-1.5 text-meta font-semibold tracking-wide text-(--muted) transition-colors hover:border-accent hover:text-accent"
            >
              {c.langLabel}
            </Link>
          </motion.div>
        </div>
      </nav>
    </header>
  );
}

function Hero({ c }: { c: PortfolioContent }) {
  const reduced = useReducedMotion();
  const child: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };
  return (
    <motion.section
      id="hero"
      className="mx-auto flex w-full max-w-5xl scroll-mt-0 flex-col items-center px-5 pt-24 pb-24 text-center sm:px-8 sm:pt-32 sm:pb-32"
      variants={reduced ? undefined : staggerParent}
      initial={reduced ? undefined : "hidden"}
      animate={reduced ? undefined : "visible"}
    >
      <motion.div variants={reduced ? undefined : child} className="relative mb-8">
        <span
          aria-hidden="true"
          className="absolute -inset-3 rounded-full bg-accent-soft blur-xl"
        />
        <img
          src={PROFILE_IMAGE}
          alt={c.name}
          width={140}
          height={140}
          className="relative size-32 rounded-full object-cover shadow-[var(--card-shadow)] outline outline-black/10 sm:size-36 dark:outline-white/10"
        />
      </motion.div>
      <motion.p
        variants={reduced ? undefined : child}
        className="text-label font-medium tracking-wide text-accent"
      >
        {c.greeting}
      </motion.p>
      <motion.h1
        variants={reduced ? undefined : child}
        className="mt-3 text-4xl text-(--ink) sm:text-6xl"
      >
        {c.name}
      </motion.h1>
      <motion.p
        variants={reduced ? undefined : child}
        className="text-pretty mt-5 max-w-xl text-body text-(--muted) sm:text-lg"
      >
        {c.subtitle}
      </motion.p>
      <motion.div
        variants={reduced ? undefined : child}
        className="mt-9 flex flex-wrap items-center justify-center gap-3"
      >
        <motion.a
          href="#projects"
          {...hoverTap}
          className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-label font-semibold text-accent-ink shadow-xs"
        >
          {c.viewProjects}
        </motion.a>
        <motion.a
          href="#contact"
          {...hoverTap}
          className="inline-flex items-center gap-2 rounded-lg border border-card-border bg-card px-5 py-2.5 text-label font-semibold text-(--ink) shadow-xs"
        >
          {c.getInTouch}
        </motion.a>
        <motion.a
          href={RESUME_PATH}
          target="_blank"
          rel="noopener"
          {...hoverTap}
          className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-label font-semibold text-(--muted) transition-colors hover:text-(--ink)"
        >
          <Download className="size-4" aria-hidden="true" />
          {c.downloadResume}
        </motion.a>
      </motion.div>
    </motion.section>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className="text-2xl text-(--ink) sm:text-3xl">{children}</h2>;
}

function Card({
  Icon,
  title,
  children,
  className = "",
}: {
  Icon: ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" }>;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <RevealItem className={className}>
      <div className="flex h-full flex-col rounded-2xl border border-card-border bg-card p-6 shadow-[var(--card-shadow)] sm:p-7">
        <div className="mb-4 flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
            <Icon className="size-4.5" aria-hidden="true" />
          </span>
          <h3 className="text-heading font-medium text-(--ink)">{title}</h3>
        </div>
        {children}
      </div>
    </RevealItem>
  );
}

function About({ c }: { c: PortfolioContent }) {
  return (
    <section id="about" className="mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 sm:py-24">
      <Reveal>
        <SectionTitle>{c.aboutTitle}</SectionTitle>
      </Reveal>
      <Reveal stagger className="mt-10 grid gap-5 md:grid-cols-2">
        <Card Icon={User} title={c.whoTitle} className="md:row-span-2">
          <div className="flex flex-col gap-4">
            {c.whoBody.map((p, i) => (
              <p key={i} className="text-body text-(--muted)">
                {p}
              </p>
            ))}
          </div>
        </Card>

        <Card Icon={GraduationCap} title={c.educationTitle}>
          <h4 className="text-label font-semibold text-(--ink)">{c.school}</h4>
          <p className="mt-1 text-body text-(--muted)">{c.faculty}</p>
          <p className="mt-2 text-meta font-medium text-accent tabular-nums">
            {c.educationMeta}
          </p>
        </Card>

        <Card Icon={Briefcase} title={c.experienceTitle}>
          <h4 className="text-label font-semibold text-(--ink)">{c.experienceOrg}</h4>
          <p className="mt-1 text-meta font-medium text-accent">{c.experienceRole}</p>
          <ul className="mt-3 flex flex-col gap-2">
            {c.experienceItems.map((item, i) => (
              <li key={i} className="flex gap-2.5 text-body text-(--muted)">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card Icon={Code2} title={c.skillsTitle} className="md:col-span-2">
          <div className="flex flex-col gap-5">
            {c.skillGroups.map((group) => (
              <div key={group.label}>
                <p className="mb-2.5 text-meta font-semibold tracking-wide text-(--muted) uppercase">
                  {group.label}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-chip-border bg-chip px-2.5 py-1 text-meta font-medium text-(--ink)"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>

        <Card Icon={Award} title={c.certificatesTitle} className="md:col-span-2">
          <ul className="flex flex-col divide-y divide-(--line)">
            {c.certificates.map((cert) => (
              <li key={cert.label}>
                <a
                  href={cert.href}
                  target="_blank"
                  rel="noopener"
                  className="group flex items-center justify-between gap-3 py-3 text-body text-(--ink) transition-colors hover:text-accent"
                >
                  <span className="flex items-center gap-2.5">
                    <FileText className="size-4 shrink-0 text-(--muted) transition-colors group-hover:text-accent" aria-hidden="true" />
                    {cert.label}
                  </span>
                  <ArrowUpRight className="size-4 shrink-0 text-(--muted) transition-transform transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </Card>
      </Reveal>
    </section>
  );
}

function Projects({ c }: { c: PortfolioContent }) {
  return (
    <section id="projects" className="mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 sm:py-24">
      <Reveal>
        <SectionTitle>{c.projectsTitle}</SectionTitle>
        <p className="text-pretty mt-3 max-w-xl text-body text-(--muted)">
          {c.projectsSubtitle}
        </p>
      </Reveal>
      <Reveal stagger className="mt-10 grid gap-5 lg:grid-cols-2">
        {c.projects.map((project) => (
          <ProjectCard key={project.title} project={project} c={c} />
        ))}
      </Reveal>
    </section>
  );
}

function ProjectCard({ project, c }: { project: Project; c: PortfolioContent }) {
  const reduced = useReducedMotion();
  return (
    <motion.article
      variants={reduced ? undefined : revealVariants}
      whileHover={reduced ? undefined : { y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      className={
        "group flex flex-col overflow-hidden rounded-2xl bg-card p-6 shadow-[var(--card-shadow)] sm:p-7 " +
        (project.featured
          ? "border border-accent/35 ring-1 ring-accent/15 lg:col-span-2"
          : "border border-card-border")
      }
    >
      {project.featured && (
        <p className="mb-3 inline-flex items-center gap-2 text-meta font-semibold tracking-wide text-accent uppercase">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          {c.featuredLabel}
        </p>
      )}
      {project.image && (
        <div className="-mx-6 -mt-6 mb-6 overflow-hidden border-b border-card-border bg-chip sm:-mx-7 sm:-mt-7">
          <img
            src={project.image}
            alt={project.imageAlt ?? `${project.title} preview`}
            loading="lazy"
            className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transform-none"
          />
        </div>
      )}
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-mono text-lg font-medium text-(--ink)">{project.title}</h3>
        <span className="shrink-0 rounded-full bg-accent-soft px-2.5 py-1 text-meta font-semibold text-accent">
          {project.badge}
        </span>
      </div>
      <p className="mt-3 text-body text-(--muted)">{project.description}</p>

      <ul className="mt-4 flex flex-col gap-2">
        {project.features.map((feature) => (
          <li key={feature} className="flex gap-2.5 text-body text-(--ink)">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <li
            key={tech.name}
            className={
              tech.special
                ? "rounded-md border border-accent/30 bg-accent-soft px-2.5 py-1 text-meta font-medium text-accent"
                : "rounded-md border border-chip-border bg-chip px-2.5 py-1 text-meta font-medium text-(--muted)"
            }
          >
            {tech.name}
          </li>
        ))}
      </ul>

      {project.credentials && (
        <div className="mt-5 rounded-lg border border-chip-border bg-chip px-3 py-2.5">
          <span className="text-meta font-semibold text-(--ink)">
            {project.credentials.label}:{" "}
          </span>
          <span className="font-mono text-meta text-(--muted)">{project.credentials.text}</span>
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-3 border-t border-(--line) pt-5">
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener"
          {...hoverTap}
          className="inline-flex items-center gap-2 rounded-lg border border-card-border bg-card px-4 py-2 text-label font-semibold text-(--ink) shadow-xs"
        >
          <Github className="size-4" aria-hidden="true" />
          {c.githubLabel}
        </motion.a>
        {project.demo && (
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener"
            {...hoverTap}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-label font-semibold text-accent-ink shadow-xs"
          >
            <ArrowUpRight className="size-4" aria-hidden="true" />
            {c.liveDemoLabel}
          </motion.a>
        )}
        {project.thesis && (
          <motion.a
            href={project.thesis.href}
            target="_blank"
            rel="noopener"
            title={project.thesis.title}
            {...hoverTap}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-label font-semibold text-accent-ink shadow-xs"
          >
            <BookOpen className="size-4" aria-hidden="true" />
            {project.thesis.label}
          </motion.a>
        )}
      </div>
    </motion.article>
  );
}

function Contact({ c }: { c: PortfolioContent }) {
  return (
    <section id="contact" className="mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 sm:py-24">
      <Reveal>
        <div className="flex flex-col items-center rounded-3xl border border-card-border bg-card px-6 py-14 text-center shadow-[var(--card-shadow)] sm:px-10 sm:py-16">
          <h2 className="text-2xl text-(--ink) sm:text-3xl">{c.contactTitle}</h2>
          <p className="text-pretty mt-4 max-w-md text-body text-(--muted)">{c.contactText}</p>

          <motion.a
            href={`mailto:${CONTACT_EMAIL}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            className="mt-8 inline-flex items-center gap-2.5 text-lg font-medium text-(--ink) transition-colors hover:text-accent"
          >
            <Mail className="size-5 text-accent" aria-hidden="true" />
            {c.email}
          </motion.a>

          <motion.a
            href={RESUME_PATH}
            target="_blank"
            rel="noopener"
            {...hoverTap}
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-label font-semibold text-accent-ink shadow-xs"
          >
            <Download className="size-4" aria-hidden="true" />
            {c.downloadResume}
          </motion.a>

          <div className="mt-8 flex items-center gap-3">
            <motion.a
              href={LINKEDIN}
              target="_blank"
              rel="noopener"
              {...hoverTap}
              className="inline-flex items-center gap-2 rounded-lg border border-card-border bg-card px-4 py-2 text-label font-medium text-(--ink) shadow-xs transition-colors hover:text-accent"
            >
              <Linkedin className="size-4" aria-hidden="true" />
              LinkedIn
            </motion.a>
            <motion.a
              href={GITHUB}
              target="_blank"
              rel="noopener"
              {...hoverTap}
              className="inline-flex items-center gap-2 rounded-lg border border-card-border bg-card px-4 py-2 text-label font-medium text-(--ink) shadow-xs transition-colors hover:text-accent"
            >
              <Github className="size-4" aria-hidden="true" />
              GitHub
            </motion.a>
          </div>

          <p className="mt-8 inline-flex items-center gap-2 text-meta font-medium text-(--muted)">
            <MapPin className="size-4" aria-hidden="true" />
            {c.location}
          </p>
        </div>
      </Reveal>
    </section>
  );
}

function Footer({ c }: { c: PortfolioContent }) {
  return (
    <footer className="border-t border-(--line)">
      <div className="mx-auto w-full max-w-5xl px-5 py-8 text-center text-meta text-(--muted) sm:px-8">
        {c.footer}
      </div>
    </footer>
  );
}
