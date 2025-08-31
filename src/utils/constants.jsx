// ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top-left corner of the window
  }, [pathname]); // Re-run effect whenever the pathname changes

  return null; // This component doesn't render any UI
}

export const SERVICE = new Map([
  [
    "storage",
    {
      searchText: "Find Nearby Storage Space for Everything",
      categories: [
        {
          t: "Warehouses",
          b: ["CCTV", "24/7", "Loading Bay"],
          description:
            "Ideal for business inventory management, order fulfilment, and shared storage spaces.",
        },
        {
          t: "Independent Rooms",
          b: ["Lockable", "Ventilated", "Safe"],
          description:
            "Private storage rooms with easy access for your convenience.",
        },
        {
          t: "Shared Spaces",
          b: ["Affordable", "Flexible", "Verified"],
          description:
            "Flexible, on-demand storage where you pay only for the space you use.",
        },
      ],
      frequentlyBookedSpaces: [
        {
          id: 1,
          title: "Imperial — Kharadi",
          type: "Storage Room",
          desc: "Clean, ventilated, secure storage with CCTV",
          badges: ["CCTV", "24/7", "Ground Floor"],
          price: 2600,
          deposit: 500,
        },
        {
          id: 2,
          title: "Your Space Doctor LLP",
          type: "Storage Room",
          desc: "Clean, ventilated, secure storage with CCTV",
          badges: ["CCTV", "24/7", "Ground Floor", "Lock and Key"],
          price: 3688,
          deposit: 700,
        },
        {
          id: 3,
          title: "Ease my Storage",
          type: "Storage Room",
          desc: "Clean, ventilated, secure storage with CCTV",
          badges: ["CCTV", "24/7", "Ground Floor"],
          price: 2581,
          deposit: 500,
        },
      ],
    },
  ],
  [
    "parking",
    {
      searchText: "Find Secure & Convenient Parking Spaces",
      categories: [
        {
          t: "Residential Parking",
          b: ["CCTV", "24/7", "Loading Bay"],
          description:
            "Ideal for those seeking nearby, hassle-free parking solutions.",
          imageUrl:
            "https://media.gettyimages.com/id/175482865/photo/a-landscape-view-of-the-exterior-of-a-new-apartment-complex.jpg?s=612x612&w=0&k=20&c=duJPUxkhxkzYubjv399fq0Bh40lzmc9jyR28YYjq58w=",
        },
        {
          t: "Commercial Parking",
          b: ["Lockable", "Ventilated", "Safe"],
          description:
            "Secure, easily accessible parking with flexible operational hours.",
          imageUrl:
            "https://media.gettyimages.com/id/1469157229/photo/city-parking-lot.jpg?s=612x612&w=0&k=20&c=qkSYfwVxkDVxOD_YZCDZA_TcGBtA-dWsgGYvfu4eSrA=",
        },
        {
          t: "Public Parking Spaces",
          b: ["Affordable", "Flexible", "Verified"],
          description:
            "Convenient and accessible parking options for all needs.",
          imageUrl:
            "https://media.gettyimages.com/id/519515713/photo/aerial-view-of-people-walking-in-parking-lot.jpg?s=612x612&w=0&k=20&c=IeWPXm2TJZnGhqx_W2Yyk4DQAZwrlEoIrWQXgp4yKiY=",
        },
      ],
      frequentlyBookedSpaces: [
        {
          id: 1,
          title: "Covered parking space in Madhav Puram, Tirupati, 517507",
          img: "https://aaxpublic.s3.ap-south-1.amazonaws.com/8a9c8258ed50115082a0aa16b8ff8f73b448e067/2300992b4ab684850009d7ef21a22d45fdd4d4536795.jpg",
          price: 259,
          unit: "₹ 259 /day/space",
          sub: "1 parkings",
          badge: "Covered Parking",
        },
        {
          id: 2,
          title: "Covered parking space in Madhav Puram, Tirupati, 517507",
          img: "https://aaxpublic.s3.ap-south-1.amazonaws.com/7d7c3a476ad4f0e384790ddd1b853799d386bce5/13551d7e408ffd6c676663dabc20f16e24beafd11389.jpg",
          price: 194,
          unit: "₹ 194 /day/space",
          sub: "1 parkings",
          badge: "Covered Parking",
        },
      ],
      howItWorksSteps: [
        {
          step: 1,
          title: "Search & Select a Parking Spot",
          description: "Browse & compare options.",
          icon: "https://aadefault.s3.ap-south-1.amazonaws.com/icons/home-landing/Search-Select-parking-spot-icon.svg",
        },
        {
          step: 2,
          title: "Book online",
          description: "Secure your parking in few clicks.",
          icon: "https://aadefault.s3.ap-south-1.amazonaws.com/icons/home-landing/Book-online-icon.svg",
        },
        {
          step: 3,
          title: "Park with Ease",
          description: "Drive in and park hassle-free.",
          icon: "https://aadefault.s3.ap-south-1.amazonaws.com/icons/home-landing/Park-with-ease-icon.svg",
        },
      ],
      whyChooseUs: [
        {
          title: "Flexible Storage Plans",
          description: "Choose short or long-term as per your needs.",
          imgUrl:
            "https://aadefault.s3.ap-south-1.amazonaws.com/icons/home-landing/Flexible-Parking-Plans-img.jpg",
        },
        {
          title: "Wide geographic presence",
          description: "Multiple cities and micro-locations.",
          imgUrl:
            "https://aadefault.s3.ap-south-1.amazonaws.com/icons/home-landing/Nearby-&-convenient-img.jpg",
        },
        {
          title: "Trusted & Verified Users",
          description: "KYC and strong safety policies.",
          imgUrl:
            "https://aadefault.s3.ap-south-1.amazonaws.com/icons/home-landing/verified-hosts-img.jpg",
        },
      ],
      totalParking: [
        {
          id: 1,
          title: "Covered parking space in Madhav Puram, Tirupati, 517507",
          img: "https://aaxpublic.s3.ap-south-1.amazonaws.com/8a9c8258ed50115082a0aa16b8ff8f73b448e067/2300992b4ab684850009d7ef21a22d45fdd4d4536795.jpg",
          price: 259,
          unit: "₹ 259 /day/space",
          sub: "1 parkings",
          badge: "Covered Parking",
        },
        {
          id: 2,
          title: "Covered parking space in Madhav Puram, Tirupati, 517507",
          img: "https://aaxpublic.s3.ap-south-1.amazonaws.com/7d7c3a476ad4f0e384790ddd1b853799d386bce5/13551d7e408ffd6c676663dabc20f16e24beafd11389.jpg",
          price: 194,
          unit: "₹ 194 /day/space",
          sub: "1 parkings",
          badge: "Covered Parking",
        },
      ],
    },
  ],
  [
    "luggage",
    {
      searchText: "Store Your Luggage Hassle-Free, Anytime, Anywhere !",
      categories: [
        {
          t: "Warehouses",
          b: ["CCTV", "24/7", "Loading Bay"],
          description:
            "Ideal for business inventory management, order fulfilment, and shared storage spaces.",
        },
        {
          t: "Independent Rooms",
          b: ["Lockable", "Ventilated", "Safe"],
          description:
            "Private storage rooms with easy access for your convenience.",
        },
        {
          t: "Shared Spaces",
          b: ["Affordable", "Flexible", "Verified"],
          description:
            "Flexible, on-demand storage where you pay only for the space you use.",
        },
      ],
      frequentlyBookedSpaces: [
        {
          id: 1,
          title: "Imperial — Kharadi",
          type: "Storage Room",
          desc: "Clean, ventilated, secure storage with CCTV",
          badges: ["CCTV", "24/7", "Ground Floor"],
          price: 2600,
          deposit: 500,
        },
        {
          id: 2,
          title: "Your Space Doctor LLP",
          type: "Storage Room",
          desc: "Clean, ventilated, secure storage with CCTV",
          badges: ["CCTV", "24/7", "Ground Floor", "Lock and Key"],
          price: 3688,
          deposit: 700,
        },
        {
          id: 3,
          title: "Ease my Storage",
          type: "Storage Room",
          desc: "Clean, ventilated, secure storage with CCTV",
          badges: ["CCTV", "24/7", "Ground Floor"],
          price: 2581,
          deposit: 500,
        },
      ],
    },
  ],
]);

export const CITIES = [
  {
    city: "Pune",
    imageUrl:
      "https://aadefault.s3.ap-south-1.amazonaws.com/icons/home-landing/Pune-book-space.png",
    totalSpace: "577",
  },
  {
    city: "Mumbai",
    imageUrl:
      "https://aadefault.s3.ap-south-1.amazonaws.com/icons/home-landing/Mumbai-book-space.png",
    totalSpace: "128",
  },
  {
    city: "Bengaluru",
    imageUrl:
      "https://aadefault.s3.ap-south-1.amazonaws.com/icons/home-landing/Bengluru-book-space.png",
    totalSpace: "186",
  },
  {
    city: "Delhi",
    imageUrl:
      "https://aadefault.s3.ap-south-1.amazonaws.com/icons/home-landing/Delhi-book-space.png",
    totalSpace: "123",
  },
  {
    city: "Chennai",
    imageUrl:
      "https://aadefault.s3.ap-south-1.amazonaws.com/icons/home-landing/Chennai-book-space.png",
    totalSpace: "140",
  },
];

//This is the test functions mimick the backend calls

export function getParkingSpots(
  location,
  startDate,
  endDate,
  vehicleType,
  parkingSpaceType,
  facilityType,
) {
  // if()
  const res = test.filter((item) => {
    if (
      item.address
        .toLowerCase()
        .split(/[ ,.]+/)
        .includes(location.toLowerCase()) &&
      vehicleType.every((vt) =>
        item.vehicleTypes.some(
          (type) => type.toLowerCase() === vt.toLowerCase(),
        ),
      ) &&
      parkingSpaceType.every((pst) =>
        item.parkingSpaceType.some(
          (type) => type.toLowerCase() === pst.toLowerCase(),
        ),
      ) &&
      facilityType.every((ft) =>
        item.facilityType.some(
          (type) => type.toLowerCase() === ft.toLowerCase(),
        ),
      )
    ) {
      // console.log("items vehicleTypes : " + item.vehicleTypes);
      // console.log("items parkingType : " + item.parkingSpaceType);
      // console.log("items facilityType : " + item.facilityType);
      return item;
    }
  });
  return res;
}

export function getParkingSpotsById(id) {
  // debugger;
  return test.filter((item) => {
    // debugger;
    return id == item.id;
  });
}

export function getSimilarBookings(text) {
  const res = test.filter((item) => {
    if (
      text?.split(/[ ,.]+/).some((type) =>
        item.address
          .toLowerCase()
          .split(/[ ,.]+/)
          .includes(type.toLowerCase()),
      )
    ) {
      return item;
    }
  });

  return res;
}

const test = [
  {
    id: 1,
    title: "Parking space in Banjara Hills, Hyderabad, Telangana, India",
    address: "Banjara Hills, Hyderabad, Telangana, India",
    badges: ["Floor: 2", "Floor: 1"],
    price: 132,
    priceUnit: "303 /day/space",
    available: 5,
    images: [
      "https://images.unsplash.com/photo-1532217635-b45271b1aab6?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1467840090898-5b940a807822?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1529089059310-92aa39a13908?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1593280405106-e438ebe93f5b?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1590938076771-dfe17af4d484?w=900&auto=format&fit=crop&q=60",
    ],
    vehicleTypes: ["Sedan", "Bus", "Truck", "Tempo"],
    amenities: ["Covered Parking", "CCTV surveillance", "Sufficient lighting"],
    accessibility: "24X7 Access",
    host: {
      name: "Meena",
      avatar:
        "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?q=80&w=256&auto=format&fit=crop",
      details: ["Email address", "Phone number", "Govt ID"],
    },
    parkingSpaceType: ["covered"],
    facilityType: ["public", "commercial"],
  },
  {
    id: 2,
    title: "Parking space in Connaught Place, New Delhi, India",
    address: "Connaught Place, New Delhi, India",
    badges: ["Basement Parking", "Floor: 2"],
    price: 254,
    priceUnit: "349 /day/space",
    available: 0,
    images: [
      "https://images.unsplash.com/photo-1467840090898-5b940a807822?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1590938076771-dfe17af4d484?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1532217635-b45271b1aab6?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1529089059310-92aa39a13908?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1593280405106-e438ebe93f5b?w=900&auto=format&fit=crop&q=60",
    ],
    vehicleTypes: ["SUV", "Tempo"],
    amenities: ["Security guards", "CCTV surveillance", "Covered Parking"],
    accessibility: "24X7 Access",
    host: {
      name: "Sai Kumar",
      avatar:
        "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?q=80&w=256&auto=format&fit=crop",
      details: ["Email address", "Phone number", "Govt ID"],
    },
    parkingSpaceType: ["covered", "open"],
    facilityType: ["commercial"],
  },
  {
    id: 3,
    title: "Parking space in Sector 62, Noida, Uttar Pradesh, India",
    address: "Sector 62, Noida, Uttar Pradesh, India",
    badges: ["Floor: 1", "Basement Parking"],
    price: 478,
    priceUnit: "207 /day/space",
    available: 0,
    images: [
      "https://images.unsplash.com/photo-1467840090898-5b940a807822?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1593280405106-e438ebe93f5b?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1590938076771-dfe17af4d484?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1529089059310-92aa39a13908?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1532217635-b45271b1aab6?w=900&auto=format&fit=crop&q=60",
    ],
    vehicleTypes: [
      "Motorcycle",
      "Truck",
      "Autorickshaw",
      "Minibus",
      "Tempo",
      "SUV",
      "Sedan",
      "Hatchback",
      "Bus",
    ],
    amenities: ["Sufficient lighting", "Covered Parking", "Security guards"],
    accessibility: "24X7 Access",
    host: {
      name: "Lakshmi",
      avatar:
        "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?q=80&w=256&auto=format&fit=crop",
      details: ["Email address", "Phone number", "Govt ID"],
    },
    parkingSpaceType: ["covered", "open"],
    facilityType: ["residential", "commercial"],
  },
  {
    id: 4,
    title: "Parking space in Indiranagar, Bengaluru, Karnataka, India",
    address: "Indiranagar, Bengaluru, Karnataka, India",
    badges: ["Floor: 1", "Floor: 2"],
    price: 180,
    priceUnit: "419 /day/space",
    available: 1,
    images: [
      "https://images.unsplash.com/photo-1590938076771-dfe17af4d484?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1529089059310-92aa39a13908?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1593280405106-e438ebe93f5b?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1532217635-b45271b1aab6?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1467840090898-5b940a807822?w=900&auto=format&fit=crop&q=60",
    ],
    vehicleTypes: [
      "Minibus",
      "Motorcycle",
      "Autorickshaw",
      "Sedan",
      "Truck",
      "Tempo",
      "Hatchback",
      "SUV",
      "Bus",
    ],
    amenities: ["Sufficient lighting", "CCTV surveillance", "Security guards"],
    accessibility: "24X7 Access",
    host: {
      name: "Suresh",
      avatar:
        "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?q=80&w=256&auto=format&fit=crop",
      details: ["Email address", "Phone number", "Govt ID"],
    },
    parkingSpaceType: ["open", "covered"],
    facilityType: ["public", "residential"],
  },
  {
    id: 5,
    title: "Parking space in Gachibowli, Hyderabad, Telangana, India",
    address: "Gachibowli, Hyderabad, Telangana, India",
    badges: ["Near Elevator", "Floor: 1"],
    price: 274,
    priceUnit: "402 /day/space",
    available: 0,
    images: [
      "https://images.unsplash.com/photo-1529089059310-92aa39a13908?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1590938076771-dfe17af4d484?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1532217635-b45271b1aab6?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1467840090898-5b940a807822?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1593280405106-e438ebe93f5b?w=900&auto=format&fit=crop&q=60",
    ],
    vehicleTypes: ["Hatchback", "Sedan", "Bus"],
    amenities: ["Covered Parking", "Sufficient lighting", "CCTV surveillance"],
    accessibility: "24X7 Access",
    host: {
      name: "Lakshmi",
      avatar:
        "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?q=80&w=256&auto=format&fit=crop",
      details: ["Email address", "Phone number", "Govt ID"],
    },
    parkingSpaceType: ["open", "covered"],
    facilityType: ["residential", "public", "commercial"],
  },
  {
    id: 6,
    title: "Parking space in Indiranagar, Bengaluru, Karnataka, India",
    address: "Indiranagar, Bengaluru, Karnataka, India",
    badges: ["Floor: 1", "Floor: 2"],
    price: 429,
    priceUnit: "470 /day/space",
    available: 3,
    images: [
      "https://images.unsplash.com/photo-1532217635-b45271b1aab6?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1593280405106-e438ebe93f5b?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1590938076771-dfe17af4d484?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1467840090898-5b940a807822?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1529089059310-92aa39a13908?w=900&auto=format&fit=crop&q=60",
    ],
    vehicleTypes: [
      "Motorcycle",
      "Bus",
      "Minibus",
      "Hatchback",
      "Sedan",
      "Truck",
      "Tempo",
      "Autorickshaw",
    ],
    amenities: ["Security guards", "Covered Parking", "CCTV surveillance"],
    accessibility: "24X7 Access",
    host: {
      name: "Meena",
      avatar:
        "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?q=80&w=256&auto=format&fit=crop",
      details: ["Email address", "Phone number", "Govt ID"],
    },
    parkingSpaceType: ["open", "covered"],
    facilityType: ["commercial", "residential"],
  },
  {
    id: 7,
    title: "Parking space in Banjara Hills, Hyderabad, Telangana, India",
    address: "Banjara Hills, Hyderabad, Telangana, India",
    badges: ["Parking space", "Floor: 1"],
    price: 222,
    priceUnit: "374 /day/space",
    available: 2,
    images: [
      "https://images.unsplash.com/photo-1467840090898-5b940a807822?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1529089059310-92aa39a13908?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1593280405106-e438ebe93f5b?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1532217635-b45271b1aab6?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1590938076771-dfe17af4d484?w=900&auto=format&fit=crop&q=60",
    ],
    vehicleTypes: [
      "Hatchback",
      "Sedan",
      "Motorcycle",
      "SUV",
      "Autorickshaw",
      "Bus",
    ],
    amenities: ["Sufficient lighting", "CCTV surveillance", "Covered Parking"],
    accessibility: "24X7 Access",
    host: {
      name: "Suresh",
      avatar:
        "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?q=80&w=256&auto=format&fit=crop",
      details: ["Email address", "Phone number", "Govt ID"],
    },
    parkingSpaceType: ["open"],
    facilityType: ["commercial"],
  },
  {
    id: 8,
    title: "Parking space in Madhav Puram Tirupati, Andhra Pradesh, India",
    address: "Madhav Puram Tirupati, Andhra Pradesh, India",
    badges: ["Near Elevator", "Basement Parking"],
    price: 121,
    priceUnit: "226 /day/space",
    available: 4,
    images: [
      "https://images.unsplash.com/photo-1593280405106-e438ebe93f5b?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1532217635-b45271b1aab6?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1590938076771-dfe17af4d484?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1467840090898-5b940a807822?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1529089059310-92aa39a13908?w=900&auto=format&fit=crop&q=60",
    ],
    vehicleTypes: ["Autorickshaw", "Motorcycle"],
    amenities: ["CCTV surveillance", "Security guards", "Covered Parking"],
    accessibility: "24X7 Access",
    host: {
      name: "Rahul",
      avatar:
        "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?q=80&w=256&auto=format&fit=crop",
      details: ["Email address", "Phone number", "Govt ID"],
    },
    parkingSpaceType: ["open", "covered"],
    facilityType: ["public"],
  },
  {
    id: 9,
    title: "Parking space in Madhav Puram Tirupati, Andhra Pradesh, India",
    address: "Madhav Puram Tirupati, Andhra Pradesh, India",
    badges: ["Floor: 2", "Basement Parking"],
    price: 477,
    priceUnit: "347 /day/space",
    available: 3,
    images: [
      "https://images.unsplash.com/photo-1532217635-b45271b1aab6?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1529089059310-92aa39a13908?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1593280405106-e438ebe93f5b?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1590938076771-dfe17af4d484?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1467840090898-5b940a807822?w=900&auto=format&fit=crop&q=60",
    ],
    vehicleTypes: ["Hatchback", "Bus"],
    amenities: ["CCTV surveillance", "Security guards", "Sufficient lighting"],
    accessibility: "24X7 Access",
    host: {
      name: "Arun",
      avatar:
        "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?q=80&w=256&auto=format&fit=crop",
      details: ["Email address", "Phone number", "Govt ID"],
    },
    parkingSpaceType: ["open", "covered"],
    facilityType: ["commercial", "public"],
  },
  {
    id: 10,
    title: "Parking space in MG Road, Bengaluru, Karnataka, India",
    address: "MG Road, Bengaluru, Karnataka, India",
    badges: ["Near Elevator", "Floor: 1"],
    price: 119,
    priceUnit: "208 /day/space",
    available: 4,
    images: [
      "https://images.unsplash.com/photo-1590938076771-dfe17af4d484?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1529089059310-92aa39a13908?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1532217635-b45271b1aab6?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1467840090898-5b940a807822?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1593280405106-e438ebe93f5b?w=900&auto=format&fit=crop&q=60",
    ],
    vehicleTypes: ["Tempo", "Truck", "Bus", "Minibus", "Hatchback"],
    amenities: ["Security guards", "CCTV surveillance", "Sufficient lighting"],
    accessibility: "24X7 Access",
    host: {
      name: "Arun",
      avatar:
        "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?q=80&w=256&auto=format&fit=crop",
      details: ["Email address", "Phone number", "Govt ID"],
    },
    parkingSpaceType: ["covered", "open"],
    facilityType: ["residential"],
  },
  {
    id: 11,
    title: "Parking space in Banjara Hills, Hyderabad, Telangana, India",
    address: "Banjara Hills, Hyderabad, Telangana, India",
    badges: ["Parking space", "Floor: 2"],
    price: 329,
    priceUnit: "350 /day/space",
    available: 0,
    images: [
      "https://images.unsplash.com/photo-1529089059310-92aa39a13908?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1590938076771-dfe17af4d484?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1593280405106-e438ebe93f5b?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1467840090898-5b940a807822?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1532217635-b45271b1aab6?w=900&auto=format&fit=crop&q=60",
    ],
    vehicleTypes: ["Truck", "SUV"],
    amenities: ["Security guards", "Sufficient lighting", "CCTV surveillance"],
    accessibility: "24X7 Access",
    host: {
      name: "Divya",
      avatar:
        "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?q=80&w=256&auto=format&fit=crop",
      details: ["Email address", "Phone number", "Govt ID"],
    },
    parkingSpaceType: ["covered", "open"],
    facilityType: ["residential", "commercial"],
  },
  {
    id: 12,
    title: "Parking space in Connaught Place, New Delhi, India",
    address: "Connaught Place, New Delhi, India",
    badges: ["Basement Parking", "Parking space"],
    price: 243,
    priceUnit: "225 /day/space",
    available: 4,
    images: [
      "https://images.unsplash.com/photo-1529089059310-92aa39a13908?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1532217635-b45271b1aab6?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1593280405106-e438ebe93f5b?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1590938076771-dfe17af4d484?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1467840090898-5b940a807822?w=900&auto=format&fit=crop&q=60",
    ],
    vehicleTypes: [
      "Sedan",
      "Bus",
      "Truck",
      "Tempo",
      "Autorickshaw",
      "Hatchback",
      "Motorcycle",
      "Minibus",
    ],
    amenities: ["Security guards", "CCTV surveillance", "Sufficient lighting"],
    accessibility: "24X7 Access",
    host: {
      name: "Divya",
      avatar:
        "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?q=80&w=256&auto=format&fit=crop",
      details: ["Email address", "Phone number", "Govt ID"],
    },
    parkingSpaceType: ["covered", "open"],
    facilityType: ["residential", "public"],
  },
  {
    id: 13,
    title: "Parking space in Indiranagar, Bengaluru, Karnataka, India",
    address: "Indiranagar, Bengaluru, Karnataka, India",
    badges: ["Near Elevator", "Floor: 1"],
    price: 456,
    priceUnit: "166 /day/space",
    available: 3,
    images: [
      "https://images.unsplash.com/photo-1532217635-b45271b1aab6?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1593280405106-e438ebe93f5b?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1529089059310-92aa39a13908?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1467840090898-5b940a807822?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1590938076771-dfe17af4d484?w=900&auto=format&fit=crop&q=60",
    ],
    vehicleTypes: ["Hatchback", "SUV", "Truck", "Tempo", "Autorickshaw", "Bus"],
    amenities: ["Sufficient lighting", "CCTV surveillance", "Covered Parking"],
    accessibility: "24X7 Access",
    host: {
      name: "Divya",
      avatar:
        "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?q=80&w=256&auto=format&fit=crop",
      details: ["Email address", "Phone number", "Govt ID"],
    },
    parkingSpaceType: ["covered", "open"],
    facilityType: ["public"],
  },
  {
    id: 14,
    title: "Parking space in Connaught Place, New Delhi, India",
    address: "Connaught Place, New Delhi, India",
    badges: ["Parking space", "Floor: 1"],
    price: 455,
    priceUnit: "112 /day/space",
    available: 0,
    images: [
      "https://images.unsplash.com/photo-1590938076771-dfe17af4d484?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1593280405106-e438ebe93f5b?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1467840090898-5b940a807822?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1532217635-b45271b1aab6?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1529089059310-92aa39a13908?w=900&auto=format&fit=crop&q=60",
    ],
    vehicleTypes: [
      "Bus",
      "Sedan",
      "Autorickshaw",
      "Truck",
      "SUV",
      "Motorcycle",
      "Minibus",
      "Tempo",
    ],
    amenities: ["CCTV surveillance", "Sufficient lighting", "Security guards"],
    accessibility: "24X7 Access",
    host: {
      name: "Arun",
      avatar:
        "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?q=80&w=256&auto=format&fit=crop",
      details: ["Email address", "Phone number", "Govt ID"],
    },
    parkingSpaceType: ["open", "covered"],
    facilityType: ["commercial", "public", "residential"],
  },
  {
    id: 15,
    title: "Parking space in Gachibowli, Hyderabad, Telangana, India",
    address: "Gachibowli, Hyderabad, Telangana, India",
    badges: ["Near Elevator", "Floor: 2"],
    price: 303,
    priceUnit: "342 /day/space",
    available: 3,
    images: [
      "https://images.unsplash.com/photo-1590938076771-dfe17af4d484?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1529089059310-92aa39a13908?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1467840090898-5b940a807822?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1532217635-b45271b1aab6?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1593280405106-e438ebe93f5b?w=900&auto=format&fit=crop&q=60",
    ],
    vehicleTypes: [
      "SUV",
      "Minibus",
      "Motorcycle",
      "Autorickshaw",
      "Sedan",
      "Bus",
      "Tempo",
      "Truck",
      "Hatchback",
    ],
    amenities: ["CCTV surveillance", "Covered Parking", "Sufficient lighting"],
    accessibility: "24X7 Access",
    host: {
      name: "Anjali",
      avatar:
        "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?q=80&w=256&auto=format&fit=crop",
      details: ["Email address", "Phone number", "Govt ID"],
    },
    parkingSpaceType: ["covered"],
    facilityType: ["public", "residential"],
  },
  {
    id: 16,
    title: "Parking space in Gachibowli, Hyderabad, Telangana, India",
    address: "Gachibowli, Hyderabad, Telangana, India",
    badges: ["Floor: 1", "Near Elevator"],
    price: 421,
    priceUnit: "364 /day/space",
    available: 5,
    images: [
      "https://images.unsplash.com/photo-1590938076771-dfe17af4d484?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1529089059310-92aa39a13908?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1467840090898-5b940a807822?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1532217635-b45271b1aab6?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1593280405106-e438ebe93f5b?w=900&auto=format&fit=crop&q=60",
    ],
    vehicleTypes: [
      "Tempo",
      "Truck",
      "Sedan",
      "Minibus",
      "Hatchback",
      "SUV",
      "Bus",
      "Motorcycle",
      "Autorickshaw",
    ],
    amenities: ["Sufficient lighting", "Security guards", "Covered Parking"],
    accessibility: "24X7 Access",
    host: {
      name: "Anjali",
      avatar:
        "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?q=80&w=256&auto=format&fit=crop",
      details: ["Email address", "Phone number", "Govt ID"],
    },
    parkingSpaceType: ["open", "covered"],
    facilityType: ["commercial", "public"],
  },
  {
    id: 17,
    title: "Parking space in Vashi, Navi Mumbai, Maharashtra, India",
    address: "Vashi, Navi Mumbai, Maharashtra, India",
    badges: ["Parking space", "Near Elevator"],
    price: 103,
    priceUnit: "178 /day/space",
    available: 5,
    images: [
      "https://images.unsplash.com/photo-1467840090898-5b940a807822?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1593280405106-e438ebe93f5b?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1532217635-b45271b1aab6?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1529089059310-92aa39a13908?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1590938076771-dfe17af4d484?w=900&auto=format&fit=crop&q=60",
    ],
    vehicleTypes: [
      "Truck",
      "Hatchback",
      "Motorcycle",
      "SUV",
      "Autorickshaw",
      "Minibus",
      "Tempo",
    ],
    amenities: ["Covered Parking", "CCTV surveillance", "Security guards"],
    accessibility: "24X7 Access",
    host: {
      name: "Arun",
      avatar:
        "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?q=80&w=256&auto=format&fit=crop",
      details: ["Email address", "Phone number", "Govt ID"],
    },
    parkingSpaceType: ["open"],
    facilityType: ["commercial", "residential"],
  },
  {
    id: 18,
    title: "Parking space in Indiranagar, Bengaluru, Karnataka, India",
    address: "Indiranagar, Bengaluru, Karnataka, India",
    badges: ["Floor: 2", "Floor: 1"],
    price: 273,
    priceUnit: "100 /day/space",
    available: 4,
    images: [
      "https://images.unsplash.com/photo-1532217635-b45271b1aab6?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1467840090898-5b940a807822?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1529089059310-92aa39a13908?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1590938076771-dfe17af4d484?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1593280405106-e438ebe93f5b?w=900&auto=format&fit=crop&q=60",
    ],
    vehicleTypes: ["SUV", "Autorickshaw", "Minibus", "Hatchback", "Truck"],
    amenities: ["Security guards", "CCTV surveillance", "Sufficient lighting"],
    accessibility: "24X7 Access",
    host: {
      name: "Divya",
      avatar:
        "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?q=80&w=256&auto=format&fit=crop",
      details: ["Email address", "Phone number", "Govt ID"],
    },
    parkingSpaceType: ["covered"],
    facilityType: ["public", "commercial", "residential"],
  },
  {
    id: 19,
    title: "Parking space in Banjara Hills, Hyderabad, Telangana, India",
    address: "Banjara Hills, Hyderabad, Telangana, India",
    badges: ["Floor: 1", "Parking space"],
    price: 423,
    priceUnit: "133 /day/space",
    available: 5,
    images: [
      "https://images.unsplash.com/photo-1532217635-b45271b1aab6?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1593280405106-e438ebe93f5b?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1529089059310-92aa39a13908?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1467840090898-5b940a807822?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1590938076771-dfe17af4d484?w=900&auto=format&fit=crop&q=60",
    ],
    vehicleTypes: [
      "Sedan",
      "Minibus",
      "Tempo",
      "Bus",
      "Truck",
      "Autorickshaw",
      "Motorcycle",
      "SUV",
    ],
    amenities: ["Security guards", "Covered Parking", "Sufficient lighting"],
    accessibility: "24X7 Access",
    host: {
      name: "Rahul",
      avatar:
        "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?q=80&w=256&auto=format&fit=crop",
      details: ["Email address", "Phone number", "Govt ID"],
    },
    parkingSpaceType: ["covered", "open"],
    facilityType: ["residential"],
  },
  {
    id: 20,
    title: "Parking space in MG Road, Bengaluru, Karnataka, India",
    address: "MG Road, Bengaluru, Karnataka, India",
    badges: ["Parking space", "Basement Parking"],
    price: 386,
    priceUnit: "117 /day/space",
    available: 2,
    images: [
      "https://images.unsplash.com/photo-1467840090898-5b940a807822?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1532217635-b45271b1aab6?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1529089059310-92aa39a13908?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1593280405106-e438ebe93f5b?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1590938076771-dfe17af4d484?w=900&auto=format&fit=crop&q=60",
    ],
    vehicleTypes: ["Truck", "Motorcycle", "Sedan", "SUV", "Tempo", "Bus"],
    amenities: ["Security guards", "Sufficient lighting", "Covered Parking"],
    accessibility: "24X7 Access",
    host: {
      name: "Ramesh",
      avatar:
        "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?q=80&w=256&auto=format&fit=crop",
      details: ["Email address", "Phone number", "Govt ID"],
    },
    parkingSpaceType: ["open", "covered"],
    facilityType: ["public"],
  },
];
