import style from "../auth.module.css"

export default function RegisterPage() {
  return (
    <form>
      <div className={style["form-item"]}>
        <label
          htmlFor="firstName"
        >First Name</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
        />
      </div>
      <div className={style["form-item"]}>
        <label
          htmlFor="lastName"
        >Last Name</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
        />
      </div>
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
      <div className={style["form-item"]}>
        <label
          htmlFor="confirmPassword"
        >Confirm Password</label>
        <input
          id="confirmPassword"
          type="password"
          name="confirmPassword"
        />
      </div>
      <div className={style["button-container"]}>
        <button
          type="submit"
          className={style["success-button"]}>
          Create account</button>
      </div>
      <div className={style["links"]}>
        <p>Already have an account?</p>
        <a href="/login">Log in</a>
      </div>    </form>
  )
}
