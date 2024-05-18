import Link from 'next/link'

export default function NewsPage() {
  return (
    <main>
      <h1>this is news page</h1>
      <div>
        <ul>
          <li>
            <Link href={'/news/1'}>New 1</Link>
          </li>
          <li>
            <Link href={'/news/2'}>New 2</Link>
          </li>
          <li>
            <Link href={'/news/1'}>New 3</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}