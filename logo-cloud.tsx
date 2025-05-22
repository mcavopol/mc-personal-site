"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface Logo {
  name: string
  src: string
  alt: string
  description?: string
}

interface LogoCloudProps {
  title?: string
  logos: Logo[]
  className?: string
}

export default function LogoCloud({ title = "Trusted by industry leaders", logos, className }: LogoCloudProps) {
  const [selectedLogo, setSelectedLogo] = useState<Logo | null>(null)

  return (
    <div className={cn("w-full py-8", className)}>
      <div className="container px-4 mx-auto">
        {title && <h3 className="text-lg font-medium text-center mb-6">{title}</h3>}

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-4">
          {logos.map((logo, index) => (
            <button
              key={index}
              onClick={() => setSelectedLogo(logo)}
              className="flex items-center justify-center p-2 bg-white/5 rounded-md border border-gray-100 hover:border-gray-300 dark:border-gray-800 dark:hover:border-gray-700 transition-all duration-200 grayscale hover:grayscale-0 hover:shadow-sm group"
              aria-label={`View details about ${logo.name}`}
            >
              <div className="relative w-full aspect-[3/2] flex items-center justify-center p-2">
                <img
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  className="max-h-full max-w-full object-contain transition-transform duration-200 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/5 dark:group-hover:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {logo.name}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-4">
          ...and many more industry leaders trust our platform
        </p>
      </div>

      <Dialog open={!!selectedLogo} onOpenChange={(open) => !open && setSelectedLogo(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">{selectedLogo?.name}</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center justify-center space-y-4 p-4">
            <div className="w-32 h-32 flex items-center justify-center">
              <img
                src={selectedLogo?.src || "/placeholder.svg"}
                alt={selectedLogo?.alt}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <p className="text-center text-sm text-muted-foreground">
              {selectedLogo?.description || `${selectedLogo?.name} is one of our trusted partners.`}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
