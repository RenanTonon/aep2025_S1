import "./Login.css";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-left">
        <form className="login-form">
          <label htmlFor="login">LOGIN</label>
          <input type="text" id="login" name="login" />

          <label htmlFor="senha">SENHA</label>
          <input type="password" id="senha" name="senha" />

          <div className="login-options">
            <span></span>
            <a href="#" className="forgot-password">ESQUECEU SENHA?</a>
          </div>

          <div className="login-buttons">
            <button type="submit" className="btn">ENTRAR</button>
            <button type="button" className="btn">CADASTRAR</button>
          </div>
        </form>
      </div>
      <div className="login-right">
        <div className="logo">
          <h1>CITY V<span className="logo-o">🎙</span>ICE TALK</h1>
        </div>
      </div>
    </div>
  );
}