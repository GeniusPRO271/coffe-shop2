import type { Metadata } from 'next'
import Template from './template'


export const metadata: Metadata = {
  title: 'Filomena Register',
  description: 'Coffe-Shop Register',
}

export default function RegisterLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
        <Template key={"/register"}>{children}</Template>
    </section>
  )
}