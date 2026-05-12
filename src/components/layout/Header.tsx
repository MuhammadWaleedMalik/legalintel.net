"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useState, useRef, useEffect } from "react";
import { siteConfig } from "@/config/site";

// ============================================================================
// DROPDOWN CONTENT DATA ARRAYS
// ============================================================================

const dropdownData = {
  "Latest intelligence": {
    heading: "Latest Intelligence",
    paragraphs: [
      "Stay ahead with real-time legal intelligence from around the world.",
      "Get breaking news alerts and daily briefings tailored to your practice areas.",
      "Access expert analysis from leading lawyers and legal journalists.",
      "Track regulatory changes as they happen across multiple jurisdictions.",
      "Save and share critical insights with your team members.",
    ],
  },
  "Legal research": {
    heading: "Legal Research",
    paragraphs: [
      "Find trusted answers to legal questions quickly and efficiently.",
      "Access comprehensive case law databases and legislation tracking.",
      "Use AI-powered search to discover relevant precedents and authorities.",
      "Cross-reference legal sources across multiple jurisdictions.",
      "Save research trails and create shareable reports for your team.",
    ],
  },
  "Regulatory monitoring": {
    heading: "Regulatory Monitoring",
    paragraphs: [
      "Monitor global regulatory changes in real-time.",
      "Set up custom alerts for specific industries and jurisdictions.",
      "Track compliance deadlines and legislative developments.",
      "Get actionable insights on how new regulations affect your business.",
      "Access consolidated regulatory updates from hundreds of sources.",
    ],
  },
  "Practical resources": {
    heading: "Practical Resources",
    paragraphs: [
      "Access hundreds of how-to-guides, checklists, and templates.",
      "Download ready-to-use contract clauses and legal documents.",
      "Get step-by-step guidance for complex legal tasks.",
      "Use compliance checklists to ensure regulatory adherence.",
      "Access practical toolkits for in-house legal teams.",
    ],
  },
  Experts: {
    heading: "Find the Right Expert",
    paragraphs: [
      "Discover leading lawyers and legal experts worldwide.",
      "Search through comprehensive data-led research on legal professionals.",
      "Read verified client reviews and peer recommendations.",
      "Connect with experts who specialize in your practice area.",
      "Access Lexology Index for trusted expert referrals.",
    ],
  },
  Learn: {
    heading: "Learn & Develop",
    paragraphs: [
      "Join live and virtual events featuring expert-led discussions.",
      "Access on-demand masterclasses and professional development courses.",
      "Stay informed on the latest legal developments with practical training.",
      "Earn CPD credits through accredited learning programs.",
      "Participate in interactive workshops and panel discussions.",
    ],
  },
  Compete: {
    heading: "Compete & Grow",
    paragraphs: [
      "Benchmark your practice against industry leaders.",
      "Access competitive intelligence and market insights.",
      "Identify emerging trends and opportunities in legal services.",
      "Track competitor activities and strategic moves.",
      "Gain insights to help your firm stay ahead of the curve.",
    ],
  },
};

// Header navigation items
const navItems = [
  "Latest intelligence",
  "Legal research",
  "Regulatory monitoring",
  "Practical resources",
  "Experts",
  "Learn",
  "Compete",
];

// Top bar links
const topBarLinks = [
  { name: "PRO", href: "/pro", highlight: true },
  { name: "Events", href: "/events", highlight: false },
  { name: "Awards", href: "/awards", highlight: false },
  { name: "Explore", href: "/explore", highlight: false },
];

// Right side top bar links
const rightTopBarLinks = [
  { name: "Login", href: "/login" },
  { name: "Sign Up", href: "/signup", isButton: true },
];

export default function Header() {
  const { data: session } = useSession();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = (item: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(item);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const activeContent = activeDropdown ? dropdownData[activeDropdown as keyof typeof dropdownData] : null;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg border-b border-gray-200"
          : "bg-white border-b border-gray-100"
      }`}
    >
      {/* Top Bar - Dark background */}
      <div className="bg-[#1a1f3a] text-gray-300 text-sm py-2.5">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Left side links */}
          <div className="flex gap-6">
            {topBarLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-all ${
                  link.highlight
                    ? "font-bold text-[#ffcc00] hover:text-[#ffdd33]"
                    : "hover:text-white opacity-80 hover:opacity-100"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          {/* Right side links */}
          <div className="flex gap-6 items-center">
            {session ? (
              <>
                {(session.user as any).role === "admin" && (
                  <Link href="/admin" className="text-accent-gold font-bold hover:text-white transition-all">Admin Panel</Link>
                )}
                <Link href="/services" className="hover:text-white opacity-80 hover:opacity-100 transition-all">Dashboard</Link>
                <button onClick={() => signOut()} className="bg-red-600 px-4 py-1.5 rounded-lg text-white font-semibold hover:bg-red-700 transition-all text-sm shadow-lg shadow-red-900/20">Logout</button>
              </>
            ) : (
              rightTopBarLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={
                    link.isButton
                      ? "bg-accent-blue px-5 py-1.5 rounded-lg text-white font-bold hover:bg-blue-700 transition-all text-sm shadow-lg shadow-blue-900/20"
                      : "hover:text-white opacity-80 hover:opacity-100 transition-all font-medium"
                  }
                >
                  {link.name}
                </Link>
              ))
            )}
          </div>

        </div>
      </div>

      {/* Main Header */}
      <div className="py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-extrabold bg-gradient-to-r from-[#1a1f3a] to-[#2563eb] bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            {siteConfig.name || "LegalIntel"}
          </Link>

          {/* Navigation with Dropdowns */}
          <nav
            className="flex gap-6 font-medium"
            ref={dropdownRef}
            onMouseLeave={handleMouseLeave}
          >
            {navItems.map((item) => (
              <div
                key={item}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item)}
              >
                <button
                  className={`py-2 text-gray-700 hover:text-[#1a1f3a] transition-colors flex items-center gap-1 ${
                    activeDropdown === item ? "text-[#1a1f3a] font-semibold" : ""
                  }`}
                >
                  {item}
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      activeDropdown === item ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Dropdown Panel - Scrollable */}
      {activeDropdown && activeContent && (
        <div
          className="absolute left-0 right-0 bg-white shadow-xl border-t border-gray-200 z-40"
          onMouseEnter={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="max-h-[70vh] overflow-y-auto custom-scrollbar">
              {/* Heading */}
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                {activeContent.heading}
              </h2>
              {/* Paragraphs */}
              <div className="space-y-3">
                {activeContent.paragraphs.map((paragraph, idx) => (
                  <p key={idx} className="text-gray-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #a1a1a1;
        }
      `}</style>
    </header>
  );
}