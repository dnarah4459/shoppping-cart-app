export default function Footer() {
    return (
      <footer className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white py-4 border-2 border-black border-t-0">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div>
              <h2 className="text-lg font-semibold uppercase tracking-wider mb-2">
                Find Us
              </h2>
              <p className="text-sm leading-relaxed">123 Fairytale Lane</p>
              <p className="text-sm leading-relaxed">San Francisco, CA 94016</p>
            </div>
  
            <div>
              <h2 className="text-lg font-semibold uppercase tracking-wider mb-2">
                Links
              </h2>
              <p className="text-sm leading-relaxed cursor-pointer hover:text-gray-200 transition-colors">
                Jobs & Careers
              </p>
            </div>
  
            <div>
              <h2 className="text-lg font-semibold uppercase tracking-wider mb-2">
                About Us
              </h2>
              <p className="text-sm leading-relaxed">
                Lorem ipsum dolor sit 
              </p>
            </div>
          </div>
  
        </div>
      </footer>
    );
  }
  