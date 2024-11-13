import styles from './CadastroUsuario.module.css'

const CadastroUsuario = () => {
  return (
    <div>
      <h1>Cadastrando Usuário</h1>
      <div>
        <form action="/usuario/criar" method="POST" className={styles.formCadastro}>
            <div className={styles.nomeUsuario}>
                <label htmlFor="nameUsuario">Nome de usuário:</label>
                <input type="text" name="nameUser" id="nameUser" placeholder='Informe o nome '/>
            </div>
            <div className={styles.emailUsuario}>
                <label htmlFor="emailUsuario">Email:</label>
                <input type="email" name="emailUser" id="emailUser" placeholder='Informe o email' />
            </div>
            <div>
                <label htmlFor="senhaUsuario">Senha</label>
                <input type="password" name="passwordUser" id="passwordUser" placeholder='Informe a senha' />
            </div>
            <div className={styles.BtnCadastrar}>
                <input type="submit" value="Cadastrar" />
            </div>
        </form>
      </div>
    </div>
  )
}

export default CadastroUsuario
