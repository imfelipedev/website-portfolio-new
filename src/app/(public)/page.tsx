"use client";

import Link from "next/link";

import { ArrowRight, MessageCircleMore, Moon, Sun } from "lucide-react";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export default function Home() {
    const [isDark, setIsDark] = useState(true);

    const [activeSection, setActiveSection] = useState("");

    const sectionsRef = useRef<(HTMLElement | null)[]>([]);

    const sections = useMemo(() => ["intro", "work", "thoughts", "connect"], []);

    const skills = useMemo(
        () => [
            "TypeScript",
            "React",
            "Next.js",
            "Nest.js",
            "Fastify",
            "Java",
            "Spring Boot",
            "Lua",
            "PostgreSQL",
            "MySQL",
            "MongoDB",
            "Redis",
            "Docker",
            "Kubernetes",
            "RabbitMQ",
        ],
        []
    );

    const workExperience = useMemo(
        () => [
            {
                year: "2025",
                role: "Desenvolvedor Full-Stack",
                company: "Empresa de serviços de tecnologia",
                description:
                    "Arquitetei e implementei plataforma de gestão de infraestrutura virtualizada sobre Proxmox, reduzindo tempo de provisionamento em 80%. Desenvolvi sistema de migração live com zero downtime, backup automatizado e console VNC via WebSocket com latência <50ms, garantindo alta disponibilidade e operação 24/7.",
                tech: ["Node.js", "Proxmox", "WebSocket", "TypeScript"],
            },
            {
                year: "2024",
                role: "Graduação em Andamento",
                company: "Análise e Desenvolvimento de Sistemas",
                description:
                    "Formalizando conhecimentos práticos através da graduação em ADS. Aprofundamento em arquitetura de software, modelagem de dados, design patterns e metodologias ágeis. Aplicando conceitos acadêmicos diretamente em projetos reais, equilibrando teoria e prática para soluções mais estruturadas e sustentáveis.",
                tech: ["Arquitetura de Software", "Engenharia de Dados", "Design Patterns", "Metodologias Ágeis"],
            },
            {
                year: "2023",
                role: "Desenvolvedor Full-Stack",
                company: "Empresa de Software Empresarial",
                description:
                    "Desenvolvi aplicações de missão crítica com foco em escalabilidade horizontal e manutenibilidade de longo prazo. Implementei arquiteturas baseadas em microserviços, otimizei queries SQL reduzindo tempo de resposta em 70%, e estabeleci padrões de código que aumentaram a produtividade da equipe.",
                tech: ["TypeScript", "Java", "PostgreSQL"],
            },
            {
                year: "2020",
                role: "Desenvolvedor Full-Stack Freelancer",
                company: "Autônomo",
                description:
                    "Gerenciei e entreguei projetos end-to-end para múltiplos clientes, desde levantamento de requisitos até deploy e manutenção. Desenvolvi websites responsivos e APIs RESTful escaláveis, sempre priorizando performance, UX e prazos. Aprendi a traduzir necessidades de negócio em soluções técnicas eficientes.",
                tech: ["React", "Next.js", "Node.js", "Fastify", "MongoDB"],
            },
            {
                year: "2018",
                role: "Início da Trajetória",
                company: "Aprendizado Autodidata",
                description:
                    "Início da jornada como desenvolvedor web autodidata, construindo fundação sólida em HTML, CSS e JavaScript. Através de projetos práticos e imersão na comunidade tech, desenvolvi capacidade autodidática e paixão por resolver problemas através de código - competências que direcionam minha carreira até hoje.",
                tech: ["HTML", "CSS", "JavaScript"],
            },
        ],
        []
    );

    const projects = useMemo(
        () => [
            {
                title: "Fantasy Resource",
                excerpt:
                    "E-commerce completo com checkout automatizado end-to-end. Integração com gateways de pagamento (Mercado Pago, PicPay), sistema de entrega digital instantânea e painel administrativo. Arquitetura escalável com Next.js 15 e PostgreSQL, garantindo transações seguras e UX otimizada.",
                date: "2024",
                readTime: "React, Next.js, PostgreSQL",
                url: "https://fantasyresources.net/",
            },
            {
                title: "Fantasy Music",
                excerpt:
                    "Plataforma de streaming de áudio com reprodução em tempo real, sistema de playlists e descoberta de conteúdo. Backend otimizado com Fastify para baixa latência, autenticação JWT, e interface responsiva. Implementação de cache estratégico e otimização de queries para performance em escala.",
                date: "2024",
                readTime: "React, Fastify, PostgreSQL",
                url: "https://music.fantasyresources.net/",
            },
            {
                title: "Contribuições Open Source - MTA:SA",
                excerpt:
                    "Contribuição aceita no projeto MTA:SA implementando novo evento para auxiliar na detecção de cheaters e exploiters. Desenvolvi funcionalidade em C++/Lua que fortalece os mecanismos de segurança da plataforma, colaborando com a comunidade open source através de code review rigoroso.",
                date: "2024",
                readTime: "C++, Lua, Security",
                url: "https://github.com/multitheftauto/mtasa-blue/pull/3941",
            },
            {
                title: "Mistic Protection",
                excerpt:
                    "Plataforma SaaS multi-tenant para proteção de servidores com sistema de assinaturas recorrentes. Desenvolvido com arquitetura modular em Nest.js, incluindo billing automatizado, dashboard administrativo real-time e API RESTful documentada. Implementação completa do ciclo de vida do cliente.",
                date: "2023",
                readTime: "React, Nest.js, TypeScript",
                url: "https://website-mistic.vercel.app/",
            },
        ],
        []
    );

    const socialLinks = useMemo(
        () => [
            { name: "GitHub", handle: "@imfelipedev", url: "https://github.com/imfelipedev" },
            { name: "LinkedIn", handle: "Felipe A.", url: "https://www.linkedin.com/in/imfelipedev" },
            { name: "Discord", handle: "imfelipedev", url: "#" },
            { name: "Youtube", handle: "@zFelpszada", url: "https://www.youtube.com/@zFelpszada" },
        ],
        []
    );

    const handleScrollToSection = useCallback((section: string) => {
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }, []);

    const toggleTheme = useCallback(() => {
        setIsDark((prev) => {
            const newTheme = !prev;
            document.documentElement.classList.toggle("dark", newTheme);
            localStorage.setItem("theme", newTheme ? "dark" : "light");
            return newTheme;
        });
    }, []);

    useEffect(() => {
        const saved = localStorage.getItem("theme");
        const theme = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
        setIsDark(theme);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-fade-in-up");
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
        );

        sectionsRef.current.forEach((section) => {
            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground relative">
            <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
                <div className="flex flex-col gap-4">
                    {sections.map((section) => (
                        <button
                            key={section}
                            onClick={() => handleScrollToSection(section)}
                            className={`w-2 h-8 rounded-full transition-all duration-500 ${
                                activeSection === section ? "bg-foreground" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
                            }`}
                            aria-label={`Navigate to ${section}`}
                        />
                    ))}
                </div>
            </nav>

            <main className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-16">
                <section
                    id="intro"
                    ref={(el) => {
                        sectionsRef.current[0] = el;
                    }}
                    className="min-h-screen flex items-center opacity-0"
                >
                    <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
                        <div className="lg:col-span-3 space-y-6 sm:space-y-8">
                            <div className="space-y-3 sm:space-y-2">
                                <div className="text-sm text-muted-foreground font-mono tracking-wider">PORTFÓLIO / 2025</div>
                                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                                    Felipe
                                    <br />
                                    <span className="text-muted-foreground">Augusto</span>
                                </h1>
                            </div>

                            <div className="space-y-6 max-w-lg">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Desenvolvedor Full-Stack com 7 anos de experiência transformando requisitos de negócio em soluções escaláveis e de alta
                                    performance. Especialista em <span className="text-foreground">TypeScript</span> e{" "}
                                    <span className="text-foreground">Java</span>, com habilidade em arquitetar sistemas distribuídos e otimizar processos
                                    complexos.
                                </p>

                                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                        Disponível para trabalho - São Paulo, Brasil
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
                            <div className="space-y-4">
                                <div className="text-sm text-muted-foreground font-mono">ATUALMENTE</div>
                                <div className="space-y-2">
                                    <div className="text-foreground">Desenvolvedor Full-Stack</div>
                                    <div className="text-muted-foreground">Freelancer & Estudante</div>
                                    <div className="text-xs text-muted-foreground">2025 — Presente</div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="text-sm text-muted-foreground font-mono">FOCUS</div>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="work"
                    ref={(el) => {
                        sectionsRef.current[1] = el;
                    }}
                    className="min-h-screen py-20 sm:py-32 opacity-0"
                >
                    <div className="space-y-16 sm:space-y-20">
                        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                            <h2 className="text-3xl sm:text-4xl font-light">Experiências</h2>
                            <div className="text-sm text-muted-foreground font-mono">2018 — 2025</div>
                        </div>

                        <div className="space-y-8 sm:space-y-12">
                            {workExperience.map((job, index) => (
                                <div
                                    key={index}
                                    className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                                >
                                    <div className="lg:col-span-2">
                                        <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                                            {job.year}
                                        </div>
                                    </div>

                                    <div className="lg:col-span-6 space-y-3">
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-medium">{job.role}</h3>
                                            <div className="text-muted-foreground">{job.company}</div>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed max-w-lg">{job.description}</p>
                                    </div>

                                    <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                                        {job.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section
                    id="thoughts"
                    ref={(el) => {
                        sectionsRef.current[2] = el;
                    }}
                    className="py-20 sm:py-32 opacity-0"
                >
                    <div className="space-y-12 sm:space-y-16">
                        <h2 className="text-3xl sm:text-4xl font-light">Projetos em Destaque</h2>

                        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
                            {projects.map((project, index) => (
                                <article
                                    key={index}
                                    className="group p-6 sm:p-8 bg-card border border-border rounded-lg hover:bg-border transition-all duration-500 cursor-pointer"
                                >
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                                            <span>{project.date}</span>
                                            <span className="text-right">{project.readTime}</span>
                                        </div>

                                        <h3 className="text-lg sm:text-xl font-medium transition-colors duration-300">{project.title}</h3>

                                        <p className="text-muted-foreground leading-relaxed">{project.excerpt}</p>

                                        <Link
                                            href={project.url}
                                            className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                                        >
                                            <span>Ver mais</span>

                                            <ArrowRight size={14} />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section
                    id="connect"
                    ref={(el) => {
                        sectionsRef.current[3] = el;
                    }}
                    className="py-20 sm:py-32 opacity-0"
                >
                    <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
                        <div className="space-y-6">
                            <h2 className="text-3xl sm:text-4xl font-light">Vamos Conversar</h2>

                            <div className="space-y-6">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Aberto a oportunidades de projetos desafiadores, colaborações técnicas e posições full-time. Se você busca um desenvolvedor
                                    com experiência comprovada em entregas de alta qualidade, vamos conversar sobre como posso agregar valor ao seu time ou
                                    projeto.
                                </p>

                                <div className="space-y-4">
                                    <Link
                                        href="mailto:felipe.dev.contato@gmail.com"
                                        className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                                    >
                                        <span className="text-base">felipe.dev.contato@gmail.com</span>

                                        <ArrowRight size={20} />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6 sm:space-y-8">
                            <div className="text-sm text-muted-foreground font-mono">REDES SOCIAIS</div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {socialLinks.map((social) => (
                                    <Link
                                        key={social.name}
                                        href={social.url}
                                        className="group p-4 bg-card border border-border rounded-lg hover:bg-border transition-all duration-300"
                                    >
                                        <div className="space-y-2">
                                            <div className="text-foreground transition-colors duration-300">{social.name}</div>
                                            <div className="text-sm text-muted-foreground">{social.handle}</div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="py-12 sm:py-16 border-t border-border">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
                        <div className="space-y-2">
                            <div className="text-sm text-muted-foreground">© 2025 Felipe Augusto. Todos os direitos reservados.</div>
                            <div className="text-xs text-muted-foreground">Desenvolvido com Next.js e TypeScript</div>
                        </div>

                        <div className="flex items-center gap-4">
                            <button
                                onClick={toggleTheme}
                                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
                                aria-label="Alternar tema"
                                suppressHydrationWarning
                            >
                                {isDark ? <Sun size={16} color="currentColor" /> : <Moon size={16} color="currentColor" />}
                            </button>
                        </div>
                    </div>
                </footer>
            </main>

            <div className="fixed bottom-0 left-0 right-0 h-24 bg-linear-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
        </div>
    );
}
