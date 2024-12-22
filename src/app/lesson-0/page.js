// pages/index.js

import Footer from "@/components/Footer";
import Header from "@/components/Header";
export default function Home() {
  return (
    <div className="bg-gray-700 text-gray-800">
      <Header />
      <section
        className="bg-cover bg-center h-[400px]"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1589250321702-2d9a9671100a)",
        }}
      >
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">
            Welcome to Your Dream Kitchen
          </h1>
        </div>
      </section>
      {/* Products Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">
            Our Best Kitchen Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1638401985696-1a694f5abe84"
                alt="Product 1"
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Stainless Steel Pots</h3>
                <p className="text-gray-500">$50</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1638401985730-fbab87de3f9c"
                alt="Product 2"
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Wooden Cutting Board</h3>
                <p className="text-gray-500">$30</p>
              </div>
            </div>
            {/* Adicione mais produtos conforme necessário */}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
