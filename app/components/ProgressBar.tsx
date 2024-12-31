interface ProgressBarProps {
  label: string;
  percentage: number;
  color?: string;
}

export default function ProgressBar({ label, percentage, color = "blue" }: ProgressBarProps) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-700 font-medium">{label}</span>
        <span className="text-sm font-medium text-gray-600">{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full transition-all duration-1000 ease-out`}
          style={{ 
            width: `${percentage}%`,
            backgroundColor: color === "blue" ? "#3B82F6" :
                           color === "indigo" ? "#6366F1" :
                           color === "purple" ? "#9333EA" :
                           color === "green" ? "#22C55E" : "#3B82F6"
          }}
        />
      </div>
    </div>
  );
}
