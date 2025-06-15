import NavigateButton from "../../components/buttons/NavigateButton";

interface Props {
    firstName : string
    username : string
    email : string
    password : string
}

export const SignupPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
        
        {/* Left Side - Formulário de Cadastro */}
        <div className="p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-left">Crie sua conta</h2>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="firstName" className="block text-gray-600">Primeiro Nome</label>
              <input 
                type="text" 
                id="firstName" 
                name="firstName" 
                placeholder="Seu primeiro nome"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label htmlFor="username" className="block text-gray-600">Username</label>
              <input 
                type="text" 
                id="username" 
                name="username" 
                placeholder="Seu username"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-600">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="exemplo@email.com"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-600">Senha</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                placeholder="Sua senha segura"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex justify-center gap-4 mt-4">
              <NavigateButton path="/login" conteudo="Voltar para Login" />
              <NavigateButton path="/home" conteudo="Cadastrar" />
            </div>
          </form>
        </div>

        {/* Right Side - Logo / Imagem / Info */}
        <div className="text-black flex flex-col items-center justify-center p-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">CITY V<span className="text-yellow-300">🎙</span>ICE TALK</h1>
            <p className="text-lg">Junte-se à nossa comunidade e compartilhe sua voz com o mundo!</p>
          </div>
        </div>
      </div>
   
  );
}