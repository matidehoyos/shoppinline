import Image from "next/image";

const Loader = () => {
    return (
      <div className="w-full h-screen pt-[120px] md:pt-[160px] mx-auto flex justify-center items-start bg-gradient-to-r from-gray-200 to-gray-500">
      <div className="w-[50%] md:w-[30%]">
        <Image 
          src="/bgHeader.png" 
          alt="Logo Shoppify" 
          width={900} 
          height={400} 
          className="object-cover"
        />
      </div>
    </div>
     
    );
  };
  
  export default Loader;