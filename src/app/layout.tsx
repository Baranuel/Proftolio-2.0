import Link from "next/link";
import { Providers } from "../providers/Providers";
import { VisitedProjectsProvider } from "../providers/VisitedProjectsProvider";
import "./globals.css";

export const metadata = {
  title: "Samuel Baran",
  description: "Samuel Baran's portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html style={{ overflowX: "hidden", scrollBehavior: "smooth" }} lang="en">
      <body className="flex flex-col justify-between min-h-screen overflow-x-hidden ">
        <Providers>
          <main>{children}</main>
        </Providers>
        <footer className=" bg-purple-100/20 min-h-[100px] h-full md:text-sm text-md  flex md:flex-col justify-between md:justify-center  items-center w-screen  px-48 2xl:px-24 xl:px-12 lg:px-12 sm:px-6 py-4">
          <p>
            Developed and Designed by{" "}
            <span className="font-bold text-purple-500 ">Samuel Baran</span>
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
