
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { SplineScene } from "@/components/ui/splite";

export const ModelUploader = () => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file && file.name.endsWith('.glb')) {
      // Create a URL for the uploaded file
      const objectUrl = URL.createObjectURL(file);
      console.log('GLB file uploaded:', objectUrl);
      // You can now use this URL with your 3D viewer
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop,
    accept: {
      'model/gltf-binary': ['.glb']
    },
    maxFiles: 1
  });

  return (
    <div 
      {...getRootProps()} 
      className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center cursor-pointer hover:border-white/40 transition-colors"
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className="text-white">Drop the GLB file here...</p>
      ) : (
        <p className="text-white">Drag and drop your GLB file here, or click to select file</p>
      )}
    </div>
  );
};
