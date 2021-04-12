import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1>My name is Soobeen Yim.</h1>
	  <p>My favorite singer is NCT.</p>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}