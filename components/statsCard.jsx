export default function statsCard({ title, value }) {
  return (
    <div className="bg-white shadow p-4 rounded">
      <h3 className="text-gray-500">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}