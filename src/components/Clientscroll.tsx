'use client';

const clients = [
  { name: 'Dubai Municipality', logo: '/clients/dubai.png' },
  { name: 'Springer Nature', logo: '/clients/springer.png' },
  { name: 'KASP Securities', logo: '/clients/kasp.png' },
  { name: 'Royal IHC', logo: '/clients/ihc.png' },
  { name: 'WeatherFord', logo: '/clients/weather.png' },
  { name: 'Trane Technologies', logo: '/clients/trane.png' },
];

export default function ClientMarquee() {
  return (
    <div className="bg-[#0a0a0a] py-12  overflow-hidden shadow-[0_0_25px_rgba(0,196,255,0.4)]">
      <div className="whitespace-nowrap animate-marquee flex items-center gap-16">
        {clients.concat(clients).map((client, index) => (
          <div key={index} className="inline-block min-w-[140px] relative">
            <img
              src={client.logo}
              alt={client.name}
              className="h-12 object-contain opacity-70 hover:opacity-100 transition duration-300 filter brightness-110 drop-shadow-[0_0_10px_rgba(0,196,255,0.4)] hover:drop-shadow-[0_0_15px_rgba(255,0,212,0.6)]"
            />
            <div className="absolute inset-0 border-2 border-[#00C4FF]/50 rounded-md pointer-events-none" />
            <div className="absolute inset-0 bg-[#00C4FF]/10 rounded-md pointer-events-none" />
          </div>
        ))}
      </div>
    </div>
  );
}