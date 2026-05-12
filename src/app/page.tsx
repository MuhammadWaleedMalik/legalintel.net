import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// ============================================================================
// DATA ARRAYS (All content is driven from these arrays)
// ============================================================================

// Page 1: Hero Section Data
const page1Data = {
  heading: "The number one global legal intelligence platform for mitigating risk, staying abreast of change and finding expert counsel",
  subheading:
    "Join 900,000+ legal and compliance professionals by signing up for our free, daily news briefing – tailored to your areas of interest.",
  ctaText: "Sign up for free",
  ctaLink: "/signup",
  imageUrl: "/img.png", // Replace with your actual image path
  imageAlt: "Legal intelligence platform dashboard",
};

// Page 2: News & Analysis Data
const page2Data = {
  heading: "NEWS AND ANALYSIS",
  subheading: "Track the developments that matter",
  paragraph:
    "Get your tailored news briefing with cutting-edge analysis from leading lawyers and legal journalists.",
  ctaText: "Register for your free newsfeed",
  ctaLink: "/signup",
  cards: [
    {
      category: "Regulatory Compliance",
      title:
        "Why GCs must build CEO and business relationships to manage risk effectively",
      source: "Lexology PRO",
      tag: "PRO",
    },
    {
      category: "Regulatory Compliance",
      title: "Global AI regulatory update - April 2026",
      source: "Eversheds Sutherland",
      tag: "",
    },
    {
      category: "Regulatory Compliance",
      title: "Vietnam's New Law on Investment",
      source: "PDLegal LLC",
      tag: "",
    },
    {
      category: "Artificial intelligence",
      title:
        "Emerging agentic AI governance in APAC: lessons from Singapore on legal risk",
      source: "Lexology PRO",
      tag: "PRO",
    },
    {
      category: "Artificial intelligence",
      title:
        "AI in Drug Registration and Emerging Opportunities for Patenting in Singapore",
      source: "Marks & Clerk",
      tag: "",
    },
    {
      category: "Artificial intelligence",
      title:
        "IPOS Seeks Industry Views on UK Supreme Court's Landmark AI Patent Ruling",
      source: "Marks & Clerk",
      tag: "",
    },
    {
      category: "ESG",
      title:
        "India vs. Singapore vs. Ireland: The New Data Centre Hub Economics After Budget 2026",
      source: "Ahlawat & Associates",
      tag: "",
    },
    {
      category: "ESG",
      title:
        "APAC compliance forecast: what's on the horizon for in-house teams? (Q2 2026)",
      source: "Lexology PRO",
      tag: "PRO",
    },
    {
      category: "ESG",
      title: "Global Sustainability & ESG Insights - March 2026",
      source: "Eversheds Sutherland",
      tag: "",
    },
  ],
};

// Page 3: Trusted Partners & Marquee Data
const page3Data = {
  heading: "Trusted by industry leaders worldwide",
  subheading: "Lexology is built on insights, forward-looking analysis and expert guidance from the world's leading law firms",
  partnerImages: [
    { src: "https://lbr-embedded-lexology.lbr.cloud///static/media/baker-mckenzie.1a9a81a3567a6e5515af92f19f6be1a6.svg", alt: "Partner 1", name: "Partner 1" },
    { src: "https://lbr-embedded-lexology.lbr.cloud///static/media/dentons.e1326f17e2c3f88a73f08a8b4f0bc20d.svg", alt: "Partner 2", name: "Partner 2" },
    { src: "https://lbr-embedded-lexology.lbr.cloud///static/media/slaughter-and-may.a129c865a22d558104a287a73b3f0837.svg", alt: "Partner 3", name: "Partner 3" },
    { src: "https://lbr-embedded-lexology.lbr.cloud///static/media/latham-&-watkins-llp.44acbca75891421084bd182a277e3b12.svg", alt: "Partner 4", name: "Partner 4" },
    { src: "https://lbr-embedded-lexology.lbr.cloud///static/media/dla-piper.99fff746e7c46cf4a682e02eb8d692bf.svg", alt: "Partner 5", name: "Partner 5" },
    { src: "https://lbr-embedded-lexology.lbr.cloud///static/media/sidley-austin-llp.963d71a07be4441e85109df445a1c120.svg", alt: "Partner 6", name: "Partner 6" },
    { src: "https://lbr-embedded-lexology.lbr.cloud///static/media/ropes-&-gray.d84a503f5cbe770f67e107c217cbed1e.svg", alt: "Partner 7", name: "Partner 7" },
    { src: "https://lbr-embedded-lexology.lbr.cloud///static/media/white-&-case.cdb8d4e9df2cb37483c4963b6b88294b.svg", alt: "Partner 8", name: "Partner 8" },
    { src: "https://lbr-embedded-lexology.lbr.cloud///static/media/hogan-lovells.56df560ae18951695aed0203a8942548.svg", alt: "Partner 9", name: "Partner 9" },
    { src: "https://lbr-embedded-lexology.lbr.cloud///static/media/freshfields.25e9834c77eee6d2e738b62023769120.svg", alt: "Partner 10", name: "Partner 10" },
  ],  marqueeTexs: [
    "Corporae finance",
    "Trade &customs",
    "Mergers& acquisitions",
    "Consume protection",
    "Advertiing",
    "Regulatry compliance",
    "Risk",
    "Artificial intelligence",
  ],
};

// Page 4: Legal Research Data
const page4Data = {
  heading: "LEGAL RESEARCH",
  subheading: "Find trusted answers to legal questions, fast",
  paragraph:
    "Access insights and expert guidance from credible sources to streamline your research.",
  ctaText: "Unlock faster, smarter legal research",
  ctaLink: "/research",
  buttons: [
    { text: "Cross-border law", link: "/cross-border-law" },
    { text: "AI search", link: "/ai-search" },
    { text: "Research hubs", link: "/research-hubs" },
    { text: "Legislation and case law", link: "/legislation" },
  ],
};

// Page 5: Video Section Data
const page5Data = {
  heading: "Navigate global legal complexity",
  paragraph:
    "Gain clarity on how laws differ across borders and deep dive into analysis of international legal developments. Access an essential tool and reviews with comparative insights and commercial context helping you manage the complexities of domestic and cross-border law.",
  videoUrl: "https://www.lexology.com/videos/panoramic.mp4", // Replace with your actual video URL
  videoTitle: "Global Legal Intelligence Overview",
};

// Page 6: Regulatory Compliance Data (First Instance)
const page6Data = {
  heading: "REGULATORY COMPLIANCE",
  subheading: "Track global regulatory change and stay compliant",
  paragraph:
    "Ensure compliance with powerful tools designed to help you monitor, manage and respond to regulatory change globally.",
  ctaText: "Unlock access to proactive compliance",
  ctaLink: "/compliance",
  cards: [
    {
      src: "https://lbr-embedded-lexology.lbr.cloud/static/media/scanner.00cf02486283d6886818074a7d25537d.png",
      title: "Scanner",
      subtitle: "Essential regulatory monitoring",
      description:
        "Track hundreds of regulatory sources globally for timely updates and surface key developments and their implications with enhanced intelligence.",
    },
    {
      src: "https://lbr-embedded-lexology.lbr.cloud/static/media/compliance-calendar.76d2832169428604665bd5b5a8fa0ddf.png",
      title: "Compliance calendar",
      subtitle: "Horizon scanning",
      description:
        "Access key compliance deadlines, regulatory updates and legislative changes, consolidated to ensure you meet your obligations.",
    },
    {
      src: "https://lbr-embedded-lexology.lbr.cloud/static/media/analysis.10c46e0ccdc756ff7e2530512412d0e3.png",
      title: "Analysis and guidance",
      subtitle: "From experienced journalists",
      description:
        "Make informed decisions with daily analysis of key developments around the world, written by our experienced specialist editors.",
    },
    {
      src: "https://lbr-embedded-lexology.lbr.cloud/static/media/data-api.67e47645838decdd3357bf0d876fd221.png",
      title: "Regulatory data APIs",
      subtitle: "Advanced workflows",
      description:
        "Integrate real-time regulatory updates and legislative changes into your systems with our flexible, consolidated API solutions.",
    },
  ],
};

// Page 7: Practical Resources Data
const page7Data = {
  heading: "PRACTICAL RESOURCES",
  subheading: "Draft, review and act with confidence",
  paragraph:
    "Get practical support for core legal and compliance tasks with a wide range of how-to-guides, checklists, and contract and clause templates.",
  ctaText: "Access all our practical resources",
  ctaLink: "/resources",
  cards: [
    {
      icon: "📘",
      title: "Featured How-to-guide",
      subtitle:
        "How-to guide: How to understand and implement the 'G' in environmental, social and governance (ESG)",
      description:
        "This how-to guide provides guidance for in-house counsel and their teams to be able to understand and effectively develop and...",
    },
    {
      icon: "✅",
      title: "Featured Checklist",
      subtitle:
        "Checklist: Preserving privilege: what every in-house lawyer needs to know (UK)",
      description:
        "This checklist provides practical guidance on how to recognise and preserve legal professional privilege and will be of use primarily...",
    },
    {
      icon: "📄",
      title: "Featured Contract",
      subtitle: "Data Subject Rectification Request Form (GDPR)",
      description:
        "This data subject rectification request form can be used to facilitate the processing of data subject requests, specifically requests by...",
    },
  ],
};

// Page 8: Background Image Section Data
const page8Data = {
  heading: "Ready to transform your legal intelligence?",
  subheading: "Join thousands of legal professionals worldwide",
  ctaText: "Get started today",
  ctaLink: "/signup",
  backgroundImageUrl: "/img1.png", // Replace with your actual image path
};

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="w-full overflow-x-hidden">
      {/* ===== PAGE 1 ===== */}
      <section className="relative py-24 bg-primary-900 text-white overflow-hidden bg-mesh">
       <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 min-h-[70vh]">
    
    {/* TEXT CONTENT */}
    <div className="flex-1 text-left z-10">
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8">
        {page1Data.heading}
      </h1>

      <p className="text-xl md:text-2xl leading-relaxed mb-10 text-gray-300 max-w-3xl">
        {page1Data.subheading}
      </p>

      {session ? (
        <Link
          href="/services"
          className="premium-button text-lg px-10 py-4"
        >
          Go to Services Dashboard
        </Link>
      ) : (
        <Link
          href={page1Data.ctaLink}
          className="premium-button text-lg px-10 py-4 bg-gradient-to-r from-accent-blue to-blue-700"
        >
          {page1Data.ctaText}
        </Link>
      )}
    </div>

    {/* IMAGE (RIGHT) */}
    <div className="flex-1 relative hidden lg:block">
      <div className="absolute inset-0 bg-accent-blue/20 blur-[100px] rounded-full"></div>
      <img
        src={page1Data.imageUrl}
        alt={page1Data.imageAlt}
        className="relative z-10 w-full rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 hover:scale-[1.02] transition-transform duration-500"
      />
    </div>
  </div>
      </section>

   
   
      {/* ===== PAGE 2 ===== */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-24 flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
              {page2Data.heading}
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {page2Data.subheading}
            </h3>
            <p className="text-[18px] text-gray-600 mb-6">{page2Data.paragraph}</p>
            {!session && (
              <Link
                href={page2Data.ctaLink}
                className="inline-block bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-2 py-1 rounded-lg transition duration-300"
              >
                {page2Data.ctaText}
              </Link>
            )}
          </div>
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2.5 justify-between">
              {page2Data.cards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white p-5 "
                >
                  <div className="text-[10px] font-semibold text-black uppercase tracking-wide mb-2">
                    {card.category}
                  </div>
                  <div className="font-bold text-gray-800  text-[15px] mb-2 line-clamp-3">
                    {card.title}
                  </div>
                  <div className="text-[8px] text-gray-500 flex items-center gap-2">
                    {card.tag && (
                      <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-xs font-semibold">
                        {card.tag}
                      </span>
                    )}
                    {card.source}
                  </div>
                    <hr className="bg-gray-400 top-3.5"/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PAGE 3 ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
        
          <p className="text-lg text-gray-600">{page3Data.subheading}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center mb-16">
            {page3Data.partnerImages.map((partner, index) => (
              <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
          {/* Marquee */}
          <div className="w-full overflow-hidden bg-[#00162D] py-4 rounded-lg">
            <div className="animate-marquee whitespace-nowrap">
              {page3Data.marqueeTexs.map((text, index) => (
                <span
                  key={index}
                  className="inline-block mx-6 text-gray-200 font-medium"
                >
                  {text}
                </span>
              ))}
              {/* Duplicate for seamless loop */}
              {page3Data.marqueeTexs.map((text, index) => (
                <span
                  key={`dup-${index}`}
                  className="inline-block mx-6 text-gray-200 font-medium"
                >
                  {text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PAGE 4 ===== */}
      
      {/* ===== PAGE 4 ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-left">
          
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
            {page4Data.heading}
          </h2>

          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {page4Data.subheading}
          </h3>

          <p className="text-lg text-gray-600 max-w-2xl mb-8">
            {page4Data.paragraph}
          </p>



          {/* BUTTONS */}
          <div className="flex flex-wrap ml-40 gap-4">
            {page4Data.buttons.map((button, index) => (
              <Link
                key={index}
                href={button.link} 
                className={`text-black bg-[#EAE7FF] font-medium px-6 py-3 rounded-lg shadow-md transition duration-300   `}
              >
                {button.text}
              </Link>
            ))}
          </div>

        </div>
      </section>
  
      {/* ===== PAGE 5 ===== */}
      <section className="py-20 bg-white px-28 text-white">
        <div className="bg-[#09223D] rounded-2xl p-10 h-full "  >
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {page5Data.heading}
            </h2>
            <p className="text-[18px] text-gray-300 leading-relaxed">
              {page5Data.paragraph}
            </p>
          </div>
          <div className="flex-1 w-full h-full">
            <div className="relative pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-2xl">
              <video
                src={page5Data.videoUrl}
                title={page5Data.videoTitle}
                className="absolute top-0 left-0 w-full h-full object-cover"
                controls
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </div>
        </div>
        </div>
      
      </section>

      {/* ===== PAGE 6 ===== */}
    
    <section className="py-20 bg-gray-100">
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADER */}
    <div className="max-w-3xl mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        {page6Data.heading}
      </h2>

      <p className="text-lg text-gray-600 mb-6">
        {page6Data.paragraph}
      </p>

      <Link
        href={page6Data.ctaLink}
        className="inline-flex items-center gap-2 text-black font-medium border-b border-gray-400 hover:gap-3 transition-all"
      >
        {page6Data.ctaText} →
      </Link>
    </div>

    {/* CARDS */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {page6Data.cards.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300"
        >

          {/* ICON BOX */}
          <div className="bg-[#0a1a2f] rounded-xl p-0 mb-5 flex items-center justify-center">
            <img
              src={card.src}
              alt={card.title}
              className="w-full h-full object-contain"
            />
          </div>

          {/* TEXT */}
          <h4 className="text-xl font-semibold text-gray-900 mb-1">
            {card.title}
          </h4>

          <p className="text-sm font-semibold text-blue-600 mb-3">
            {card.subtitle}
          </p>

          <p className="text-gray-600 text-sm leading-relaxed">
            {card.description}
          </p>

        </div>
      ))}
    </div>

  </div>
    </section>

      {/* ===== PAGE 7 ===== */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-10 items-start">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-1">
            <p className="text-xs font-semibold text-purple-600 uppercase tracking-wide mb-3">
              {page7Data.heading}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-snug">
              {page7Data.subheading}
            </h2>

            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              {page7Data.paragraph}
            </p>

            <Link
              href={page7Data.ctaLink}
              className="inline-flex items-center text-sm font-medium text-black border-b border-gray-400 hover:gap-2 transition-all"
            >
              {page7Data.ctaText} →
            </Link>
          </div>

          {/* RIGHT CARDS */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {page7Data.cards.map((card, index) => (
              <div
                key={index}
                className="bg-gray-50 p-5 rounded-xl"
              >
                {/* LABEL */}
                <p className="text-[11px] font-semibold text-teal-700 uppercase mb-2">
                  {card.subtitle}
                </p>

                {/* TITLE */}
                <h3 className="text-sm font-semibold text-gray-900 mb-2 leading-snug">
                  {card.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-xs text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ===== PAGE 8 ===== */}
      {!session && (
        <section
          className="p-0  w-full h-full bg-cover bg-center bg-no-repeat relative"
          style={{ backgroundImage: `url(${page8Data.backgroundImageUrl})` }}
        >
          <img src="/img1.png" alt="" srcSet="" />
      
        </section>
      )}
    </div>
  );
}