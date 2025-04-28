
import { Card, CardContent } from "@/components/ui/card";
import { Blinds, BedDouble, FileText, Pill } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    title: "Tirai Antimikroba Premium",
    description: "Tirai medis dengan teknologi antimikroba terdepan, tahan api, dan mudah dibersihkan. Ideal untuk ruang ICU dan kamar operasi.",
    icon: Blinds,
    category: "curtains",
  },
  {
    id: 2,
    title: "Linen Tempat Tidur Elite",
    description: "Set linen premium dengan bahan katun 100%, antibakterial, dan nyaman untuk pasien. Tersedia dalam berbagai ukuran.",
    icon: BedDouble,
    category: "linen",
  },
  {
    id: 3,
    title: "Tirai Modular Fleksibel",
    description: "Sistem tirai modular yang dapat disesuaikan dengan layout ruangan. Dilengkapi dengan rel aluminium premium.",
    icon: Blinds,
    category: "curtains",
  },
  {
    id: 4,
    title: "Linen Bedah Steril",
    description: "Linen khusus untuk ruang operasi dengan standar sterilisasi tertinggi. Tahan terhadap cairan dan bahan kimia.",
    icon: FileText,
    category: "linen",
  }
];

const FeaturedProducts = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Produk Unggulan Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami menyediakan berbagai macam produk linen dan tirai medis berkualitas tinggi untuk memenuhi kebutuhan fasilitas kesehatan Anda.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link to={`/products/${product.category}`} key={product.id}>
              <Card className="h-full card-shadow hover:border-medical-blue transition-all duration-200">
                <CardContent className="p-6">
                  <div className="bg-medical-light w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <product.icon className="h-8 w-8 text-medical-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">{product.title}</h3>
                  <p className="text-gray-600 text-center">{product.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link 
            to="/products" 
            className="btn-primary inline-flex items-center gap-2"
          >
            Lihat Semua Produk
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
