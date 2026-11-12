import { getSanityImageUrl } from "../src/sanity/image";

/**
 * TestimonialCard
 *
 * Props:
 *  - image      : fallback image shown when no videoUrl is provided
 *  - name       : person's name
 *  - role       : person's role/title
 *  - alt        : img alt text (defaults to name)
 *  - videoUrl   : (optional) YouTube URL — when provided, a thumbnail with a
 *                 play button is shown. Clicking play loads the iframe.
 *                 Supported formats:
 *                   "https://www.youtube.com/watch?v=VIDEO_ID"
 *                   "https://youtu.be/VIDEO_ID"
 *                   "https://youtube.com/shorts/VIDEO_ID"
 *  - isPlaying  : (optional) controlled play state from parent
 *  - onPlay     : (optional) callback fired when the user presses play,
 *                 allowing the parent to pause all other cards
 *
 * Behaviour:
 *  - All videos start paused (thumbnail shown).
 *  - Clicking the play button fires onPlay() so the parent can set this card
 *    as the active one and pause all others.
 *  - When isPlaying becomes false the iframe is unmounted, which stops
 *    playback and resets the card back to its thumbnail state.
 */
export function TestimonialCard({
  image,
  name,
  role,
  alt,
  videoUrl,
  isPlaying = false,
  onPlay,
}) {
  // ── Extract YouTube video ID from any common URL format ──────────────────
  const isShorts = !!videoUrl?.includes("/shorts/");

  const getYouTubeId = (url) => {
    if (!url) return null;
    const patterns = [
      /youtube\.com\/watch\?v=([^&?]+)/,
      /youtu\.be\/([^?]+)/,
      /youtube\.com\/embed\/([^?]+)/,
      /youtube\.com\/shorts\/([^?&]+)/, // strips ?si= and other params
    ];
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return null;
  };

  const youtubeId = getYouTubeId(videoUrl);

  const youtubeThumbnail = youtubeId
    ? `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`
    : "";
  const coverImage = getSanityImageUrl(image, youtubeThumbnail);

  const handleCoverImageError = (event) => {
    const imageElement = event.currentTarget;

    if (youtubeThumbnail && imageElement.dataset.fallbackApplied !== "true") {
      imageElement.dataset.fallbackApplied = "true";
      imageElement.src = youtubeThumbnail;
      return;
    }

    imageElement.style.visibility = "hidden";
  };

  // autoplay=1        → start playing immediately when iframe is mounted
  // mute=0            → unmuted (user chose to play)
  // loop=1            → loop the video
  // playlist=ID       → required for loop on a single video
  // controls=1        → show player controls
  // rel=0             → no related videos at end
  // modestbranding=1  → hide YouTube logo
  // playsinline=1     → prevents iOS from forcing fullscreen
  const embedUrl = youtubeId
    ? `https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=0&loop=1&playlist=${youtubeId}&controls=1&rel=0&modestbranding=1&playsinline=1`
    : null;

  const handlePlayClick = () => {
    if (onPlay) onPlay();
  };

  return (
    <div className="group relative overflow-hidden rounded-[20px] text-start">
      {/* ── Video or fallback image ────────────────────────────────────────── */}
      {/* Shorts = vertical 9:16 | Regular = square → 3/4 on desktop */}
      <div
        className={`relative w-full bg-black ${isShorts
          ? "aspect-[9/16]"
          : "aspect-square sm:aspect-[4/5] lg:aspect-[3/4]"
          }`}
      >
        {isPlaying && embedUrl ? (
          /* ── Active: show the YouTube iframe ── */
          <iframe
            src={embedUrl}
            title={`${name} testimonial video`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        ) : (
          /* ── Paused: show thumbnail + play button ── */
          <>
            {/* Person's cover photo */}
            {coverImage ? (
              <img
                src={coverImage}
                alt={alt || name}
                onError={handleCoverImageError}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div
                className="h-full w-full bg-gradient-to-br from-slate-800 to-slate-950"
                role="img"
                aria-label={alt || name}
              />
            )}

            {/* Play button — only shown when a videoUrl exists */}
            {youtubeId && (
              <button
                onClick={handlePlayClick}
                aria-label={`Play ${name}'s testimonial`}
                className="absolute inset-0 flex items-center justify-center z-10 focus:outline-none"
              >
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md transition-transform duration-200 hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#111" className="w-5 h-5 translate-x-0.5" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </button>
            )}
          </>
        )}

        {/* Bottom gradient — sits on top of everything via pointer-events-none */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

        {/* Name + role overlay */}
        <div className="absolute bottom-4 left-4 right-4 z-10 pointer-events-none">
          <h3 className="text-[15px] sm:text-[17px] font-semibold text-white leading-tight drop-shadow">
            {name}
          </h3>
          <p className="text-[12px] sm:text-[13px] text-white/80 mt-0.5 drop-shadow">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}
