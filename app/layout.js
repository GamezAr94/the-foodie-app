import "./globals.css";
import MainHeader from "@/app/components/main-header/main-header";

export const metadata = {
    title: "NextLevel Food",
    description: "Delicious meals, shared by a food-loving community.",
    generator: "Next.js",
    manifest: "/manifest.json",
    keywords: ["nextjs", "nextjs13", "next13", "pwa", "next-pwa"],
    authors: [
        { name: "Arturo Gamez" },
        {
            name: "Arturo Gamez",
            url: "https://arturogamez.com/",
        },
    ],
    icons: [
        { rel: "apple-touch-icon", url: "/icons/apple-icon-114x114.png" },
        { rel: "icon", url: "/icons/apple-icon-144x144.png" },
    ],
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <MainHeader />
                {children}
            </body>
        </html>
    );
}
