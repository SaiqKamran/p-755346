
import React, { useState } from "react";
import { X } from "lucide-react";
import { openWhatsAppChat } from "@/utils/whatsapp";
import { toast } from "sonner";

interface CourseFeeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CourseFeeModal: React.FC<CourseFeeModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    qualification: "",
    courses: [] as string[]
  });

  const courses = [
    "GEN AI Courses",
    "Advanced Animation",
    "Graphic Design",
    "VFX",
    "Gaming"
  ];

  const handleCourseToggle = (course: string) => {
    setFormData(prev => ({
      ...prev,
      courses: prev.courses.includes(course)
        ? prev.courses.filter(c => c !== course)
        : [...prev.courses, course]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.city || formData.courses.length === 0) {
      toast.error("Please fill in all required fields and select at least one course");
      return;
    }

    const message = `
Course Fee Inquiry:
Name: ${formData.name}
Email: ${formData.email || 'Not provided'}
City: ${formData.city}
Qualification: ${formData.qualification}
Interested Courses: ${formData.courses.join(', ')}

Please send me the fee plans for the selected courses.`;

    openWhatsAppChat('Course Fee Inquiry', message);
    toast.success("Redirecting to WhatsApp...");
    onClose();
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      city: "",
      qualification: "",
      courses: []
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-md max-h-[90vh] overflow-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">Course Fee Information</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email ID
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              City *
            </label>
            <input
              type="text"
              value={formData.city}
              onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Enter your city"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Qualification
            </label>
            <input
              type="text"
              value={formData.qualification}
              onChange={(e) => setFormData(prev => ({ ...prev, qualification: e.target.value }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Your highest qualification"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Select Courses of Interest *
            </label>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {courses.map((course) => (
                <label key={course} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.courses.includes(course)}
                    onChange={() => handleCourseToggle(course)}
                    className="w-4 h-4 text-yellow-400 border-gray-300 rounded focus:ring-yellow-400"
                  />
                  <span className="text-gray-700">{course}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg font-bold text-lg transition-colors mt-6"
          >
            Send me the fee plans on my WhatsApp now
          </button>
        </form>
      </div>
    </div>
  );
};
