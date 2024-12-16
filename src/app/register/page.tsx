"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SignupForm } from "@/components/signup-form";

const formSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function RegisterForm() {

    return (
        <div className="container mx-auto flex justify-center items-center h-screen">

            <SignupForm />

        </div>
    );
}





// "use client";

// import { useState, FormEvent } from "react";

// interface RegisterForm {
//     name: string;
//     email: string;
//     password: string;
// }

// export default function RegisterPage() {
//    
//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 placeholder="Name"
//                 value={form.name}
//                 onChange={(e) => setForm({ ...form, name: e.target.value })}
//             />
//             <input
//                 type="email"
//                 placeholder="Email"
//                 value={form.email}
//                 onChange={(e) => setForm({ ...form, email: e.target.value })}
//             />
//             <input
//                 type="password"
//                 placeholder="Password"
//                 value={form.password}
//                 onChange={(e) => setForm({ ...form, password: e.target.value })}
//             />
//             <button type="submit">Register</button>
//         </form>
//     );
// }