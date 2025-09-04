export default function FullPageLoader() {
    return (
        <div
            className="fixed inset-0 z-[9999] bg-black/30 backdrop-blur-[1px]
                 flex items-center justify-center"
            role="status"
            aria-live="polite"
            aria-label="Loading"
        >
            <div className="flex flex-col items-center gap-3">
                {/* Spinner */}
                <svg className="animate-spin h-30 w-30 text-orange-400" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="12"
                            stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-90" fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                </svg>
                <div className="text-black font-bold text-xl">Processing…</div>
            </div>
        </div>
    );
}
