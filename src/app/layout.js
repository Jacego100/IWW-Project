
import "./globals.css";

export const metadata = {
  title: "Meet the IWW",
  description: "The worldwide impact of the IWW.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
