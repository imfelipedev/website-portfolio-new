type Props = {
    date: string;
    title: string;
    description: string;
    left?: boolean;
};

export default function Card(props: Props) {
    return (
        <div className={`ml-20 p-8 max-w-[50.0rem] rounded-xl border-[0.1rem] border-white/10 2xl:ml-0 ${props.left ? "2xl:ml-auto" : "mr-auto"}`}>
            <span className="text-[1.3rem] sm:text-[1.4rem]">{props.date}</span>

            <p className="text-[1.6rem] text-[#fafafa] font-semibold sm:text-[1.8rem]">{props.title}</p>

            <p className="mt-2 text-[1.2rem] text-[#a1a1a1] sm:text-[1.6rem]">{props.description}</p>
        </div>
    );
}
