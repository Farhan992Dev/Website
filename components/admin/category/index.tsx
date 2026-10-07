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
import { PenIcon, Trash } from "lucide-react";
import { title } from "process";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

type category = {
  id: number;
  title: string;
};
type CategoryFormValues = {
  title: string;
};

const CategoryComponent = () => {
  const [listData, setListData] = useState();
  const [byIdData, setByIdData] = useState();
  const [rowId, setRowId] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const storedToken = localStorage.getItem("admin_token");

  const featchCategory = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACK_API}/category/getAll`,
    );
    if (res.ok) {
      setListData(await res.json());
    }
  };
  const featchCategoryById = async (id: number) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACK_API}/category/get-by-id/${id}`,
      {
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      },
    );
    if (res.ok) {
      setByIdData(await res.json());
    }
  };

  const deleteCategory = async (id: number) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACK_API}/category/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      },
    );
    if (res.status == 200) {
      featchCategory();
    }
  };

  const handleCloseModalEdit = () => {
    setOpenModalEdit(false);
    setByIdData();
    formEdit.reset({
      title: "",
    });
  };
  const handleCloseModal = () => {
    setOpenModal(false);
    form.reset({
      title: "",
    });
  };

  const form = useForm<CategoryFormValues>({
    defaultValues: {
      title: "",
    },
  });

  const formEdit = useForm<CategoryFormValues>({
    defaultValues: {
      title: byIdData?.Category?.title,
    },
  });

  async function onSubmit(values: CategoryFormValues) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACK_API}/category/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${storedToken}`,
        },
        body: JSON.stringify(values),
      },
    );

    if (response.status == 200) {
      handleCloseModal();
      featchCategory();
      form.reset({
        title: "",
      });
    }
  }

  async function onSubmitEdit(values: CategoryFormValues) {
    const data = {
      title: values.title,
      id: rowId,
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACK_API}/category/edit`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${storedToken}`,
        },
        body: JSON.stringify(data),
      },
    );

    if (response.status == 200) {
      handleCloseModalEdit();
      featchCategory();
      formEdit.reset({
        title: "",
      });
    }
  }

  useEffect(() => {
    if (byIdData) {
      setOpenModalEdit(true);
      formEdit.reset({
        title: byIdData?.Category?.title,
      });
    }
  }, [byIdData]);

  useEffect(() => {
    featchCategory();
  }, []);

  const category: category[] =
    listData?.category.map((item: category) => ({
      title: item.title,
      id: item.id,
    })) ?? [];

  const columns = [
    {
      key: "title",
      title: "عنوان",
    },
    {
      key: "id",
      title: "عملیات",
      render: (_: any, row: { id: number }) => (
        <div className="flex gap-2">
          <PenIcon
            className="cursor-pointer text-yellow-500"
            onClick={() => {
              featchCategoryById(row.id);
              setRowId(row.id);
            }}
          />
          <Trash
            className="cursor-pointer text-red-500"
            onClick={() => {
              deleteCategory(row.id);
            }}
          />
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="font-bold my-4">لیست دسته بندی ها</div>
      <Button className="my-3" onClick={() => setOpenModal(true)}>
        افزودن
      </Button>
      <DataTable data={category} columns={columns} />
      <Modal
        open={openModal}
        onOpenChange={handleCloseModal}
        title="افزودن دسته بندی"
      >
        <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
          <div>
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
      {byIdData?.Category && (
        <Modal
          open={openModalEdit}
          onOpenChange={handleCloseModalEdit}
          title="ویرایش دسته بندی"
        >
          <form
            key={rowId}
            className="space-y-5"
            onSubmit={formEdit.handleSubmit(onSubmitEdit)}
          >
            <div>
              <FormField
                control={formEdit.control}
                name="title"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel className="text-neutral-300 font-medium">
                      عنوان
                    </FormLabel>
                    <FormControl defaultValue={byIdData?.Category?.title}>
                      <Input
                        type="text"
                        {...field}
                        defaultValue={byIdData?.Category?.title}
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

export default CategoryComponent;
