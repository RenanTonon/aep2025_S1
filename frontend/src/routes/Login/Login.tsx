import NavigateButton from "../../components/buttons/NavigateButton";
import "./Login.css";

export const Login = () => {
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

          <div className="flex justify-center gap-[10px]">
            <NavigateButton path="/home" conteudo="ENTRAR"/>
            <NavigateButton path="/home" conteudo="CADASTRAR"/>
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