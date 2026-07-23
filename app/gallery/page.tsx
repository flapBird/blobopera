"use client";

import { useState, useEffect, useCallback } from "react";
import SidebarLayout from "@/components/SidebarLayout";
import SchemaMarkup from "@/components/SchemaMarkup";


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
const SEED_SUBMISSIONS: Submission[] = [
  {
    id: "seed-1",
    title: "Happy Little Blobs",
    description: "My first attempt at making the blobs sing a cheerful melody. They sound so joyful!",
    shareLink: "https://blob-opera.com/share/example1",
    submitterName: "MusicFan42",
    submittedAt: "2026-07-20T10:00:00Z",
    approved: true,
  },
  {
    id: "seed-2",
    title: "Bedtime Lullaby",
    description: "A slow, gentle piece perfect for winding down. The bass blob really shines here.",
    shareLink: "https://blob-opera.com/share/example2",
    submitterName: "NightOwl",
    submittedAt: "2026-07-19T15:30:00Z",
    approved: true,
  },
  {
    id: "seed-3",
    title: "Dramatic Opera Scene",
    description: "Tried to recreate a dramatic operatic moment. Lots of portamento and high notes!",
    shareLink: "https://blob-opera.com/share/example3",
    submitterName: "OperaLover",
    submittedAt: "2026-07-18T20:15:00Z",
    approved: true,
  },
  {
    id: "seed-4",
    title: "Blob Quartet Jazz",
    description: "What if the blobs sang jazz? Turned out surprisingly swingy!",
    shareLink: "https://blob-opera.com/share/example4",
    submitterName: "JazzCat",
    submittedAt: "2026-07-17T12:45:00Z",
    approved: true,
  },
  {
    id: "seed-5",
    title: "Rainy Day Melody",
    description: "Inspired by a rainy afternoon. The mezzo-soprano carries such a warm, cozy tone.",
    shareLink: "https://blob-opera.com/share/example5",
    submitterName: "Raindrop",
    submittedAt: "2026-07-16T09:20:00Z",
    approved: true,
  },
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
      saveSubmissions(SEED_SUBMISSIONS);
      setSubmissions(SEED_SUBMISSIONS);
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
    if (!title.trim() || !description.trim() || !shareLink.trim()) {
      setFormError("Title, description, and share link are required.");
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
    if (!passesModeration(shareLink)) {
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
                    Share Link *
                  </label>
                  <input
                    type="url"
                    name="shareLink"
                    value={formData.shareLink}
                    onChange={handleInputChange}
                    placeholder="https://blob-opera.com/share/..."
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
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {approvedSubmissions.map((sub) => (
                <div
                  key={sub.id}
                  className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-heading font-bold text-base text-text-dark leading-tight">
                      {sub.title}
                    </h3>
                  </div>
                  <p className="text-sm text-text-dark/60 leading-relaxed mb-3 line-clamp-3">
                    {sub.description}
                  </p>
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-xs text-text-dark/40 truncate">
                      <span className="font-medium">{sub.submitterName}</span>
                      {" · "}
                      {formatDate(sub.submittedAt)}
                    </div>
                    <a
                      href={sub.shareLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 px-4 py-1.5 bg-primary/10 text-primary hover:bg-primary/20 rounded-lg font-heading font-semibold text-xs transition-colors"
                    >
                      Listen
                    </a>
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
