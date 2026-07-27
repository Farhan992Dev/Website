'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('http://localhost:8081/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      if (res.ok) {
        const data = await res.json();
        localStorage.setItem('admin_token', data.token);
        router.push('/fa/admin');
      } else {
        setError('نام کاربری یا رمز عبور اشتباه است');
      }
    } catch (err) {
      setError('خطا در ارتباط با سرور بک‌اند (آیا سرور Go در حال اجراست؟)');
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 text-white">
      <div className="w-full max-w-md bg-white/[0.02] border border-white/10 rounded-[2rem] p-10">
        <h1 className="text-3xl font-bold text-center mb-8">ورود به پنل مدیریت</h1>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-neutral-400 mb-2">نام کاربری</label>
            <input 
              type="text" 
              className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-400 mb-2">رمز عبور</label>
            <input 
              type="password" 
              className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm font-medium text-center">{error}</p>}
          <Button type="submit" className="w-full h-12 rounded-xl bg-white text-black font-bold hover:bg-neutral-200">
            ورود
          </Button>
        </form>
      </div>
    </div>
  );
}
