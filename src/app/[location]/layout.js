import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ecovista",
  description: "One Place Dashboard for Eco Information",
};

export default function RootLayout({ children, aqi }) {
  return (
    <div className="wrapper">
      {children}
      {aqi}
    </div>
  );
}
