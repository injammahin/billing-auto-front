import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <button>
        {" "}
        <a href="user/registrations">registrations</a>
      </button>
      <br />
      <button>
        {" "}
        <a href="user/login">login</a>
      </button>
    </div>
  );
}
