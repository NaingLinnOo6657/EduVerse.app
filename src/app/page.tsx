import { AuthForm } from "@/components/auth-form";

export default function AuthenticationPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-md">
        <AuthForm />
      </div>
    </main>
  );
}
