interface Props {
  name: string;
  logoPath: string;
  colorrgb: string;
}

const SkillContainer = ({ name, logoPath, colorrgb }: Props) => {
  return (
    <div className="mx-4 flex h-32 w-20 flex-col items-center justify-center gap-3">
      <div
        className="group relative flex h-[5rem] items-center justify-center overflow-hidden rounded"
        style={{
          backgroundColor: `rgba(${colorrgb}, 0.3)`,
          boxShadow: `0 2px rgba(${colorrgb}, 0.3) inset`,
        }}
      >
        <img src={`logos${logoPath}`} alt={name} className="w-3/5" />
        <span
          className="absolute top-0 h-[2px] w-full opacity-0 transition-all duration-500 group-hover:opacity-100"
          style={{ backgroundColor: `rgba(${colorrgb}, 0.6)` }}
        />
        <span
          className="absolute left-0 h-full w-[2px] opacity-0 transition-all duration-500 group-hover:opacity-100"
          style={{ backgroundColor: `rgba(${colorrgb}, 0.6)` }}
        />
        <span
          className="absolute bottom-0 h-[2px] w-full opacity-0 transition-all duration-500 group-hover:opacity-100"
          style={{ backgroundColor: `rgba(${colorrgb}, 0.6)` }}
        />
        <span
          className="absolute right-0 h-full w-[2px] opacity-0 transition-all duration-500 group-hover:opacity-100"
          style={{ backgroundColor: `rgba(${colorrgb}, 0.6)` }}
        />
      </div>
      <p className="whitespace-nowrap">{name}</p>
    </div>
  );
};

export default SkillContainer;
