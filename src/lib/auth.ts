
"use server";

// Firebase authentication logic has been removed as per user request.
// The login and signup forms will now navigate directly to the dashboard for experimental purposes.

export async function handleSignUp(email: string, password: string, name: string, role: string) {
  console.log("Mock sign up for:", { email, name, role });
  return { user: { uid: "mock-uid", email, name, role } };
}

export async function handleSignIn(email: string, password: string) {
  console.log("Mock sign in for:", { email });
  return { user: { uid: "mock-uid", email } };
}
