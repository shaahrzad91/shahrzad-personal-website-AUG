"use client";

import Script from "next/script";
import { createElement } from "react";

const AGENT_ID = "agent_2501kz7gpf6ff7vvate1mvwx6j0j";

export function ElevenLabsWidget() {
  return (
    <>
      <Script
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        strategy="afterInteractive"
      />
      {createElement("elevenlabs-convai", {
        "agent-id": AGENT_ID,
        className: "elevenlabs-widget",
        "aria-label": "Ask Shahrzad’s AI assistant",
      })}
    </>
  );
}
