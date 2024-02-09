import { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import * as Yup from "yup";
import axios from "axios";
import TextInput from "../components/Reusabel/TextInput";
import { yupResolver } from "@hookform/resolvers/yup";
import router from "next/router";

type FormData = {
  name: string;
  description: string;
  price: number;
  currencyCode: string;
  currencySymbol: string;
  quantity: number;
  imageLocation: string;
  status: string;
};

const AddProduct = () => {
  const [message, setMessage] = useState("");

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    description: Yup.string().required("Description is required"),
    price: Yup.number()
      .required("Price is required")
      .positive("Price must be positive"),
    currencyCode: Yup.string().required("Currency code is required"),
    currencySymbol: Yup.string().required("Currency symbol is required"),
    quantity: Yup.number()
      .required("Quantity is required")
      .integer("Quantity must be an integer")
      .positive("Quantity must be positive"),
    imageLocation: Yup.string()
      .required("Image URL is required")
      .url("Invalid URL"),
    status: Yup.string().required("Status is required"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    try {
      const response = await axios.post(
        `${baseUrl}/productBundles`,
        formData
      );
      setMessage(`Product added successfully with ID: ${response.data.id}`);
      reset();
    } catch (error) {
      console.log(error);
      setMessage("Failed to add product. Please try again.");
    }
  };

  return (
    <div className="p-12">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name" id="nameLabel">
            Name:
          </label>
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <TextInput
                id="name"
                type="text"
                placeholder="Enter name"
                value={value}
                onChange={onChange}
                error={errors?.name?.message}
              />
            )}
          />
        </div>
        <div>
          <label htmlFor="description" id="descriptionLabel">
            Description:
          </label>
          <Controller
            control={control}
            name="description"
            render={({ field: { onChange, value } }) => (
              <TextInput
                id="description"
                type="text"
                placeholder="Enter description"
                value={value}
                onChange={onChange}
                error={errors.description?.message}
              />
            )}
          />
        </div>
        <div className="flex items-center">
          <div className="mr-2">
            <label htmlFor="currencyCode" id="currencyCodeLabel">
              Currency Code:
            </label>
            <Controller
              control={control}
              name="currencyCode"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  id="currencyCode"
                  type="text"
                  placeholder="Enter currency code"
                  value={value}
                  onChange={onChange}
                  error={errors.currencyCode?.message}
                />
              )}
            />
          </div>
          <div className="mr-2">
            <label htmlFor="currencySymbol" id="currencySymbolLabel">
              Currency Symbol:
            </label>
            <Controller
              control={control}
              name="currencySymbol"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  id="currencySymbol"
                  type="text"
                  placeholder="Enter currency symbol"
                  value={value}
                  onChange={onChange}
                  error={errors.currencySymbol?.message}
                />
              )}
            />
          </div>
          <div className="flex-grow">
            <hr className="border-gray-300 w-full" />
          </div>
          <div className="ml-2">
            <label htmlFor="price" id="priceLabel">
              Price:
            </label>
            <Controller
              control={control}
              name="price"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  id="price"
                  type="number"
                  placeholder="Enter price"
                  value={value}
                  onChange={onChange}
                  error={errors.price?.message}
                />
              )}
            />
          </div>
        </div>

        <div>
          <label htmlFor="quantity" id="quantityLabel">
            Quantity:
          </label>
          <Controller
            control={control}
            name="quantity"
            render={({ field: { onChange, value } }) => (
              <TextInput
                id="quantity"
                type="number"
                placeholder="Enter quantity"
                value={value}
                onChange={onChange}
                error={errors.quantity?.message}
              />
            )}
          />
        </div>
        <div>
          <label htmlFor="imageLocation" id="imageLocationLabel">
            Image URL:
          </label>
          <Controller
            control={control}
            name="imageLocation"
            render={({ field: { onChange, value } }) => (
              <TextInput
                id="imageLocation"
                type="text"
                placeholder="Enter image URL"
                value={value}
                onChange={onChange}
                error={errors.imageLocation?.message}
              />
            )}
          />
        </div>
        <div>
          <label htmlFor="status" id="statusLabel">
            Status:
          </label>
          <Controller
            control={control}
            name="status"
            render={({ field: { onChange, value } }) => (
              <TextInput
                id="status"
                type="text"
                placeholder="Enter status"
                value={value}
                onChange={onChange}
                error={errors.status?.message}
              />
            )}
          />
        </div>
        <button
          type="submit"
          aria-label="Add Product"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Product
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddProduct;
