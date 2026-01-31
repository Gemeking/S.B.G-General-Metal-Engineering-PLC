const services = [
  "Steel Structure Fabrication",
  "Industrial Construction",
  "Metal Works & Welding",
  "Factory & Warehouse Installation",
];

export default function Services() {
  return (
    <section>
      <h3>Our Services</h3>
      <ul>
        {services.map((service) => (
          <li key={service}>{service}</li>
        ))}
      </ul>
    </section>
  );
}
