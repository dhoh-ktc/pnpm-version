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

import {
  CreateAccountRequest,
  CreateAccountResponse,
  CreateProjectRequest,
  CreateUserRequest,
  CreateUserResponse,
  DefaultException,
  LoginAccountResponse,
  LoginClientResponse,
  LoginRequest,
  LoginUserResponse,
  Page,
  ProjectResponse,
  SearchProjectRequest,
  SelectUserResponse,
  ServiceTokenRequest,
  UpdateProjectRequest,
  UpdateUserRequest,
  UpdateUserResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class V1<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description 프로젝트의 ID 로 상세정보를 조회하는 기능 제공
   *
   * @tags Project
   * @name Select
   * @summary 프로젝트 상세 정보 조회
   * @request GET:/v1/projects/{projectId}
   * @secure
   */
  select = (projectId: string, params: RequestParams = {}) =>
    this.request<ProjectResponse, void>({
      path: `/v1/projects/${projectId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description 지정한 프로젝트 ID에 해당하는 프로젝트 정보를 수정한다. 프로젝트 이름과 설명만 수정 가능
   *
   * @tags Project
   * @name Update
   * @summary 프로젝트 수정
   * @request PUT:/v1/projects/{projectId}
   * @secure
   */
  update = (
    projectId: string,
    data: UpdateProjectRequest,
    params: RequestParams = {},
  ) =>
    this.request<ProjectResponse, void>({
      path: `/v1/projects/${projectId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description 지정한 프로젝트 ID에 해당하는 프로젝트를 삭제한다.
   *
   * @tags Project
   * @name Delete
   * @summary 프로젝트 삭제
   * @request DELETE:/v1/projects/{projectId}
   * @secure
   */
  delete = (projectId: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/v1/projects/${projectId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description ## IAM User 계정의 전체 목록을 조회하는 API입니다. ## 페이징, 필터링 기능을 제공하여, 원하는 사용자 목록을 검색할 수 있습니다. ### - 응답의 content 안에는 User 단일 조회의 필드(SelectUserResponse)들이 포함 ### - search 허용 값 : name, loginId, email ### - value는 앞 뒤로 Like 처리
   *
   * @tags User
   * @name SelectUsers
   * @summary IAM User 목록 조회
   * @request GET:/v1/users
   * @secure
   */
  selectUsers = (
    query?: {
      search?: string;
      value?: string;
      /**
       * @format int32
       * @default 0
       */
      page?: number;
      /**
       * @format int32
       * @default 10
       */
      limit?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<Page, void | DefaultException>({
      path: `/v1/users`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description ## 이 API는 클라우드 서비스 이용을 위한 IAM User 계정을 생성하는 기능을 제공합니다. ## 생성된 IAM User는 클라우드 리소스에 대한 접근 제어 및 보안을 강화하기 위해 사용되며, ## 각 계정은 고유한 인증 정보와 세분화된 권한을 갖게 됩니다.
   *
   * @tags User
   * @name CreateUser
   * @summary IAM User 생성
   * @request POST:/v1/users
   * @secure
   */
  createUser = (data: CreateUserRequest, params: RequestParams = {}) =>
    this.request<CreateUserResponse, DefaultException>({
      path: `/v1/users`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description 검색 조건 서브넷이름, 소유자로 검색 생성 일시 기준으로 오름차순으로 정렬
   *
   * @tags Project
   * @name SelectList
   * @summary 프로젝트 목록 조회
   * @request GET:/v1/projects
   * @secure
   */
  selectList = (
    query: {
      searchProjectRequest: SearchProjectRequest;
    },
    params: RequestParams = {},
  ) =>
    this.request<ProjectResponse[], void>({
      path: `/v1/projects`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description 프로젝트를 생성, 프로젝트 이름 입력 필수
   *
   * @tags Project
   * @name Create
   * @summary 프로젝트 생성
   * @request POST:/v1/projects
   * @secure
   */
  create = (data: CreateProjectRequest, params: RequestParams = {}) =>
    this.request<ProjectResponse, void>({
      path: `/v1/projects`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description 프로젝트를 사용자에 할당
   *
   * @tags Project
   * @name Assign
   * @summary 프로젝트 할당
   * @request POST:/v1/projects/{projectId}/users/{userId}
   * @secure
   */
  assign = (projectId: string, userId: string, params: RequestParams = {}) =>
    this.request<ProjectResponse, void>({
      path: `/v1/projects/${projectId}/users/${userId}`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description 프로젝트 할당을 제거
   *
   * @tags Project
   * @name UnAssign
   * @summary 프로젝트 할당 제거
   * @request DELETE:/v1/projects/{projectId}/users/{userId}
   * @secure
   */
  unAssign = (projectId: string, userId: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/v1/projects/${projectId}/users/${userId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description 내부 전용 API 로 Keycloak Client 가 Service Project ID 에 해당하는 Project Scoped Token 발급 (ex, OS Token)
   *
   * @tags Auth
   * @name CreateServiceToken
   * @summary Keycloak Client 용 Token 발급 AOI
   * @request POST:/v1/managements/auth/tokens
   * @secure
   */
  createServiceToken = (
    data: ServiceTokenRequest,
    params: RequestParams = {},
  ) =>
    this.request<string, void>({
      path: `/v1/managements/auth/tokens`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description ## 로그인 기능은 클라이언트가 요청한 로그인 타입에 따라 다른 인증 방식과 응답 데이터를 제공합니다. ## 로그인 타입은 총 **3가지**이며, 요청 본문의 `loginType` 필드를 통해 구분됩니다. --- ## 1. account : Account 로그인 ```json - 요청 필수 데이터 - loginType: account - loingId - password - clientId ``` ## 2. user : User 로그인 ```json - 요청 필수 데이터 - loginType: user - accountId - loingId - password - clientId ``` ## 3. client : Client 로그인 ```json - 요청 필수 데이터 - loginType: client - clientId - clientSecret - grantType(client_credentials, refresh_token)
   *
   * @tags Login
   * @name LoginAccount
   * @summary Login(Token 발급)
   * @request POST:/v1/auth/tokens
   * @secure
   */
  loginAccount = (data: LoginRequest, params: RequestParams = {}) =>
    this.request<
      LoginAccountResponse | LoginClientResponse | LoginUserResponse,
      DefaultException
    >({
      path: `/v1/auth/tokens`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description ## 회원가입 API는 신규 사용자의 계정을 생성하기 위한 기능입니다. ## 클라이언트는 사용자의 기본 정보(예: 이메일, 비밀번호, 이름 등)를 JSON 형식으로 전송해야 하며, ## 필수 항목과 형식에 대한 유효성 검사가 이루어집니다. --- ### 정상적으로 계정이 생성되면 HTTP 201 Created 상태 코드와 함께 생성된 계정 정보가 반환됩니다. ### 입력 데이터에 오류가 있는 경우에는 HTTP 400 Bad Request 응답이 발생합니다. ### 비밀번호 검증에 실패하는 경우 HTTP 401 Unauthorized 응답이 발생합니다. ### 이미 등록된 계정일 경우에는 HTTP 409 Conflict 응답이 발생합니다. ### 서버 내부의 문제로 인해 계정 생성에 실패하면 HTTP 500 Internal Server Error 응답이 반환될 수 있습니다.
   *
   * @tags Account
   * @name CreateAccount
   * @summary Account 회원가입
   * @request POST:/v1/accounts
   * @secure
   */
  createAccount = (data: CreateAccountRequest, params: RequestParams = {}) =>
    this.request<CreateAccountResponse, DefaultException>({
      path: `/v1/accounts`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description ## 고유 ID를 기반으로 특정 IAM User 계정의 상세 정보를 조회하는 API입니다.
   *
   * @tags User
   * @name SelectUser
   * @summary IAM User 단일 조회
   * @request GET:/v1/users/{user_id}
   * @secure
   */
  selectUser = (userId: string, params: RequestParams = {}) =>
    this.request<SelectUserResponse, void | DefaultException>({
      path: `/v1/users/${userId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description ## 특정 IAM User 계정을 삭제하는 API입니다. ## 삭제 작업은 복구가 불가능합니다.
   *
   * @tags User
   * @name DeleteUser
   * @summary IAM User 삭제
   * @request DELETE:/v1/users/{user_id}
   * @secure
   */
  deleteUser = (userId: string, params: RequestParams = {}) =>
    this.request<void, void | DefaultException>({
      path: `/v1/users/${userId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description ## 고유 ID를 기반으로 특정 IAM User 계정을 수정하는 API입니다.
   *
   * @tags User
   * @name UpdateUser
   * @summary IAM User 수정
   * @request PATCH:/v1/users/{user_id}
   * @secure
   */
  updateUser = (
    userId: string,
    data: UpdateUserRequest,
    params: RequestParams = {},
  ) =>
    this.request<UpdateUserResponse, DefaultException>({
      path: `/v1/users/${userId}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description 사용자에게 할당된 프로젝트 목록 보기
   *
   * @tags Project
   * @name ListProjectsForUser
   * @summary 사용자별 프로젝트 목록 보기
   * @request GET:/v1/projects/{userId}/projects
   * @secure
   */
  listProjectsForUser = (userId: string, params: RequestParams = {}) =>
    this.request<ProjectResponse, void>({
      path: `/v1/projects/${userId}/projects`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description 프로젝트에 할당된 사용자 목록 보기
   *
   * @tags Project
   * @name ListUsersForProject
   * @summary 프로젝트별 사용자 목록 보기
   * @request GET:/v1/projects/{projectId}/users
   * @secure
   */
  listUsersForProject = (projectId: string, params: RequestParams = {}) =>
    this.request<ProjectResponse, void>({
      path: `/v1/projects/${projectId}/users`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
