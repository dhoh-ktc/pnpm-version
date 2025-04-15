export interface IUser {
  /** IAM User key값(UUID) */
  userId?: string
  /** Account key값(UUID) */
  accountId?: string
  /** Login ID (최소 4자, 최대 60자, 대소문자, 숫자, 특수문자('.', ‘@', ‘-’, '_') 가능) */
  loginId?: string
  /** 이름 (최대 50자, 영문자, 한글, 숫자, '-', '_' 만 허용) */
  name?: string
  /** Email (최소 6자, 최대 100자, 이메일 형식) */
  email?: string
  /** 휴대전화 번호 (대시('-')를 제외한 숫자만 입력 가능), 최소 10자 최대 11자 */
  primaryMobile?: string
  /** 2차 인증 필수 여부 */
  twoFactorRequired?: boolean
  /** 계정 잠금 상태 */
  userLocked?: boolean
  /**
   * 최근 로그인 시간
   * @format date-time
   */
  recentLoginAt?: string
  /**
   * 생성 시간
   * @format date-time
   */
  createdAt?: string
  /**
   * 마지막 수정 시간
   * @format date-time
   */
  updatedAt?: string
}