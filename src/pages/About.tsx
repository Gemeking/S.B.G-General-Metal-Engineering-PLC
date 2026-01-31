import Layout from "../components/layout/Layout";

export default function About() {
  return (
    <Layout>
    <section className="bg-gray-100 text-gray-800">
      {/* Header */}
      <div className="bg-primary text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            About Us
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Strong foundations, precision engineering, and a legacy of excellence
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-primary">
            S.B.G General Metal Engineering PLC
          </h2>

          <p className="mb-4 leading-relaxed">
            <span className="font-semibold">
              S.B.G General Metal Engineering PLC
            </span>{" "}
            is a professional construction and metal manufacturing company
            established with the vision of delivering durable, reliable, and
            high-quality engineering solutions.
          </p>

          <p className="mb-4 leading-relaxed">
            The company was founded by{" "}
            <span className="font-semibold">
              Mr. Solomon Begashaw Gurmessa
            </span>{" "}
            in <span className="font-semibold">November 2004 G.C</span>{" "}
            (November 1997 E.C), driven by a strong commitment to excellence,
            innovation, and integrity in the metal engineering and construction
            industry.
          </p>

          <p className="leading-relaxed">
            Since its establishment, S.B.G has been actively engaged in steel
            fabrication, industrial construction, and custom metal works,
            supporting factories, warehouses, and infrastructure projects with
            precision and professionalism.
          </p>
        </div>

        {/* Stats / Highlights */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <h3 className="text-4xl font-extrabold text-accent mb-2">
              20+
            </h3>
            <p className="font-semibold">Years of Experience</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <h3 className="text-4xl font-extrabold text-accent mb-2">
              100+
            </h3>
            <p className="font-semibold">Completed Projects</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <h3 className="text-4xl font-extrabold text-accent mb-2">
              Quality
            </h3>
            <p className="font-semibold">Driven Engineering</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <h3 className="text-4xl font-extrabold text-accent mb-2">
              Trust
            </h3>
            <p className="font-semibold">Built Over Time</p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Our Mission
            </h3>
            <p className="leading-relaxed">
              To provide reliable, high-quality metal engineering and
              construction solutions that meet international standards while
              exceeding client expectations.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Our Vision
            </h3>
            <p className="leading-relaxed">
              To become one of the leading metal engineering and construction
              companies by continuously innovating, growing expertise, and
              building long-term partnerships.
            </p>
          </div>
        </div>
      </div>
    </section>
    </Layout>
  );
}
