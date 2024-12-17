"use client";

import { SignupForm } from "@/components/signup-form";
import Head from "../(site)/head";


export default function RegisterForm() {
    return (
        <>
            <Head />
            <div className='container mt-24 mx-auto flex justify-center items-center'>
                <SignupForm />
            </div>
        </>
    );
}
