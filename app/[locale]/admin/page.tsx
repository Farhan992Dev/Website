'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function AdminDashboard() {
  const [token, setToken] = useState<string | null>(null);
  const [settings, setSettings] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem('admin_token');
    if (!storedToken) {
      router.push('/fa/admin/login');
    } else {
      setToken(storedToken);
      fetchSettings();
    }
  }, [router]);

  const fetchSettings = async () => {
    const res = await fetch('http://localhost:8081/api/settings');
    if (res.ok) {
      setSettings(await res.json());
    }
  };

  const toggleSetting = async (sectionName: string, isVisible: boolean) => {
    await fetch('http://localhost:8081/api/settings', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ sectionName, isVisible })
    });
    fetchSettings();
  };

  const logout = () => {
    localStorage.removeItem('admin_token');
    router.push('/fa/admin/login');
  };

  if (!token) return <div className="min-h-screen bg-black text-white p-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <div className="max-w-4xl mx-auto border border-white/10 rounded-3xl p-10 bg-white/[0.02]">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold">مدیریت سایت</h1>
          <Button onClick={logout} variant="outline" className="text-black bg-white">خروج</Button>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4 border-b border-white/10 pb-2">تنظیمات بخش‌های سایت</h2>
            <div className="grid gap-4">
              {settings.map((setting) => (
                <div key={setting.ID} className="flex justify-between items-center p-4 border border-white/5 bg-white/5 rounded-xl">
                  <span className="font-medium text-neutral-300">{setting.SectionName}</span>
                  <button 
                    onClick={() => toggleSetting(setting.SectionName, !setting.IsVisible)}
                    className={`px-4 py-1 rounded-full text-sm font-bold ${setting.IsVisible ? 'bg-emerald-500 text-black' : 'bg-neutral-600 text-white'}`}
                  >
                    {setting.IsVisible ? 'روشن' : 'خاموش'}
                  </button>
                </div>
              ))}
              {settings.length === 0 && <p className="text-neutral-500">هیچ تنظیمی یافت نشد (باید در دیتابیس ایجاد شوند)</p>}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 border-b border-white/10 pb-2">مدیریت پروژه‌ها (نمونه‌کارها)</h2>
            <p className="text-neutral-400">در حال توسعه...</p>
          </section>
        </div>
      </div>
    </div>
  );
}
