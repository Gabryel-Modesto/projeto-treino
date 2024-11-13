import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  const email_usu = "gabryel@gmail.com"
  const password_usu = "abc"

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogar = () => {
    if(email === "" || password === "") {
      alert("Campos vázios não são permitidos no sistema!")
    } else if(email !== email_usu || password !== password_usu) {
      alert("Usuário ou senha não encontrados")
    } else {
      alert("Bem vindo ao sistema!")
      navigate("/Home")
    }
  };

  return (
    <div>
      <div className={styles.inputEmail}>
        <input
          type="email"
          name="emailUser"
          id="emailUser"
          placeholder="Informe o Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className={styles.inputPassword}>
        <input
          type="password"
          name="passwordUser"
          id="passwordUser"
          placeholder="Informe a senha"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div className={styles.BtnLogar}>
        <input type="submit" value="Logar" onClick={handleLogar} />
      </div>
    </div>
  );
};

export default Login;
