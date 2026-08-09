const galleryItems = [
  {
    title: "Desktop & Laptop Repair",
    description: "Hardware diagnostics, upgrades, Windows installation, and performance troubleshooting.",
  },
  {
    title: "Network Installations",
    description: "Router, switch, Wi-Fi, and structured-cabling setup for reliable connectivity.",
  },
  {
    title: "CCTV Systems",
    description: "Camera placement, DVR/NVR configuration, cabling, and fault diagnosis.",
  },
  {
    title: "Printer Support",
    description: "Printer setup, preventive maintenance, consumable replacement, and repair.",
  },
];

function Gallery() {
  return (
    <section id="gallery" className="bg-[#06091c] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-center uppercase tracking-[6px] text-cyan-400">Gallery</p>
        <h2 className="mt-4 text-center text-5xl font-bold text-white">Hands-On IT Work</h2>
        <p className="mx-auto mt-6 max-w-2xl text-center leading-7 text-gray-300">
          A snapshot of the support, networking, repair, and installation work I deliver.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item) => (
            <article key={item.title} className="rounded-2xl border border-cyan-500/20 bg-[#0d1228] p-6 transition hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-2xl text-cyan-400">⌘</div>
              <h3 className="text-xl font-bold text-cyan-400">{item.title}</h3>
              <p className="mt-3 leading-7 text-gray-300">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
