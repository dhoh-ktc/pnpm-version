/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** 프로젝트 정보를 위한 스키마 */
export interface ProjectResponse {
  /** @format date-time */
  createdAt?: string;
  createdBy?: string;
  /** @format date-time */
  updatedAt?: string;
  updatedBy?: string;
  /** 프로젝트 Id */
  id?: string;
  /** 프로젝트 이름 */
  name?: string;
  /** 프로젝트 소유자(Account) */
  ownedBy?: string;
  /** 프로젝트 설명 */
  description?: string;
}

/** 프로젝트 수정을 위한 스키마 */
export interface UpdateProjectRequest {
  /** 프로젝트 이름 */
  name?: string;
  /** 프로젝트 설명 */
  description?: string;
}

/** User를 위한 스키마 */
export interface CreateUserRequest {
  /**
   * Login ID (최소 4자, 최대 60자, 대소문자, 숫자, 특수문자('.', ‘@', ‘-’, '_') 가능)
   * @minLength 4
   * @maxLength 60
   * @pattern ^[A-Za-z][A-Za-z0-9.@_-]*$
   */
  loginId: string;
  /**
   * 비밀번호 (최소 9자, 최대 15자, 대문자, 소문자, 숫자, 특수문자 1개 이상 포함)
   * @minLength 9
   * @maxLength 15
   * @pattern ^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\`~!@#$%\^&*()\-_=+\[\{\]\}\\|;:'",<\.>\/?]).+$
   */
  password: string;
  /**
   * 비밀번호 (최소 9자, 최대 15자, 대문자, 소문자, 숫자, 특수문자 1개 이상 포함)
   * @minLength 9
   * @maxLength 15
   * @pattern ^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\`~!@#$%\^&*()\-_=+\[\{\]\}\\|;:'",<\.>\/?]).+$
   */
  passwordConfirm: string;
  /**
   * 이름 (최대 50자, 영문자, 한글, 숫자, '-', '_' 만 허용)
   * @minLength 2
   * @maxLength 50
   * @pattern ^[a-zA-Z0-9가-힣_-]+$
   */
  name: string;
  /**
   * Email (최소 6자, 최대 100자, 이메일 형식)
   * @minLength 6
   * @maxLength 100
   */
  email: string;
  /**
   * 휴대전화 번호 (대시('-')를 제외한 숫자만 입력 가능), 최소 10자 최대 11자
   * @minLength 11
   * @maxLength 11
   * @pattern ^[0-9]+$
   */
  primaryMobile: string;
  /** 2차 인증 필수 여부 */
  twoFactorRequired?: boolean;
}

/** User를 위한 스키마 */
export interface CreateUserResponse {
  /** IAM User key값(UUID) */
  userId?: string;
  /** Account key값(UUID) */
  accountId?: string;
  /** Login ID (최소 4자, 최대 60자, 대소문자, 숫자, 특수문자('.', ‘@', ‘-’, '_') 가능) */
  loginId?: string;
  /** 이름 (최대 50자, 영문자, 한글, 숫자, '-', '_' 만 허용) */
  name?: string;
}

export interface DefaultException {
  cause?: {
    stackTrace?: {
      classLoaderName?: string;
      moduleName?: string;
      moduleVersion?: string;
      methodName?: string;
      fileName?: string;
      /** @format int32 */
      lineNumber?: number;
      className?: string;
      nativeMethod?: boolean;
    }[];
    message?: string;
    localizedMessage?: string;
  };
  stackTrace?: {
    classLoaderName?: string;
    moduleName?: string;
    moduleVersion?: string;
    methodName?: string;
    fileName?: string;
    /** @format int32 */
    lineNumber?: number;
    className?: string;
    nativeMethod?: boolean;
  }[];
  code?:
    | 'INVALID_ARGUMENT'
    | 'FAILED_PRECONDITION'
    | 'OUT_OF_RANGE'
    | 'UNAUTHORIZED'
    | 'PERMISSION_DENIED'
    | 'NOT_FOUND'
    | 'ABORTED'
    | 'ALREADY_EXIST'
    | 'RESOURCE_EXHAUSTED'
    | 'CANCELLED'
    | 'DATA_LOSS'
    | 'UNKNOWN'
    | 'INTERNAL_SERVER_ERROR'
    | 'UNIMPLEMENTED'
    | 'SERVICE_UNAVAILABLE'
    | 'GATEWAY_TIMEOUT';
  errorCode?: string;
  message?: string;
  suppressed?: {
    stackTrace?: {
      classLoaderName?: string;
      moduleName?: string;
      moduleVersion?: string;
      methodName?: string;
      fileName?: string;
      /** @format int32 */
      lineNumber?: number;
      className?: string;
      nativeMethod?: boolean;
    }[];
    message?: string;
    localizedMessage?: string;
  }[];
  localizedMessage?: string;
}

/** 프로젝트 생성을 위한 스키마 */
export interface CreateProjectRequest {
  /**
   * 프로젝트 이름
   * @minLength 1
   */
  name?: string;
  /** 프로젝트 설명 */
  description?: string;
}

export interface KeycloakCredential {
  clientId: string;
  clientSecret: string;
}

export interface ServiceTokenRequest {
  url: string;
  method: string;
  keycloakCredential: KeycloakCredential;
  issuerKeycloakToken?: string;
}

/** Login을 위한 스키마 */
export interface LoginRequest {
  /**
   * 로그인 타입(account, user, client)
   * @minLength 0
   * @maxLength 50
   * @pattern ^(account|user|client)$
   */
  loginType?: string;
  /**
   * Account key값(UUID)
   * @minLength 0
   * @maxLength 50
   */
  accountId?: string;
  /** Login ID (이메일 형식, 최대 50자) */
  loginId?: string;
  /**
   * 비밀번호 (최소 9자, 최대 15자, 대문자, 소문자, 숫자, 특수문자 1개 이상 포함)
   * @minLength 9
   * @maxLength 15
   * @pattern ^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\`~!@#$%\^&*()\-_=+\[\{\]\}\\|;:'",<\.>\/?]).+$
   */
  password?: string;
  /**
   * 호출하는 플랫폼의 Client ID
   * @minLength 0
   * @maxLength 50
   * @pattern ^[A-Za-z0-9_.-]+$
   */
  clientId?: string;
  /**
   * 호출하는 플랫폼의 Client Secret
   * @minLength 0
   * @maxLength 50
   */
  clientSecret?: string;
  /**
   * 인증 방식 (password, client_credential)
   * @pattern ^(client_credentials|refresh_token)$
   */
  grantType?: string;
}

/** Login을 위한 스키마 */
export interface LoginAccountResponse {
  /** Token Type */
  token_type?: string;
  /** Access Token */
  access_token?: string;
  /**
   * Access Token 만료 시간
   * @format int64
   */
  expires_in?: number;
  /** Refresh Token */
  refresh_token?: string;
  /**
   * Refresh Token 만료시간
   * @format int64
   */
  refresh_expires_in?: number;
  /** ID Token */
  id_token?: string;
  /** Session State */
  session_state?: string;
  /** Login ID (이메일 형식, 최대 50자) */
  login_id?: string;
  /** 이름 (최대 50자, 영문자, 한글, 숫자, '-', '_' 만 허용) */
  name?: string;
  /**
   * 마지막 비밀번호 변경 시각
   * @format date-time
   */
  password_update_at?: string;
}

/** Login을 위한 스키마 */
export interface LoginClientResponse {
  /** Token Type */
  token_type?: string;
  /** Access Token */
  access_token?: string;
  /**
   * Access Token 만료 시간
   * @format int64
   */
  expires_in?: number;
  /** Refresh Token */
  refresh_token?: string;
  /**
   * Refresh Token 만료시간
   * @format int64
   */
  refresh_expires_in?: number;
  /** Session State */
  session_state?: string;
}

/** Login을 위한 스키마 */
export interface LoginUserResponse {
  /** Token Type */
  token_type?: string;
  /** Access Token */
  access_token?: string;
  /**
   * Access Token 만료 시간
   * @format int64
   */
  expires_in?: number;
  /** Refresh Token */
  refresh_token?: string;
  /**
   * Refresh Token 만료시간
   * @format int64
   */
  refresh_expires_in?: number;
  /** ID Token */
  id_token?: string;
  /** Session State */
  session_state?: string;
  /** 2차 인증 필수 여부 */
  two_factor_required?: boolean;
  /** Login ID (이메일 형식, 최대 50자) */
  login_id?: string;
  /** 이름 (최대 50자, 영문자, 한글, 숫자, '-', '_' 만 허용) */
  name?: string;
  /**
   * 마지막 비밀번호 변경 시각
   * @format date-time
   */
  password_update_at?: string;
}

/** Account를 위한 스키마 */
export interface CreateAccountRequest {
  /**
   * Login ID (이메일 형식, 최대 50자)
   * @minLength 0
   * @maxLength 50
   */
  loginId: string;
  /**
   * 비밀번호 (최소 9자, 최대 15자, 대문자, 소문자, 숫자, 특수문자 1개 이상 포함)
   * @minLength 9
   * @maxLength 15
   * @pattern ^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\`~!@#$%\^&*()\-_=+\[\{\]\}\\|;:'",<\.>\/?]).+$
   */
  password: string;
  /**
   * 비밀번호 (최소 9자, 최대 15자, 대문자, 소문자, 숫자, 특수문자 1개 이상 포함)
   * @minLength 9
   * @maxLength 15
   * @pattern ^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\`~!@#$%\^&*()\-_=+\[\{\]\}\\|;:'",<\.>\/?]).+$
   */
  passwordConfirm: string;
  /**
   * 이름 (최대 50자, 영문자, 한글, 숫자, '-', '_' 만 허용)
   * @minLength 0
   * @maxLength 50
   * @pattern ^[a-zA-Z0-9가-힣_-]+$
   */
  name: string;
  /**
   * 휴대전화 번호 (대시('-')를 제외한 숫자만 입력 가능)
   * @minLength 0
   * @maxLength 11
   * @pattern ^[0-9]+$
   */
  primaryMobile: string;
  /**
   * 회원가입을 위한 가입코드
   * @minLength 0
   * @maxLength 50
   */
  signupCode: string;
  /** 서비스 이용 약관 동의 여부 */
  termsOfServiceAgreed: boolean;
  /** 개인정보 수집/이용 동의 여부 */
  privacyAgreed: boolean;
  /** 광고성 정보 수신 동의 여부 */
  advertisingAgreed?: boolean;
}

/** Account를 위한 스키마 */
export interface CreateAccountResponse {
  /** Account key값(UUID) */
  accountId?: string;
  /** Login ID (이메일 형식, 최대 50자) */
  loginId?: string;
  /** 이름 (최대 50자, 영문자, 한글, 숫자, '-', '_' 만 허용) */
  name?: string;
}

/** Token Validate를 위한 스키마 */
export interface ValidateTokenResponse {
  /** 요청자 식별 값(uuid) */
  requesterId?: string;
  /** 요청자 이름 */
  requesterName?: string;
  /** 요청자 타입 */
  requesterType?: string;
  /** Account key값(UUID) */
  accountId?: string;
  /** Account 이름 */
  accountName?: string;
  /** 요청 리전 */
  region?: string;
}

/** Token Validate를 위한 스키마 */
export interface ValidateTokenRequest {
  /** url(endpoint + path) */
  url: string
}

/** Token Authorize를 위한 스키마 */
export interface AuthorizeTokenResponse {
  /** 요청자 식별 값(uuid) */
  subjectId?: string;
  /** Account key값(UUID) */
  accountId?: string;
  /** project의 openstack token */
  xAuthToken?: string;
}

/** Token Authorize를 위한 스키마 */
export interface AuthorizeTokenRequest {
  /** url(endpoint + path) */
  url?: string;
}

/** User를 위한 스키마 */
export interface UpdateUserRequest {
  /**
   * 이름 (최대 50자, 영문자, 한글, 숫자, '-', '_' 만 허용)
   * @minLength 2
   * @maxLength 50
   * @pattern ^[a-zA-Z0-9가-힣_-]+$
   */
  name?: string;
  /**
   * Email (최소 6자, 최대 100자, 이메일 형식)
   * @minLength 6
   * @maxLength 100
   */
  email?: string;
  /**
   * 휴대전화 번호 (대시('-')를 제외한 숫자만 입력 가능), 최소 10자 최대 11자
   * @minLength 11
   * @maxLength 11
   * @pattern ^[0-9]+$
   */
  primaryMobile?: string;
  /** 2차 인증 필수 여부 */
  twoFactorRequired?: boolean;
}

/** User를 위한 스키마 */
export interface UpdateUserResponse {
  /** IAM User key값(UUID) */
  userId?: string;
  /** Account key값(UUID) */
  accountId?: string;
  /** Login ID (최소 4자, 최대 60자, 대소문자, 숫자, 특수문자('.', ‘@', ‘-’, '_') 가능) */
  loginId?: string;
  /** 이름 (최대 50자, 영문자, 한글, 숫자, '-', '_' 만 허용) */
  name?: string;
  /** Email (최소 6자, 최대 100자, 이메일 형식) */
  email?: string;
  /** 휴대전화 번호 (대시('-')를 제외한 숫자만 입력 가능), 최소 10자 최대 11자 */
  primaryMobile?: string;
  /** 2차 인증 필수 여부 */
  twoFactorRequired?: boolean;
  /** 계정 잠금 상태 */
  userLocked?: boolean;
  /**
   * 최근 로그인 시간
   * @format date-time
   */
  recentLoginAt?: string;
  /**
   * 생성 시간
   * @format date-time
   */
  createdAt?: string;
}

export interface Page {
  /** @format int64 */
  totalElements?: number;
  /** @format int32 */
  totalPages?: number;
  first?: boolean;
  last?: boolean;
  /** @format int32 */
  size?: number;
  content?: object[];
  /** @format int32 */
  number?: number;
  sort?: SortObject;
  /** @format int32 */
  numberOfElements?: number;
  pageable?: PageableObject;
  empty?: boolean;
}

export interface PageableObject {
  /** @format int64 */
  offset?: number;
  sort?: SortObject;
  /** @format int32 */
  pageSize?: number;
  paged?: boolean;
  /** @format int32 */
  pageNumber?: number;
  unpaged?: boolean;
}

export interface SortObject {
  empty?: boolean;
  sorted?: boolean;
  unsorted?: boolean;
}

/** User를 위한 스키마 */
export interface SelectUserResponse {
  /** IAM User key값(UUID) */
  userId?: string;
  /** Account key값(UUID) */
  accountId?: string;
  /** Login ID (최소 4자, 최대 60자, 대소문자, 숫자, 특수문자('.', ‘@', ‘-’, '_') 가능) */
  loginId?: string;
  /** 이름 (최대 50자, 영문자, 한글, 숫자, '-', '_' 만 허용) */
  name?: string;
  /** Email (최소 6자, 최대 100자, 이메일 형식) */
  email?: string;
  /** 휴대전화 번호 (대시('-')를 제외한 숫자만 입력 가능), 최소 10자 최대 11자 */
  primaryMobile?: string;
  /** 2차 인증 필수 여부 */
  twoFactorRequired?: boolean;
  /** 계정 잠금 상태 */
  userLocked?: boolean;
  /**
   * 최근 로그인 시간
   * @format date-time
   */
  recentLoginAt?: string;
  /**
   * 생성 시간
   * @format date-time
   */
  createdAt?: string;
  /**
   * 마지막 수정 시간
   * @format date-time
   */
  updatedAt?: string;
}

export interface SearchProjectRequest {
  /** 프로젝트 이름 - 포함 검색 */
  name?: string;
  /** 프로젝트 소유자 */
  ownedBy?: string;
}
