"use client";

import Link from "next/link";
import { FaBuilding, FaArrowUp, FaAngleLeft, FaAngleRight, FaTrophy } from "react-icons/fa";
import { useState, useMemo, useEffect } from "react";

// Mock Data
const influencers = [
  {
    id: 1,
    type: "individual",
    name: "John Doe",
    firm: "Smith & Associates",
    image: "https://i.pravatar.cc/150?img=11",
    workArea: "Competition",
    region: "Europe",
  },
  {
    id: 2,
    type: "firm",
    name: "Global Law Partners",
    logo: "https://ui-avatars.com/api/?name=GLP&background=0D8ABC&color=fff&size=128",
    workArea: "Data Privacy",
    region: "North America",
  },
  {
    id: 3,
    type: "individual",
    name: "Jane Smith",
    firm: "Tech Law Institute",
    image: "https://i.pravatar.cc/150?img=5",
    workArea: "Intellectual Property",
    region: "Asia-Pacific",
  },
  {
    id: 4,
    type: "firm",
    name: "M&A International Experts",
    logo: "https://ui-avatars.com/api/?name=M&A&background=276674&color=fff&size=128",
    workArea: "Corporate Finance",
    region: "Global",
  },
  {
    id: 5,
    type: "individual",
    name: "Carlos Mendez",
    firm: "Mendez Legal",
    image: "https://i.pravatar.cc/150?img=68",
    workArea: "Employment",
    region: "Latin America",
  },
  {
    id: 6,
    type: "individual",
    name: "Sarah Jenkins",
    firm: "Environmental Law Group",
    image: "https://i.pravatar.cc/150?img=32",
    workArea: "ESG",
    region: "Europe",
  },
  {
    id: 7,
    type: "individual",
    name: "Michael Chen",
    firm: "Chen & Partners",
    image: "https://i.pravatar.cc/150?img=45",
    workArea: "Competition",
    region: "Asia-Pacific",
  },
  {
    id: 8,
    type: "firm",
    name: "Privacy First Legal",
    logo: "https://ui-avatars.com/api/?name=PFL&background=276674&color=fff&size=128",
    workArea: "Data Privacy",
    region: "Europe",
  },
  {
    id: 9,
    type: "individual",
    name: "Elena Rodriguez",
    firm: "Rodriguez & Associates",
    image: "https://i.pravatar.cc/150?img=29",
    workArea: "Intellectual Property",
    region: "Latin America",
  },
  {
    id: 10,
    type: "firm",
    name: "Employment Law Specialists",
    logo: "https://ui-avatars.com/api/?name=ELS&background=0D8ABC&color=fff&size=128",
    workArea: "Employment",
    region: "North America",
  },
];

const seriesList = [
  { name: "Q4 2025", active: true },
  { name: "Q3 2025", active: false },
  { name: "Q2 2025", active: false },
  { name: "Q1 2025", active: false },
  { name: "Q4 2024", active: false },
  { name: "Q3 2024", active: false },
];

// Get unique regions and work areas for filters
const regions = ["All Regions", ...new Set(influencers.map(i => i.region))];
const workAreas = ["All Work Areas", ...new Set(influencers.map(i => i.workArea))];

const ITEMS_PER_PAGE = 6;

export default function AwardsPage() {
  const [selectedRegion, setSelectedRegion] = useState("All Regions");
  const [selectedWorkArea, setSelectedWorkArea] = useState("All Work Areas");
  const [currentPage, setCurrentPage] = useState(1);
  const [showWelcomeText, setShowWelcomeText] = useState(true);

  // Filter influencers based on selections
  const filteredInfluencers = useMemo(() => {
    let filtered = [...influencers];
    
    if (selectedRegion !== "All Regions") {
      filtered = filtered.filter(i => i.region === selectedRegion);
    }
    
    if (selectedWorkArea !== "All Work Areas") {
      filtered = filtered.filter(i => i.workArea === selectedWorkArea);
    }
    
    return filtered;
  }, [selectedRegion, selectedWorkArea]);

  // Pagination logic
  const totalPages = Math.ceil(filteredInfluencers.length / ITEMS_PER_PAGE);
  const paginatedInfluencers = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredInfluencers.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredInfluencers, currentPage]);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedRegion, selectedWorkArea]);

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRegion(e.target.value);
  };

  const handleWorkAreaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedWorkArea(e.target.value);
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      
      if (currentPage > 3) {
        pages.push("...");
      }
      
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      
      if (currentPage < totalPages - 2) {
        pages.push("...");
      }
      
      pages.push(totalPages);
    }
    
    return pages;
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleWelcomeText = () => {
    setShowWelcomeText(!showWelcomeText);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans pb-20">
      {/* ===== HERO & INTRO ===== */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-500 mb-6 font-sans">
          <Link href="/" className="hover:text-[#276674] transition-colors">LegalIntel</Link>
          <span className="mx-2">&gt;</span>
          <span className="text-gray-700 font-medium">Influencers</span>
        </nav>

        <h1 className="text-[32px] font-serif font-light text-[#021222] mb-6">
          LegalIntel Legal Influencers
        </h1>

        {/* About Box */}
        {showWelcomeText && (
          <div className="bg-[#f4f4f4] p-8 rounded-[4px] relative transition-all duration-300">
            <div className="absolute top-4 right-4 flex items-center gap-2 text-sm text-gray-600">
              <span>Hide welcome text</span>
              <button 
                onClick={toggleWelcomeText}
                className="w-10 h-5 bg-[#276674] rounded-full relative transition-colors focus:outline-none"
              >
                <span className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></span>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pr-12">
              <p className="text-[15px] leading-relaxed text-gray-700">
                The LegalIntel Legal Influencers programme recognises the thought leaders in the legal industry every quarter. We highlight the authors and firms who produce the most engaging, timely, and insightful legal content for our global audience of corporate counsel and business leaders.
              </p>
              <p className="text-[15px] leading-relaxed text-gray-700">
                Selection is based on a proprietary scoring system that considers the number of reads, the LegalIntel audience profile of the readers, and the topicality of the articles published on our platform. Congratulations to all our Q4 2025 Legal Influencers!
              </p>
            </div>
          </div>
        )}
      </section>

      {/* ===== MAIN CONTENT: LAYOUT ===== */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Column: Winners Grid */}
          <div className="lg:w-3/4">
            
            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex-1">
                <select 
                  className="w-full border border-gray-300 rounded-[4px] px-4 py-2.5 bg-white text-sm focus:outline-none focus:border-[#276674] focus:ring-1 focus:ring-[#276674]"
                  value={selectedRegion}
                  onChange={handleRegionChange}
                >
                  {regions.map(region => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
              </div>
              <div className="flex-1">
                <select 
                  className="w-full border border-gray-300 rounded-[4px] px-4 py-2.5 bg-white text-sm focus:outline-none focus:border-[#276674] focus:ring-1 focus:ring-[#276674]"
                  value={selectedWorkArea}
                  onChange={handleWorkAreaChange}
                >
                  {workAreas.map(area => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-4 text-sm text-gray-500">
              Showing {paginatedInfluencers.length} of {filteredInfluencers.length} influencers
            </div>

            {/* Grid of Cards */}
            {paginatedInfluencers.length === 0 ? (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <p className="text-gray-500 text-lg">No influencers match your search criteria.</p>
                <button 
                  onClick={() => {
                    setSelectedRegion("All Regions");
                    setSelectedWorkArea("All Work Areas");
                  }}
                  className="mt-4 text-[#276674] hover:underline font-medium"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {paginatedInfluencers.map((item) => (
                  <div key={item.id} className="bg-white border border-gray-200 rounded-sm shadow-sm flex flex-col hover:shadow-md transition-shadow">
                    
                    <div className="flex-1 p-6 relative flex flex-col items-center text-center">
                      {/* Top Right Badge */}
                      <div className="absolute top-4 right-4 flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-[#276674] text-white flex items-center justify-center mb-1">
                          <FaTrophy className="text-sm" />
                        </div>
                        <span className="text-[10px] uppercase font-bold text-[#276674] tracking-wider">
                          Legal Influencer
                        </span>
                      </div>

                      {item.type === "individual" ? (
                        <>
                          {/* Profile Photo */}
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-24 h-24 rounded-full object-cover mb-4 mt-2"
                          />
                          <h3 className="text-xl font-bold text-[#021222] mb-2">{item.name}</h3>
                          <div className="flex items-center gap-2 text-gray-600 text-sm">
                            <FaBuilding className="text-gray-400" />
                            <span>{item.firm}</span>
                          </div>
                        </>
                      ) : (
                        <>
                          {/* Firm Logo */}
                          <div className="absolute top-4 left-4">
                            <img 
                              src={item.logo} 
                              alt={item.name} 
                              className="h-12 w-auto object-contain"
                            />
                          </div>
                          <div className="flex-1 flex items-center justify-center mt-12 w-full">
                            <h3 className="text-xl font-bold text-[#021222] px-4">{item.name}</h3>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Card Footer */}
                    <div className="bg-[#f9f9f9] border-t border-gray-100 py-3 px-6 text-center rounded-b-sm">
                      <p className="text-sm font-bold text-[#021222]">
                        {item.workArea} <span className="mx-2 text-gray-300">|</span> {item.region}
                      </p>
                    </div>

                  </div>
                ))}
              </div>
            )}

            {/* Pagination - only show if more than 1 page */}
            {totalPages > 1 && paginatedInfluencers.length > 0 && (
              <div className="flex justify-center items-center gap-2 mt-12">
                <button 
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`w-8 h-8 flex items-center justify-center border border-gray-300 rounded transition-colors ${
                    currentPage === 1 
                      ? "text-gray-300 cursor-not-allowed" 
                      : "text-gray-400 hover:text-[#276674] hover:border-[#276674]"
                  }`}
                >
                  <FaAngleLeft />
                </button>
                
                {getPageNumbers().map((page, index) => (
                  <button
                    key={index}
                    onClick={() => typeof page === "number" && handlePageChange(page)}
                    className={`w-8 h-8 flex items-center justify-center border rounded font-medium transition-colors ${
                      currentPage === page
                        ? "border-[#276674] bg-[#276674] text-white"
                        : page === "..."
                        ? "border-transparent cursor-default text-gray-400"
                        : "border-gray-300 text-gray-600 hover:text-[#276674] hover:border-[#276674]"
                    }`}
                  >
                    {page}
                  </button>
                ))}
                
                <button 
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`w-8 h-8 flex items-center justify-center border border-gray-300 rounded transition-colors ${
                    currentPage === totalPages 
                      ? "text-gray-300 cursor-not-allowed" 
                      : "text-gray-400 hover:text-[#276674] hover:border-[#276674]"
                  }`}
                >
                  <FaAngleRight />
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-[#f4f4f4] rounded-[4px] p-6 border border-gray-200">
              <h3 className="text-lg font-serif font-bold text-[#021222] mb-4 pb-2 border-b border-gray-300">
                Series
              </h3>
              <ul className="space-y-3">
                {seriesList.map((series, idx) => (
                  <li key={idx}>
                    <Link 
                      href="#" 
                      className={`text-[15px] ${series.active ? 'text-[#276674] font-bold' : 'text-gray-600 hover:text-[#276674]'} transition-colors`}
                    >
                      {series.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Back to Top Button */}
      <button 
        onClick={handleBackToTop}
        
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#276674] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#1f535f] transition-colors z-50"
        aria-label="Back to top"
      >
        <FaArrowUp />
      </button>

    </div>
  );
}