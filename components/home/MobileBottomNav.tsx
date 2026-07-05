"use client";

import { useState } from "react";

export default function MobileBottomNav() {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    { id: "home", label: "Inicio", icon: "home" },
    { id: "catalog", label: "Catálogo", icon: "grid_view" },
    { id: "contact", label: "Contacto", icon: "mail" },
    { id: "whatsapp", label: "WhatsApp", icon: "chat", href: "https://wa.me/1234567890" },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-3 bg-surface/90 backdrop-blur-md border-t border-outline-variant/30 shadow-lg md:hidden">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const buttonClass = `flex flex-col items-center justify-center transition-all ${
          isActive ? "text-burgundy font-bold scale-105" : "text-on-surface-variant active:scale-90"
        }`;

        if (tab.href) {
          return (
            <a
              key={tab.id}
              href={tab.href}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass}
            >
              <span className="material-symbols-outlined select-none">
                {tab.icon}
              </span>
              <span className="font-sans text-[10px] mt-0.5">{tab.label}</span>
            </a>
          );
        }

        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={buttonClass}
          >
            <span
              className="material-symbols-outlined select-none"
              style={isActive ? { fontVariationSettings: '"FILL" 1' } : {}}
            >
              {tab.icon}
            </span>
            <span className="font-sans text-[10px] mt-0.5">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
