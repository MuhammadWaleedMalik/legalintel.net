"use client";

import Link from "next/link";
import { FaCalendarAlt, FaLock, FaChevronRight } from "react-icons/fa";
import { useState, useMemo } from "react";

const eventsData = [
  {
    id: 1,
    title: "Global Competition Law Conference 2026",
    organizer: "Lexology Masterclass",
    date: "12 May 2026",
    location: "London, UK / Online",
    type: "Conference",
    description: "Join leading competition law experts for an in-depth analysis of recent regulatory changes, enforcement trends, and practical strategies for global compliance. This hybrid event offers unparalleled networking opportunities and actionable insights.",
    isPremium: true,
    workArea: "competition",
  },
  {
    id: 2,
    title: "Navigating AI Regulations in Europe",
    organizer: "Tech Law Institute",
    date: "28 Jun 2026",
    location: "Online Webinar",
    type: "Seminar",
    description: "A comprehensive overview of the new EU AI Act and its implications for tech companies operating globally. Learn how to adapt your compliance programs to meet the stringent new requirements.",
    isPremium: false,
    workArea: "data-privacy",
  },
  {
    id: 3,
    title: "Cross-Border M&A: Strategic Approaches",
    organizer: "Global Legal Network",
    date: "15 Sep 2026",
    location: "New York, USA",
    type: "Masterclass",
    description: "An interactive masterclass designed for senior M&A practitioners. Explore complex deal structures, risk allocation mechanisms, and regulatory hurdles in multi-jurisdictional transactions.",
    isPremium: true,
    workArea: "competition",
  },
  {
    id: 4,
    title: "ESG Compliance and Reporting Standards",
    organizer: "Lexology Masterclass",
    date: "05 Nov 2026",
    location: "Singapore",
    type: "Conference",
    description: "Stay ahead of the evolving ESG landscape. This conference brings together sustainability leaders and legal experts to discuss best practices for integrating ESG considerations into corporate governance and reporting.",
    isPremium: false,
    workArea: "esg",
  },
  {
    id: 5,
    title: "Data Privacy & Cybersecurity Summit 2026",
    organizer: "Global Privacy Alliance",
    date: "20 Oct 2026",
    location: "Berlin, Germany / Online",
    type: "Summit",
    description: "Navigate the complex landscape of global data protection regulations. Expert speakers from regulatory bodies will share insights on GDPR enforcement, cross-border data transfers, and emerging privacy technologies.",
    isPremium: true,
    workArea: "data-privacy",
  },
  {
    id: 6,
    title: "Employment Law Update: Global Workforce Trends",
    organizer: "International Bar Association",
    date: "08 Jul 2026",
    location: "Toronto, Canada",
    type: "Seminar",
    description: "Stay current with the latest developments in employment law across major jurisdictions. Topics include remote work policies, non-compete clauses, and diversity initiatives.",
    isPremium: false,
    workArea: "employment",
  },
];

export default function EventsPage() {
  const [workArea, setWorkArea] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  // Helper function to parse dates (DD MMM YYYY format like "12 May 2026")
  const parseEventDate = (dateStr: string): Date => {
    return new Date(dateStr);
  };

  // Filter events based on selected criteria
  const filteredEvents = useMemo(() => {
    return eventsData.filter((event) => {
      // Filter by work area
      if (workArea && event.workArea !== workArea) {
        return false;
      }

      // Filter by date from
      if (dateFrom) {
        const fromDate = new Date(dateFrom);
        const eventDate = parseEventDate(event.date);
        if (eventDate < fromDate) {
          return false;
        }
      }

      // Filter by date to
      if (dateTo) {
        const toDate = new Date(dateTo);
        const eventDate = parseEventDate(event.date);
        if (eventDate > toDate) {
          return false;
        }
      }

      return true;
    });
  }, [workArea, dateFrom, dateTo]);

  const handleClearFilters = () => {
    setWorkArea("");
    setDateFrom("");
    setDateTo("");
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Filtering is already handled by useMemo, this just prevents page reload
  };

  return (
    <div className="min-h-screen bg-white text-[#333333] font-sans">
      
      {/* ===== HEADER / HERO SECTION ===== */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-500 mb-6 font-sans">
          <Link href="/" className="hover:text-[#276674] transition-colors">LegalIntel</Link>
          <span className="mx-2">&gt;</span>
          <span className="text-gray-700 font-medium">Events</span>
        </nav>

        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl text-[#021222] font-serif font-light mb-8">
          Events - conferences, seminars and masterclasses
        </h1>
        
        <hr className="border-[#e5e7eb]" />
      </section>

      {/* ===== FILTER SECTION ===== */}
      <section className="bg-[#f8f9fa] border-y border-[#e5e7eb] py-8">
        <div className="max-w-6xl mx-auto px-4">
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row items-end gap-6">
            
            {/* Work Area Dropdown */}
            <div className="flex-1 w-full">
              <label htmlFor="workArea" className="block text-sm font-bold text-gray-700 mb-2">
                Work area
              </label>
              <select 
                id="workArea" 
                value={workArea}
                onChange={(e) => setWorkArea(e.target.value)}
                className="w-full border border-gray-300 rounded-[5px] px-4 py-2.5 bg-white focus:outline-none focus:border-[#276674] focus:ring-1 focus:ring-[#276674]"
              >
                <option value="">Any Work area</option>
                <option value="competition">Competition</option>
                <option value="data-privacy">Data Privacy</option>
                <option value="employment">Employment</option>
                <option value="esg">ESG</option>
              </select>
            </div>

            {/* Date From */}
            <div className="flex-1 w-full">
              <label htmlFor="dateFrom" className="block text-sm font-bold text-gray-700 mb-2">
                Date From
              </label>
              <input 
                type="date" 
                id="dateFrom" 
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                className="w-full border border-gray-300 rounded-[5px] px-4 py-2.5 bg-white focus:outline-none focus:border-[#276674] focus:ring-1 focus:ring-[#276674]"
              />
            </div>

            {/* Date To */}
            <div className="flex-1 w-full">
              <label htmlFor="dateTo" className="block text-sm font-bold text-gray-700 mb-2">
                Date To
              </label>
              <input 
                type="date" 
                id="dateTo" 
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                className="w-full border border-gray-300 rounded-[5px] px-4 py-2.5 bg-white focus:outline-none focus:border-[#276674] focus:ring-1 focus:ring-[#276674]"
              />
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 w-full md:w-auto mt-4 md:mt-0">
              <button 
                type="button" 
                onClick={handleClearFilters}
                className="text-[#276674] hover:underline text-sm font-medium whitespace-nowrap"
              >
                Clear Filters
              </button>
              <button 
                type="submit" 
                className="bg-[#276674] hover:bg-[#1f535f] text-white font-medium px-8 py-2.5 rounded-[5px] transition-colors whitespace-nowrap w-full md:w-auto shadow-sm"
              >
                Search Events
              </button>
            </div>

          </form>
        </div>
      </section>

      {/* ===== EVENT LIST SECTION ===== */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        {/* Results count */}
        <div className="mb-6 text-sm text-gray-500">
          Showing {filteredEvents.length} of {eventsData.length} events
        </div>

        {filteredEvents.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-500 text-lg">No events match your search criteria.</p>
            <button 
              onClick={handleClearFilters}
              className="mt-4 text-[#276674] hover:underline font-medium"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="flex flex-col">
            {filteredEvents.map((event) => (
              <div key={event.id} className="py-8 border-b border-[#e5e7eb] last:border-b-0 group">
                <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                  
                  {/* Date & Location Box (Left) */}
                  <div className="md:w-48 flex-shrink-0 flex flex-col gap-2">
                    <div className="flex items-start gap-2 text-gray-600">
                      <FaCalendarAlt className="mt-1 flex-shrink-0 text-[#276674]" />
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="text-sm text-gray-500 pl-6">
                      {event.location}
                    </div>
                  </div>

                  {/* Event Content (Right) */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {event.type}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl font-serif font-bold text-[#021222] mb-2 group-hover:text-[#276674] transition-colors cursor-pointer flex items-center gap-2">
                      {event.title}
                      {event.isPremium && <FaLock className="text-gray-400 text-sm" title="Subscription Required" />}
                    </h2>
                    
                    <div className="mb-4 text-sm">
                      <span className="text-gray-600">Organized by </span>
                      <a href="#" className="text-[#276674] hover:underline font-medium">
                        {event.organizer}
                      </a>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-4">
                      {event.description}
                    </p>

                    <button className="text-[#276674] font-medium text-sm hover:underline flex items-center gap-1">
                      Show details <FaChevronRight className="text-[10px]" />
                    </button>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination - only show if there are events */}
        {filteredEvents.length > 0 && (
          <div className="mt-12 flex justify-end">
            <button className="flex items-center gap-2 bg-[#276674] hover:bg-[#1f535f] text-white px-6 py-2.5 rounded-[5px] font-medium transition-colors shadow-sm">
              Next <FaChevronRight className="text-sm" />
            </button>
          </div>
        )}
      </section>

    </div>
  );
}