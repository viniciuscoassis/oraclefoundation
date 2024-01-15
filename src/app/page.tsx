import Head from "next/head";
import Image from "next/image";
import Carousel from "./components/Carrousel";

export default function Home() {
  return (
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
          <h1 className="text-6xl text-atomic-tangerine-hex font-nova-square font-bold mb-4">Oracles</h1>
          <button className="bg-atomic-tangerine-hex hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full my-5">
            Check out the market
          </button>
          <p className="text-xl mt-5">
            100 algorithmically generated, unique oracle NFTs
          </p>
        </div>

        {/* Carrossel de imagens */}
        <Carousel />
        {/* <div className="flex overflow-x-scroll py-5">
          {[...Array(14)].map((_, i) => (
            <div key={i} className="flex-none w-60 h-60 mx-2 bg-gray-500 rounded-lg relative">
              <Image
              width={240}
              height={240}
                src={`/oracles/${i + 1}.png` || `/oracles/${i + 1}.JPG`}
                alt={`NFT ${i + 1}`}
                className="rounded-lg"
              />
            </div>
          ))}
        </div> */}
      </main>

      <Head>
        <title>Chikn NFT</title>
      </Head>

      <main className="bg-blue-900 text-white">
        {/* Seção Join the community */}
        <section className="text-center py-12">
          <h1 className="text-4xl font-bold mb-4">Join the community</h1>
          <p className="mb-6">For the latest news, updates and access to pre-release content.</p>
          <button className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-full">
            Join our Discord
          </button>
        </section>

        {/* Seção Contratos */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-4">Chikn</h2>
          <p className="mb-4">10,000 algorithmically generated, unique chikn NFTs that lay $egg</p>
          {/* Links para redes sociais ou outros */}
          {/* ... */}
        </section>

        {/* Seção de navegação do Site */}
        <section className="container mx-auto px-4 py-12 grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-3">Site</h3>
            <ul>
              <li><a href="/" className="hover:underline">Home</a></li>
              {/* outros links */}
            </ul>
          </div>

          {/* Seção de navegação Other */}
          <div>
            <h3 className="text-xl font-bold mb-3">Other</h3>
            <ul>
              <li><a href="/changelog" className="hover:underline">Changelog</a></li>
              {/* outros links */}
            </ul>
          </div>
        </section>
      </main>

      <footer className="bg-blue-800 py-8">
        <div className="container mx-auto px-4">
          {/* Conteúdo do rodapé */}
        </div>
      </footer>
    </div>
  );
}
