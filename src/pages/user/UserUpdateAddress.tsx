import React, { useEffect, useState } from "react";
import axios from "axios";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import "../../assets/css/setupProfile.css";
import { ChevronLeft, Map, MapPinned, Radar } from "lucide-react";
import { Link } from "react-router-dom";
import { useAlert } from "../../context/AlertContext";

const UserUpdateAddress: React.FC = () => {
  const [formData, setFormData] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
  });

  const { showAlert } = useAlert();

  // const [mapPosition, setMapPosition] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const registerResponse = await axios.get(
          "http://localhost:4000/api/v1/user/me",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (registerResponse.status === 200) {
          console.log(registerResponse.data.data);
          const userData = registerResponse.data.data;

          setFormData((prevData) => ({
            ...prevData,
            city: userData.city || "",
            state: userData.state || "",
            country: userData.country || "",
          }));
        }
      } catch (error) {
        console.error("Error registering:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleMapClick = (e: google.maps.MapMouseEvent) => {
  //   /* const { latLng } = e;
  //   setMapPosition({ lat: latLng.lat(), lng: latLng.lng() });
  //   // Reverse geocode to get address components
  //   const geocoder = new google.maps.Geocoder();
  //   geocoder.geocode({ location: latLng }, (results, status) => {
  //     if (status === "OK" && results[0]) {
  //       const addressComponents = results[0].address_components;
  //       const addressData: { [key: string]: string } = {};
  //       addressComponents.forEach((component) => {
  //         const types = component.types;
  //         types.forEach((type) => {
  //           if (type === "locality") {
  //             addressData.city = component.long_name;
  //           } else if (type === "administrative_area_level_1") {
  //             addressData.state = component.long_name;
  //           } else if (type === "country") {
  //             addressData.country = component.long_name;
  //           }
  //         });
  //       });
  //       setFormData({
  //         ...formData,
  //         address: results[0].formatted_address,
  //         ...addressData,
  //       });
  //     } else {
  //       console.error("Geocoder failed due to: " + status);
  //     }
  //   }); */
  // };

  // const getCurrentLocation = () => {
  //   if ("geolocation" in navigator) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       const { latitude, longitude } = position.coords;
  //       setMapPosition({ lat: latitude, lng: longitude });
  //       // Reverse geocode to get address components
  //       const geocoder = new google.maps.Geocoder();
  //       geocoder.geocode(
  //         { location: { lat: latitude, lng: longitude } },
  //         (results, status) => {
  //           if (status === "OK" && results[0]) {
  //             const addressComponents = results[0].address_components;
  //             const addressData: { [key: string]: string } = {};
  //             addressComponents.forEach((component) => {
  //               const types = component.types;
  //               types.forEach((type) => {
  //                 if (type === "locality") {
  //                   addressData.city = component.long_name;
  //                 } else if (type === "administrative_area_level_1") {
  //                   addressData.state = component.long_name;
  //                 } else if (type === "country") {
  //                   addressData.country = component.long_name;
  //                 }
  //               });
  //             });
  //             setFormData({
  //               ...formData,
  //               address: results[0].formatted_address,
  //               ...addressData,
  //             });
  //           } else {
  //             console.error("Geocoder failed due to: " + status);
  //           }
  //         }
  //       );
  //     });
  //   } else {
  //     alert("Geolocation is not supported by this browser.");
  //   }
  // };

  const validateForm = () => {
    if (!formData.city) {
      showAlert("City is required!", "error");
      return false;
    }
    if (!formData.state) {
      showAlert("State is required!", "error");
      return false;
    }
    if (!formData.country) {
      showAlert("Country is required!", "error");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const patchData = {
      lat: 23.5,
      lng: 24.5,
      country: formData.country,
      state: formData.state,
      city: formData.city,
    };

    // Send PATCH request
    try {
      const response = await fetch(
        "http://localhost:4000/api/v1/user/location",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(patchData),
        }
      );

      if (response.ok) {
        console.log("Profile updated successfully");
        showAlert("Address updated successfully!", "success");
      } else {
        console.error("Failed to update Address");
        showAlert("Failed to update Address!", "error");
      }
    } catch (error) {
      console.error("Error:", error);
      showAlert("Failed to update Address!", "error");
      // Optionally, handle error (e.g., show an error message)
    }
  };

  return (
    <main className="setup-profile-page">
      <div className="setup-profile-container">
        <h1 className="flex items-center mb-8 font-['Quicksand'] text-[#121212]">
          <Link to="/user-saved-address" className="flex items-center">
            <ChevronLeft size={34} className="mr-4" />
            Update address
          </Link>
        </h1>
        <form className="setupProfileForm" onSubmit={handleSubmit}>
          <div className="form-item">
            <Map className="form-item-icon" />
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="form-item">
            <Radar className="form-item-icon" />
            <input
              type="text"
              id="city"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="form-item">
            <Radar className="form-item-icon" />
            <input
              type="text"
              id="state"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="form-item">
            <MapPinned className="form-item-icon" />
            <input
              type="text"
              id="country"
              name="country"
              placeholder="India"
              value={formData.country}
              onChange={handleChange}
            />
          </div>
          <br />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </form>

        {/* Map Section */}
        <div className="mt-8">
          <button
            className="geoButton"
            // onClick={getCurrentLocation}
          >
            Get Current Location
          </button>
          <LoadScript
            googleMapsApiKey={
              import.meta.env.REACT_APP_GOOGLE_MAPS_API_KEY || ""
            }
          >
            <GoogleMap
              mapContainerStyle={{ width: "100%", height: "400px" }}
              // center={mapPosition}
              zoom={15}
              // onClick={handleMapClick}
            >
              {/* <Marker position={mapPosition} /> */}
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </main>
  );
};

export default UserUpdateAddress;
