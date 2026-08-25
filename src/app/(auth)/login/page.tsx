import style from "../auth.module.css"

export default function LoginPage() {
  return (
    <form method="POST">
      <div className={style["form-item"]}>
        <label
          htmlFor="email"
        >Email</label>
        <input
          id="email"
          type="email"
          name="email"
        />
      </div>
      <div className={style["form-item"]}>
        <label
          htmlFor="password"
        >Password</label>
        <input
          id="password"
          type="password"
          name="password"
        />
      </div>
      <div className={style["button-container"]}>
        <button
          type="submit"
          className={style["success-button"]}>
          Login</button>
      </div>
      <div className={style["links"]}>
        <p>Don't have an account yet?</p>
        <a href="/register">Register</a>
      </div>
    </form>
  )
}
