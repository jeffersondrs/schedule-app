"use client";

import { signIn, signOut } from "@/auth";

async function handleSignIn({provider}: {provider: string}) {
  "use client";
  await signIn(provider);
}

async function handleSignOut() {
  "use client";
  await signOut();
}

export function SignIn({ provider }: { provider: string }) {
  return (
    <form
      action={() => handleSignIn({ provider })}
    >
      <button type="button" className="w-full">
        Sign In with Google
      </button>
    </form>
  );
}

export function SignOut() {
  return (
    <form
      action={handleSignOut}
      className="w-full"
    >
      <button className="w-full p-0">
        Sign Out
      </button>
    </form>
  );
}
