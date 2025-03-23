export default function Contact() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-4xl font-bold text-blue-700 mb-12 text-center">
          Kontakt
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Kontaktní info */}
          <div className="bg-white p-8 rounded-xl shadow space-y-4 text-gray-700 text-base">
            <div>
              <p className="text-lg font-semibold text-gray-900">
                Ordinace Arvadent
              </p>
              <p>Kmochova 1652/8</p>
              <p>736 01 Havířov</p>
            </div>

            <div>
              <p>
                📞 Telefon:{' '}
                <a
                  href="tel:+420123456789"
                  className="text-blue-600 hover:underline"
                >
                  +420 123 456 789
                </a>
              </p>
              <p>
                📧 E-mail:{' '}
                <a
                  href="mailto:info@arvadent.cz"
                  className="text-blue-600 hover:underline"
                >
                  info@arvadent.cz
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Ordinační hodiny
              </h3>
              <table className="w-full text-sm">
                <tbody>
                  <tr>
                    <td>Pondělí</td>
                    <td>8:00–12:00</td>
                    <td>13:00–16:00</td>
                  </tr>
                  <tr>
                    <td>Úterý</td>
                    <td>8:00–12:00</td>
                    <td>13:00–16:00</td>
                  </tr>
                  <tr>
                    <td>Středa</td>
                    <td>8:00–12:00</td>
                    <td>13:00–16:00</td>
                  </tr>
                  <tr>
                    <td>Čtvrtek</td>
                    <td>8:00–12:00</td>
                    <td>13:00–16:00</td>
                  </tr>
                  <tr>
                    <td>Pátek</td>
                    <td>8:00–12:00</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>Sobota</td>
                    <td colSpan="2">Zavřeno</td>
                  </tr>
                  <tr>
                    <td>Neděle</td>
                    <td colSpan="2">Zavřeno</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Mapa */}
          <div className="rounded-xl overflow-hidden shadow">
            <iframe
              title="Mapa Arvadent"
              src="https://www.google.com/maps?q=Kmochova+1652%2F8%2C+73601+Havířov&output=embed"
              className="w-full h-full min-h-[400px] border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
