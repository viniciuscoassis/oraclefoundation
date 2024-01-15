'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const Carousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const itemWidth = 240; // Largura do item
    const scrollSpeed = 3; // Pixels por intervalo

    const interval = setInterval(() => {
      if (scrollRef.current) {
        let newScrollLeft = scrollRef.current.scrollLeft + scrollSpeed;

        // Se chegar ao final, recomeça do início
        if (newScrollLeft >= scrollRef.current.scrollWidth - scrollRef.current.clientWidth) {
          newScrollLeft = 0;
        }

        scrollRef.current.scrollLeft = newScrollLeft;
      }
    }, 30); // Intervalo para movimentar o scroll

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={scrollRef} className="flex overflow-x-scroll py-5" style={{
        scrollbarWidth: 'none', /* For Firefox */
        msOverflowStyle: 'none', /* For Internet Explorer 10+ */
      }}>
      {[...Array(14)].map((_, i) => (
        <div key={i} className="flex-none w-60 h-60 mx-2 bg-gray-500 rounded-lg">
          <Image
            width={240}
            height={240}
            src={`/oracles/${i + 1}.png` || `/oracles/${i + 1}.JPG`}
            alt={`NFT ${i + 1}`}
            className="rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
