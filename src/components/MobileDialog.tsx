"use client"
import { useState, useEffect } from "react";

export default function MobileDialog() {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [isMobile, setMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            if(window.matchMedia("(any-hover:none)").matches) {
                return true;
            } else {
                return false;
            }
        };
        if (checkMobile()) setDialogOpen(true);
    }, []);
    
    const dialogClose = () => {
        setDialogOpen(false);
    };
    
    if (!dialogOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 shadow-lg max-w-sm mx-4 ddc-border">
                <h3 className="mb-4">
                Switch to desktop for best viewing experience.
                </h3>
                <button
                onClick={dialogClose}
                className="w-full py-2 px-4 bg-black text-white hover:bg-gray-800 transition-colors font-figtree text-subheader"
                >
                Close
                </button>
            </div>
        </div>
    );
}
