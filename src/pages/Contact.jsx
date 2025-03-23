export default function Contact() {
  return (
    <section className="py-12 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Kontakt</h2>

      <div className="space-y-4 text-gray-700">
        <p>
          <strong>Ordinace Arvadent</strong>
        </p>
        <p> Kmochova, 1652/8, 73601, Havířov</p>
        <p>
          Telefon:{' '}
          <a href="tel:+420590990890" className="text-blue-600 hover:underline">
            +420 590 990 890
          </a>
        </p>
        <p>
          E-mail:{' '}
          <a
            href="mailto:dental-centrum@centrum.cz"
            className="text-blue-600 hover:underline"
          >
            dental-centrum@centrum.cz
          </a>
        </p>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Ordinační hodiny</h3>
        <div className="bg-white shadow rounded p-4 text-sm">
          <table className="w-full text-left border-collapse">
            <tbody>
              <tr>
                <td className="font-medium">Pondělí</td>
                <td>8:00–12:00</td>
                <td>13:00–16:00</td>
              </tr>
              <tr>
                <td className="font-medium">Úterý</td>
                <td>8:00–12:00</td>
                <td>13:00–16:00</td>
              </tr>
              <tr>
                <td className="font-medium">Středa</td>
                <td>8:00–12:00</td>
                <td>13:00–16:00</td>
              </tr>
              <tr>
                <td className="font-medium">Čtvrtek</td>
                <td>8:00–12:00</td>
                <td>13:00–16:00</td>
              </tr>
              <tr>
                <td className="font-medium">Pátek</td>
                <td>8:00–12:00</td>
                <td>-</td>
              </tr>
              <tr>
                <td className="font-medium">Sobota</td>
                <td colSpan="2">Zavřeno</td>
              </tr>
              <tr>
                <td className="font-medium">Neděle</td>
                <td colSpan="2">Zavřeno</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-8">
        <iframe
          title="Mapa Arvadent"
          src="https://www.google.com/maps?q=Kmochova+1652%2F8%2C+73601+Havířov&output=embed"
          className="w-full h-64 border-0 rounded shadow"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
