import type { Metadata } from 'next'
import Template from './template'


export const metadata: Metadata = {
  title: 'Filomena Login',
  description: 'Coffe-Shop Login',
}

export default function LoginLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
        <Template key={"/login"}>{children}</Template>
    </section>
  )
}