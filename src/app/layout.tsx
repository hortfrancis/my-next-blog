import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Next13 Blog',
  description: `Made by Alex Hort-Francis, while learning NextJS 13 with Tech Educators, in June 2023. 
                We covered the basics of NextJS, including routing, data fetching, and styling.
                Technologies included TypeScript, TailwindCSS, and Contentlayer.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={`${inter.className} flex flex-col min-h-screen`}>

        <header className="bg-blue-500 text-white font-bold py-6 px-4 shadow-md">
          {/* Top navigation on every route */}
          <nav>
            <ul className="flex justify-center space-x-6">

              <li>
                <Link href={'/'} className="hover:text-blue-200">Home</Link>
              </li>

              <li>
                <Link href={'/about'} className="hover:text-blue-200">About</Link>
              </li>

              <li>
                <a href="https://github.com/hortfrancis/my-next-blog" className="hover:text-blue-200">GitHub Repo</a>
              </li>

            </ul>
          </nav>

        </header>

        {/* Rest of site content placed here */}
        <main className="flex-grow max-w-2xl mx-auto p-4">
          {children}
        </main>

        <footer className="sticky bottom-0 bg-blue-500 text-white py-6 px-4 mt-auto">
          <ul className="flex justify-center space-x-6">

            <li>
              <a href="https://www.linkedin.com/in/hortfrancis" className="hover:text-blue-200">LinkedIn</a>
            </li>

            <li>
              <a href="https://github.com/hortfrancis/" className="hover:text-blue-200">GitHub</a>
            </li>

          </ul>
        </footer>

      </body>
    </html>
  )
}
