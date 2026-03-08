'use client';

import { ThemeProvider } from "next-themes"
import { UserProvider } from '@/providers/UserProvider'
import React from 'react'

function BodyWrapper({children}: {children: React.ReactNode}) {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="system"
      enableSystem>
        <UserProvider>
            {children}
        </UserProvider>
    </ThemeProvider>
  )
}

export default BodyWrapper