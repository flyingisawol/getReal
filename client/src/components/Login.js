const Login = () => {
  return (
    <>
      <form method="post" action="/">
        <label for="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="admin"
          required
        />

        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="admin"
          required
        />

        <div class="loginRegister">
          <input type="submit" value="Login" />
        </div>
      </form>
      <div class="loginRegisterBtn">
        <a href="/register">Register</a>
      </div>
    </>
  )
}

export default Login
