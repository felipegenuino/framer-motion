export default function Header() {
  return (
    <header className="bg-kitchen-green p-4 shadow-lg">
      <nav className="flex justify-between items-center">
        <div className="text-2xl font-semibold text-white">
          Kitchen Essentials
        </div>
        <div>
          <a href="#" className="mx-4 text-white hover:text-kitchen-beige">
            Home
          </a>
          <a href="#" className="mx-4 text-white hover:text-kitchen-beige">
            Products
          </a>
          <a href="#" className="mx-4 text-white hover:text-kitchen-beige">
            Recipes
          </a>
        </div>
      </nav>
    </header>
  );
}
