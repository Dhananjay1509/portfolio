import { useState, useEffect } from "react";
import { Calendar, Clock } from "lucide-react";

export function LiveAge() {
  const [age, setAge] = useState("");
  
  useEffect(() => {
    const birthDate = new Date("2002-09-15"); // Your actual birth date: September 15, 2002
    
    const updateAge = () => {
      const now = new Date();
      const timeDiff = now.getTime() - birthDate.getTime();
      const years = timeDiff / (1000 * 60 * 60 * 24 * 365.25);
      setAge(years.toFixed(8));
    };
    
    updateAge();
    const interval = setInterval(updateAge, 100);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-card/95 dark:bg-card/90 backdrop-blur-md rounded-lg p-3 shadow-lg border border-border dark:border-border hover:shadow-xl hover:shadow-primary/10 dark:hover:shadow-primary/5 transition-all duration-300">
      <div className="text-center">
        <div className="text-xl font-bold text-white mb-1">{age}</div>
        <div className="text-xs text-muted-foreground dark:text-muted-foreground uppercase tracking-wide font-medium">Age</div>
      </div>
    </div>
  );
}

export function LiveTime() {
  const [time, setTime] = useState("");
  
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const kolkataTime = new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      }).format(now);
      
      setTime(kolkataTime);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-card/95 dark:bg-card/90 backdrop-blur-md rounded-lg p-3 shadow-lg border border-border dark:border-border hover:shadow-xl hover:shadow-primary/10 dark:hover:shadow-primary/5 transition-all duration-300">
      <div className="text-center">
        <div className="text-xl font-bold text-white mb-1">{time}</div>
        <div className="text-xs text-muted-foreground dark:text-muted-foreground uppercase tracking-wide font-medium">Asia/Kolkata</div>
      </div>
    </div>
  );
}