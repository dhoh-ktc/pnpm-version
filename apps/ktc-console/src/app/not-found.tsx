import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{ padding: 30 }}>
      <h2>404 - 페이지를 찾을 수 없습니다.</h2>
      <p>존재하지 않는 페이지이거나, 이동된 페이지일 수 있습니다.</p>
      <Link href="/">
        <button>홈으로 이동</button>
      </Link>
    </div>
  )
}
