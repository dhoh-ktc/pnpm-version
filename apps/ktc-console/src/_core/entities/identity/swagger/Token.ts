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
  AuthorizeTokenRequest,
  AuthorizeTokenResponse,
  DefaultException,
  ValidateTokenRequest,
  ValidateTokenResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Token<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Access Token을 이용한 Validate
   *
   * @tags Token Validation
   * @name ValidateToken
   * @summary Token Validate
   * @request POST:/token/validate
   * @secure
   */
  validateToken = (data: ValidateTokenRequest, params: RequestParams = {}) =>
    this.request<ValidateTokenResponse, void | DefaultException>({
      path: `/token/validate`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Access Token을 이용한 Authorize
   *
   * @tags Token Authorize
   * @name AuthorizeToken
   * @summary Token Authorize
   * @request POST:/token/authorize
   * @secure
   */
  authorizeToken = (data: AuthorizeTokenRequest, params: RequestParams = {}) =>
    this.request<AuthorizeTokenResponse, void>({
      path: `/token/authorize`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
