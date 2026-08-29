"use client"
import { SubmitEventHandler, useState } from "react";
import style from "../auth.module.css"
import { useRouter } from "next/navigation";
import useSWRMutation from "swr/mutation";
import { apiClient } from "@/_lib/api-client";

type LoginReq = {
  email: string,
  password: string,
}
async function loginRequest(url: string, { arg }: { arg: LoginReq }) {
  return apiClient(url, { method: 'POST', body: JSON.stringify(arg) })
}

export default function LoginPage() {
  const [email, setEmail] = useState<string | null>(null)
  const [password, setPassword] = useState<string | null>(null);
  const router = useRouter();

  const { trigger, isMutating, error } = useSWRMutation('/auth/login', loginRequest, {
    onSuccess: () => {
      router.push("/home");
    },
  })

  const handleSubmit: SubmitEventHandler = (e) => {
    e.preventDefault();
    if (!email?.trim() || !password?.trim()) return;
    trigger({ email, password });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={style["form-item"]}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email ?? ""}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={style["form-item"]}>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={password ?? ""}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error &&
        <div>
          <p>Error logging in</p>
        </div>
      }
      <div className={style["button-container"]}>
        <button
          type="submit"
          className={style["success-button"]}
          disabled={isMutating}
        >
          {isMutating ? "Logging in..." : "Login"}
        </button>
      </div>
      <div className={style["links"]}>
        <p>Don't have an account yet?</p>
        <a href="/register">Register</a>
      </div>
    </form>
  )
}
