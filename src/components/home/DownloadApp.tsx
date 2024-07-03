import AppstoreDownload from "@/icons/AppstoreDownload";
import Link from "next/link";
import GooglePlayDownload from "../../icons/GooglePlayDownload";

const DownloadApp = () => {
  return (
    <section
      className="flex items-center justify-between bg-gray-100 p-8 my-[50px]"
      style={{
        backgroundImage: `url("/images/downloadBanner.png")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-md">
        <h2 className="text-4xl font-bold mb-4">
          Make your online shop easier with our mobile app
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          We offer high-quality films and the best documentary selection, and
          the ability to browse alphabetically and by genre
        </p>
        <div className="flex space-x-4">
          <Link
            href="https://www.apple.com/app-store/"
            target="_blank"
            className="w-[130px] h-[44px] center overflow-hidden"
            rel="noopener noreferrer"
          >
            <GooglePlayDownload />
          </Link>
          <Link
            href="https://play.google.com/store"
            target="_blank"
            className="w-[130px] h-[44px] center overflow-hidden"
            rel="noopener noreferrer"
          >
            {" "}
            <AppstoreDownload />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
