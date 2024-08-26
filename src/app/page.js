import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  const res = await fetch('https://api.imgflip.com/get_memes');
  const product = await res.json();
  const fetchData = product.data.memes;

  return (
    <main className="relative min-h-screen p-8 bg-white">
      <h1 className="text-4xl font-bold mb-8 text-center">Meme Generator</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {fetchData.map((item) => (
         <div key={item.id} className="relative border p-4 rounded shadow h-56">
         <Link href={`/detail/${item.id}`}>
          
             <Image
               src={item.url}
               alt={item.name}
               width={400}
               height={300}
               className="object-cover w-full h-[150px]"
             />
             <div className="absolute bottom-0 left-0 right-0 bg-opacity-75 bg-black">
               <h2 className="text-sm text-white p-2 overflow-hidden text-ellipsis whitespace-nowrap">{item.name}</h2>
             </div>
           
         </Link>
       </div>
       
        ))}
      </div>
    </main>
  );
}
