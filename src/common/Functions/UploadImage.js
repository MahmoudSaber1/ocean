import axios from "axios";

// Upload Function
export const uploadImage = (file) => {
	const formData = new FormData();
	formData.append("file", file);
	formData.append("upload_preset", "oceanBlogs");

	return axios.post(
		"https://api.cloudinary.com/v1_1/zone105/image/upload",
		formData
	);
};
