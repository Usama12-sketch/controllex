import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Image from 'next/image';

const Quill = ({value, setValue}) => {
  const  modules  = {
    toolbar: [
        [{ font: [] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ script:  "sub" }, { script:  "super" }],
        ["blockquote", "code-block"],
        [{ list:  "ordered" }, { list:  "bullet" }],
        [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
        ["link", "image", "video"],
        ["clean"],
    ],
  };
  
  const renderCustomImage = (props) => {
    const { src, alt } = props;
    return <Image src={src} alt={alt} width={500} height={500} />;
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "code-block",
    "align",
    "color",
    "background",
    "script",
  ];

  const parseHtml = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const imageElements = doc.getElementsByTagName('img');

    for (let i = 0; i < imageElements.length; i++) {
      const imageElement = imageElements[i];
      const newImage = document.createElement('img');
      newImage.setAttribute('src', imageElement.src);
      newImage.setAttribute('alt', imageElement.alt);
      newImage.setAttribute('width', '500');
      newImage.setAttribute('height', '500');
      imageElement.parentNode.replaceChild(newImage, imageElement);
    }

    return doc.body.innerHTML;
  };

  const handleOnChange = (html) => {
    const parsedHtml = parseHtml(html);
    setValue(parsedHtml);
  };

  return (
    <ReactQuill 
      modules={modules} 
      theme="snow" 
      formats={formats} 
      value={value} 
      onChange={handleOnChange} 
      renderCustomImage={renderCustomImage} 
    />
  );
};

export default Quill;
