import React from "react";

export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";
export type AvatarStatus = "online" | "offline" | "busy" | "away";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  name?: string;
  size?: AvatarSize;
  status?: AvatarStatus;
}

const sizeStyles: Record<AvatarSize, { wrapper: string; text: string; status: string }> = {
  xs: { wrapper: "h-6 w-6", text: "text-xs", status: "h-1.5 w-1.5" },
  sm: { wrapper: "h-8 w-8", text: "text-xs", status: "h-2 w-2" },
  md: { wrapper: "h-10 w-10", text: "text-sm", status: "h-2.5 w-2.5" },
  lg: { wrapper: "h-12 w-12", text: "text-base", status: "h-3 w-3" },
  xl: { wrapper: "h-16 w-16", text: "text-xl", status: "h-3.5 w-3.5" },
};

const statusStyles: Record<AvatarStatus, string> = {
  online: "bg-emerald-500",
  offline: "bg-slate-400",
  busy: "bg-rose-500",
  away: "bg-amber-500",
};

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "",
  name = "",
  size = "md",
  status,
  className = "",
  ...props
}) => {
  const getInitials = (n: string) => {
    return n
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const style = sizeStyles[size];

  return (
    <div className={`relative inline-block ${className}`} {...props}>
      <div
        className={`relative flex items-center justify-center overflow-hidden rounded-full bg-slate-200 text-slate-700 font-semibold dark:bg-slate-700 dark:text-slate-200 ${style.wrapper}`}
      >
        {src ? (
          <img src={src} alt={alt || name} className="h-full w-full object-cover" />
        ) : (
          <span className={style.text}>{getInitials(name || alt || "U")}</span>
        )}
      </div>
      {status && (
        <span
          className={`absolute bottom-0 right-0 rounded-full ring-2 ring-white dark:ring-slate-900 ${statusStyles[status]} ${style.status}`}
          aria-label={`Status: ${status}`}
        />
      )}
    </div>
  );
};
