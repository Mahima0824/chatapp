"use client";
import { useMemo } from "react";

const useFormattedDate = (timestamp: string) => {
  return useMemo(() => {
    if (!timestamp) return { date: "", time: "" };

    const date = new Date(timestamp);

    const formattedDate = date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      timeZone: "UTC", // Adjust if needed
    });

    return { date: formattedDate, time: formattedTime };
  }, [timestamp]);
};

export default useFormattedDate;






export  const useFormattedDateLastseen = (timestamp: string) => {
  return useMemo(() => {
    if (!timestamp) return { formatted: "" };

    const date = new Date(timestamp);
    const now = new Date();

    const isToday =
      date.getDate() === now.getDate() &&
      date.getMonth() === now.getMonth() &&
      date.getFullYear() === now.getFullYear();

    const isTomorrow =
      date.getDate() === now.getDate() + 1 &&
      date.getMonth() === now.getMonth() &&
      date.getFullYear() === now.getFullYear();

    const isOverAMonthAgo =
      now.getFullYear() > date.getFullYear() ||
      (now.getMonth() > date.getMonth() &&
        now.getFullYear() === date.getFullYear());

    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    if (isToday) {
      return { formatted: `Today ${formattedTime}` };
    } else if (isTomorrow) {
      return { formatted: `Tomorrow ${formattedTime}` };
    } else if (isOverAMonthAgo) {
      return { formatted: date.toLocaleDateString("en-US", { month: "long", year: "numeric" }) };
    } else {
      return {
        formatted: date.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }) + ` ${formattedTime}`,
      };
    }
  }, [timestamp]);
};

