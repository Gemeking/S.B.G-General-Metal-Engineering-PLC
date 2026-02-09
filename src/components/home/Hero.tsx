export default function Hero() {
  return (
    <section>
      {/* Background */}
      <div>
        <div />
        <div />
      </div>

      {/* Content */}
      <div>
        {/* Logo */}
        <img
          src="/assets/images/company-logo.png"
          alt="S.B.G"
        />

        {/* Title */}
        <h1>
          <span>S.B.G</span>
          <span>METAL ENGINEERING</span>
        </h1>

        {/* Divider */}
        <div />

        {/* Subtitle */}
        <p>
          Robotic Manufacturing • Precision Fabrication • Industrial Innovation
        </p>

        {/* Stats */}
        <div>
          {[
            ["15+", "Years Experience"],
            ["500+", "Projects"],
            ["ISO", "Certified"],
            ["24/7", "Support"],
          ].map(([num, label]) => (
            <div key={label}>
              <div>{num}</div>
              <div>{label}</div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div>
          <button>GET QUOTE</button>
          <button>VIEW PROJECTS</button>
        </div>
      </div>
    </section>
  );
}
