import getRandomDarkColor from "@/utils/generateColor";

const Badge = ({ text }: { text: string }) => {
    const badgeColor = getRandomDarkColor();
    return (
      <div
        className="badge bg-black p-3 text-black mr-3 mb-3 rounded-md"
        style={{ backgroundColor: badgeColor }}
      >
        {text}
      </div>
    );
  };

export default Badge;