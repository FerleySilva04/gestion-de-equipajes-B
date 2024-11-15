import React from 'react';
import Image from 'next/image';

export const Logo: React.FC = () => (
  <div className="flex items-center justify-center">
    <Image 
      src="/images/Logo.svg" 
      alt="Logo" 
      width={256}  
      height={64} 
      className="filter invert brightness-0"
    />
  </div>
);



