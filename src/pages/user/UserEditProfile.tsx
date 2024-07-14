import React, { useEffect, useState } from "react";
import axios from "axios";
import { CalendarDays, Camera, ChevronLeft, Mail, Phone, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useAlert } from "../../context/AlertContext";
import { useUser } from "../../context/useUser";
const defaultDummyImage =
  "../../src/assets/images/person-gray-photo-placeholder-woman.jpg";

const UserEditProfile: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    gender: "",
    dateOfBirth: "",
    profilePicture: null as File | null,
    profilePictureUrl: "",
  });
  
  const { showAlert } = useAlert();
  const { user, setUser } = useUser();

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
          setUser(userData);

           const formattedDate = userData.dob
             ? new Date(userData.dob).toISOString().split("T")[0]
             : "";
      setFormData((prevData) => ({
        ...prevData,
        fullName: userData.userName || "",
        phoneNumber: userData.phoneNumber || "",
        email: userData.email || "",
        gender: userData.gender || "",
        dateOfBirth: formattedDate,
        profilePictureUrl: userData.imageUrl || "",
      }));
          // showAlert("Registration successful!", "success");
          // setUser(registerResponse.data.data.user);
        }
      } catch (error) {
        console.error("Error registering:", error);
        // showAlert("Incorrect Phone number or OTP please try again.", "error");
      }
    };

    fetchData();
  }, [setUser]);


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFormData({ ...formData, profilePicture: file });

      // try {
      //   const formData = new FormData();
      //   formData.append("image", file);

      //   const uploadResponse = await axios.post(
      //     "http://localhost:4000/api/v1/upload",
      //     formData,
      //     {
      //       headers: {
      //         "Content-Type": "multipart/form-data",
      //         Authorization: `Bearer ${localStorage.getItem("token")}`,
      //       },
      //     }
      //   );

      //   if (uploadResponse.status === 200) {
      //     const imageUrl = uploadResponse.data.url;
      //     setFormData((prevData) => ({
      //       ...prevData,
      //       profilePictureUrl: imageUrl,
      //     }));
      //   }
      // } catch (error) {
      //   console.error("Error uploading image:", error);
      // }
    }
  };

  const handleDummyImageClick = () => {
    document.getElementById("profilePictureInput")?.click();
  };

  if (!user) {
    return <p>Loading...</p>;
  }

   const getProfilePictureSrc = () => {
     if (formData.profilePicture) {
       return URL.createObjectURL(formData.profilePicture);
     } else if (formData.profilePictureUrl) {
       return formData.profilePictureUrl;
     } else {
       return defaultDummyImage;
     }
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
       imageUrl: formData.profilePicture
         ? URL.createObjectURL(formData.profilePicture)
         : defaultDummyImage,
     };

     // Send PATCH request
     try {
       const response = await fetch(
         "http://localhost:4000/api/v1/user/profile",
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

  return (
    <main className="setup-profile-page">
      <div className="setup-profile-container">
        <h1 className="flex items-center mb-8 font-['Quicksand'] text-[#121212]">
          <Link to="/user-settings" className="flex items-center">
            <ChevronLeft size={34} className="mr-4" />
            Edit Profile
          </Link>
        </h1>
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
                <img
                  src={getProfilePictureSrc()}
                  alt="Profile"
                  className="personImage"
                />
              </div>
            </div>
            <br />
            <div className="form-item">
              <User className="form-item-icon" />
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder={user ? user.userName : "Anant Mehta"}
                value={formData.fullName}
                onChange={handleChange}
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
                value={formData.phoneNumber}
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
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Save changes
            </button>
          </form>
      </div>
    </main>
  );
};

export default UserEditProfile;
