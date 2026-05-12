import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
};

export default function TermsPage() {
  return (
    <div className="container py-16 bg-secondarycolor1">
      <h1 className="text-4xl text-primarycolor1 mb-6 font-bold">Terms of Use</h1>
      <div className="max-w-4xl text-text1 leading-relaxed">
        <p className="mb-4 font-semibold">Last updated: April 2026</p>
        <p className="mb-6">
          Welcome to Lexology. These terms and conditions outline the rules and regulations for the use of our Website.
        </p>
        <h3 className="text-xl text-primarycolor2 mt-8 mb-4 font-semibold">1. Acceptance of Terms</h3>
        <p className="mb-6">
          By accessing this website we assume you accept these terms and conditions. Do not continue to use Lexology if you do not agree to take all of the terms and conditions stated on this page.
        </p>
        <h3 className="text-xl text-primarycolor2 mt-8 mb-4 font-semibold">2. Content and Copyright</h3>
        <p className="mb-6">
          Unless otherwise stated, Lexology and/or its licensors own the intellectual property rights for all material on Lexology. All intellectual property rights are reserved.
        </p>
      </div>
    </div>
  );
}
