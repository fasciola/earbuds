/**
 * Central configuration for the G9 Smart Touchscreen Earbuds landing page.
 * Figures like battery life, capacity, and brand names can be easily edited here.
 */

export const BRAND_NAME = "G9 Smart";

export const CONTACT_CONFIG = {
  whatsappNumber: "+1234567890", // Placeholder for supplier/vendor WhatsApp number
  whatsappMessage: "Hello! I am interested in the G9 Touchscreen Earbuds. Can you please help me with my order?",
  whatsappUrl: "https://wa.me/1234567890?text=Hello!%20I%20am%20interested%20in%20the%20G9%20Touchscreen%20Earbuds.%20Can%20you%20please%20help%20me%20with%20my%20order%3F",
  checkoutUrl: "#purchase-section",
};

// Battery life and power stats - easily editable as requested!
export const POWER_STATS = {
  totalListeningEndurance: "Up to 10 Hours", // "Up to 10 Hours" total listening endurance
  perEarbudCharge: "Up to 4 Hours",          // "Up to 4 Hours" per earbud charge
  chargingTime: "1.5 Hours",                 // "1.5 Hours" charging time
  caseCapacity: "300 mAh",                   // "300 mAh" charging case capacity
  earbudCapacity: "30 mAh",                  // "30 mAh" earbud battery capacity
  interface: "Type-C",                       // "Type-C" charging interface
};

// Full technical specifications
export const TECHNICAL_SPECS = {
  model: "G9",
  bluetoothVersion: "5.3",
  colours: "Black, White, Pink, Beige",
  earbudBattery: "30 mAh",
  caseBattery: "300 mAh",
  chargingTime: "1.5 Hours",
  interface: "Type-C",
  dimensions: "60 × 43 × 28.6 mm",
  disclaimer: "Specifications are subject to final supplier confirmation.",
};

// FAQ list
export const FAQS = [
  {
    id: "faq-1",
    question: "Does the case have a touch screen?",
    answer: "Yes, the G9 features a large, full-color smart touchscreen display directly integrated into the lid of the charging case. It allows you to see status and control functions without opening your phone."
  },
  {
    id: "faq-2",
    question: "Can I control music from the charging case?",
    answer: "Absolutely! The touchscreen case allows you to play/pause music, skip tracks, adjust volume, switch equalizer presets, and control other playback options directly on the case."
  },
  {
    id: "faq-3",
    question: "How long does charging take?",
    answer: "The G9 charging case takes approximately 1.5 hours to reach a full charge using the included high-speed USB Type-C cable. The earbuds themselves charge rapidly when placed back into the case."
  },
  {
    id: "faq-4",
    question: "Does it support calls?",
    answer: "Yes, G9 supports full stereo hands-free calls. The earbuds feature high-fidelity built-in microphones to capture clear audio, and the touchscreen case lets you view caller ID and accept or decline calls with a single tap."
  },
  {
    id: "faq-5",
    question: "Which colors are available?",
    answer: "The G9 is available in four stunning finishes designed to fit your aesthetic: Obsidian Black, Pure White, Pastel Pink, and Desert Beige."
  },
  {
    id: "faq-6",
    question: "Is a Type-C cable included?",
    answer: "Yes, every G9 Smart Earbuds purchase includes a premium USB Type-A to Type-C charging cable, extra silicone ear tips of different sizes for a secure fit, and an instruction manual."
  }
];
