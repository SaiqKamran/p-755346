
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { GltfModelViewer } from "@/components/ui/GltfModelViewer";
import { toast } from "sonner";

export const ModelUploader = () => {
  const [modelUrl, setModelUrl] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file && file.name.endsWith('.glb')) {
      // Create a URL for the uploaded file
      const objectUrl = URL.createObjectURL(file);
      console.log('GLB file uploaded:', objectUrl);
      setModelUrl(objectUrl);
      toast.success("3D model uploaded successfully");
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
    <div className="space-y-6">
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
      
      {modelUrl && (
        <div className="mt-6 h-[400px] rounded-lg overflow-hidden bg-black/20">
          <GltfModelViewer modelUrl={modelUrl} className="w-full h-full" />
        </div>
      )}
    </div>
  );
};
