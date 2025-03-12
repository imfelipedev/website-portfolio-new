type Props = {
    date: string;
    title: string;
    description: string;
    left?: boolean;
};

export default function Card(props: Props) {
    return (
        <div className={`p-8 max-w-[50.0rem] rounded-xl border-[0.1rem] border-white/10 ${props.left ? "ml-auto" : "mr-auto"}`}>
            <span className="text-[1.4rem]">{props.date}</span>

            <p className="text-[1.8rem] text-[#fafafa] font-semibold">{props.title}</p>

            <p className="mt-2 text-[1.6rem] text-[#a1a1a1]">{props.description}</p>
        </div>
    );
}
