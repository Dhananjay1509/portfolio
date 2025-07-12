import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 bg-background flex items-center justify-center transition-opacity duration-500 ${progress >= 100 ? 'opacity-0' : 'opacity-100'}`}>
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-4xl font-bold gradient-text mb-2">Dhananjay Nerkar</h1>
          <p className="text-muted-foreground">Data Analyst | ML Enthusiast</p>
        </div>
        
        <div className="w-64 h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <p className="text-sm text-muted-foreground mt-4">
          Loading portfolio... {progress}%
        </p>
      </div>
    </div>
  );
}