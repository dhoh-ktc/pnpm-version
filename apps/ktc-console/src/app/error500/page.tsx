import Link from 'next/link'

export default function Custom500() {
  return (
    <div style={{ padding: 50 }}>
      <h2>(500) Internal Server Error</h2>
      <p style={{ paddingTop: 20 }}>서버 오류가 발생하였습니다. 관리자에게 문의해주세요.</p>
      <Link href={'/'}>
        <button>홈으로 이동</button>
      </Link>
    </div>
  )
}
