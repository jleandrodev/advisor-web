import { PageContainer } from "../../styles/components/PageContainer"
import { Title } from "../../styles/typography"
import { LoginContent, LoginImage } from "./style"
import { Form } from "@unform/web"
import { useState, useContext } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext"
import { useNavigate } from "react-router-dom"

const Login : React.FC = () => {

  const [ email, setEmail ] = useState<string>('')
  const [ password, setPassword ] = useState<string>('')
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSubmit = async (event : React.FormEvent) => {
    event.preventDefault

    if(email && password) {
      const isLogged = await auth.signin(email, password)

      if(isLogged) {
        navigate('/')
      }
    }

    try {
      
    } catch (error) {
      console.log(error)
    }
  }

  return(
    <PageContainer>
        <LoginImage />
        <LoginContent>
          <Title tag="h1" fontSize="lg" fontWeigth={700}>Advisor</Title>

          <Form onSubmit={handleSubmit}>
            <Title tag="h2" fontSize="md" fontWeigth={700}>Faça seu Login</Title>
            <input 
              placeholder="E-mail" 
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required  
            />
            <input 
              type="password"
              placeholder="Senha" 
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Entrar</button>
            <a href="forgot">Esqueci minha senha</a>
          </Form>
        </LoginContent>
    </PageContainer>
  )

}

export default Login