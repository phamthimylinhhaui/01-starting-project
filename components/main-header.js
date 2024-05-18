import Link from 'next/link'

export default function MainHeader() {
  return (
    <div id="main-header">
      <div id="logo"><Link href={'/'}>Home</Link></div>
      <ul><Link href={'/new'}>New</Link></ul>
    </div>
  );
}