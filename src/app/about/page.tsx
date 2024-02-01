import Image from "next/image";

const About = () => {
  return (
    <div className="w-full lg:max-w-[1216px] xl:max-w-[1440px] my-6">
      <div className="flex flex-col gap-8 text-justify mx-5">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-3xl md:text-4xl text-center border-y-2 border-slate-700 py-6 md:py-10">
            Cecep Miftah Solahudin
          </h1>
          {/* <div className="w-[300px] mx-auto min-h-60 relative">
            <Image
              src="/images/my-pic2.1.jpeg"
              alt="picture of cecep miftah solahudin"
              fill
              quality={100}
              className="object-contain"
            />
          </div> */}
          <h2 className="text-2xl md:text-3xl font-semibold my-6">About Me</h2>
          <h3 className="text-lg md:text-xl font-semibold">
            🚀 Selamat datang di Portfolio Saya!
          </h3>
          <p className="text-base font-normal leading-8">
            Salam kenal, saya Cecep Miftah, seorang Frontend Web Developer yang
            baru saja meraih gelar sarjana. Saya memiliki hasrat besar dalam
            dunia teknologi, khususnya dalam pengembangan web dengan fokus utama
            pada React.js dan Next.js.
          </p>
          <h3 className="text-lg md:text-xl font-semibold">
            🌐 Eksplorasi Tanpa Batas: Teknologi, Kreativitas, dan Inovasi
          </h3>
          <p className="text-base font-normal leading-8">
            Saat saya tidak sibuk menulis kode, saya senang mengikuti tren
            terbaru dalam dunia teknologi dan terus memperdalam pemahaman saya
            tentang pengembangan web modern. Saya percaya bahwa eksplorasi tanpa
            batas dalam teknologi, kreativitas, dan inovasi adalah kunci untuk
            menciptakan produk-produk yang relevan dan memberikan dampak
            positif.
          </p>
          <h3 className="text-lg md:text-xl font-semibold">
            📚 Kurva Pembelajaran yang Konstan
          </h3>
          <p className="text-base font-normal leading-8">
            Sebagai lulusan baru, saya percaya bahwa pembelajaran adalah suatu
            perjalanan yang tak ada habisnya. Saya aktif mengikuti kursus
            online, membaca artikel, dan terlibat dalam komunitas pengembang
            untuk selalu mengasah keterampilan saya. Saya yakin bahwa kurva
            pembelajaran yang konstan adalah kunci keberhasilan dalam industri
            yang terus berubah ini.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Skills</h2>
          <ol className="list-decimal mx-5 my-6">
            <li className="text-lg md:text-xl font-semibold">
              React.js Enthusiast 🚀
            </li>
            <ul className="list-disc mx-4">
              <li className="leading-8">
                Pernah menciptakan komponen React yang efisien dan reusable.
              </li>
              <li className="leading-8">
                Pengetahuan state management dengan menggunakan Redux untuk
                manajemen keadaan yang kompleks.
              </li>
              <li className="leading-8">
                Memahami prinsip-prinsip React Hooks untuk membuat komponen
                fungsional yang dinamis.
              </li>
            </ul>
            <li className="text-lg md:text-xl font-semibold">
              Next.js Aficionado 🌐
            </li>
            <ul className="list-disc mx-4">
              <li className="leading-8">
                Membangun aplikasi web server-side rendering (SSR) dengan
                Next.js.
              </li>
              <li className="leading-8">
                Mengoptimalkan aplikasi untuk kecepatan dan kinerja yang optimal
                dengan SSR dan pre-rendering.
              </li>
            </ul>
            <li className="text-lg md:text-xl font-semibold">
              Tailwind CSS Wizard 🎨
            </li>
            <ul className="list-disc mx-4">
              <li className="leading-8">
                Menguasai penggunaan Tailwind CSS untuk styling yang bersih dan
                efisien.
              </li>
              <li className="leading-8">
                Menyusun UI dengan mudah menggunakan kelas-kelas utilitas
                Tailwind.
              </li>
            </ul>
            <li className="text-lg md:text-xl font-semibold">
              Responsive Web Design
            </li>
            <ul className="list-disc mx-4">
              <li className="leading-8">
                Desain dan implementasi tata letak responsif agar aplikasi
                berfungsi dengan indah di berbagai perangkat dan ukuran layar.
              </li>
              <li className="leading-8">
                Penggunaan media queries dan teknik desain responsif lainnya.
              </li>
            </ul>
          </ol>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold my-6">Education</h2>
          <h3 className="text-lg md:text-xl font-semibold">
            🎓 Pendidikan Teknologi Informasi: Mengukir Kisah Edukasi dan
            Inovasi!
          </h3>
          <p className="text-base font-normal leading-8">
            Selamat datang di bagian pendidikan dalam perjalanan saya! Saya
            telah menyelesaikan gelar Sarjana (S1) di Program Studi Pendidikan
            Teknologi Informasi, dan perjalanan ini tidak hanya tentang
            akademis, tetapi juga tentang menggali potensi tak terbatas dalam
            dunia teknologi dan pendidikan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
