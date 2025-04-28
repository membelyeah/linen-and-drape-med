
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    quote: "Tirai medis dari MedSupplyPro telah membantu meningkatkan standar kebersihan dan privasi di rumah sakit kami. Material yang digunakan sangat berkualitas.",
    name: "Dr. Budi Santoso",
    role: "Direktur Rumah Sakit Sejahtera",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    quote: "Kami sangat puas dengan linen yang disediakan oleh MedSupplyPro. Nyaman untuk pasien dan tahan lama, bahkan setelah banyak dicuci.",
    name: "Ibu Dewi Lestari",
    role: "Manajer Pengadaan RS Medika",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    quote: "Layanan pelanggan yang luar biasa dan produk yang sesuai dengan standar kesehatan tertinggi. MedSupplyPro adalah mitra tepercaya kami.",
    name: "Dr. Agus Wibowo",
    role: "Kepala Departemen Administrasi RS Harapan",
    image: "/placeholder.svg",
  },
];

const Testimonials = () => {
  return (
    <section className="section bg-medical-blue bg-opacity-5">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-3">Apa Kata Pelanggan Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dengarkan langsung dari para profesional kesehatan yang telah menggunakan produk-produk MedSupplyPro.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full bg-white card-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    {/* Quote icon */}
                    <svg className="h-8 w-8 text-medical-blue opacity-30" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M10 8c-2.209 0-4 1.791-4 4v12h8V12h-4c0-2.209 1.791-4 4-4v-4c-4.418 0-8 3.582-8 8zm12-4v4c2.209 0 4 1.791 4 4h-4v12h8V12c0-4.418-3.582-8-8-8z"></path>
                    </svg>
                  </div>
                  
                  <p className="text-gray-700 mb-6 flex-grow">{testimonial.quote}</p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
