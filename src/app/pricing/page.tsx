import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing & PRO",
};

export default function PricingPage() {
  return (
    <div className="container py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl text-primarycolor1 mb-4 font-bold">Lexology PRO</h1>
        <p className="text-xl text-text2 max-w-2xl mx-auto">
          Unlock faster, smarter legal research and proactive compliance monitoring.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        <div className="bg-secondarycolor1 p-10 rounded-lg border border-secondarycolor3 flex-1 min-w-[300px] max-w-[400px] text-center">
          <h2 className="text-primarycolor1 text-2xl mb-4 font-semibold">Basic</h2>
          <div className="text-4xl font-bold mb-6">Free</div>
          <ul className="text-left mb-8 text-text2 space-y-4">
            <li className="pb-2 border-b border-secondarycolor3">✓ Daily news briefing</li>
            <li className="pb-2 border-b border-secondarycolor3">✓ Basic article search</li>
            <li className="pb-2 border-b border-secondarycolor3">✓ Access to free webinars</li>
          </ul>
          <button className="btn-primary w-full">Sign up</button>
        </div>

        <div className="bg-primarycolor1 text-secondarycolor1 p-10 rounded-lg flex-1 min-w-[300px] max-w-[400px] text-center scale-105 shadow-2xl">
          <div className="bg-[#ffcc00] text-black text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">MOST POPULAR</div>
          <h2 className="text-2xl mb-4 font-semibold">PRO</h2>
          <div className="text-4xl font-bold mb-6">Custom</div>
          <ul className="text-left mb-8 text-secondarycolor2 opacity-90 space-y-4">
            <li className="pb-2 border-b border-white/10">✓ Everything in Basic</li>
            <li className="pb-2 border-b border-white/10">✓ Advanced regulatory data APIs</li>
            <li className="pb-2 border-b border-white/10">✓ Compliance calendar & tracking</li>
            <li className="pb-2 border-b border-white/10">✓ Premium contracts & clauses</li>
          </ul>
          <button className="btn-accent w-full">Contact Sales</button>
        </div>
      </div>
    </div>
  );
}
