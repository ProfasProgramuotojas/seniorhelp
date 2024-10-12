import "./globals.css";
import NavBar from "./components/NavBar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <div>
          {children}
          <NavBar />
        </div>
      </body>
    </html>
  );
}
