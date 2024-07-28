"use client";

import { useState, useTransition } from "react";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CreateNewTaskSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import {
    CalendarIcon,
    Ghost,
    Loader,
    Pencil,
    Plus,
    Share2,
    Star,
    TriangleAlert,
} from "lucide-react";
import { format } from "date-fns";

const CreateNewTaskForm = () => {
    const form = useForm<z.infer<typeof CreateNewTaskSchema>>({
        resolver: zodResolver(CreateNewTaskSchema),
        defaultValues: {
            favorite: false,
            title: "",
            status: "",
            prioriry: "",
            deadline: "",
            description: "",
        },
    });

    const [isPending, startTransition] = useTransition();

    const onSubmit = (values: z.infer<typeof CreateNewTaskSchema>) => {
        startTransition(() => {
            // TODO: DB Logic
            // login(values).then((data) => {
            //     if (data?.error) {
            //         setError(data.error);
            //     } else {
            //         setSuccess(data?.success);
            //         // You can redirect or perform any other actions on success here
            //     }
            // });
        });
    };

    const [favBtn, setFavBtn] = useState(false);

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className=" space-y-6 p-5"
            >
                {/* Favorite */}
                <FormField
                    control={form.control}
                    name="favorite"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <div className=" space-x-5">
                                    <Button
                                        variant={"ghost"}
                                        className="text-gray-500 space-x-2 text-xl bg-gray-100"
                                    >
                                        <span>Share</span>
                                        <Share2 />
                                    </Button>
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        className="text-gray-500 space-x-2 text-xl bg-gray-100"
                                        onClick={() => {
                                            setFavBtn(!favBtn);
                                            form.setValue("favorite", favBtn);
                                        }}
                                    >
                                        <span>Favorite</span>
                                        <Star
                                            className={cn("text-gray-400", {
                                                "text-yellow-500 fill-yellow-500":
                                                    favBtn === true,
                                            })}
                                        />
                                    </Button>
                                </div>
                            </FormControl>
                        </FormItem>
                    )}
                />

                {/* Title */}
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    {...field}
                                    disabled={isPending}
                                    placeholder="Title"
                                    type="text"
                                    className="h-20 placeholder:text-5xl text-3xl placeholder:text-gray-300 font-semibold"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="flex flex-col gap-3">
                    {/* Status */}
                    <FormField
                        control={form.control}
                        name="status"
                        render={({ field }) => (
                            <FormItem>
                                <div className="flex">
                                    <FormLabel className="flex items-center space-x-5 w-44 text-gray-500 text-lg">
                                        <Loader />
                                        <span>Status</span>
                                    </FormLabel>

                                    <div className="flex-grow">
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger className=" text-gray-700  text-md">
                                                    <SelectValue
                                                        placeholder="Not Selected"
                                                        className=" w-full"
                                                    />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {[
                                                    { t: "To do", v: "todo" },
                                                    {
                                                        t: "In Progress",
                                                        v: "inProgress",
                                                    },
                                                    {
                                                        t: "Under Review",
                                                        v: "underReview",
                                                    },
                                                    {
                                                        t: "Finished",
                                                        v: "finished",
                                                    },
                                                ].map((d, i) => (
                                                    <SelectItem
                                                        value={d.v}
                                                        className="text-lg text-gray-500"
                                                    >
                                                        {d.t}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </div>
                                </div>
                            </FormItem>
                        )}
                    />

                    {/* Priority */}
                    <FormField
                        control={form.control}
                        name="prioriry"
                        render={({ field }) => (
                            <FormItem>
                                <div className="flex">
                                    <FormLabel className="flex items-center space-x-5 w-44 text-gray-500 text-lg">
                                        <TriangleAlert />
                                        <span>Priority</span>
                                    </FormLabel>
                                    <div className="flex-grow">
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger className=" text-gray-700  text-md">
                                                    <SelectValue placeholder="Not Selected" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {[
                                                    "low",
                                                    "medium",
                                                    "high",
                                                    "urgent",
                                                ].map((d, i) => (
                                                    <SelectItem value={d}>
                                                        <span className=" capitalize text-md text-gray-700">
                                                            {d}
                                                        </span>
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </div>
                                </div>
                            </FormItem>
                        )}
                    />

                    {/* Deadline */}
                    <FormField
                        control={form.control}
                        name="deadline"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <div className="flex">
                                    <FormLabel className="flex items-center space-x-5 w-44 text-gray-500 text-lg">
                                        <CalendarIcon />
                                        <span>Deadline</span>
                                    </FormLabel>
                                    <div className="flex-grow">
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "w-full pl-3 text-left font-normal text-gray-700 text-md",
                                                            !field.value &&
                                                                "text-muted-foreground"
                                                        )}
                                                    >
                                                        {field.value ? (
                                                            format(
                                                                field.value,
                                                                "PPP"
                                                            )
                                                        ) : (
                                                            <span>
                                                                Not Selected
                                                            </span>
                                                        )}
                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent
                                                className="w-auto p-0"
                                                align="start"
                                            >
                                                <Calendar
                                                    mode="single"
                                                    // selected={field.value}
                                                    onSelect={field.onChange}
                                                    disabled={(date) =>
                                                        date > new Date() ||
                                                        date <
                                                            new Date(
                                                                "1900-01-01"
                                                            )
                                                    }
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        <FormMessage />
                                    </div>
                                </div>
                            </FormItem>
                        )}
                    />

                    {/* Description */}
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <div className="flex">
                                    <FormLabel className="flex items-center space-x-5 w-44 text-gray-500 text-lg">
                                        <Pencil />
                                        <span>Description</span>
                                    </FormLabel>
                                    <div className="flex-grow">
                                        <FormControl>
                                            <Input
                                                type="text"
                                                placeholder="Not Added"
                                                className="text-md text-gray-700 "
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </div>
                                </div>
                            </FormItem>
                        )}
                    />

                    {/* Add custom rpoperty */}
                    <div className="flex">
                        <div className="flex items-center space-x-5 text-balck text-lg">
                            <Plus />
                            <span>Add custom property</span>
                        </div>
                    </div>

                    {/* breakpoint */}
                    <div className="border-t-2 border-gray-200 text-gray-300 mt-5 pt-5">
                        Start writing, or drag your own files here.
                    </div>
                </div>
            </form>
        </Form>
    );
};

export default CreateNewTaskForm;
