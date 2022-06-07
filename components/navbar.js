import Image from "next/image";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/League_of_Legends_2019_vector.svg/1200px-League_of_Legends_2019_vector.svg.png"
          alt="logo"
          height={50}
          width={120}
        />
      </div>
    </div>
  );
}
