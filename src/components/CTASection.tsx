
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section bg-medical-blue">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-lg text-white mb-6">
            Tingkatkan Standar Fasilitas Kesehatan Anda Sekarang
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Hubungi tim kami untuk konsultasi gratis dan penawaran khusus untuk kebutuhan linen dan tirai medis rumah sakit Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-medical-blue hover:bg-blue-50 px-8 py-6 text-lg">
              Pesan Sekarang
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-blue-700 px-8 py-6 text-lg flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Hubungi Kami
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
