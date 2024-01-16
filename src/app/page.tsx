import Head from "next/head";
import Carousel from "./components/Carrousel";
import WelcomeSection from "./components/WelcomeGalaxyExplorers";
import Footer from "./components/Footer";

export default function Home() {
  return (

    <>
      <div className="h-screen">
        {/* Fundo com paisagem */}
        <div className="relative h-3/4 bg-cover bg-center" style={{ backgroundImage: "url('/background.png')" }}>
          {/* Sobreposição de elementos */}
          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center">
          </div>
        </div>

        <Head>
          <title>Oracles NFT Market</title>
        </Head>

        {/* Conteúdo principal da página */}
        <main className="min-h-screen bg-black text-white">
          {/* Seção principal com título e botão */}
          <div className="text-center p-12">
            <h1 className="text-6xl text-atomic-tangerine-hex font-sans font-bold mb-4">Oracles</h1>
            <button className="bg-atomic-tangerine-hex hover:brightness-110 text-white py-2 px-4 rounded-md my-5">
              Check out the market
            </button>
            <p className="text-xl mt-5">
              100 AI generated, unique oracle NFTs
            </p>
          </div>

          {/* Carrossel de imagens */}
          <Carousel />
          <WelcomeSection />
           {/* Seção Join the community */}
           <section className="w-3/6 ml-20 py-12">
            <h1 className="text-4xl text-atomic-tangerine-hex mb-4">Join the community</h1>
            <p className="mb-6 ">For the latest news, updates and access to pre-release content.</p>
            <button className="bg-atomic-tangerine-hex hover:brightness-110 text-white  py-2 px-4 rounded-md">
              Join our Discord
            </button>
          </section>
        </main>

        <Head>
          <title>Oracles NFT</title>
        </Head>

        {/* Rodapé */}
        <Footer />
      </div>
    </>

  );
}
