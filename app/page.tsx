import Image from "next/image";

export default function Home() {

  return (
    <main className="main">
      <div>
        <img
          className="logo "
          src="https://cdn2.enuygun.com/media/lib/uploads/image/logo-kaynagi-33816.jpeg"
          alt="Next.js Logo"         
        />
      </div>

      <div >
        <a
          href="/mixmatch"
          rel="noopener noreferrer"
        >
          <h2>
            Join The Best Employee Voting !{" "}
            <span >
              -&gt;
            </span>
          </h2>
          <p >
            We Select The Best Employee In This Month by Unlimited Vote
          </p>
        </a>
      </div>
    </main>
  );
}
