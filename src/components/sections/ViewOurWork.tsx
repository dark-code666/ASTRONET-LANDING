import { X, Briefcase, Users, Scale } from 'lucide-react';

interface ViewOurWorkProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Work {
  id: number;
  title: string;
  description: string;
  stats: {
    cases: string;
    revenue: string;
    clients: string;
  };
  image: string;
  category: string;
}

export default function ViewOurWork({ isOpen, onClose }: ViewOurWorkProps) {
  if (!isOpen) return null;

  const works: Work[] = [
    {
      id: 1,
      title: "Comprehensive Legal Platform",
      description: "JurídicoNet connects clients with verified lawyers. A complete platform to manage legal cases from one place.",
      stats: {
        cases: "2,450+",
        revenue: "$890k",
        clients: "1,850+"
      },
      image: `${import.meta.env.BASE_URL}imagenes/juridico-platform.png`,
      category: "LEGAL MARKETPLACE"
    },
    {
      id: 2,
      title: "Lawyer Dashboard",
      description: "Professional dashboard for lawyers to manage their cases, clients and documents. Intuitive and powerful interface.",
      stats: {
        cases: "892",
        revenue: "$1.2M",
        clients: "500+"
      },
      image: `${import.meta.env.BASE_URL}imagenes/abogados-panel.png`,
      category: "LAWYERS"
    },
    {
      id: 3,
      title: "Financial Reports",
      description: "Automated audit and financial reporting system. Real-time tracking of income, commissions and movements.",
      stats: {
        cases: "1,234",
        revenue: "$4.7M",
        clients: "250+"
      },
      image: `${import.meta.env.BASE_URL}imagenes/reportes-financieros.png`,
      category: "FINANCE"
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen py-20 px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="flex justify-between items-center mb-16 max-w-6xl mx-auto">
          <div>
            <h2 className="text-white text-5xl md:text-6xl font-serif mb-4">
              JurídicoNet <span className="text-[#FFA500]">in Action</span>
            </h2>
            <p className="text-white/60 text-lg">
              The platform that revolutionizes access to legal services
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-[#FFA500] transition-colors"
          >
            <X size={32} />
          </button>
        </div>

        {/* Grid de Casos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {works.map((work) => (
            <div
              key={work.id}
              className="group overflow-hidden rounded-xl border border-white/10 hover:border-[#FFA500]/50 transition-all duration-300"
            >
              {/* Image Section */}
              <div className="h-64 relative overflow-hidden bg-gradient-to-br from-gray-800 to-black">
                {work.image && (
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-end p-6">
                  <div>
                    <span className="text-[#FFA500] text-xs font-black uppercase tracking-widest mb-2 block">
                      {work.category}
                    </span>
                    <h3 className="text-white text-2xl font-serif group-hover:text-[#FFA500] transition-colors">
                      {work.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 bg-zinc-900/50 backdrop-blur-sm border-t border-white/5">
                <p className="text-white/70 text-sm mb-6 leading-relaxed">
                  {work.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/5 rounded-lg p-3 text-center border border-white/10">
                    <div className="text-[#FFA500] text-lg font-bold">
                      {work.stats.cases}
                    </div>
                    <div className="text-white/50 text-xs uppercase tracking-wide">
                      Casos
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center border border-white/10">
                    <div className="text-[#FFA500] text-lg font-bold">
                      {work.stats.revenue}
                    </div>
                    <div className="text-white/50 text-xs uppercase tracking-wide">
                      Ingresos
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center border border-white/10">
                    <div className="text-[#FFA500] text-lg font-bold">
                      {work.stats.clients}
                    </div>
                    <div className="text-white/50 text-xs uppercase tracking-wide">
                      Usuarios
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-[#FFA500]/10 to-orange-600/10 border border-[#FFA500]/30 rounded-xl p-12">
            <h3 className="text-white text-3xl font-serif mb-6">
              About <span className="text-[#FFA500]">JurídicoNet</span>
            </h3>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              JurídicoNet is the leading platform connecting clients with verified lawyers. We simplify access to legal services, allowing anyone to find the perfect lawyer for their case quickly, transparently and reliably.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center hover:border-[#FFA500]/50 transition-colors">
                <Scale className="mx-auto mb-4 text-[#FFA500]" size={32} />
                <h4 className="text-white text-2xl font-bold mb-2">5,000+</h4>
                <p className="text-white/60">Verified Lawyers</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center hover:border-[#FFA500]/50 transition-colors">
                <Users className="mx-auto mb-4 text-[#FFA500]" size={32} />
                <h4 className="text-white text-2xl font-bold mb-2">25,000+</h4>
                <p className="text-white/60">Satisfied Clients</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center hover:border-[#FFA500]/50 transition-colors">
                <Briefcase className="mx-auto mb-4 text-[#FFA500]" size={32} />
                <h4 className="text-white text-2xl font-bold mb-2">15,000+</h4>
                <p className="text-white/60">Cases Resolved</p>
              </div>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <div className="flex justify-center mt-16 max-w-6xl mx-auto">
          <button
            onClick={onClose}
            className="px-8 py-3 bg-[#FFA500] text-white font-black uppercase tracking-widest rounded-lg hover:bg-orange-600 transition-all duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
