"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  createContactInquirySchema,
  type ContactLocale,
} from "@/lib/validation/contact";

type ContactFormValues = {
  fullName: string;
  email: string;
  phone?: string;
  serviceInterest?: string;
  message: string;
  locale: ContactLocale;
};

const serviceOptions = {
  fa: ["طراحی وب‌سایت", "فروشگاه آنلاین", "وردپرس", "پروژه اختصاصی"],
} as const;

export function ContactForm({
  locale,
  labels,
}: {
  locale: ContactLocale;
  labels: {
    fullName: string;
    email: string;
    phone: string;
    serviceInterest: string;
    message: string;
    submit: string;
    success: string;
    error: string;
  };
}) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const schema = createContactInquirySchema(locale);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      serviceInterest: "",
      message: "",
      locale,
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus("idle");
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    setStatus(response.ok ? "success" : "error");
    if (response.ok) {
      form.reset({
        fullName: "",
        email: "",
        phone: "",
        serviceInterest: "",
        message: "",
        locale,
      });
    }
  }

  return (
    <Form {...form}>
      <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel className="text-neutral-300 font-medium">
                  {labels.fullName}
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="bg-white/[0.02] border-white/10 text-white rounded-2xl h-12 px-4 focus-visible:ring-1 focus-visible:ring-white/20 focus-visible:border-white/20"
                  />
                </FormControl>
                {fieldState.error ? (
                  <p className="text-sm font-medium text-red-600">
                    {fieldState.error.message}
                  </p>
                ) : null}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel className="text-neutral-300 font-medium">
                  {labels.email}
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    {...field}
                    className="bg-white/[0.02] border-white/10 text-white rounded-2xl h-12 px-4 focus-visible:ring-1 focus-visible:ring-white/20 focus-visible:border-white/20"
                  />
                </FormControl>
                {fieldState.error ? (
                  <p className="text-sm font-medium text-red-600">
                    {fieldState.error.message}
                  </p>
                ) : null}
              </FormItem>
            )}
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-neutral-300 font-medium">
                  {labels.phone}
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="bg-white/[0.02] border-white/10 text-white rounded-2xl h-12 px-4 focus-visible:ring-1 focus-visible:ring-white/20 focus-visible:border-white/20"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="serviceInterest"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel className="text-neutral-300 font-medium">
                  {labels.serviceInterest}
                </FormLabel>
                <FormControl>
                  <select
                    {...field}
                    className="flex h-12 w-full rounded-2xl border border-white/10 bg-white/[0.02] text-white px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20 focus-visible:border-white/20 appearance-none"
                  >
                    <option value="" className="bg-main text-white">
                      انتخاب کنید
                    </option>
                    {serviceOptions[locale].map((option) => (
                      <option
                        key={option}
                        value={option}
                        className="bg-main text-white"
                      >
                        {option}
                      </option>
                    ))}
                  </select>
                </FormControl>
                {fieldState.error ? (
                  <p className="text-sm font-medium text-red-600">
                    {fieldState.error.message}
                  </p>
                ) : null}
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel className="text-neutral-300 font-medium">
                {labels.message}
              </FormLabel>
              <FormControl>
                <textarea
                  {...field}
                  rows={6}
                  className="flex w-full rounded-3xl border border-white/10 bg-white/[0.02] text-white px-5 py-4 text-sm placeholder:text-neutral-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20 focus-visible:border-white/20"
                />
              </FormControl>
              {fieldState.error ? (
                <p className="text-sm font-medium text-red-600">
                  {fieldState.error.message}
                </p>
              ) : null}
            </FormItem>
          )}
        />
        <Button
          type="submit"
          size="lg"
          className="w-full rounded-full bg-white text-black hover:bg-neutral-200 font-bold h-12"
        >
          {labels.submit}
        </Button>
        {status === "success" ? (
          <p className="text-sm font-medium text-emerald-600">
            {labels.success}
          </p>
        ) : null}
        {status === "error" ? (
          <p className="text-sm font-medium text-red-600">{labels.error}</p>
        ) : null}
      </form>
    </Form>
  );
}
