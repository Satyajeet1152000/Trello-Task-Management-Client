"use client";

import { useState, useTransition } from "react";
import { Button } from "../ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import CardWrapper from "./CardWrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { LoginSchema } from "@/lib/schema";
import Link from "next/link";

const LoginForm = () => {
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        setError("");
        setSuccess("");

        startTransition(() => {
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

    return (
        <CardWrapper
            footerText="Don't have an account? Create a"
            footerHrefText="new account"
            footerHref="/register"
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className=" space-y-6"
                >
                    <div className=" space-y-6">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            placeholder="Your eamil"
                                            type="email"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            placeholder="Password"
                                            type="password"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    {/* <FormError message={error || urlError} />
                    <FormSuccess message={success} /> */}
                    <Button
                        type="submit"
                        className=" w-full bg-gradient-to-b from-[#4C38C2] to-[#2F2188] py-7 text-xl font-normal"
                        disabled={isPending}
                    >
                        Login in
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    );
};

export default LoginForm;
