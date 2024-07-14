import Head from 'next/head'
import { Header } from '../components/Header'
import { Presentation } from '../sections/Presentation'
import { Skills } from '../sections/Skills'

export default function Home() {
  return (
    <>
      <Head>
        <title>_dm | Portifólio</title>
      </Head>
      <Header />
      <Presentation />
      <Skills />
    </>
  )
}
