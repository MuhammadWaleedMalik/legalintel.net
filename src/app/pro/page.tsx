import Link from "next/link";

// ============================================================================
// DATA ARRAYS (All content is driven from these arrays)
// ============================================================================

// Page 1: Hero Section Data
const page1Data = {
  heading: "Work even smarter with LegalIntel PRO",
  subheading: "The premium range of features, content and advanced tools from LegalIntel.",
  ctaTextPrimary: "Sign up for free",
  ctaLinkPrimary: "/signup",
  ctaTextSecondary: "Request a demo",
  ctaLinkSecondary: "/login",
  imageUrl: "/img.png",
  imageAlt: "Legal intelligence platform dashboard",
};

// Page 2: Three Features Row
const page2Data = {
  cards: [
    {
      imgSrc: "/1.png",
      alt: "Find the precise answers you need",
      heading: "Find the precise answers you need",
      subheading: "Access trusted, up-to-date information from validated sources and intuitive research tools, all on one platform.",
    },
    {
      imgSrc: "/2.png",
      alt: "AI Researc",
      heading: "Identify and mitigate potential risks",
      subheading: "Stay on top of and proactively address legal and regulatory change.",
    },
    {
      imgSrc: "/3.png",
      alt: "Practical Resources",
      heading: "Advise with confidence",
      subheading: "Prepare more efficiently and demonstrate your expertise.",
    },
  ],
};

// Page 3: Trusted Partners
const page3Data = {
  heading: "Trusted by industry leaders worldwide",
  partnerImages: [
    { src: "https://lbr-embedded-lexology.lbr.cloud///static/media/baker-mckenzie.1a9a81a3567a6e5515af92f19f6be1a6.svg", alt: "Baker McKenzie" },
    { src: "https://lbr-embedded-lexology.lbr.cloud///static/media/dentons.e1326f17e2c3f88a73f08a8b4f0bc20d.svg", alt: "Dentons" },
    { src: "https://lbr-embedded-lexology.lbr.cloud///static/media/slaughter-and-may.a129c865a22d558104a287a73b3f0837.svg", alt: "Slaughter and May" },
    { src: "https://lbr-embedded-lexology.lbr.cloud///static/media/latham-&-watkins-llp.44acbca75891421084bd182a277e3b12.svg", alt: "Latham & Watkins" },
    { src: "https://lbr-embedded-lexology.lbr.cloud///static/media/dla-piper.99fff746e7c46cf4a682e02eb8d692bf.svg", alt: "DLA Piper" },
    { src: "https://lbr-embedded-lexology.lbr.cloud///static/media/sidley-austin-llp.963d71a07be4441e85109df445a1c120.svg", alt: "Sidley Austin" },
    { src: "https://lbr-embedded-lexology.lbr.cloud///static/media/ropes-&-gray.d84a503f5cbe770f67e107c217cbed1e.svg", alt: "Ropes & Gray" },
    { src: "https://lbr-embedded-lexology.lbr.cloud///static/media/white-&-case.cdb8d4e9df2cb37483c4963b6b88294b.svg", alt: "White & Case" },
  ],
};

// Page 4: PRO Section
const page4Data = {
  heading: "See what LegalIntel PRO can do for you",
  subheading: "From horizon scanning to taking action, LegalIntel PRO helps you stay ahead and stay compliant cross-border. Save time with real-time regulatory updates, expert insights and practical guidance, including our contract-drafting tool.",
  ctaText: "Request demo",
  ctaLink: "/demo",
};

// Page 5: Two Column Feature List
const page5Data = {
  leftHeadings: [
    "Stay on top of legal and regulatory change globally",
    "Research faster with AI",
    "Understand the implications of change across jurisdictions",
    "Carry out core legal tasks with ease",
  ],
  rightCards: [
    {
      imgSrc: "/5.png",
      heading: "Analysis",
      subheading: "Know what the legal and regulatory changes mean for you with forward-looking analysis, written by our experienced, specialist editors.",
      linkText: "Learn more",
      linkHref: "/analysis",
    },
    {
      imgSrc: "/6.png",
      heading: "Panoramic",
      subheading: "Compare legal frameworks of multiple jurisdictions using our cross-jurisdictional comparison tool.",
      linkText: "Learn more",
      linkHref: "/panoramic",
    },
    {
      imgSrc: "/7.png",
      heading: "In-Depth",
      subheading: "Go deeper into global legal issues and their practical application across jurisdictions, and potential impacts on corporate decision-making.",
      linkText: "Learn more",
      linkHref: "/indepth",
    },
  ],
};

// Page 6: Stats Section with Background
const page6Data = {
  heading: "Helping legal professionals worldwide work smarter every day",
  subheading: "Across key topics including",
  topics: ["ESG", "Data protection", "Sanctions", "Trade & customs", "Employment"],
  stats: [
    { value: "50+", label: "Work areas" },
    { value: "170+", label: "Jurisdictions" },
    { value: "1", label: "Access everything through 1 subscription", highlight: true },
    { value: "400+", label: "Practical resources" },
    { value: "1200+", label: "Regulatory sources" },
  ],
  backgroundImageUrl: "https://lbr-embedded-lexology.lbr.cloud/static/media/globe-bg.2d2dc903bab6c3ebb69b53c76a0a1cde.svg", // Replace with actual background image
};

// Page 7: Platform Features Section
const page7Data = {
  heading: "Access everything on one platform, with one subscription.",
  subheading: "Whether you're tracking regulatory changes, staying ahead of market trends or drafting contracts, LegalIntel PRO provides you with the tools and resources you need to succeed – all on one platform, with one subscription.",
  keywords: ["Scanner", "Lexy", "Compliance calendar", "Analysis", "In-Depth", "Panoramic", "Primary sources", "Contract & clause library"],
  paragraph: "Regulatory tracking: Scanner tracks hundreds of regulatory sources globally to deliver timely updates on rule changes, enforcement and guidance. Its enhanced intelligence surfaces key developments and helps you interpret their implications quickly and confidently.",
};

// Page 8: Custom Video Section
const page8Data = {
  videoUrl: "https://www.lexology.com/videos/scanner.mp4", // Replace with actual video URL
  videoTitle: "LegalIntel Platform Overview",
};

// Page 9: Full Width Image
const page9Data = {
  imageUrl: "/9.png", // Replace with actual image path
  alt: "LegalIntel Platform Showcase",
};

// Page 10: Form Section
const page10Data = {
  heading: "Ready to work even smarter?",
  subheading: "Get a personalised walkthrough to see how we can help achieve your goals.",
  bulletPoints: [
    "Discover how our platform addresses your specific challenges",
    "Save hours every day with simplified workflows and horizon scanning",
    "Achieve more with tools and resources to keep you focused on what matters",
  ],
  testimonial: {
    text: "\"LegalIntel PRO saves us around 2-3 hours a day\"",
    author: "Aey Moris, People policy, global compliance and risk manager & Carly Durcan, Global head of people relations & compliance – Entain",
  },
  formFields: [
    { name: "salutation", label: "Salutation", type: "text", required: true },
    { name: "firstName", label: "First Name", type: "text", required: true },
    { name: "lastName", label: "Last Name", type: "text", required: true },
    { name: "organisationName", label: "Organisation Name", type: "text", required: true },
    { name: "organisationType", label: "Organisation Type", type: "text", required: true },
    { name: "jobRole", label: "Job Role", type: "text", required: true },
    { name: "jobTitle", label: "Job Title", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "phone", label: "Phone", type: "tel", required: true },
    { name: "country", label: "Country", type: "text", required: true },
  ],
  privacyText: "Lexology uses the information you provide to us to contact you about our relevant content, products, and services. You may change your preferences or unsubscribe at any time.",
  dataProtectionLink: "/privacy",
  termsLink: "/terms",
};

export default function ProPage() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* ===== PAGE 1: Hero Section ===== */}
    <section className="relative py-20 bg-gradient-to-br from-[#00162D] to-[#00162D] text-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center min-h-[60vh] relative">
    
    {/* Center Content */}
    <div className="z-10 max-w-2xl">
      <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6">
        {page1Data.heading}
      </h1>

      <p className="text-lg md:text-xl leading-relaxed mb-8 opacity-90">
        {page1Data.subheading}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href={page1Data.ctaLinkPrimary}
          className="inline-block bg-[#00939B] hover:bg-[#047177] text-white font-semibold px-8 py-3 rounded-lg transition duration-300 text-center"
        >
          {page1Data.ctaTextPrimary}
        </Link>

        <Link
          href={page1Data.ctaLinkSecondary}
          className="inline-block bg-transparent border-2 border-white hover:bg-white hover:text-[#00162D] text-white font-semibold px-8 py-3 rounded-lg transition duration-300 text-center"
        >
          {page1Data.ctaTextSecondary}
        </Link>
      </div>
    </div>

    {/* Bottom Right Image */}
    <div className="absolute bottom-0 right-0 w-full md:w-auto flex justify-end pointer-events-none">
      <img
        src={page1Data.imageUrl}
        alt={page1Data.imageAlt}
        className="w-64 md:w-80 lg:w-96 rounded-2xl shadow-2xl opacity-90"
      />
    </div>

  </div>
    </section>
    
      {/* ===== PAGE 2: Three Features Row ===== */}
      <section className=" relative py-20 top-[-150px] bg-transparent ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {page2Data.cards.map((card, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <img src={card.imgSrc} alt={card.alt} className="w-12 h-12 object-contain" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{card.heading}</h3>
                <p className="text-gray-600">{card.subheading}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PAGE 3: Trusted Partners ===== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid border-t-1 border-t-zinc-600 border-b-1 p-20  grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
            {page3Data.partnerImages.map((partner, index) => (
              <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
                <img src={partner.src} alt={partner.alt} className="h-8 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PAGE 4: PRO Section ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#25384C] mb-6">{page4Data.heading}</h2>
          <p className="text-lg text-gray-600 mb-8">{page4Data.subheading}</p>
          <Link
            href={page4Data.ctaLink}
            className="inline-block bg-[#00939B] hover:bg-[#046a70] text-white font-semibold px-8 py-3 rounded-lg transition duration-300"
          >
            {page4Data.ctaText}
          </Link>
        </div>
      </section>

      {/* ===== PAGE 5: Two Column Feature List ===== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column */}
            <div>
              {page5Data.leftHeadings.map((heading, index) => (
                <div key={index} className="mb-6 flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-lg font-medium text-gray-800">{heading}</p>
                </div>
              ))}
            </div>
            {/* Right Column */}
            <div className="space-y-8">
              {page5Data.rightCards.map((card, index) => (
                <div key={index} className="flex gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex-shrink-0 flex items-center justify-center">
                    <img src={card.imgSrc} alt={card.heading} className="w-10 h-10 object-contain" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{card.heading}</h3>
                    <p className="text-gray-600 mb-2">{card.subheading}</p>
                    <Link href={card.linkHref} className="text-blue-600 font-medium hover:underline">
                      {card.linkText} →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PAGE 6: Stats Section with Background ===== */}
      <section
        className="py-20 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${page6Data.backgroundImageUrl})`, backgroundColor: "#00162D" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{page6Data.heading}</h2>
            <p className="text-xl mb-4">{page6Data.subheading}</p>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              {page6Data.topics.map((topic, index) => (
                <span key={index} className="bg-white/20 px-4 py-1 rounded-full">{topic}</span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-center">
            {page6Data.stats.map((stat, index) => (
              <div key={index} className={`p-4 rounded-lg ${stat.highlight ? 'bg-blue-600' : ''}`}>
                <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PAGE 7: Platform Features Section ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{page7Data.heading}</h2>
            <p className="text-lg text-gray-600 mb-8">{page7Data.subheading}</p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {page7Data.keywords.map((keyword, index) => (
                <span key={index} className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">
                  {keyword}
                </span>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed">{page7Data.paragraph}</p>
          </div>
        </div>
      </section>

      {/* ===== PAGE 8: Custom Video Section ===== */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-2xl">
            <video
              src={page8Data.videoUrl}
              title={page8Data.videoTitle}
              className="absolute top-0 left-0 w-full h-full object-cover"
              controls
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </section>

      {/* ===== PAGE 9: Full Width Image ===== */}
      <section className="w-full">
        <img src={page9Data.imageUrl} alt={page9Data.alt} className="w-full h-auto object-cover" />
      </section>

      {/* ===== PAGE 10: Form Section ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{page10Data.heading}</h2>
              <p className="text-lg text-gray-600 mb-6">{page10Data.subheading}</p>
              <ul className="space-y-3 mb-8">
                {page10Data.bulletPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-gray-50 p-6 rounded-xl italic">
                <p className="text-gray-800 mb-2">"{page10Data.testimonial.text}"</p>
                <p className="text-sm text-gray-500">{page10Data.testimonial.author}</p>
              </div>
            </div>
            {/* Right Form */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {page10Data.formFields.map((field, index) => (
                    <div key={index} className={field.name === "salutation" ? "col-span-2 sm:col-span-1" : "col-span-2"}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {field.label} {field.required && <span className="text-red-500">*</span>}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        required={field.required}
                      />
                    </div>
                  ))}
                </div>
                <div className="text-xs text-gray-500 space-y-2 pt-4">
                  <p>{page10Data.privacyText}</p>
                  <p>
                    <Link href={page10Data.dataProtectionLink} className="text-blue-600 hover:underline">Data Protection</Link>
                    {" "}To see how we use your data, please visit the Privacy Policy.
                  </p>
                  <p>
                    <Link href={page10Data.termsLink} className="text-blue-600 hover:underline">Terms</Link>
                    {" "}This form submission is subject to our Terms & Conditions.
                  </p>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}