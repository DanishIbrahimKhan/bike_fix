export default function HeroBanner({ title, subtitle, ctaText, onCTAClick }) {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
      <p className="mb-6 text-lg">{subtitle}</p>
      <button
        onClick={onCTAClick}
        className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
      >
        {ctaText}
      </button>
    </section>
  )
}
