export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center h-[80vh] bg-gradient-to-br from-blue-50 via-white to-teal-100 rounded-xl shadow-lg p-8">
      <div className="mb-6 animate-fade-in">
        <img
          src="/assets/profile.jpg"
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-black-300 shadow-md"
        />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-2 text-center drop-shadow-lg">
        From Chemical Engineer to Full Stack Developer: Bridging Science & Software
      </h1>
    </section>
  );
}