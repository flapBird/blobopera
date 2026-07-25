"use client";

import { useState, useEffect, useCallback } from "react";
import SidebarLayout from "@/components/SidebarLayout";
import SchemaMarkup from "@/components/SchemaMarkup";
import { siteConfig } from "@/lib/site.config";


// ---------- types ----------
interface Submission {
  id: string;
  title: string;
  description: string;
  shareLink: string;
  submitterName: string;
  submittedAt: string;
  approved: boolean;
}

// ---------- moderation keywords ----------
const BLOCKED_PATTERNS = [
  /spam/i,
  /porn/i,
  /xxx/i,
  /casino/i,
  /buy now/i,
  /click here/i,
  /free money/i,
  /viagra/i,
];

function passesModeration(text: string): boolean {
  return !BLOCKED_PATTERNS.some((p) => p.test(text));
}

// ---------- storage ----------
const STORAGE_KEY = "blob-opera-gallery";

function loadSubmissions(): Submission[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as Submission[];
  } catch {
    return [];
  }
}

function saveSubmissions(subs: Submission[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(subs));
  } catch {
    /* storage full or unavailable */
  }
}

// Seed submissions for demo
function generateSeedSubmissions(): Submission[] {
  const examples = siteConfig.gallery.examples;
  return examples.map((ex, i) => ({
    id: "seed-" + (i + 1),
    title: ex.title,
    description: "",
    shareLink: ex.shareLink || "",
    submitterName: ex.submitterName,
    submittedAt: new Date(Date.now() - (examples.length - i) * 86400000).toISOString(),
    approved: true,
  }));
}

const COVER_IMAGES = [
  "/blob-desc-1.webp",
  "/blob-desc-2.webp",
  "/blob-desc-3.webp",
  "/blob-desc-4.webp",
  "/blob-desc-5.webp",
];

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}

// ---------- page ----------
export default function GalleryPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    shareLink: "",
    submitterName: "",
  });
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState(false);
  const [moderationMsg, setModerationMsg] = useState("");

  // Load submissions on mount
  useEffect(() => {
    const existing = loadSubmissions();
    if (existing.length === 0) {
      // Seed with demo entries
      saveSubmissions(generateSeedSubmissions());
      setSubmissions(generateSeedSubmissions());
    } else {
      setSubmissions(existing);
    }
  }, []);

  const approvedSubmissions = submissions.filter((s) => s.approved);
  const pendingCount = submissions.filter((s) => !s.approved).length;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setFormError("");
    setModerationMsg("");
    setFormSuccess(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");
    setModerationMsg("");
    setFormSuccess(false);

    // Validation
    const { title, description, shareLink, submitterName } = formData;
    if (!title.trim() || !description.trim()) {
      setFormError("Title and description are required.");
      return;
    }
    if (title.trim().length > 80) {
      setFormError("Title must be 80 characters or fewer.");
      return;
    }
    if (description.trim().length > 500) {
      setFormError("Description must be 500 characters or fewer.");
      return;
    }

    // Moderation check
    const allText = `${title} ${description} ${submitterName}`;
    if (!passesModeration(allText)) {
      setModerationMsg(
        "Your submission contains language that doesn't meet our content guidelines. Please revise and try again."
      );
      return;
    }
    // Optional share link — skip moderation if empty
    if (shareLink.trim() && !passesModeration(shareLink)) {
      setModerationMsg(
        "The share link appears to contain inappropriate content. Please provide a valid Blob Opera share link."
      );
      return;
    }

    const newSub: Submission = {
      id: `sub-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      title: title.trim(),
      description: description.trim(),
      shareLink: shareLink.trim(),
      submitterName: submitterName.trim() || "Anonymous",
      submittedAt: new Date().toISOString(),
      approved: true, // Auto-approved since we filter via keyword
    };

    const updated = [newSub, ...submissions];
    setSubmissions(updated);
    saveSubmissions(updated);

    setFormSuccess(true);
    setFormData({ title: "", description: "", shareLink: "", submitterName: "" });
    setShowForm(false);

    setTimeout(() => setFormSuccess(false), 4000);
  };

  return (
    <>
      <SchemaMarkup
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Blob Opera Recording Gallery",
          description: "Share and discover Blob Opera recordings from the community.",
        }}
      />

      <section className="pt-10 pb-6 px-4 text-center">
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-text-dark mb-3">
          Recording Gallery
        </h1>
        <p className="text-text-dark/60 max-w-2xl mx-auto text-base leading-relaxed">
          Share your Blob Opera creations and discover what others have made.
          Got a recording you are proud of? Submit your unique share link to join the wall.
        </p>
      </section>

      <SidebarLayout>
        <div className="space-y-8">
          {/* Submit button / form */}
          {!showForm && (
            <div className="text-center">
              <button
                onClick={() => setShowForm(true)}
                className="px-8 py-3 bg-primary text-white rounded-xl font-heading font-bold text-sm hover:bg-primary/90 transition-colors"
              >
                + Share Your Recording
              </button>
            </div>
          )}

          {showForm && (
            <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm animate-fade-up">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-heading font-bold text-lg text-text-dark">Share Your Recording</h2>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-sm text-text-dark/40 hover:text-text-dark transition-colors"
                >
                  Cancel
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-heading font-semibold text-text-dark mb-1">
                    Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="e.g. My First Blob Opera"
                    maxLength={80}
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 bg-white focus:border-primary focus:outline-none transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-heading font-semibold text-text-dark mb-1">
                    Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Tell us about your recording — what inspired it, what techniques you used..."
                    maxLength={500}
                    rows={3}
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 bg-white focus:border-primary focus:outline-none transition-colors text-sm resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-heading font-semibold text-text-dark mb-1">
                    Share Link (optional)
                  </label>
                  <input
                    type="url"
                    name="shareLink"
                    value={formData.shareLink}
                    onChange={handleInputChange}
                    placeholder="Paste your Blob Opera share link if you have one"
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 bg-white focus:border-primary focus:outline-none transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-heading font-semibold text-text-dark mb-1">
                    Your Name (optional)
                  </label>
                  <input
                    type="text"
                    name="submitterName"
                    value={formData.submitterName}
                    onChange={handleInputChange}
                    placeholder="Anonymous"
                    maxLength={40}
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 bg-white focus:border-primary focus:outline-none transition-colors text-sm"
                  />
                </div>

                {formError && (
                  <p className="text-sm text-red-600 bg-red-50 rounded-xl px-4 py-2">{formError}</p>
                )}
                {moderationMsg && (
                  <p className="text-sm text-red-600 bg-red-50 rounded-xl px-4 py-2">{moderationMsg}</p>
                )}

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-primary text-white rounded-xl font-heading font-bold text-sm hover:bg-primary/90 transition-colors"
                >
                  Submit to Gallery
                </button>
              </form>
            </div>
          )}

          {formSuccess && (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-4 text-center animate-fade-up">
              <p className="text-green-700 font-heading font-semibold">
                Your recording has been shared! It appears in the gallery below.
              </p>
            </div>
          )}

          {/* Pending submissions notice */}
          {pendingCount > 0 && (
            <p className="text-xs text-text-dark/40 text-center">
              {pendingCount} submission{pendingCount > 1 ? "s" : ""} pending review.
            </p>
          )}

          {/* Gallery grid */}
          {approvedSubmissions.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {approvedSubmissions.map((sub, idx) => (
                <div
                  key={sub.id}
                  className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group"
                >
                  {/* Cover image + play button */}
                  <div
                    className="relative w-full overflow-hidden"
                    style={{ aspectRatio: "4/3" }}
                  >
                    <img
                      src={COVER_IMAGES[idx % COVER_IMAGES.length]}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                   {sub.shareLink ? (
                     <a
                        href={"/watch?url=" + encodeURIComponent(sub.shareLink)}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                          <svg className="w-5 h-5 text-text-dark ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </a>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center opacity-40">
                        <div className="w-12 h-12 rounded-full bg-white/70 shadow-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-text-dark ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Info bar */}
                  <div className="px-3 py-2.5">
                    <p className="font-heading font-semibold text-sm text-text-dark leading-snug truncate">
                      {sub.title}
                    </p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <span className="text-xs text-text-dark/40 truncate">{sub.submitterName}</span>
                      <span className="text-xs text-text-dark/20">{" · "}</span>
                      <span className="text-xs text-text-dark/40">{formatDate(sub.submittedAt)}</span>
                     {sub.shareLink && (
                       <>
                         <span className="text-xs text-text-dark/20">{" · "}</span>
                         <a
                            href={"/watch?url=" + encodeURIComponent(sub.shareLink)}
                            className="text-xs text-primary hover:underline font-heading font-semibold flex-shrink-0"
                          >
                            Listen
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-4xl mb-3">{'\uD83C\uDFB6'}</p>
              <p className="text-text-dark/50 font-heading font-semibold">
                No recordings yet. Be the first to share!
              </p>
            </div>
          )}
        </div>
      </SidebarLayout>
    </>
  );
}
