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
          className={`h-full bg-${color}-600 rounded-full transition-all duration-1000 ease-out`}
          style={{ 
            width: `${percentage}%`,
            animation: 'progressAnimation 1.5s ease-out'
          }}
        />
      </div>
    </div>
  );
}
