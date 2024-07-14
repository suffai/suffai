import React, { useState } from "react";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import "../assets/css/setupProfile.css";
import {
  CalendarDays,
  Camera,
  Mail,
  Map,
  MapPinned,
  Phone,
  Radar,
  User,
} from "lucide-react";
import { useAlert } from "../context/AlertContext";
import { useUser } from "../context/useUser";
const defaultDummyImage =
  "../../src/assets/images/person-gray-photo-placeholder-woman.jpg";

const SetupProfile: React.FC = () => {
  const { showAlert } = useAlert();
  const { user } = useUser();

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    gender: "",
    dateOfBirth: "",
    address: "",
    city: "",
    state: "",
    country: "",
    profilePicture: null as File | null,
  });

  const [submitted, setSubmitted] = useState(false);
  // const [mapPosition, setMapPosition] = useState({ lat: 0, lng: 0 });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFormData({ ...formData, profilePicture: file });
    }
  };

  const handleDummyImageClick = () => {
    document.getElementById("profilePictureInput")?.click();
  };

  const validateForm = () => {
    if (!formData.fullName) {
      showAlert("Full name is required!", "error");
      return false;
    }
    if (!formData.phoneNumber) {
      showAlert("Phone number is required!", "error");
      return false;
    }
    if (!formData.email) {
      showAlert("Email is required!", "error");
      return false;
    }
    if (!formData.gender) {
      showAlert("Gender is required!", "error");
      return false;
    }
    if (!formData.dateOfBirth) {
      showAlert("Date of birth is required!", "error");
      return false;
    }
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
      userName: formData.fullName,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      gender: formData.gender,
      dob: formData.dateOfBirth,
      lat: 23.5,
      lng: 24.5,
      imageUrl: formData.profilePicture
        ? URL.createObjectURL(formData.profilePicture)
        : defaultDummyImage,
      country: formData.country,
      state: formData.state,
      city: formData.city,
    };

    // Send PATCH request
    try {
      const response = await fetch(
        "http://localhost:4000/api/v1/user/set-profile",
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
        showAlert("Profile updated successfully!", "success");
        setSubmitted(true);
      } else {
        console.error("Failed to update profile");
        showAlert("Failed to update profile!", "error");
      }
    } catch (error) {
      console.error("Error:", error);
      showAlert("Failed to update profile!", "error");
      // Optionally, handle error (e.g., show an error message)
    }
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

  if (!user) {
    return <p>Loading...</p>;
  }

  formData.fullName = user.userName;
  formData.phoneNumber = user.phoneNumber;

  return (
    <main className="setup-profile-page">
      <div className="setup-profile-container">
        <h1 className="setup-profile-heading">Setup your profile</h1>
        {!submitted ? (
          <form className="setupProfileForm" onSubmit={handleSubmit}>
            <div className="form-item">
              <div
                className="w-80 mb-8 mx-auto relative cursor-pointer"
                onClick={handleDummyImageClick}
              >
                <Camera className="form-item-icon-image" />
                <input
                  type="file"
                  id="profilePictureInput"
                  name="profilePicture"
                  placeholder="Profile Picture"
                  onChange={handleFileChange}
                  accept="image/*"
                  className="hidden"
                />
                {formData.profilePicture ? (
                  <img
                    src={URL.createObjectURL(formData.profilePicture)}
                    alt="Preview"
                    className="personImage"
                  />
                ) : (
                  <img
                    src={defaultDummyImage}
                    alt="Dummy"
                    className="personImage"
                  />
                )}
              </div>
            </div>
            <br />
            <div className="form-item">
              <User className="form-item-icon" />
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Anant Maurya"
                value={user.userName}
                onChange={handleChange}
                readOnly
              />
            </div>
            <br />
            <div className="form-item">
              <Phone className="form-item-icon" />
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="+912084422881"
                value={user.phoneNumber}
                onChange={handleChange}
                readOnly
              />
            </div>
            <br />
            <div className="form-item">
              <Mail className="form-item-icon" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="jane@gmail.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="form-item">
              <User className="form-item-icon" />
              <select
                id="gender"
                name="gender"
                title="Select your gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="not_to_say">Rather Not to Say</option>
              </select>
            </div>
            <br />
            <div className="form-item">
              <CalendarDays className="form-item-icon" />
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                placeholder="Date of Birth"
                value={formData.dateOfBirth}
                onChange={handleChange}
              />
            </div>
            <br />
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
        ) : (
          <div
            className="mt-8 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <span className="block sm:inline">Successfully registered!</span>
          </div>
        )}

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

export default SetupProfile;
