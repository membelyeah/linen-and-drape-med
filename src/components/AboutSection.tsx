
import { BriefcaseMedical, CheckCircle } from 'lucide-react';

const benefits = [
  "Material berkualitas tinggi",
  "Antimikroba & anti alergi",
  "Tahan lama & mudah dibersihkan",
  "Sesuai standar kesehatan",
  "Desain yang ergonomis",
  "Opsi kustomisasi tersedia",
];

const AboutSection = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6 flex items-center">
              <BriefcaseMedical className="h-8 w-8 text-medical-blue mr-3" />
              <h2 className="heading-lg">Tentang MedSupplyPro</h2>
            </div>
            
            <p className="text-gray-700 mb-6">
              MedSupplyPro adalah penyedia alat kesehatan terkemuka yang berfokus pada linen dan tirai medis untuk rumah sakit dan fasilitas kesehatan lainnya. Dengan pengalaman lebih dari 15 tahun, kami telah melayani ratusan rumah sakit di seluruh Indonesia.
            </p>
            
            <p className="text-gray-700 mb-8">
              Kami berkomitmen untuk menyediakan produk berkualitas tinggi yang memenuhi standar keamanan dan kenyamanan. Tim kami terdiri dari profesional berpengalaman dalam industri kesehatan yang memahami kebutuhan spesifik fasilitas medis.
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
                src="/placeholder.svg" 
                alt="Medical Equipment" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
