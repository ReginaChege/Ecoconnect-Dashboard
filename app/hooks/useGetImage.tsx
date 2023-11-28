// import { useEffect, useState } from "react";
// import { BASE_URL } from "@/config";

// export const useGetImage = () => {
//     const [image, setImages] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         setLoading(true);
//         fetch(`${BASE_URL}/api/image/`)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error(`Failed to fetch image: ${response.status}`);
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 setImages(data);
//             })
//             .catch(error => {
//                 console.error("Error fetching image:", error);
//             })
//             .finally(() => {
//                 setLoading(false);
//             });
//     }, []);

//     return { image, loading };
// };



import { useEffect, useState } from "react";
import { BASE_URL  } from "@config"; 

export const useGetImage = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`${BASE_URL}/api/image`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch images: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setImages(data);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { images, loading };
};
