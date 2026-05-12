"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (status === "unauthenticated" || (session?.user as any)?.role !== "admin") {
      router.replace("/");
    } else if (status === "authenticated") {
      fetchUsers();
    }
  }, [status, session, router]);

  const fetchUsers = async () => {
    try {
      const res = await fetch("/api/admin/users");
      if (res.ok) {
        const data = await res.json();
        setUsers(data);
      } else {
        setError("Failed to fetch users");
      }
    } catch (err) {
      setError("An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const deleteUser = async (id: string) => {
    if (!confirm("Are you sure you want to delete this user?")) return;

    try {
      const res = await fetch("/api/admin/users", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (res.ok) {
        setUsers(users.filter((user: any) => user._id !== id));
      }
    } catch (err) {
      alert("Failed to delete user");
    }
  };

  if (isLoading) return <div className="p-20 text-center">Loading Admin Panel...</div>;

  return (
    <div className="min-h-screen bg-surface-dim pb-20">
      <div className="container pt-12">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl font-bold text-primary-900 mb-2">Admin Control Center</h1>
            <p className="text-text-muted">Manage system users and global intelligence access</p>
          </div>
        </div>

        {error && <div className="bg-red-50 text-red-700 p-4 rounded-xl mb-8 border border-red-100">{error}</div>}

        <div className="glass-card rounded-3xl overflow-hidden shadow-xl border-surface-border">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-primary-900 text-white">
                  <th className="p-5 font-semibold">User Details</th>
                  <th className="p-5 font-semibold">Role</th>
                  <th className="p-5 font-semibold">Joined Date</th>
                  <th className="p-5 font-semibold">Age</th>
                  <th className="p-5 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user: any) => (
                  <tr key={user._id} className="border-b border-surface-border hover:bg-surface-dim/50 transition-colors">
                    <td className="p-5">
                      <div className="flex flex-col">
                        <span className="font-bold text-primary-900">{user.fullName}</span>
                        <span className="text-sm text-text-muted">@{user.name} | {user.email}</span>
                      </div>
                    </td>
                    <td className="p-5">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                        user.role === 'admin' ? 'bg-accent-gold/20 text-accent-gold' : 'bg-accent-blue/10 text-accent-blue'
                      }`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="p-5 text-text-muted">
                      {new Date(user.createdAt).toLocaleDateString()}
                    </td>
                    <td className="p-5 text-text-muted">
                      {user.age || 'N/A'}
                    </td>
                    <td className="p-5 text-right">
                      {user.role !== 'admin' && (
                        <button 
                          onClick={() => deleteUser(user._id)}
                          className="text-red-500 hover:text-red-700 font-bold text-sm transition-colors"
                        >
                          Delete
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
