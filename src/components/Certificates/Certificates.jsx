function Certificates() {
  const certificates = [
    {
      title: "Cisco Certified Network Associate (CCNA)",
      issuer: "Cisco Systems",
      issued: "23 June 2026",
      valid: "23 June 2029",
      credentialId: "CSCO15240575",
      verificationCode: "1b57ceb3c4cd49c4869e273fa3e9b8ef",
      verificationUrl: "https://www.cisco.com/go/verifycertificate",
    },
  ];

  return (
    <section
      id="certificates"
      className="min-h-screen bg-[#06091c] py-20 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <p className="text-cyan-400 uppercase tracking-[6px] text-center">
          Certifications
        </p>

        <h2 className="text-5xl font-bold text-white text-center mt-4 mb-16">
          Professional Certifications
        </h2>

        <div className="space-y-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-[#0d1228] border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400 transition duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <h3 className="text-2xl font-bold text-cyan-400">
                {cert.title}
              </h3>

              <p className="text-white mt-2">
                <strong>Issued By:</strong> {cert.issuer}
              </p>

              <p className="text-gray-300 mt-2">
                <strong>Issued:</strong> {cert.issued}
              </p>

              <p className="text-gray-300">
                <strong>Valid Until:</strong> {cert.valid}
              </p>

              <p className="text-gray-300 mt-2 break-all">
                <strong>Cisco ID:</strong> {cert.credentialId}
              </p>

              <p className="text-gray-300 break-all">
                <strong>Verification Code:</strong> {cert.verificationCode}
              </p>

              <div className="mt-8">
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 rounded-xl transition"
                >
                  Verify Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;