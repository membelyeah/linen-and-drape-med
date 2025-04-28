
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md px-4">
          <h1 className="text-6xl font-bold text-medical-blue mb-4">404</h1>
          <p className="text-2xl text-gray-700 mb-6">Halaman tidak ditemukan</p>
          <p className="text-gray-600 mb-8">
            Maaf, halaman yang Anda cari tidak ada. Silakan kembali ke halaman utama.
          </p>
          <Button asChild className="bg-medical-blue hover:bg-blue-600">
            <Link to="/">
              Kembali ke Beranda
            </Link>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
