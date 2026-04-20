export default function Home() {
  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold mb-6">Welcome to Yahakeem</h1>
      <p className="text-lg text-gray-600 mb-8">
        A non-profit open-source platform combining a blog and doctor directory.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border p-6 rounded-lg bg-blue-50">
          <h2 className="text-2xl font-bold mb-3">📝 Blog</h2>
          <p>Read health tips, medical updates, and informative articles.</p>
          <a href="/blog" className="mt-4 inline-block text-blue-600 font-bold">Read Blog →</a>
        </div>
        
        <div className="border p-6 rounded-lg bg-green-50">
          <h2 className="text-2xl font-bold mb-3">👨‍⚕️ Doctor Directory</h2>
          <p>Find qualified doctors by specialty and location.</p>
          <a href="/doctors" className="mt-4 inline-block text-green-600 font-bold">Search Doctors →</a>
        </div>
        
        <div className="border p-6 rounded-lg bg-purple-50">
          <h2 className="text-2xl font-bold mb-3">🔧 Admin Panel</h2>
          <p>Manage blog posts and doctor profiles.</p>
          <a href="/admin" className="mt-4 inline-block text-purple-600 font-bold">Admin Login →</a>
        </div>
      </div>
    </div>
  )
}