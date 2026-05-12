"use client";

import { useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ServicesPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const isLoading = status === "loading";
  const user = session?.user;

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
    }
  }, [status, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="w-12 h-12 bg-accent-blue rounded-full"></div>
          <div className="h-4 w-32 bg-surface-border rounded"></div>
        </div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-mesh pb-20">
      <div className="container pt-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-bold text-primary-900 mb-2">Premium Intelligence Dashboard</h1>
            <p className="text-text-muted">Welcome back, <span className="text-accent-blue font-semibold">{user.name}</span></p>
          </div>
          <button 
            onClick={() => signOut()} 
            className="premium-button bg-gradient-to-r from-red-600 to-red-700 shadow-red-200"
          >
            Logout
          </button>
        </div>
        
        {/* Main Stats / Welcome Card */}
        <div className="glass-card p-10 rounded-3xl mb-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <svg className="w-32 h-32 text-accent-blue" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L1 21h22L12 2zm0 3.45l8.15 14.1H3.85L12 5.45zM11 11v4h2v-4h-2zm0 6v2h2v-2h-2z" />
            </svg>
          </div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-primary-900 mb-4">Elite Access Activated</h2>
            <p className="text-text-muted max-w-2xl text-lg leading-relaxed">
              You are currently using the Lexology PRO intelligence suite. Your subscription includes real-time regulatory tracking, 
              cross-border comparisons, and full access to our expert-led masterclasses.
            </p>
            <div className="mt-8 flex gap-4">
              <span className="bg-accent-teal/10 text-accent-teal px-4 py-2 rounded-full text-sm font-bold border border-accent-teal/20">
                PRO Member
              </span>
              <span className="bg-accent-blue/10 text-accent-blue px-4 py-2 rounded-full text-sm font-bold border border-accent-blue/20">
                Unlimited Research
              </span>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "Advanced Analytics", 
              desc: "Deep insights and tailored intelligence reports powered by Lexy AI.",
              icon: "📊",
              color: "bg-blue-500"
            },
            { 
              title: "Compliance Tools", 
              desc: "Access full regulatory data APIs and our horizon scanning tracker.",
              icon: "🛡️",
              color: "bg-teal-500"
            },
            { 
              title: "Contract Library", 
              desc: "Download premium contracts and clause templates verified by top firms.",
              icon: "📄",
              color: "bg-purple-500"
            }
          ].map((item, i) => (
            <div key={i} className="glass-card p-8 rounded-2xl hover:scale-[1.02] transition-all duration-300 group cursor-pointer border-transparent hover:border-accent-blue/30">
              <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg shadow-black/5`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3 group-hover:text-accent-blue transition-colors">
                {item.title}
              </h3>
              <p className="text-text-muted leading-relaxed">
                {item.desc}
              </p>
              <div className="mt-6 flex items-center text-sm font-bold text-accent-blue opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                Access Tool <span className="ml-2">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

