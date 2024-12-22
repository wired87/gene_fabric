"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useAuthStore from "@/store/authStore"; // Import Zustand store

export function LoginForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    interface LoginForm {
        email: string;
        password: string;
    }

    // Local state for form and loading
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState<LoginForm>({ email: "", password: "" });
    const { login } = useAuthStore(); // Zustand hook to update global state
    const router = useRouter();

    function routeToSignup() {
        router.push("/register");
    }

    async function loginUser(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            setLoading(false);

            if (res.ok) {
                const data = await res.json();
                login(); // Update Zustand store
                // Optionally, store the access token in localStorage or memory
                localStorage.setItem("accessToken", data.accessToken);
                router.push("/dashboard"); // Redirect to dashboard
            } else {
                alert("Login failed! Please check your credentials.");
            }
        } catch (error) {
            setLoading(false);
            alert("Something went wrong! Please try again.");
        }
    }

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card className="overflow-hidden">
                <CardContent className="grid p-0 md:grid-cols-2">
                    <form className="p-6 md:p-8" onSubmit={loginUser}>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col items-center text-center">
                                <h1 className="text-2xl font-bold">Welcome back</h1>
                                <p className="text-balance text-muted-foreground">
                                    Login to your account
                                </p>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                    onChange={(e) =>
                                        setForm({ ...form, email: e.target.value })
                                    }
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                    <a
                                        href="#"
                                        className="ml-auto text-sm underline-offset-2 hover:underline"
                                    >
                                        Forgot your password?
                                    </a>
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    required
                                    onChange={(e) =>
                                        setForm({ ...form, password: e.target.value })
                                    }
                                />
                            </div>
                            <Button
                                type="submit"
                                disabled={loading}
                                className="w-full"
                            >
                                {loading ? "Logging in..." : "Login"}
                            </Button>
                            <div className="text-center text-sm">
                                Don&apos;t have an account?{" "}
                                <a
                                    href="#"
                                    onClick={routeToSignup}
                                    className="underline underline-offset-4"
                                >
                                    Sign up
                                </a>
                            </div>
                        </div>
                    </form>
                    <div className="relative hidden bg-muted md:block">
                        <img
                            src="https://www.twistbioscience.com/sites/default/files/styles/max_1300x1300/public/featured_image/adobestock_78724581-min-min_0.webp"
                            alt="Image"
                            className="absolute grayscale inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                        />
                    </div>
                </CardContent>
            </Card>
            <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
                By clicking continue, you agree to our{" "}
                <a href="#">Terms of Service</a> and{" "}
                <a href="#">Privacy Policy</a>.
            </div>
        </div>
    );
}