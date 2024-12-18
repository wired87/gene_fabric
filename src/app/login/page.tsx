import { LoginForm } from "@/components/login-form"
import Head from "../(site)/head"
export default function LoginPage() {
    return (
        <>
            <Head />

            <div className="flex flex-col items-center justify-center p-6 md:p-10">
                <div className="w-full max-w-sm md:max-w-3xl">
                    <LoginForm />
                </div>
            </div>
        </>
    )
}
