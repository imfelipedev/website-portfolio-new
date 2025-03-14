import Link from "next/link";

import { Github, Linkedin, Mail } from "lucide-react";

import Card from "@/app/components/card";

import Project from "@/app/components/project";

import Keywords from "@/app/components/keywords";

const SKILLS = [
    "TypeScript",
    "React",
    "Next.js",
    "Nest.js",
    "Fastify",
    "Express",
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Redis",
    "Docker",
    "Kubernetes",
    "RabbitMQ",
];

const TIMELINE = [
    {
        date: "2019",
        title: "Inicio da jornada",
        description: "Minha jornada começou em 2019, quando dei meus primeiros passos aprendendo HTML, CSS e JavaScript após assistir a um vídeo do youtuber Filipe Deschamps.",
    },
    {
        date: "2020",
        title: "Entrei no mercado de desenvolvimento",
        description:
            "Em 2020, comecei a trabalhar como freelancer, desenvolvendo websites e APIs para pequenas empresas e projetos pessoais, enquanto continuava a me aprofundar nos estudos de programação e desenvolvimento web.",
    },
    {
        date: "2023",
        title: "Primeiro emprego",
        description:
            "Fui contratado pela empresa *** como desenvolvedor full-stack, onde tive a oportunidade de trabalhar em projetos desafiadores e aprender na prática como planejar e desenvolver softwares de qualidade e altamente escaláveis.",
    },
    {
        date: "2024",
        title: "Entrada na faculdade",
        description:
            "Iniciei minha graduação em Análise e Desenvolvimento de Sistemas, onde estou aprofundando meus conhecimentos em áreas como arquitetura de software, banco de dados e desenvolvimento ágil.",
    },
];

const PROJECTS = [
    {
        name: "Fantasy Resource",
        description:
            "Este projeto foi desenvolvido para um cliente. O website é um modelo de loja online, aonde todo processo de pagamento e entrega foi totalmente automatizado, utilizando as APIs do Mercado Pago e PicPay.",
        image: "/fantasy.png",
        technologies: ["React", "Next.js", "Tailwind CSS", "PostgreSQL"],
        url: "https://fantasyresources.net/",
    },
    {
        name: "Fantasy Music",
        description:
            "Este projeto foi desenvolvido para um cliente. O website é um modelo de streaming de música, aonde o usuário pode ouvir suas músicas favoritas, pesquisar e descobrir novas músicas.",
        image: "/fantasy-music.png",
        technologies: ["React", "Fastify", "PostgreSQL"],
        url: "https://music.fantasyresources.net/",
    },
    {
        name: "Mistic Protection",
        description:
            "Este projeto foi desenvolvido para um cliente. O website é um modelo de SaaS (Software as a Service), aonde o usuário pode contratar planos de proteção para seus servidores de MTA.",
        image: "/mistic.png",
        technologies: ["React", "Nest.js"],
        url: "https://website-mistic.vercel.app/",
    },
];

export default function Home() {
    return (
        <>
            <section id="home" className="px-10 w-full min-h-[100dvh] flex items-center justify-center relative">
                <div className="max-w-[70.0rem] flex flex-col items-center justify-center">
                    <div className="w-[9.2rem] h-[9.2rem] rounded-full bg-[#f1f1f1]"></div>

                    <p className="mt-10 text-center text-[3.0rem] font-semibold sm:text-[3.6rem]">Felipe Augusto</p>

                    <p className="mt-5 text-center text-[1.4rem] text-[#a1a1a1] sm:text-[1.6rem]">
                        Desenvolvedor full-stack com 6 anos de experiência, especializado em TypeScript e Java. Crio soluções eficientes e otimizadas, entregando projetos
                        inovadores do front-end ao back-end.
                    </p>

                    <Link
                        href="#project"
                        className="mt-10 px-20 py-5 rounded-xl border-2 border-white bg-white text-[1.6rem] text-black font-semibold hover:bg-transparent hover:text-white transition-all duration-300"
                    >
                        Projetos
                    </Link>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-10 h-20 border-[0.1rem] border-white/10 rounded-full flex items-center justify-center">
                    <div className="min-w-[0.5rem] min-h-[0.5rem] rounded-full bg-white/10 animate-bounce-slow" />
                </div>
            </section>

            <section id="about" className="p-10 w-full border-t-[0.1rem] border-white/10 flex items-center justify-center sm:py-[8.0rem]">
                <div className="max-w-[90.0rem] w-full space-y-[5.0rem]">
                    <div>
                        <p className="text-[2.8rem] text-[#fafafa] font-semibold sm:text-[3.0rem]">Sobre</p>

                        <p className="text-[1.4rem] text-[#a1a1a1] sm:text-[1.8rem]">
                            E aí! Eu sou o Felipe. Minha jornada no mundo da programação começou em 2019, quando dei os primeiros passos aprendendo HTML, CSS e JavaScript. Desde
                            então, venho me desafiando constantemente a aprender novas tecnologias e aprimorar minhas habilidades. Ao longo dos anos, desenvolvi uma paixão
                            crescente por desenvolvimento web e, desde então, venho criando websites e APIs de alta qualidade para meus clientes. Minha abordagem busca sempre o
                            equilíbrio entre performance e usabilidade, criando soluções simples, mas extremamente eficazes.
                        </p>
                    </div>

                    <div className="w-full">
                        <p className="text-[2.0rem] text-[#fafafa] font-semibold sm:text-[2.4rem]">Habilidades</p>

                        <div className="mt-5 flex flex-wrap gap-5">
                            {SKILLS.map((skill, index) => {
                                return <Keywords key={`skill-${index}`} name={skill} />;
                            })}
                        </div>
                    </div>

                    <div>
                        <p className="text-[2.0rem] text-[#fafafa] font-semibold sm:text-[2.4rem]">Interesses</p>

                        <p className="mt-5 text-[1.2rem] text-[#a1a1a1] sm:text-[1.6rem]">
                            Quando não estou desenvolvendo para clientes, gosto de contribuir para projetos open source. Minha última contribuição foi para a plataforma MTA:SA,
                            onde trabalhei na melhoria da segurança do sistema, implementando ajustes para mitigar vulnerabilidades e proteger a experiência dos jogadores. Acredito
                            que contribuir para a comunidade é uma excelente forma de continuar aprendendo e ajudando a aprimorar sistemas complexos.
                        </p>
                    </div>
                </div>
            </section>

            <section id="experience" className="p-10 w-full border-t-[0.1rem] border-white/10 flex items-center justify-center sm:py-[8.0rem]">
                <div className="2xl:w-full 2xl:max-w-[70%]">
                    <p className="text-center text-[2.8rem] text-[#fafafa] font-semibold sm:text-[3.6rem]">Experiências</p>

                    <p className="mt-5 text-center text-[1.6rem] text-[#a1a1a1] sm:text-[1.8rem]">Minha jornada e evolução como desenvolvedor.</p>

                    <div className="mt-10 space-y-20 relative sm:mt-20">
                        <div className="absolute left-6 top-32 bottom-20 w-1 bg-white/10 2xl:left-1/2 2xl:-translate-x-1/2"></div>

                        {TIMELINE.map((item, index) => {
                            return (
                                <div key={`timeline-${index}`} className="w-full relative">
                                    <Card date={item.date} title={item.title} description={item.description} left={index % 2 !== 0} />

                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border-12 border-white bg-black 2xl:left-1/2 2xl:-translate-x-1/2"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section id="project" className="p-10 w-full border-t-[0.1rem] border-white/10 flex items-center justify-center sm:py-[8.0rem]">
                <div className="max-w-[70.0rem] w-full">
                    <p className="text-[2.8rem] text-[#fafafa] font-semibold sm:text-[3.6rem]">Projetos</p>

                    <div className="mt-[3.0rem] space-y-32">
                        {PROJECTS.map((project, index) => {
                            return (
                                <Project
                                    key={`project-${index}`}
                                    name={project.name}
                                    description={project.description}
                                    image={project.image}
                                    technologies={project.technologies}
                                    url={project.url}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>

            <section id="contact" className="p-10 w-full border-t-[0.1rem] border-white/10 flex items-center justify-center sm:py-[8.0rem]">
                <div className="max-w-[50.0rem] flex flex-col items-center justify-center gap-8">
                    <p className="text-[2.8rem] text-[#fafafa] font-semibold sm:text-[3.6rem]">Contatos</p>

                    <p className="text-center text-[1.4rem] text-[#a1a1a1] sm:text-[1.8rem]">
                        Sinta-se à vontade para entrar em contato para colaborações ou apenas para um amigável olá.
                    </p>

                    <div className="flex items-center justify-center gap-5">
                        <Link href="https://github.com/imfelipedev" aria-label="Github" className="p-5 rounded-xl border-[0.1rem] border-white/10">
                            <Github size={16} />
                        </Link>

                        <Link href="/" aria-label="Linkedin" className="p-5 rounded-xl border-[0.1rem] border-white/10">
                            <Linkedin size={16} />
                        </Link>

                        <Link href="mailto:felipe.dev.contato@gmail.com" aria-label="Mail" className="p-5 rounded-xl border-[0.1rem] border-white/10">
                            <Mail size={16} />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
