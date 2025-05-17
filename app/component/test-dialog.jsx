"use client"
import { useEffect, useRef } from 'react';

export default function DialogPage() {
  const backdropRef = useRef(null);

  useEffect(() => {
    // Buka dialog otomatis saat halaman dimuat
    if (backdropRef.current) {
      backdropRef.current.classList.remove('opacity-0', 'pointer-events-none');
      backdropRef.current.classList.add('opacity-100', 'pointer-events-auto');
    }
  }, []);

  const closeDialog = () => {
    if (backdropRef.current) {
      backdropRef.current.classList.add('opacity-0', 'pointer-events-none');
      backdropRef.current.classList.remove('opacity-100', 'pointer-events-auto');
    }
  };

  return (
    <>
      {/* Backdrop dan Dialog */}
      <div
        ref={backdropRef}
        onClick={(e) => {
            // Jika yang diklik adalah backdrop itu sendiri, tutup dialog
            if (e.target === backdropRef.current) {
            closeDialog();
            }
        }}
        data-dialog-backdrop="dialog"
        data-dialog-backdrop-close="true"
        className="pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-[rgba(0, 0, 0, 0.5)] bg-opacity-10 opacity-0 backdrop-blur-sm transition-opacity duration-300"
      >
        <div
          data-dialog="dialog"
          className="relative m-4 p-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white shadow-sm"
        >
          <div className="flex shrink-0 items-center pb-4 text-xl font-medium text-slate-800">
            It's a simple dialog.
          </div>
          <div className="relative border-t border-slate-200 py-4 leading-normal text-slate-600 font-light">
            Dialog muncul otomatis saat halaman dibuka.
          </div>
          <div className="flex shrink-0 flex-wrap items-center pt-4 justify-end">
            <button
              onClick={closeDialog}
              className="rounded-md border border-transparent py-2 px-4 text-center text-sm transition-all text-slate-600 hover:bg-slate-100"
              type="button"
            >
              Cancel
            </button>
            <button
              onClick={closeDialog}
              className="rounded-md bg-green-600 py-2 px-4 ml-2 text-white text-sm shadow-md hover:bg-green-700"
              type="button"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
