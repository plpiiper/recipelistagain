import Head from '@/components/Head'
export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <Head Title="Home"/>
      <body>{children}</body>
      </html>
  )
}
