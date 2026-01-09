type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-3xl border border-slatePro-200 bg-white p-6 shadow-sm transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-card ${className}`}
    >
      {children}
    </div>
  );
}
