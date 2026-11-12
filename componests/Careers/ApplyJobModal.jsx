"use client";

import { useState } from "react";
import { X, Loader2 } from "lucide-react";
import { PrimaryButton } from "../ui/PrimaryButton";

const WEB3FORMS_ACCESS_KEY = "d8373aaf-81f0-486f-80b6-0f6396808f16";

// ─── Cloudinary (free) ───────────────────────────────────────────────────────
// Unsigned upload preset — Resource type must be set to "Raw" in Cloudinary dashboard
const CLOUDINARY_CLOUD_NAME = "dd3qjg9qb";
const CLOUDINARY_UPLOAD_PRESET = "skillanic_resumes";

export default function ApplyJobModal({ open, onClose, jobTitle, onSubmit }) {
  const MESSAGE_LIMIT = 500;

  const INITIAL_FORM = {
    fullName: "",
    email: "",
    phone: "",
    qualification: "",
    experience: "",
    resumeFile: null,
    message: "",
  };

  const [form, setForm] = useState(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadStatus, setUploadStatus] = useState("idle"); // "idle" | "uploading" | "submitting"
  const [result, setResult] = useState("");

  const resetForm = () => {
    setForm(INITIAL_FORM);
    setResult("");
    setUploadStatus("idle");
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (name === "message" && value.length > MESSAGE_LIMIT) return;

    setForm((prev) => ({
      ...prev,
      [name]: type === "file" ? (files[0] ?? null) : value,
    }));
  };

  // ── Step 1: Upload PDF to Cloudinary, return a force-download URL ──────────
  const uploadResumeToCloudinary = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    // resource_type is set in the URL path (/raw/upload), not in the body

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/raw/upload`,
      { method: "POST", body: data }
    );

    const json = await res.json();

    if (!res.ok) {
      console.error("[Cloudinary] Upload error:", json);
      throw new Error(
        json?.error?.message || "Resume upload failed. Please try again."
      );
    }

    // fl_attachment forces download when link is clicked (fixes inline render error)
    // Before: .../raw/upload/v123/file.pdf
    // After:  .../raw/upload/fl_attachment/v123/file.pdf
    return json.secure_url.replace("/upload/", "/upload/fl_attachment/");
  };

  // ── Step 2: Submit via Web3Forms with the Cloudinary URL ──────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate file size (max 10 MB)
      if (form.resumeFile && form.resumeFile.size > 10 * 1024 * 1024) {
        setResult("Resume must be under 10 MB.");
        return;
      }

      // Upload resume to Cloudinary first (if provided)
      let resumeUrl = "";
      if (form.resumeFile) {
        setUploadStatus("uploading");
        resumeUrl = await uploadResumeToCloudinary(form.resumeFile);
      }

      // Build Web3Forms payload
      setUploadStatus("submitting");
      const formData = new FormData();
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append("subject", `New Job Application: ${jobTitle || "Untitled Role"}`);
      formData.append("job_title", jobTitle || "");
      formData.append("full_name", form.fullName);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("qualification", form.qualification);
      formData.append("experience", form.experience);
      if (resumeUrl) {
        formData.append("resume_link", resumeUrl); // clickable download link in email
      }
      formData.append("message", form.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Application submitted successfully!");
        onSubmit?.({ ...form, jobTitle, resumeUrl });
        setTimeout(() => {
          resetForm();
          onClose();
        }, 1500);
      } else {
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      setResult(error.message || "Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
      setUploadStatus("idle");
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 text-start">
      <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="relative flex items-center justify-center bg-[#1B2A73] px-5 py-4">
          <h2 className="text-center text-base font-bold tracking-wide text-white">
            {jobTitle ? `APPLY FOR ${jobTitle.toUpperCase()}` : "APPLY FOR JOB"}
          </h2>

          <button
            onClick={handleClose}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-white/90 transition hover:bg-white/10"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3 p-5">
          {/* Name */}
          <input
            type="text"
            name="fullName"
            required
            value={form.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full rounded-full border border-gray-300 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none transition focus:border-[#1B2A73] focus:ring-2 focus:ring-[#1B2A73]/10"
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full rounded-full border border-gray-300 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none transition focus:border-[#1B2A73] focus:ring-2 focus:ring-[#1B2A73]/10"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full rounded-full border border-gray-300 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none transition focus:border-[#1B2A73] focus:ring-2 focus:ring-[#1B2A73]/10"
          />

          {/* Qualification */}
          <input
            type="text"
            name="qualification"
            required
            value={form.qualification}
            onChange={handleChange}
            placeholder="Qualification (B.E / B.Tech)"
            className="w-full rounded-full border border-gray-300 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none transition focus:border-[#1B2A73] focus:ring-2 focus:ring-[#1B2A73]/10"
          />

          {/* Experience */}
          <div className="relative">
            <select
              name="experience"
              required
              value={form.experience}
              onChange={handleChange}
              className="w-full appearance-none rounded-full border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-[#1B2A73] focus:ring-2 focus:ring-[#1B2A73]/10"
            >
              <option value="">Select Experience</option>
              <option>Fresher</option>
              <option>0-1 Year</option>
              <option>1-2 Years</option>
              <option>2-4 Years</option>
              <option>5+ Years</option>
            </select>
            <svg
              className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* Resume upload — uploaded to Cloudinary, URL sent via Web3Forms email */}
          <div className="w-full">
            <label className="block mb-1 text-xs font-medium text-gray-500 pl-1">
              Resume (PDF only)
            </label>
            <input
              type="file"
              name="resumeFile"
              accept=".pdf,application/pdf"
              onChange={handleChange}
              className="w-full rounded-full border border-gray-300 px-4 py-2.5 text-sm text-gray-700 outline-none transition file:mr-3 file:rounded-full file:border-0 file:bg-[#1B2A73] file:px-3 file:py-1 file:text-xs file:font-semibold file:text-white hover:file:bg-[#1B2A73]/90 focus:border-[#1B2A73] focus:ring-2 focus:ring-[#1B2A73]/10"
            />
            {form.resumeFile && (
              <p className="mt-1 pl-1 text-xs text-green-600 truncate">
                ✓ {form.resumeFile.name}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              rows={3}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full resize-none rounded-2xl border border-gray-300 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none transition focus:border-[#1B2A73] focus:ring-2 focus:ring-[#1B2A73]/10"
            />
            <span className="pointer-events-none absolute bottom-2 right-4 text-xs text-gray-400">
              {form.message.length}/{MESSAGE_LIMIT}
            </span>
          </div>

          {/* Result message */}
          {result && (
            <p
              className={`text-center text-xs font-medium ${result.includes("success") ? "text-green-600" : "text-red-500"
                }`}
            >
              {result}
            </p>
          )}

          {/* Footer */}
          <div className="flex justify-center pt-2">
            <PrimaryButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  {/* <Loader2 size={16} className="animate-spin" /> */}
                  {uploadStatus === "uploading" ? "UPLOADING..." : "SUBMITTING..."}
                </>
              ) : (
                "APPLY NOW"
              )}
            </PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
}