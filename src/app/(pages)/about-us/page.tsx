import { ourServices } from "@/mocks/ourServices";
import Image from "next/image";

const AboutUsPage = () => {
  return (
    <>
      <div className="py-10 px-3 xl:px-0 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
          <p className="text-sm text-slate-700">A Brief History</p>
        </div>
        <div className="py-5 flex flex-col lg:flex-row items-center gap-5">
          <div className="flex-1 w-full">
            <Image
              src="/images/about-us-bg.jpg"
              alt="about the shop"
              height={600}
              width={600}
              className="md:aspect-video lg:aspect-square object-cover w-full"
            />
          </div>
          <div className="flex-1">
            <div className="bg-white lg:p-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                  Our Story
                </h2>
                <p className="text-gray-600 mb-6">
                  Welcome to SuperShop, your number one source for all things
                  grocery. We are dedicated to giving you the very best of
                  products, with a focus on quality, customer service, and
                  uniqueness.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                  Our Mission
                </h2>
                <p className="text-gray-600 mb-6">
                  Our mission is to provide high-quality products that meet the
                  needs of our diverse customer base. We strive to offer
                  exceptional customer service and create a shopping experience
                  that is both convenient and enjoyable.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                  Our Team
                </h2>
                <p className="text-gray-600">
                  Our team is made up of dedicated professionals who are
                  passionate about what they do. From our knowledgeable store
                  associates to our friendly customer service representatives,
                  we work together to ensure that you have the best shopping
                  experience possible.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center py-10 lg:py-20">
          <h1 className="text-4xl font-bold text-gray-800">What we provide?</h1>
          <p className="text-sm text-slate-700">You can get these from us</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {ourServices.map((service) => (
            <div
              key={service.title}
              className="border rounded-md bg-white hover:shadow-md cursor-pointer px-6 py-10 flex flex-col gap-3 items-center duration-150 transition-all"
            >
              <Image src={service.icon} alt="Icon" height={100} width={100} />
              <h3 className="text-lg font-bold">{service.title}</h3>
              <p className="text-slate-700 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-4 my-20">
          <div className="flex-1">
            <Image
              src="/images/performance.png"
              alt="performance"
              height={500}
              width={600}
            />
          </div>
          <div className="flex-1">
            <h4 className="text-green-400 text-lg font-bold">
              Our Performance
            </h4>
            <h2 className="text-5xl font-bold my-5">
              Your Partner for e-commerce grocery solution
            </h2>
            <p className="text-slate-700">
              Ed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto Pitatis et
              quasi architecto beatae vitae dicta sunt explicabo.
              <br />
              <br />
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia
            </p>
          </div>
        </div>
      </div>
      <div className="py-5 flex flex-wrap lg:flex-nowrap justify-evenly items-center gap-8 min-h-52 my-10 bg-green-400 text-white">
        <div className="flex flex-col gap-2 items-center">
          <h2 className="text-5xl font-bold">2+</h2>
          <p className="text-slate-50 text-lg">Glorious Years</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <h2 className="text-5xl font-bold">12K+</h2>
          <p className="text-slate-50 text-lg">Products</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <h2 className="text-5xl font-bold">32+</h2>
          <p className="text-slate-50 text-lg">Brands</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <h2 className="text-5xl font-bold">50+</h2>
          <p className="text-slate-50 text-lg">Categories</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <h2 className="text-5xl font-bold">20K+</h2>
          <p className="text-slate-50 text-lg">Sales</p>
        </div>
      </div>

      <div className="py-10 px-3 xl:px-0 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-7 my-10">
        <div>
          <h4 className="text-green-400 text-lg font-bold">Our Team</h4>
          <h2 className="text-5xl font-bold my-5">Meet Our Expert Team</h2>
          <p className="text-slate-700">
            Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa
            dolor imperdiet neccon sequata congue idsem. Maecenas malesuada
            faucibus finibus.
            <br />
            <br />
            Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa
            dolor imperdiet neccon sequata congue idsem. Maecenas malesuada
            faucibus finibus.
          </p>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/images/team-1.png"
              alt="Team"
              height={1000}
              width={500}
              className="w-full h-full"
            />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-5 w-[75%] flex flex-col gap-2 py-4 items-center z-10 bg-white border rounded-md">
            <h3 className="text-lg font-semibold">Jerine D.</h3>
            <p className="text-slate-700">Co-Founder & CEO</p>
          </div>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/images/team-2.png"
              alt="Team"
              height={1000}
              width={500}
              className="w-full h-full"
            />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-5 w-[75%] flex flex-col gap-2 py-4 items-center z-10 bg-white border rounded-md">
            <h3 className="text-lg font-semibold">Helena B.</h3>
            <p className="text-slate-700">Manager</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
