import { useState } from 'react';

export default function ImageUpload() {
  const [image, setImage] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
    setPreviewURL(URL.createObjectURL(selectedImage));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any necessary actions with the selected image here, such as uploading it to a server.
    console.log(image);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="image-upload" className="block font-medium text-gray-700 mb-2">
          Upload Image
        </label>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      {previewURL && (
        <img
          src={previewURL}
          alt="Preview"
          className="border-gray-300 rounded-md shadow-sm mt-4"
          style={{ maxWidth: '100%' }}
        />
      )}
      <button
        type="submit"
        disabled={!image}
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 mt-4 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Upload
      </button>
    </form>
  );
}
