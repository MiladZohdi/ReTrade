import supabase from "./supabase";

export async function signUpApi({ email, password, name }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
        isAdmin: true,
      },
    },
  });

  if (error) throw new Error(error.message);
  return { data, error };
}

export async function loginApi({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);
  return { data, error };
}

export async function getUserApi() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (!user) throw new Error(error.message);
  return { user };
}

export async function logOutApi() {}
