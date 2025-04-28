import { Button } from "@/components/ui/button";
import { Blinds } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container-custom py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="heading-xl mb-4 text-gray-900">
              Solusi <span className="text-medical-blue">Linen & Tirai Medis</span> Terdepan dari Anugrah Victory Indonesia
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Penyedia terpercaya linen dan tirai medis berkualitas tinggi untuk rumah sakit dan fasilitas kesehatan. Dengan pengalaman lebih dari 10 tahun melayani ratusan rumah sakit di Indonesia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-medical-blue hover:bg-blue-600 text-white px-8 py-6 text-lg">
                Lihat Produk
              </Button>
              <Button variant="outline" className="border-medical-blue text-medical-blue hover:bg-medical-light px-8 py-6 text-lg">
                Hubungi Kami
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-medical-blue rounded-full opacity-20"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-medical-light p-4 rounded-lg flex flex-col items-center justify-center">
                    <Blinds className="h-12 w-12 text-medical-blue mb-2" />
                    <span className="font-semibold text-gray-800">Tirai Medis</span>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&auto=format&fit=crop&q=60"
                      alt="Hospital Linen" 
                      className="w-full h-32 object-cover rounded"
                    />
                    <p className="mt-2 text-center font-medium text-gray-800">Linen RS</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1583324113626-70df0f4deaab?w=800&auto=format&fit=crop&q=60"
                      alt="Medical Equipment" 
                      className="w-full h-32 object-cover rounded"
                    />
                    <p className="mt-2 text-center font-medium text-gray-800">Alat Medis</p>
                  </div>
                  <div className="bg-medical-light p-4 rounded-lg flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold text-medical-blue mb-1">200+</span>
                    <span className="text-sm text-center text-gray-700">Rumah Sakit Bermitra</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
