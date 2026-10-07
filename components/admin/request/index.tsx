"use client";
import DataTable from "@/components/ui/table";
import { useEffect, useState } from "react";

type Request = {
  id: number;
  nameFamily: string;
  email: string;
  phoneNumber: string;
  description: string;
  service: string;
};

const RequestComponent = () => {
  const [listData, setListData] = useState();
  const storedToken = localStorage.getItem("admin_token");

  const fetchSettings = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACK_API}/contactUs/getAllContactUs`,
      {
        headers: { Authorization: `Bearer ${storedToken}` },
      },
    );
    if (res.ok) {
      setListData(await res.json());
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  const request: Request[] =
    listData?.data.map((item: Request) => ({
      nameFamily: item.nameFamily,
      email: item.email,
      phoneNumber: item.phoneNumber,
      description: item.description,
      service: item.service,
      id: "",
    })) ?? [];

  const columns = [
    {
      key: "nameFamily",
      title: "درخواست کننده",
    },
    {
      key: "email",
      title: "ایمیل    ",
    },
    {
      key: "phoneNumber",
      title: "شماره تماس",
    },
    {
      key: "description",
      title: "توضیحات",
    },
    {
      key: "service",
      title: "سرویس",
    },
  ];
  return (
    <>
      <div className="font-bold my-4">لیست درخواست ها</div>
      <DataTable data={request} columns={columns} />
    </>
  );
};

export default RequestComponent;
