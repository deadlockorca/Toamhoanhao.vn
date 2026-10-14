export default function Loading() {
  return (
    <div
      className="flex min-h-screen items-center justify-center bg-[#f7f1e9]"
      role="status"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-4">
        <span
          className="h-10 w-10 animate-spin rounded-full border-2 border-[#ded4c4] border-t-[#a47b45]"
          aria-hidden="true"
        />
        <p className="text-sm font-medium tracking-wide text-[#62584b]">
          Đang tải nội dung…
        </p>
      </div>
    </div>
  );
}
