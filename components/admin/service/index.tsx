"use client";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Modal from "@/components/ui/modal";
import DataTable from "@/components/ui/table";
import TagListInput from "@/components/ui/tagList";
import { PenIcon, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

type Service = {
  id: number;
  title: string;
  Category: {
    title: string;
  };
  link: string;
  description: string;
  image: string;
};

type ServiceFormValues = {
  title: string;
  category: string;
  link: string;
  tags: string;
  type: string;
  description: string;
  image: string;
};
const ServiceComponent = () => {
  const [listData, setListData] = useState();
  const [listDataCategory, setListDataCategory] = useState();
  const [byIdData, setByIdData] = useState();
  const [rowId, setRowId] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [pros, setPros] = useState<string[]>([]);

  const storedToken = localStorage.getItem("admin_token");

  const fetchService = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACK_API}/service/getAllService`,
    );
    if (res.ok) {
      setListData(await res.json());
    }
  };
  const featchCategory = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACK_API}/category/getAll`,
    );
    if (res.ok) {
      setListDataCategory(await res.json());
    }
  };

  const featchServiceById = async (id: number) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACK_API}/service/get-by-id/${id}`,
      {
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      },
    );
    if (res) {
      setByIdData(await res.json());
    }
  };

  const deleteSerivce = async (id: number) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACK_API}/service/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      },
    );
    if (res.status == 200) {
      fetchService();
    }
  };

  const form = useForm<ServiceFormValues>({});

  const formEdit = useForm<ServiceFormValues>({
    defaultValues: {
      title: byIdData?.service?.title,
      category: byIdData?.service?.categoryId,
      description: byIdData?.service?.description,
      link: byIdData?.service?.link,
      tags: byIdData?.service?.tags,
      type: byIdData?.service?.type,
    },
  });

  async function onSubmit(values: ServiceFormValues) {
    const formData = new FormData();

    formData.append("title", values.title);
    formData.append("categoryId", values.category);
    formData.append("type", values.type);
    formData.append("link", values.link);
    formData.append("description", values.description);
    formData.append("tags", JSON.stringify(pros));

    if (image) {
      formData.append("image", image);
    }
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACK_API}/service/create`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
        body: formData,
      },
    );

    if (response.status == 200) {
      handleCloseModal();
      fetchService();
      form.reset({
        title: "",
      });
    }
  }

  async function onSubmitEdit(values: ServiceFormValues) {
    const formData = new FormData();

    formData.append("title", values.title);
    formData.append("categoryId", values.category);
    formData.append("type", values.type);
    formData.append("link", values.link);
    formData.append("description", values.description);
    formData.append("tags", JSON.stringify(pros));
    formData.append("id", rowId);

    if (image) {
      formData.append("image", image);
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACK_API}/service/edit`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
        body: formData,
      },
    );

    if (response.status == 200) {
      handleCloseModalEdit();
      fetchService();
      formEdit.reset({
        title: "",
        description: "",
        link: "",
        type: "",
        tags: "",
        category: "",
      });
    }
  }

  const services: Service[] =
    listData?.data.map((item: Service) => ({
      title: item.title,
      category: item.Category.title,
      link: item.link,
      description: item.description,
      id: item.id,
    })) ?? [];

  const columns = [
    {
      key: "title",
      title: "عنوان",
    },
    {
      key: "category",
      title: "دسته بندی  ",
    },
    {
      key: "link",
      title: "لینک",
    },
    {
      key: "description",
      title: "توضیحات",
    },
    {
      key: "id",
      title: "عملیات",
      render: (_: any, row: { id: number }) => (
        <div className="flex gap-2">
          <PenIcon
            className="cursor-pointer text-yellow-500"
            onClick={() => {
              featchServiceById(row.id);
              setRowId(row.id);
              featchCategory();
            }}
          />
          <Trash
            className="cursor-pointer text-red-500"
            onClick={() => {
              deleteSerivce(row.id);
            }}
          />
        </div>
      ),
    },
  ];

  useEffect(() => {
    if (byIdData) {
      setOpenModalEdit(true);
      if (byIdData?.service) {
        formEdit.reset({
          title: byIdData?.service?.title,
          category: byIdData?.service?.categoryId,
          description: byIdData?.service?.description,
          link: byIdData?.service?.link,
          tags: byIdData?.service?.tags,
          type: byIdData?.service?.type,
        });
      }
      setPros(byIdData?.service?.tags);
    }
  }, [byIdData, rowId]);

  const handleCloseModal = () => {
    setOpenModal(false);
    form.reset({
      title: "",
      description: "",
      link: "",
      type: "",
      tags: "",
      category: "",
    });
    setPros();
  };

  const handleCloseModalEdit = () => {
    setOpenModalEdit(false);
    setByIdData();
    setRowId();
    formEdit.reset({
      title: "",
      description: "",
      link: "",
      type: "",
      tags: "",
      category: "",
    });
    setPros();
  };

  useEffect(() => {
    fetchService();
  }, []);

  return (
    <>
      <div className="font-bold my-4">لیست پروژه ها</div>{" "}
      <Button
        className="my-3"
        onClick={() => {
          setOpenModal(true);
          featchCategory();
        }}
      >
        افزودن
      </Button>
      <DataTable data={services} columns={columns} />{" "}
      <Modal
        open={openModal}
        onOpenChange={handleCloseModal}
        title="افزودن پروژه"
      >
        <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
          <div>
            <FormField
              control={form.control}
              name="category"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel className="text-neutral-300 font-medium">
                    دسته بندی
                  </FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      className="flex h-12 w-full rounded-2xl border border-white/10 bg-white/[0.02] text-white px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20 focus-visible:border-white/20 appearance-none"
                    >
                      <option value="" className="bg-main text-white">
                        انتخاب کنید
                      </option>
                      {listDataCategory?.category?.map((option) => (
                        <option
                          key={option.id}
                          value={option.id}
                          onChange={(e) => {
                            field.onChange(e.target.files?.[0] ?? null);
                          }}
                          className="bg-main text-white"
                        >
                          {option.title}
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
            <FormField
              control={form.control}
              name="title"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel className="text-neutral-300 font-medium">
                    عنوان
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="title"
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
              name="type"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel className="text-neutral-300 font-medium">
                    نوع
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="type"
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
              name="link"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel className="text-neutral-300 font-medium">
                    آدرس
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="link"
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
            <TagListInput
              label="تگ"
              color="success"
              values={pros}
              onChange={setPros}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel className="text-neutral-300 font-medium">
                    توضیحات
                  </FormLabel>
                  <FormControl>
                    <textarea
                      {...field}
                      rows={10}
                      className="bg-white/[0.02] w-full border-white/10 text-white rounded-2xl h-12 px-4 focus-visible:ring-1 focus-visible:ring-white/20 focus-visible:border-white/20"
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
              control={formEdit.control}
              name="image"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel className="text-neutral-300 font-medium">
                    تصویر
                  </FormLabel>

                  <FormControl>
                    <input
                      type="file"
                      accept="image/png,image/jpeg,image/jpg"
                      onChange={(e) => {
                        const file = e.target.files?.[0] ?? null;
                        setImage(file);
                      }}
                      className="flex h-12 w-full cursor-pointer rounded-2xl   border-white/10 bg-white/[0.02] px-4 text-sm text-white file:mr-4 file:rounded-lg file:border-0 file:bg-white file:px-4 file:py-2 file:text-sm file:font-medium file:text-black hover:file:bg-neutral-200"
                    />
                  </FormControl>

                  {fieldState.error && (
                    <p className="text-sm font-medium text-red-600">
                      {fieldState.error.message}
                    </p>
                  )}
                </FormItem>
              )}
            />
            <Button
              type="submit"
              size="lg"
              className="w-full mt-5 rounded-lg bg-white text-black hover:bg-neutral-200 font-bold h-12"
            >
              ثبت
            </Button>
          </div>
        </form>
      </Modal>
      {byIdData?.service && (
        <Modal
          open={openModalEdit}
          onOpenChange={handleCloseModalEdit}
          title="ویرایش پروژه  "
        >
          <form
            className="space-y-5"
            onSubmit={formEdit.handleSubmit(onSubmitEdit)}
          >
            <div>
              <FormField
                control={formEdit.control}
                name="category"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel className="text-neutral-300 font-medium">
                      دسته بندی
                    </FormLabel>

                    <FormControl>
                      <select
                        {...field}
                        defaultValue={String(byIdData.service.categoryId)}
                        className="flex h-12 w-full rounded-2xl border border-white/10 bg-white/[0.02] text-white px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20 focus-visible:border-white/20 appearance-none"
                      >
                        <option value="" className="bg-main text-white">
                          انتخاب کنید
                        </option>

                        {listDataCategory?.category?.map((option) => (
                          <option
                            key={option.id}
                            value={String(option.id)}
                            className="bg-main text-white"
                          >
                            {option.title}
                          </option>
                        ))}
                      </select>
                    </FormControl>

                    {fieldState.error && (
                      <p className="text-sm font-medium text-red-600">
                        {fieldState.error.message}
                      </p>
                    )}
                  </FormItem>
                )}
              />
              <FormField
                control={formEdit.control}
                name="title"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel className="text-neutral-300 font-medium">
                      عنوان
                    </FormLabel>
                    <FormControl defaultValue={byIdData?.service?.title}>
                      <Input
                        type="title"
                        {...field}
                        defaultValue={byIdData?.service?.title}
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
                control={formEdit.control}
                name="type"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel className="text-neutral-300 font-medium">
                      نوع
                    </FormLabel>
                    <FormControl defaultValue={byIdData?.service?.type}>
                      <Input
                        type="type"
                        {...field}
                        defaultValue={byIdData?.service?.type}
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
                control={formEdit.control}
                name="link"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel className="text-neutral-300 font-medium">
                      آدرس
                    </FormLabel>
                    <FormControl defaultValue={byIdData?.service?.link}>
                      <Input
                        type="link"
                        {...field}
                        defaultValue={byIdData?.service?.link}
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
              <TagListInput
                label="تگ"
                color="success"
                values={pros}
                onChange={setPros}
              />
              <FormField
                control={formEdit.control}
                name="description"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel className="text-neutral-300 font-medium">
                      توضیحات
                    </FormLabel>
                    <FormControl defaultValue={byIdData?.service?.description}>
                      <textarea
                        {...field}
                        rows={10}
                        defaultValue={byIdData?.service?.description}
                        className="bg-white/[0.02] w-full border-white/10 text-white rounded-2xl h-12 px-4 focus-visible:ring-1 focus-visible:ring-white/20 focus-visible:border-white/20"
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
                control={formEdit.control}
                name="image"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel className="text-neutral-300 font-medium">
                      تصویر
                    </FormLabel>

                    <FormControl>
                      <input
                        type="file"
                        accept="image/png,image/jpeg,image/jpg"
                        onChange={(e) => {
                          field.onChange(e.target.files?.[0] ?? null);
                        }}
                        className="flex h-12 w-full cursor-pointer rounded-2xl   border-white/10 bg-white/[0.02] px-4   text-sm text-white file:mr-4 file:rounded-lg file:border-0 file:bg-white file:px-4 file:py-2 file:text-sm file:font-medium file:text-black hover:file:bg-neutral-200"
                      />
                    </FormControl>

                    {fieldState.error && (
                      <p className="text-sm font-medium text-red-600">
                        {fieldState.error.message}
                      </p>
                    )}
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                size="lg"
                className="w-full mt-5 rounded-lg bg-white text-black hover:bg-neutral-200 font-bold h-12"
              >
                ثبت
              </Button>
            </div>
          </form>
        </Modal>
      )}
    </>
  );
};

export default ServiceComponent;
