
export default function Dashboard() {
  const data = [
    { keyword: 'birthday boy shirt', volume: '22,300', competition: 'Yüksek', idea: 'Dino temalı yaş tişörtü' },
    { keyword: 'mom life svg', volume: '15,000', competition: 'Orta', idea: 'Retro yazı stili' },
    { keyword: 'truck toddler shirt', volume: '9,700', competition: 'Düşük', idea: 'Kamyonlu 2 yaş tshirt' },
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-2xl font-bold mb-6">📊 EtsyRadar - Günlük Trendler</h1>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border-b-2 p-2">🔑 Keyword</th>
            <th className="border-b-2 p-2">📈 Volume</th>
            <th className="border-b-2 p-2">⚔️ Rekabet</th>
            <th className="border-b-2 p-2">💡 AI Fikir</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              <td className="border-b p-2">{item.keyword}</td>
              <td className="border-b p-2">{item.volume}</td>
              <td className="border-b p-2">{item.competition}</td>
              <td className="border-b p-2">{item.idea}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
