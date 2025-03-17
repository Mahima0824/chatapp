import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "./Context/context";
import React from "react";
import ModelProvider from "./Components/ModelProvider";
import ToastProvider from "@/components/ui/ToastProvider";
import { ChatProvider } from "./Context/ChatContext";
import { ThemeProvider } from "./Context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chat App",
  description: "A modern chat application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <React.StrictMode>
      <html lang="en">
        <ThemeProvider>
          <SidebarProvider>
            <body
              className={`${geistSans.variable} ${geistMono.variable} antialiased`}
              suppressHydrationWarning
            >
              <ToastProvider />
              <ChatProvider>
                <main className="">{children}</main>
              </ChatProvider>
              <ModelProvider />
            </body>
          </SidebarProvider>
        </ThemeProvider>
      </html>
    </React.StrictMode>
  );
}
