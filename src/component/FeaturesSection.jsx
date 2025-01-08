import { FaThumbsUp } from "react-icons/fa";
import { FaWatchmanMonitoring } from "react-icons/fa6";
import { TbMoodHappy } from "react-icons/tb";
import { FaAmazonPay } from "react-icons/fa";

const FeaturesSection = () => {
    const features = [
      {
        icon: <FaThumbsUp className="text-yellow-300"></FaThumbsUp>, // Use an actual icon component or image if needed
        title: "Service Guarantee",
        description:
          "The Guarantee of technicians quickly and efficiently deliver all services.",
      },
      {
        icon: <FaWatchmanMonitoring className="text-red-600"></FaWatchmanMonitoring>,
        title: "24 x 7 Support",
        description:
          "24x7 tech support is one of the best online support services in the leading generation.",
      },
      {
        icon: <TbMoodHappy className="text-yellow-300"/>,
        title: "Satisfaction Guaranteed",
        description:
          "A small but growing number of companies offer customers an unconditional guarantee of satisfaction.",
      },
      {
        icon: <FaAmazonPay className="text-red-600"/>,
        title: "Easy Payment",
        description:
          "Available cash on delivery is a type of transaction in which payment for a good is made at the time of delivery.",
      },
    ];
  
    return (
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default FeaturesSection;
  