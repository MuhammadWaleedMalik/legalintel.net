import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PolicyPage() {
  return (
    <div className="container py-16 bg-secondarycolor1">
      <h1 className="text-4xl text-primarycolor1 mb-6 font-bold">Privacy Policy</h1>
      <div className="max-w-4xl text-text1 leading-relaxed">
        <p className="mb-6">
          Your privacy is important to us. It is Lexology's policy to respect your privacy regarding any information we may collect from you across our website.
        </p>
        <h3 className="text-xl text-primarycolor2 mt-8 mb-4 font-semibold">Information we collect</h3>
        <p className="mb-6">
          We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
        </p>
        <h3 className="text-xl text-primarycolor2 mt-8 mb-4 font-semibold">How we use information</h3>
        <p className="mb-6">
          We use the information we collect in various ways, including to:
          <ul className="list-disc ml-8 mt-4 space-y-2">
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
          </ul>
        </p>
      </div>
    </div>
  );
}
