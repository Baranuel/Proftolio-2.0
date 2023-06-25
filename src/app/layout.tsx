import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html style={{ overflowX: "hidden", scrollBehavior: "smooth" }} lang="en">
      <body className="flex flex-col justify-between min-h-screen">
        <main>{children}</main>
        <footer className=" bg-purple-100/20 min-h-[10vh] md:text-sm text-md  flex md:flex-col justify-between items-center w-screen  px-48 2xl:px-24 xl:px-12 lg:px-12 sm:px-6 py-4">
          <p>
            Developed and Designed by{" "}
            <span className="font-black text-transparent w-fit bg-clip-text bg-gradient-to-r from-lightBlue via-lightPink to-darkPurple">
              Samuel Baran
            </span>
          </p>
          <Link
            target="_blank"
            href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTLphlsfBPbcQgcwfwmQmRZTSVcNRLDBkPzpcPHvlDrJlcCcKBkzMGVCNrlpnMQcXSqHgq"
            className="underline"
          >
            s.baran.dev@gmail.com
          </Link>
        </footer>
      </body>
    </html>
  );
}
