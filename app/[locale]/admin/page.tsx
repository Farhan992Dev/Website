"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Tabs from "@/components/ui/tab";
import ServiceComponent from "@/components/admin/service";
import RequestComponent from "@/components/admin/request";
import CategoryComponent from "@/components/admin/category";

export default function AdminDashboard() {
  const [token, setToken] = useState<string | null>(null);
  const [option, setOption] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem("admin_token");
    if (!storedToken) {
      router.push("/fa/admin/login");
    } else {
      setToken(storedToken);
      // fetchSettings();
    }
  }, [router]);

  // const fetchSettings = async () => {
  //   const res = await fetch("http://localhost:8081/api/settings");
  //   if (res.ok) {
  //     setSettings(await res.json());
  //   }
  // };

  // const toggleSetting = async (sectionName: string, isVisible: boolean) => {
  //   await fetch("http://localhost:8081/api/settings", {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //     body: JSON.stringify({ sectionName, isVisible }),
  //   });
  //   fetchSettings();
  // };

  const logout = () => {
    localStorage.removeItem("admin_token");
    router.push("/fa/admin/login");
  };

  if (!token)
    return (
      <div className="min-h-screen bg-main text-white p-10">
        درحال بارگزاری...
      </div>
    );

  const subMenu = [
    {
      id: 1,
      name: "دسته بندی",
      role: "category",
    },
    {
      id: 2,
      name: "پروژه ها",
      role: "services",
    },
    {
      id: 3,
      name: "درخواست ها  ",
      role: "request",
    },
  ];

  const tabs = [
    {
      value: "category",
      label: "دسته بندی",
      content: <CategoryComponent />,
    },
    {
      value: "service",
      label: "پروژه ها",
      content: <ServiceComponent />,
    },
    {
      value: "request",
      label: "درخواست ها",
      content: <RequestComponent />,
    },
  ];
  return (
    <div className="min-h-screen bg-main text-white p-10">
      <div className=" mx-auto border border-white/10 rounded-3xl p-10 bg-white/[0.02]">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold">مدیریت سایت</h1>
          <Button
            onClick={logout}
            variant="outline"
            className="text-black bg-white"
          >
            خروج
          </Button>
        </div>

        <div className="flex gap-5">
          <Tabs tabs={tabs} />
        </div>
      </div>
    </div>
  );
}
