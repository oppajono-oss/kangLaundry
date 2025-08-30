export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-16 w-16 animate-spin rounded-full border-b-2 border-t-2 border-blue-600"></div>
        <h3 className="text-xl font-medium text-blue-700">Memuat...</h3>
        <p className="text-sm text-slate-500">Mohon tunggu sebentar</p>
      </div>
    </div>
  );
}