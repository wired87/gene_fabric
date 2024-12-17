"use client";

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { useState } from "react";
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

export function SignupForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    interface RegisterForm {
        name: string;
        email: string;
        password: string;
    }

    const [form, setForm] = useState<RegisterForm>({
        name: "",
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);

    const signupUser = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });
        setLoading(false);
        if (res.ok) {
            alert("User registered!");
        } else {
            alert("Registration failed!");
        }
    };


    const router = useRouter()
    function routeToLogin() {
        router.push('/login')
    }

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card className="overflow-hidden">
                <CardContent className="grid p-0 md:grid-cols-2">
                    <form className="p-6 md:p-8">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col items-center text-center">
                                <h1 className="text-2xl font-bold">Welcome </h1>
                                <p className="text-balance text-muted-foreground">
                                    Signup
                                </p>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="John Doe"
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    required
                                    autoComplete="name"
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    required
                                    autoComplete="email"
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>

                                </div>
                                <Input id="password" type="password" required name="current-password"
                                    autoComplete="current-password"
                                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                                />
                            </div>
                            <Button onClick={signupUser} disabled={loading} className="w-full">
                                Signup
                            </Button>
                            <div className="text-center text-sm">
                                Already have an account?{" "}
                                <a href="#" onClick={routeToLogin} className="underline underline-offset-4">
                                    Login
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
                By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
                and <a href="#">Privacy Policy</a>.
            </div>
        </div>
    )
}
