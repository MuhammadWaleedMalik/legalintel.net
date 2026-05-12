import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Explore",
};

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-white text-black">
      
      {/* Header */}
      <div className="flex items-center justify-between px-10 py-6 border-b">
        <h1 className="text-2xl font-semibold tracking-wide">LEXOLOGY</h1>
        <button className="text-sm flex items-center gap-2">
          Close menu ✕
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-10 py-10 flex gap-12">
        
        {/* LEFT CONTENT */}
        <div className="flex-1">
          
          <h2 className="text-sm font-semibold mb-6 tracking-wide">
            ALL RESOURCES
          </h2>

          {/* Section 1 */}
          <div className="border-t pt-8 pb-10">
            <div className="grid grid-cols-3 gap-10">
              
              {/* Title */}
              <div className="text-2xl leading-snug">
                Latest <br /> intelligence
              </div>

              {/* Links */}
              <div className="col-span-2 space-y-6 text-sm">
                <div className="flex gap-8">
                  <Link href="#">My newsfeed</Link>
                  <Link href="#">Analysis</Link>
                  <Link href="#">Browse by contributor</Link>
                </div>

                <div className="flex gap-8">
                  <Link href="#">Panoramic</Link>
                  <Link href="#">In-Depth</Link>
                  <Link href="#">In-House View</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="border-t pt-8 pb-10">
            <div className="grid grid-cols-3 gap-10">
              
              <div className="text-2xl">
                Legal research
              </div>

              <div className="col-span-2 space-y-4 text-sm">
                <div className="flex gap-8 flex-wrap">
                  <Link href="#">Lexy Find</Link>
                  <Link href="#">Primary sources</Link>
                  <Link href="#">Research hub</Link>
                  <Link href="#">Data hub</Link>
                </div>
                <Link href="#">Reports centre</Link>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="border-t pt-8">
            <div className="grid grid-cols-3 gap-10">
              
              <div className="text-2xl">
                Regulatory <br /> monitoring
              </div>

              <div className="col-span-2 space-y-4 text-sm">
                <div className="flex gap-8 flex-wrap">
                  <Link href="#">Scanner: regulatory monitoring</Link>
                  <Link href="#">Compliance calendar</Link>
                </div>
                <div className="flex gap-8">
                  <Link href="#">Analysis</Link>
                  <Link href="#">Regulatory data APIs</Link>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="w-[300px] bg-gray-100 rounded-xl p-6 h-fit">
          <h3 className="font-medium mb-4">More from Lexology</h3>

          <div className="flex flex-col gap-3 text-sm text-gray-700">
            <Link href="#">Lexy AI</Link>
            <Link href="#">Lexology Compete</Link>
            <Link href="#">About</Link>
            <Link href="#">Help centre</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Lexology Academic</Link>
            <Link href="#">Lexology Talent Management</Link>
            <Link href="#">Popular</Link>
            <Link href="#">Firm directory</Link>
          </div>
        </div>

      </div>
    </div>
  );
}