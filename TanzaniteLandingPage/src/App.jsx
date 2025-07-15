import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function App() {
  const ClippedImage = ({ src, alt }) => (
    <div className="relative w-full md:w-1/2 flex justify-center items-center gap-4 flex-wrap">
      <div className="w-1/4 overflow-hidden rounded-[50%_50%_50%_50%] rotate-[25deg]">
        <img src={src} alt={alt} className="object-cover w-full h-40 sm:h-52 md:h-64" />
      </div>
      <div className="w-1/4 overflow-hidden rounded-[50%_50%_50%_50%] rotate-[25deg]">
        <img src={src} alt={alt} className="object-cover w-full h-40 sm:h-52 md:h-64" />
      </div>
      <div className="w-1/4 overflow-hidden rounded-[50%_50%_50%_50%] -rotate-[-25deg]">
        <img src={src} alt={alt} className="object-cover w-full h-40 sm:h-52 md:h-64" />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-tr from-rose-100 via-blue-100 to-indigo-100 text-gray-900">
     
      <div className="flex flex-col md:flex-row bg-neutral-950 text-white p-6 md:p-8">
  <div className="w-full md:w-1/2 flex flex-col justify-center">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
      Tanzanite Skills Academy
    </h1>
    <p className="text-xl sm:text-2xl md:text-3xl mt-4 font-light">
      Jifunze Leo, Badilisha Kesho Yako
    </p>
  </div>

 
  <div className="w-full md:w-1/2 relative mt-6 md:mt-0 md:ml-4 flex justify-center items-center">
    <div className="bg-blue-600 w-full h-64 sm:h-80 md:h-96 rounded-lg relative overflow-visible">
      <img
        src="/me.jpeg"
        alt="Education"
className="absolute top-1/2 transform -translate-y-1/2 right-[28px] md:left-[-24px] md:right-auto w-[350px] h-[250px] md:w-[700px] md:h-[350px] rounded-3xl object-cover shadow-xl"
      />
    </div>
  </div>
</div>


      <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-12">Huduma Zetu</h2>
        <div className="space-y-16">
          {[
            {
              title: 'Maendeleo Binafsi',
              image: '/me.jpeg',
              reverse: false,
            },
            {
              title: 'Usimamizi wa Fedha Binafsi',
              image: '/me.jpeg',
              reverse: true,
            },
            {
              title: 'Maendeleo ya Kitaaluma',
              image: '/me.jpeg',
              reverse: false,
            },
            {
              title: 'Maendeleo ya Biashara',
              image: '/me.jpeg',
              reverse: true,
            },
            {
              title: 'Maendeleo ya Teknolojia',
              image: '/me.jpeg',
              reverse: false,
            },
          ].map(({ title, image, reverse }, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                reverse ? 'md:flex-row-reverse' : 'md:flex-row'
              } items-center gap-10`}
            >
              <ClippedImage src={image} alt={title} />
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold text-indigo-800 mb-3">{title}</h3>
                <p className="text-gray-700 text-lg">
                  Mafunzo haya yanakusaidia kukuza uwezo binafsi, kitaaluma na kiteknolojia kwa maendeleo endelevu.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-indigo-700 text-white text-center relative overflow-hidden">
        <div className="relative z-10 px-4">
          <h2 className="text-4xl font-bold mb-4">Anza Safari Yako ya Mafanikio Leo</h2>
          <p className="max-w-xl mx-auto text-lg mb-6">
            Jiunge nasi ujifunze maarifa muhimu yatakayokuwezesha kufikia ndoto zako kwa mafanikio ya kweli.
          </p>
          <button className="bg-white text-indigo-700 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-indigo-100 transition-all duration-300">
            Anza Mafunzo
          </button>
        </div>
        <div className="absolute -top-10 -left-10 w-80 h-80 bg-white/10 rounded-full animate-ping"></div>
        <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-white/10 rounded-full animate-ping"></div>
      </section>

      <footer className="bg-white py-12 text-center px-4">
        <h3 className="text-2xl font-bold text-indigo-700 mb-4">Mawasiliano</h3>
        <p className="mb-2 text-gray-700">
          WhatsApp: <a href="https://wa.me/255749722722" className="text-indigo-600">0749 722 722</a>
        </p>
        <p className="mb-2 text-gray-700">
          Email: <a href="mailto:info@tanzaniteskills.ac.tz" className="text-indigo-600">info@tanzaniteskills.ac.tz</a>
        </p>
        <p className="mt-6 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Tanzanite Skills Academy. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
