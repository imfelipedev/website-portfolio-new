import Link from "next/link";

import Image from "next/image";

type Props = {
    name: string;
    description: string;
    image: string;
    technologies: string[];
    url: string;
};

export default function Project(props: Props) {
    return (
        <div className="flex flex-col items-start justify-center rounded-2xl overflow-hidden">
            <Image src={props.image} alt="project" width={700} height={500} quality={100} style={{ objectFit: "contain" }} />

            <p className="mt-10 text-[2.4rem] text-[#fafafa] font-semibold sm:text-[1.8rem]">{props.name}</p>

            <p className="mt-5 text-[1.5rem] text-[#a1a1a1] sm:text-[1.8rem]">{props.description}</p>

            <div className="mt-5 flex flex-wrap gap-5">
                {props.technologies.map((technology, index) => (
                    <span key={index} className="px-5 py-2 rounded-xl bg-[#1f1f1f] text-[#fafafa] text-[1.2rem] sm:text-[1.4rem]">
                        {technology}
                    </span>
                ))}
            </div>

            <Link href={props.url} className="mt-10 px-10 py-5 rounded-xl border-[0.1rem] border-white/10 text-[1.4rem]">
                Ver projeto
            </Link>
        </div>
    );
}
