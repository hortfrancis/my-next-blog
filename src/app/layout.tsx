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

      <body className={inter.className}>

        <header>
          {/* Top navigation on every route */}
          <nav>
            <ul>

              <li>
                <Link href={'/'}>Home</Link>
              </li>

              <li>
                <Link href={'/about'}>About</Link>
              </li>

              <li>
                <a href="https://github.com/hortfrancis/my-next-blog">GitHub repo</a>
              </li>

            </ul>
          </nav>

        </header>

        {/* Rest of site content placed here */}
        <main>
          {children}
        </main>

        <footer>
          <ul>

            <li>
              <a href="https://www.linkedin.com/in/hortfrancis">LinkedIn</a>
            </li>

            <li>
              <a href="https://github.com/hortfrancis/">GitHub</a>
            </li>

          </ul>
        </footer>

      </body>
    </html>
  )
}
