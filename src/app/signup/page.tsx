"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, fullName, email, password, age: age ? parseInt(age) : undefined }),
      });

      if (res.ok) {
        router.push("/login");
      } else {
        const data = await res.json();
        setError(data.message || "Something went wrong");
      }
    } catch (err: any) {
      setError("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-20 bg-mesh px-4 flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <div className="glass-card p-10 rounded-3xl shadow-2xl">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary-900 to-accent-teal bg-clip-text text-transparent mb-3">
              Join LegalIntel
            </h1>
            <p className="text-text-muted">Start your journey with elite legal intelligence</p>
          </div>

          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8 rounded flex items-center gap-3 animate-shake">
              <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span className="text-red-700 text-sm font-medium">{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-1">
              <label className="block text-sm font-semibold text-primary-900 mb-2 ml-1">Username</label>
              <input 
                type="text" 
                required
                placeholder="johndoe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input-field"
              />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-semibold text-primary-900 mb-2 ml-1">Full Name</label>
              <input 
                type="text" 
                required
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="input-field"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-primary-900 mb-2 ml-1">Email Address</label>
              <input 
                type="email" 
                required
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
              />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-semibold text-primary-900 mb-2 ml-1">Age</label>
              <input 
                type="number" 
                placeholder="25"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="input-field"
              />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-semibold text-primary-900 mb-2 ml-1">Password</label>
              <input 
                type="password" 
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
              />
            </div>
            
            <div className="md:col-span-2 mt-4">
              <button 
                type="submit" 
                disabled={isLoading}
                className={`w-full premium-button py-4 text-lg bg-gradient-to-r from-accent-teal to-[#007a82] ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isLoading ? "Creating Account..." : "Register Now"}
              </button>
            </div>
          </form>

          <div className="mt-10 pt-8 border-t border-surface-border text-center">
            <p className="text-text-muted text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-accent-teal font-bold hover:text-primary-700 transition-colors">
                Log in instead
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

