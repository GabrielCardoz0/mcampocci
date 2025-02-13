import { FaInstagram, FaPlayCircle, FaPlane } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import image1 from './assets/Sem_Titulo-5.png';
import logo from './assets/Sem_Titulo-2.png';
import marcelo from './assets/image.png';
import tatto from './assets/Sem_Titulo-3.png'
import footerImg from './assets/Sem_Titulo-4.png'


function App() {
  return (
    <div className="w-full max-w-[1200px] mx-auto">

      <div className="flex justify-between px-8 items-center pt-8">
        <FaInstagram size={20} />
        <div className="flex gap-2 text-gray-600">
          <p>PT</p>
          <p>ITA</p>
          <p>ENG</p>
        </div>
      </div>



      <div className="h-8" />

      <div className="text-center">
        <img src={logo} alt="Instagram" className="mx-auto" />

        <div className="h-4" />

        <h1 className="text-xl">M.CAPOCCI TATTOO</h1>

        <div className="h-4" />

        <h2 className="text-center text-gray-500 text-sm">Assista o vídeo abaixo para conhecer <br/> meu método de trabalho:</h2>

        <div className="h-4" />

        <div className="relative">
          <iframe
            width="100%"
            // height="250"
            src="https://www.youtube.com/embed/V3GilodyI9M"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full object-cover"
          ></iframe>
          {/* <img src={image1} alt="Tattoo" className="w-full mx-auto h-[250px] object-cover my-4" /> */}
        </div>
      
      </div>


      <div className="h-8" />

      <div className="w-full px-8">

        
        <h1 className="text-center text-xl">CALENDÁRIO 2025</h1>

        <div className="h-8" />

        <div className="border-2 rounded-full flex gap-4 items-center py-2 px-4 text-gray-500 max-w-[350px]">
          <FaPlane size={35} />
          <div>
            <h1 className="text-xl">FIRENZE 03 - 30 APRILE</h1>
            <p className="text-red-700 font-semibold">NOW BOOKING</p>
          </div>
        </div>

        <div className="h-4" />

        <div className="border-2 rounded-full flex gap-4 items-center py-2 px-4 text-gray-500 max-w-[350px]">
          <IoMdHome size={35} />
          <div>
            <h1 className="text-xl">SP - SÃP PAULO</h1>
            <p className="text-red-700 font-semibold">AGENDA ABERTA</p>
          </div>
        </div>
        
        <div className="h-8" />

        <div className="w-full flex justify-center">
          <button className="bg-gray-200 text-gray-600 py-2 px-4 mx-auto">FAÇA SEU ORÇAMENTO</button>
        </div>

        <div className="h-8" />

        <div className="h-0.5 bg-gray-300" />
      </div>

      <div className="h-8" />

      <div className="w-full px-8">
        <h1 className="text-2xl text-gray-700">Tatuagens personalizadas
        que contam histórias.</h1>

      <div className="h-4" />

        <p className="text-gray-500 text-sm">Meu processo é único e cuidadoso. A criação da arte é feita com atenção aos detalhes, respeitando sua ideia inicial e ouvindo sua opinião sobre o design apresentado. Minhas artes são o resultado de uma história, conceito ou referências visuais.</p>
      </div>

      <div className="h-8" />

      <div className="w-full px-8 flex gap-6">

        <img src={marcelo} alt="Marcelo Capocci" className="w-1/2 object-cover rounded-br-[90px]" />
        
        
        <div className="w-1/2">
          <h1 className="text-3xl text-gray-700">Marcelo Capocci.</h1>
          
          <div className="h-2" />
          
          <p className="text-gray-500 text-sm">
            Apaixonado por artes desde pequeno. Brasileiro, nascido em 1984 em São Paulo.
            <div className="h-2"/>
            Formado em Design Digital em 2006 pela Anhembi Morumbi.
            <div className="h-2"/>
            Trabalhei nas maiores agencias de publicidade do País, e há 13 anos me dedico a arte da tatuagem.
          </p>
        </div>
      </div>

      <div className="h-8" />

      <div className="w-full px-8">
        <img src={tatto} alt="Tattoo" className="w-full mx-auto object-cover my-4" />

        <p className="text-center text-3xl font-light">2025</p>
        <p className="text-center text-3xl my-4">AGENDAMENTOS</p>
        <p className="text-center text-sm">Por favor, preencha o formulário abaixo que entrarei em contato o mais rápido possivel.</p>
      </div>

      <div className="h-8" />

      <div className="w-full px-8">
        <form action="" className="flex flex-col gap-4">
          <label htmlFor="" className="text-gray-600">SEU NOME COMPLETO <Start/></label>
          <input type="text" placeholder="Nome" className="border p-2 rounded" required />

          <label htmlFor="" className="text-gray-600">SEU E-MAIL <Start/></label>
          <input type="email" placeholder="Email" className="border p-2 rounded" required />

          <label htmlFor="" className="text-gray-600">SUA MENSAGEM <Start/></label>
          <textarea placeholder="Mensagem" className="border p-2 rounded" rows="4" required></textarea>

          <select className="border p-2 rounded" required>
            <option value="">Selecionar Local</option>
            <option value="SP">SP</option>
            <option value="ITALIA">ITALIA</option>
          </select>

          <label htmlFor="" className="text-gray-600">SUA MENSAGEM <Start/></label>
          <input type="file" className="border p-2 rounded" accept=".jpg,.jpeg,.png,.pdf" required />


          <button type="submit" className="bg-gray-200 text-gray-600 py-2 px-4">Enviar</button>
        </form>
      </div>


      <div className="w-full px-8 flex flex-col gap-2 py-16">
        <img src={logo} alt="Instagram" className="mx-auto" />
        <p className="text-center text-gray-700">M.CAPOCCI TATTOO</p>
        <p className="text-center text-gray-500">agendamcapocci@gmail.com</p>
        <FaInstagram size={25} className="mx-auto"/>
      </div>

      <img src={footerImg} alt="Footer" className="w-full object-cover" />


    </div>
  );
}


function Start(){
  return (
    <span className="text-red-500">*</span>
  )
}
export default App;
