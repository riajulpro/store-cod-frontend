import Image from "next/image";

const AboutUsPage = () => {
  return (
    <div className="py-10 px-3 xl:px-0 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        A Brief History About Us
      </h1>
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
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Our Story
            </h2>
            <p className="text-gray-600 mb-6">
              Welcome to SuperShop, your number one source for all things
              grocery. We are dedicated to giving you the very best of products,
              with a focus on quality, customer service, and uniqueness.
            </p>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-6">
              Our mission is to provide high-quality products that meet the
              needs of our diverse customer base. We strive to offer exceptional
              customer service and create a shopping experience that is both
              convenient and enjoyable.
            </p>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Our Team
            </h2>
            <p className="text-gray-600">
              Our team is made up of dedicated professionals who are passionate
              about what they do. From our knowledgeable store associates to our
              friendly customer service representatives, we work together to
              ensure that you have the best shopping experience possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
