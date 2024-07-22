"use client";
import React from "react";
import { Form, FormField, FormItem, FormLabel, FormControl } from "./ui/form";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function generatePriceValues() {
  const prices = [];
  for (let i = 100000; i <= 500000; i += 100000) {
    prices.push({
      value: i.toString(),
      label: `฿${i.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
    });
  }
  return prices;
}

export default function Search() {
  const form = useForm();
  const { register, handleSubmit, watch } = form;
  const priceValues = generatePriceValues();

  const minPrice = watch("minPrice");
  const maxPrice = watch("maxPrice");

  return (
    <Form {...form}>
      <form
        className="p-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-center bg-background rounded-md"
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="Search By Address..." {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Categories</FormLabel>
              <Select
                {...register("category")}
                value={field.value}
                onValueChange={field.onChange}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="office">Office</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="minPrice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Min. Price</FormLabel>
              <Select
                {...register("minPrice")}
                value={minPrice || field.value}
                onValueChange={field.onChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Min. Price" />
                </SelectTrigger>
                <SelectContent>
                  {priceValues.map(({ value, label }) => (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="maxPrice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Max. Price</FormLabel>
              <Select
                {...register("maxPrice")}
                value={maxPrice || field.value}
                onValueChange={field.onChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Max. Price" />
                </SelectTrigger>
                <SelectContent>
                  {priceValues.map(({ value, label }) => (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <Button className="col-start-[1] col-end-[-1]">Submit</Button>
      </form>
    </Form>
  );
}
