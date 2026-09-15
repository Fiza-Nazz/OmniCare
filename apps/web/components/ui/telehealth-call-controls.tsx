import React from "react";

export interface TelehealthCallControlsProps {
  isMuted: boolean;
  isVideoOff: boolean;
  isScreenSharing: boolean;
  onToggleMute: () => void;
  onToggleVideo: () => void;
  onToggleScreenShare: () => void;
  onEndCall: () => void;
  className?: string;
}

export const TelehealthCallControls: React.FC<TelehealthCallControlsProps> = ({
  isMuted,
  isVideoOff,
  isScreenSharing,
  onToggleMute,
  onToggleVideo,
  onToggleScreenShare,
  onEndCall,
  className = "",
}) => {
  return (
    <div className={`inline-flex items-center gap-3 rounded-full bg-slate-900/90 backdrop-blur-md px-6 py-3 shadow-2xl ${className}`}>
      <button
        type="button"
        onClick={onToggleMute}
        className={`rounded-full p-3 text-white transition-colors ${isMuted ? "bg-rose-600 hover:bg-rose-700" : "bg-slate-800 hover:bg-slate-700"}`}
        aria-label={isMuted ? "Unmute Microphone" : "Mute Microphone"}
      >
        {isMuted ? "🔇" : "🎤"}
      </button>
      <button
        type="button"
        onClick={onToggleVideo}
        className={`rounded-full p-3 text-white transition-colors ${isVideoOff ? "bg-rose-600 hover:bg-rose-700" : "bg-slate-800 hover:bg-slate-700"}`}
        aria-label={isVideoOff ? "Turn On Camera" : "Turn Off Camera"}
      >
        {isVideoOff ? "🚫" : "📹"}
      </button>
      <button
        type="button"
        onClick={onToggleScreenShare}
        className={`rounded-full p-3 text-white transition-colors ${isScreenSharing ? "bg-blue-600 hover:bg-blue-700" : "bg-slate-800 hover:bg-slate-700"}`}
        aria-label="Toggle Screen Share"
      >
        🖥️
      </button>
      <button
        type="button"
        onClick={onEndCall}
        className="rounded-full bg-rose-600 px-5 py-3 text-xs font-bold text-white hover:bg-rose-700 transition-colors"
      >
        End Call
      </button>
    </div>
  );
};
