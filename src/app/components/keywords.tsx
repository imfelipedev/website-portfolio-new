type Props = {
    name: string;
};

export default function Keywords(props: Props) {
    return <p className="px-[2.0rem] py-[0.6rem] rounded-full border-[0.1rem] border-white/10 text-[1.0rem] text-[#fafafa] sm:text-[1.4rem]">{props.name}</p>;
}
