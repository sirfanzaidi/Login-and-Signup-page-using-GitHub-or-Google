"use client";

import { signIn } from "next-auth/react";

export default function SignInComponent() {
  return (
    <div className="flex flex-col items-center gap-6 bg-white bg-opacity-10 p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100">
        Sign In
      </h1>
      <button
        className="w-full md:w-auto"
        onClick={() => signIn("github")}
      >
        Sign In with GitHub
      </button>
      <button
        className="w-full md:w-auto"
        onClick={() => signIn("google")}
      >
        Sign In with Google
      </button>
    </div>
  );
}
