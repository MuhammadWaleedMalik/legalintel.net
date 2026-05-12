import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <div className="container py-16 bg-secondarycolor1">
      <h1 className="text-4xl text-primarycolor1 mb-6 font-bold">About Lexology</h1>
      <div className="max-w-4xl text-text1 text-lg leading-relaxed space-y-6">
        <p>
          Lexology delivers the most comprehensive source of international legal updates, analysis and insights. We publish in excess of 500 articles every day from over 900 leading law firms and service providers worldwide across 50 work areas in 25 languages.
        </p>
        <p>
          Our searchable archive now contains more than 1,000,000 articles. Our platform provides you with a comprehensive global resource to find relevant, timely and actionable legal intelligence.
        </p>
        <p>
          We are dedicated to providing the premier global legal intelligence platform for professionals seeking to stay ahead in a rapidly changing regulatory landscape.
        </p>
      </div>
    </div>
  );
}
