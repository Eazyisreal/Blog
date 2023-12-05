import { useTheme } from "../context/ThemeContext";

export default function LoadingSpinner() {
    const { theme } = useTheme();
    const borderClass = theme === 'dark' ? "border-secondary" : "border-primary";
  
    return (
      <div className="flex items-center justify-center relative">
        <div
          className={`inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid ${borderClass} border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_3s_linear_infinite]`}
          role="status"
        >
          <span className="!absolute top-50 left-50 !-m-px !h-px !w-3px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }
  