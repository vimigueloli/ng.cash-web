import Header from "components/Header";
import bg from "public/assets/white-texture.png";
import logo from "public/assets/black-logo.svg";

export default function Home() {
    return (
        <div className={`bg-black w-screen h-screen overflow-y-auto relative`}>
            <div
                className={`w-screen h-screen bg-repeat bg-center overflow-y-auto`}
                style={{ backgroundImage: `url(${bg.src})` }}
            >
                <Header />
                <div className="line-center w-screen h-screen px-4 absolute pt-12">
                    <div className="sm:w-1/2 bg-white rounded-xl px-4">
                        <div className="line-center font-semibold mt-8">
                            <img height="80" width="100" src={logo.src} />
                        </div>
                        <div className="line-center mt-4 ">
                            <div className="w-full text-center">
                                Para acessar o sistema digite o seu email e
                                senha ou efetue o cadastro
                            </div>
                        </div>
                        <div className="my-8 line-center">
                            <input
                                className="bg-black w-full sm:w-3/4 h-10 rounded-lg text-white px-4"
                                placeholder="E-mail"
                            />
                        </div>
                        <div className="my-8 line-center">
                            <input
                                className="bg-black w-full sm:w-3/4 h-10 rounded-lg text-white px-4"
                                placeholder="Senha"
                            />
                        </div>
                        <div className="line-center my-8">
                            <div className="line-around  w-3/4 flex-wrap gap-4">
                                <div className="with-transition shadow-md w-40 border border-black line-center rounded-lg h-10 hover:bg-black hover:text-white cursor-pointer ">
                                    Cadastrar
                                </div>
                                <div className="with-transition shadow-md w-40 border border-black line-center rounded-lg h-10 hover:bg-black hover:text-white cursor-pointer ">
                                    Entrar
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
