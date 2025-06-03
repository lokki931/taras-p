type Props = {
  icon: React.ReactNode;
  title: string;
  description: string;
};
export function Benefit({ icon, title, description }: Props) {
  return (
    <div className="p-6 rounded-xl shadow-md bg-green-100/10 shadow-green-600 hover:shadow-lg transition-all duration-300">
      {icon}
      <h3 className="text-xl font-semibold mt-4 mb-2 text-green-700">
        {title}
      </h3>
      <p className="text-green-600 text-sm">{description}</p>
    </div>
  );
}
