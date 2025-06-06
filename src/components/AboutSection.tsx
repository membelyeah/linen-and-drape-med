import { BriefcaseMedical, CheckCircle } from 'lucide-react';

const benefits = [
  "Produk berkualitas tinggi",
  "Garansi produk terjamin",
  "Pengiriman ke seluruh Indonesia",
  "Konsultasi teknis 24/7",
  "Pemasangan profesional",
  "Layanan purna jual",
];

const AboutSection = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6 flex items-center">
              <BriefcaseMedical className="h-8 w-8 text-medical-blue mr-3" />
              <h2 className="heading-lg">Tentang Anugrah Victory Indonesia</h2>
            </div>
            
            <p className="text-gray-700 mb-6">
              Anugrah Victory Indonesia adalah perusahaan terkemuka dalam penyediaan linen dan tirai medis berkualitas tinggi untuk rumah sakit dan fasilitas kesehatan di Indonesia. Dengan pengalaman lebih dari 10 tahun, kami telah dipercaya oleh lebih dari 200 rumah sakit di seluruh Indonesia.
            </p>
            
            <p className="text-gray-700 mb-8">
              Komitmen kami adalah menyediakan produk berkualitas premium dengan standar internasional. Tim ahli kami siap memberikan solusi terbaik untuk kebutuhan linen dan tirai medis di fasilitas kesehatan Anda, didukung oleh layanan purna jual yang profesional.
            </p>
            
            <div className="mb-8">
              <p className="text-gray-700 font-semibold mb-2">Kantor Pusat:</p>
              <p className="text-gray-600 mb-4">Ruko Prominence, Jl Jalur Suter No 39 Blok 38F RT.003 / RW. 006, Panunggangan Timur, Pinang Kota Tangerang, Banten 15143</p>
              
              <p className="text-gray-700 font-semibold mb-2">Kantor Operasional:</p>
              <p className="text-gray-600">Graha Arda, Jalan HR Rasuna Said Kavling B6, Lt. 2 RT.4/RW.2, Setia Budi, Daerah Khusus Ibukota Jakarta 12910</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-medical-blue flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-medical-blue rounded-full opacity-20"></div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=60" 
                alt="Fasilitas Medis" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
