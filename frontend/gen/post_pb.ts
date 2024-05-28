// @generated by protoc-gen-es v1.9.0 with parameter "target=ts"
// @generated from file post.proto (package post.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from message post.v1.PostRequest
 */
export class PostRequest extends Message<PostRequest> {
  constructor(data?: PartialMessage<PostRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "post.v1.PostRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PostRequest {
    return new PostRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PostRequest {
    return new PostRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PostRequest {
    return new PostRequest().fromJsonString(jsonString, options);
  }

  static equals(a: PostRequest | PlainMessage<PostRequest> | undefined, b: PostRequest | PlainMessage<PostRequest> | undefined): boolean {
    return proto3.util.equals(PostRequest, a, b);
  }
}

/**
 * @generated from message post.v1.PostResponse
 */
export class PostResponse extends Message<PostResponse> {
  /**
   * @generated from field: post.v1.PostData post = 1;
   */
  post?: PostData;

  constructor(data?: PartialMessage<PostResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "post.v1.PostResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "post", kind: "message", T: PostData },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PostResponse {
    return new PostResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PostResponse {
    return new PostResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PostResponse {
    return new PostResponse().fromJsonString(jsonString, options);
  }

  static equals(a: PostResponse | PlainMessage<PostResponse> | undefined, b: PostResponse | PlainMessage<PostResponse> | undefined): boolean {
    return proto3.util.equals(PostResponse, a, b);
  }
}

/**
 * @generated from message post.v1.PostData
 */
export class PostData extends Message<PostData> {
  /**
   * @generated from field: int32 id = 1;
   */
  id = 0;

  /**
   * @generated from field: string title = 2;
   */
  title = "";

  /**
   * @generated from field: string body = 3;
   */
  body = "";

  /**
   * @generated from field: int32 user_id = 4;
   */
  userId = 0;

  /**
   * @generated from field: repeated post.v1.Comment comments = 5;
   */
  comments: Comment[] = [];

  /**
   * @generated from field: google.protobuf.Timestamp created_at = 6;
   */
  createdAt?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp updated_at = 7;
   */
  updatedAt?: Timestamp;

  constructor(data?: PartialMessage<PostData>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "post.v1.PostData";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "body", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "user_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 5, name: "comments", kind: "message", T: Comment, repeated: true },
    { no: 6, name: "created_at", kind: "message", T: Timestamp },
    { no: 7, name: "updated_at", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PostData {
    return new PostData().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PostData {
    return new PostData().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PostData {
    return new PostData().fromJsonString(jsonString, options);
  }

  static equals(a: PostData | PlainMessage<PostData> | undefined, b: PostData | PlainMessage<PostData> | undefined): boolean {
    return proto3.util.equals(PostData, a, b);
  }
}

/**
 * @generated from message post.v1.Comment
 */
export class Comment extends Message<Comment> {
  /**
   * @generated from field: int32 id = 1;
   */
  id = 0;

  /**
   * @generated from field: string body = 2;
   */
  body = "";

  /**
   * @generated from field: int32 user_id = 3;
   */
  userId = 0;

  /**
   * @generated from field: int32 post_id = 4;
   */
  postId = 0;

  /**
   * @generated from field: google.protobuf.Timestamp created_at = 5;
   */
  createdAt?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp updated_at = 6;
   */
  updatedAt?: Timestamp;

  constructor(data?: PartialMessage<Comment>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "post.v1.Comment";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "body", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "user_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "post_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 5, name: "created_at", kind: "message", T: Timestamp },
    { no: 6, name: "updated_at", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Comment {
    return new Comment().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Comment {
    return new Comment().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Comment {
    return new Comment().fromJsonString(jsonString, options);
  }

  static equals(a: Comment | PlainMessage<Comment> | undefined, b: Comment | PlainMessage<Comment> | undefined): boolean {
    return proto3.util.equals(Comment, a, b);
  }
}

