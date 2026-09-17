import { useState, useEffect, useRef } from "react";

// Optimized WebP Images (under 120KB each, vs 8-9MB originals)
import pcAccountingImg from "../../assets/images/optimized/pc_accounting_firm.webp";
import schoolRackImg from "../../assets/images/optimized/school_it_rack.webp";
import dlinkSwitchImg from "../../assets/images/optimized/dlink_switch_setup.webp";
import laptopUpgradeImg from "../../assets/images/optimized/laptop_diagnostics.webp";
import officeNetworkImg from "../../assets/images/optimized/small_office_network.webp";
import tallyServerImg from "../../assets/images/optimized/tally_server_setup.webp";

const curatedFieldEvidence = [
  {
    id: "10-pc-accounting",
    title: "10-PC Workstation Fleet Deployment",
    client: "Corporate Accounting Office",
    category: "Workstation Deployment",
    badge: "On-Site Multi-PC Setup",
    image: pcAccountingImg,
    width: 903,
    height: 1200,
    aspectRatio: "3/4",
    caption:
      "On-site hardware assembly, Cat6 cable dressing, Windows 11 provisioning, domain joining, SMB share mapping, and network multifunction printer setup for 10 accounting staff desks."
  },
  {
    id: "school-rack",
    title: "School IT Lab Network Rack Cabling",
    client: "Educational Institution",
    category: "Structured Cabling",
    badge: "Rack & Patch Panel",
    image: schoolRackImg,
    width: 1200,
    height: 541,
    aspectRatio: "16/9",
    caption:
      "Mounted 6U equipment wall rack, dressed structured Cat6 cabling through protective trunking, punched down 24-port keystone patch panels to T568B standards, and tested continuity."
  },
  {
    id: "dlink-switch",
    title: "D-Link 16-Port Gigabit Switch Setup",
    client: "Commercial Office Network",
    category: "Networking & Switching",
    badge: "16-Port Switch Setup",
    image: dlinkSwitchImg,
    width: 903,
    height: 1200,
    aspectRatio: "3/4",
    caption:
      "On-site installation, patch cord routing, port diagnostics, and link status verification for a 16-port D-Link DGS-1016D Gigabit switch expanding local office LAN capacity."
  },
  {
    id: "laptop-ram-upgrade",
    title: "Laptop Hardware Diagnostics & Servicing",
    client: "Service Desk Operations",
    category: "Hardware Break-Fix",
    badge: "Component Diagnostics",
    image: laptopUpgradeImg,
    width: 1200,
    height: 541,
    aspectRatio: "16/9",
    caption:
      "Motherboard component inspection, cooling fan cleaning, thermal repasting, and DDR4/DDR5 RAM and NVMe M.2 SSD upgrades to resolve thermal throttling and system boot issues."
  },
  {
    id: "tally-server",
    title: "Dedicated Tally Prime Multi-User Server",
    client: "Corporate Client Workstations",
    category: "Server Operations",
    badge: "Multi-User Data Host",
    image: tallyServerImg,
    width: 527,
    height: 1200,
    aspectRatio: "3/4",
    caption:
      "Configured dedicated Core i5 host platform to centralize multi-user Tally accounting data, established static IP binding, restricted SMB network access permissions, and automated backup routines."
  },
  {
    id: "small-office-net",
    title: "Small Office Network & CCTV Infrastructure",
    client: "Commercial Workspace",
    category: "Network & Surveillance",
    badge: "LAN & 4K CCTV Setup",
    image: officeNetworkImg,
    width: 1200,
    height: 541,
    aspectRatio: "16/9",
    caption:
      "Structured Cat6 cable drops, PoE network switch provisioning, wireless access point placement, and 16-channel 4K IP security camera setup with NVR recording schedules."
  }
];

function Gallery() {
  const [activeMediaItem, setActiveMediaItem] = useState(null);
  const triggerRef = useRef(null);
  const modalRef = useRef(null);

  const handleCloseModal = () => {
    setActiveMediaItem(null);
    if (triggerRef.current) {
      triggerRef.current.focus();
    }
  };

  const handleOpenModal = (item, e) => {
    triggerRef.current = e.currentTarget;
    setActiveMediaItem(item);
  };

  // Escape key listener and focus management
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && activeMediaItem) {
        handleCloseModal();
      }
    };

    if (activeMediaItem) {
      window.addEventListener("keydown", handleKeyDown);
      setTimeout(() => {
        if (modalRef.current) {
          const closeBtn = modalRef.current.querySelector("button");
          if (closeBtn) closeBtn.focus();
        }
      }, 50);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeMediaItem]);

  const handleCardKeyDown = (e, item) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleOpenModal(item, e);
    }
  };

  return (
    <section id="gallery" className="bg-[#050817] px-4 sm:px-6 py-20 border-t border-cyan-500/10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <span className="rounded-full bg-cyan-400/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300 border border-cyan-400/25">
            Field Evidence
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
            Authentic On-Site <span className="text-cyan-400">Work Photos</span>
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-gray-300 text-sm sm:text-base">
            Verified photographic evidence of workstation rollouts, structured network cabling, switch installations, server configuration, and hardware diagnostics.
          </p>
        </div>

        {/* Curated 6 High-Value Field Works */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {curatedFieldEvidence.map((item) => (
            <div
              key={item.id}
              role="button"
              tabIndex={0}
              aria-haspopup="dialog"
              aria-label={`View photo and work summary for ${item.title}`}
              onClick={(e) => handleOpenModal(item, e)}
              onKeyDown={(e) => handleCardKeyDown(e, item)}
              className="group cursor-pointer rounded-2xl border border-cyan-500/20 bg-[#0d1228] overflow-hidden transition duration-200 hover:border-cyan-400/50 flex flex-col justify-between text-left"
            >
              <div className="relative h-52 overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-102"
                  loading="lazy"
                  width={item.width}
                  height={item.height}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1228] via-transparent to-transparent opacity-80" />
                <span className="absolute top-3 right-3 rounded bg-[#050817]/90 px-2 py-0.5 text-[10px] font-bold text-cyan-300 uppercase tracking-wider border border-cyan-400/25">
                  {item.badge}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">{item.category}</span>
                  <h3 className="mt-1 text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-gray-300 text-xs sm:text-sm line-clamp-3">
                    {item.caption}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-cyan-500/10 text-xs font-semibold text-cyan-400 flex items-center justify-between">
                  <span>View Full Photo &amp; Details</span>
                  <span aria-hidden="true">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accessible Photo Lightbox Modal */}
      {activeMediaItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
          onClick={handleCloseModal}
        >
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="gallery-modal-title"
            className="relative max-w-3xl w-full rounded-2xl border border-cyan-500/30 bg-[#0d1228] p-5 sm:p-6 shadow-2xl text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-cyan-500/15">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">{activeMediaItem.client}</span>
                <h3 id="gallery-modal-title" className="text-lg sm:text-xl font-bold text-white">
                  {activeMediaItem.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={handleCloseModal}
                aria-label="Close photo preview"
                className="text-gray-300 hover:text-white h-9 w-9 flex items-center justify-center rounded-lg bg-slate-800 border border-slate-700 font-bold text-base flex-shrink-0"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 rounded-xl overflow-hidden max-h-[55vh] bg-black flex items-center justify-center border border-cyan-500/20">
              <img
                src={activeMediaItem.image}
                alt={activeMediaItem.title}
                className="w-full max-h-[52vh] object-contain"
                loading="lazy"
              />
            </div>

            <div className="mt-4 bg-[#06091c] p-4 rounded-xl border border-cyan-500/15">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">{activeMediaItem.badge}</span>
                <span className="text-gray-500 text-xs">•</span>
                <span className="text-xs text-gray-400 font-medium">{activeMediaItem.category}</span>
              </div>
              <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
                {activeMediaItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
