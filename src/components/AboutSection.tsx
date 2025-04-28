
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
                src="/images/medical-facility.jpg" 
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
