/** @format */

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { AiOutlineCloudUpload } from "react-icons/ai";

const DropZone = ({ onDrop, accept, multiple, maxSize, message, iconSize }) => {
  const [files, setFiles] = useState([]);

  /**
   * Callback function for handling dropped files.
   *
   * @callback onDropHandler
   * @param {Array<File>} acceptedFiles - Array of accepted files.
   */

  const onDropHandler = useCallback(
    (acceptedFiles) => {
      if (onDrop) {
        onDrop(acceptedFiles);
      }
    },
    [onDrop]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles);
      onDropHandler(acceptedFiles);
    },
    accept: accept || "image/*",
    multiple: multiple || false,
    maxSize: maxSize || 5242880,
  });

  return (
    <div
      {...getRootProps()}
      className={`flex cursor-pointer flex-col h-full text-[#666666] gap-2 justify-center border-dashed border-2 border-[#666666] items-center w-full relative ${
        isDragActive ? "active" : ""
      }`}
    >
      <AiOutlineCloudUpload size={iconSize || 50} />
      <input {...getInputProps()} />
      {files.length > 0 && (
        <p className="flex gap-2 text-[#333333] font-semibold">
          {files.map((file) => (
            <span key={file?.name}>{file?.name}</span>
          ))}
        </p>
      )}
      {!files.length && (
        <p className="text-[#333333] font-semibold">
          {message
            ? message
            : "Drag & drop files here, or click to select files"}
          <span className="text-blue"> Browse</span>
        </p>
      )}
      {isDragActive && (
        <div className="absolute inset-0 bg-gray-300 opacity-50 z-10"></div>
      )}
    </div>
  );
};

export default DropZone;
