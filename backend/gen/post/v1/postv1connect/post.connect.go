// Code generated by protoc-gen-connect-go. DO NOT EDIT.
//
// Source: post/v1/post.proto

package postv1connect

import (
	v1 "backend/gen/post/v1"
	connect "connectrpc.com/connect"
	context "context"
	errors "errors"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
	http "net/http"
	strings "strings"
)

// This is a compile-time assertion to ensure that this generated file and the connect package are
// compatible. If you get a compiler error that this constant is not defined, this code was
// generated with a version of connect newer than the one compiled into your binary. You can fix the
// problem by either regenerating this code with an older version of connect or updating the connect
// version compiled into your binary.
const _ = connect.IsAtLeastVersion1_13_0

const (
	// PostServiceName is the fully-qualified name of the PostService service.
	PostServiceName = "post.v1.PostService"
)

// These constants are the fully-qualified names of the RPCs defined in this package. They're
// exposed at runtime as Spec.Procedure and as the final two segments of the HTTP route.
//
// Note that these are different from the fully-qualified method names used by
// google.golang.org/protobuf/reflect/protoreflect. To convert from these constants to
// reflection-formatted method names, remove the leading slash and convert the remaining slash to a
// period.
const (
	// PostServicePostListProcedure is the fully-qualified name of the PostService's PostList RPC.
	PostServicePostListProcedure = "/post.v1.PostService/PostList"
	// PostServicePostProcedure is the fully-qualified name of the PostService's Post RPC.
	PostServicePostProcedure = "/post.v1.PostService/Post"
	// PostServiceCreatePostProcedure is the fully-qualified name of the PostService's CreatePost RPC.
	PostServiceCreatePostProcedure = "/post.v1.PostService/CreatePost"
	// PostServiceUpdatePostProcedure is the fully-qualified name of the PostService's UpdatePost RPC.
	PostServiceUpdatePostProcedure = "/post.v1.PostService/UpdatePost"
	// PostServiceDeletePostProcedure is the fully-qualified name of the PostService's DeletePost RPC.
	PostServiceDeletePostProcedure = "/post.v1.PostService/DeletePost"
)

// These variables are the protoreflect.Descriptor objects for the RPCs defined in this package.
var (
	postServiceServiceDescriptor          = v1.File_post_v1_post_proto.Services().ByName("PostService")
	postServicePostListMethodDescriptor   = postServiceServiceDescriptor.Methods().ByName("PostList")
	postServicePostMethodDescriptor       = postServiceServiceDescriptor.Methods().ByName("Post")
	postServiceCreatePostMethodDescriptor = postServiceServiceDescriptor.Methods().ByName("CreatePost")
	postServiceUpdatePostMethodDescriptor = postServiceServiceDescriptor.Methods().ByName("UpdatePost")
	postServiceDeletePostMethodDescriptor = postServiceServiceDescriptor.Methods().ByName("DeletePost")
)

// PostServiceClient is a client for the post.v1.PostService service.
type PostServiceClient interface {
	// Post一覧API
	// リクエストは空
	PostList(context.Context, *connect.Request[emptypb.Empty]) (*connect.Response[v1.PostListResponse], error)
	// Post詳細API
	Post(context.Context, *connect.Request[v1.PostRequest]) (*connect.Response[v1.PostResponse], error)
	// Post作成API
	CreatePost(context.Context, *connect.Request[v1.CreatePostRequest]) (*connect.Response[emptypb.Empty], error)
	// Post更新API
	UpdatePost(context.Context, *connect.Request[v1.UpdatePostRequest]) (*connect.Response[emptypb.Empty], error)
	// Post削除API
	DeletePost(context.Context, *connect.Request[v1.DeletePostRequest]) (*connect.Response[emptypb.Empty], error)
}

// NewPostServiceClient constructs a client for the post.v1.PostService service. By default, it uses
// the Connect protocol with the binary Protobuf Codec, asks for gzipped responses, and sends
// uncompressed requests. To use the gRPC or gRPC-Web protocols, supply the connect.WithGRPC() or
// connect.WithGRPCWeb() options.
//
// The URL supplied here should be the base URL for the Connect or gRPC server (for example,
// http://api.acme.com or https://acme.com/grpc).
func NewPostServiceClient(httpClient connect.HTTPClient, baseURL string, opts ...connect.ClientOption) PostServiceClient {
	baseURL = strings.TrimRight(baseURL, "/")
	return &postServiceClient{
		postList: connect.NewClient[emptypb.Empty, v1.PostListResponse](
			httpClient,
			baseURL+PostServicePostListProcedure,
			connect.WithSchema(postServicePostListMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		post: connect.NewClient[v1.PostRequest, v1.PostResponse](
			httpClient,
			baseURL+PostServicePostProcedure,
			connect.WithSchema(postServicePostMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		createPost: connect.NewClient[v1.CreatePostRequest, emptypb.Empty](
			httpClient,
			baseURL+PostServiceCreatePostProcedure,
			connect.WithSchema(postServiceCreatePostMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		updatePost: connect.NewClient[v1.UpdatePostRequest, emptypb.Empty](
			httpClient,
			baseURL+PostServiceUpdatePostProcedure,
			connect.WithSchema(postServiceUpdatePostMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		deletePost: connect.NewClient[v1.DeletePostRequest, emptypb.Empty](
			httpClient,
			baseURL+PostServiceDeletePostProcedure,
			connect.WithSchema(postServiceDeletePostMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
	}
}

// postServiceClient implements PostServiceClient.
type postServiceClient struct {
	postList   *connect.Client[emptypb.Empty, v1.PostListResponse]
	post       *connect.Client[v1.PostRequest, v1.PostResponse]
	createPost *connect.Client[v1.CreatePostRequest, emptypb.Empty]
	updatePost *connect.Client[v1.UpdatePostRequest, emptypb.Empty]
	deletePost *connect.Client[v1.DeletePostRequest, emptypb.Empty]
}

// PostList calls post.v1.PostService.PostList.
func (c *postServiceClient) PostList(ctx context.Context, req *connect.Request[emptypb.Empty]) (*connect.Response[v1.PostListResponse], error) {
	return c.postList.CallUnary(ctx, req)
}

// Post calls post.v1.PostService.Post.
func (c *postServiceClient) Post(ctx context.Context, req *connect.Request[v1.PostRequest]) (*connect.Response[v1.PostResponse], error) {
	return c.post.CallUnary(ctx, req)
}

// CreatePost calls post.v1.PostService.CreatePost.
func (c *postServiceClient) CreatePost(ctx context.Context, req *connect.Request[v1.CreatePostRequest]) (*connect.Response[emptypb.Empty], error) {
	return c.createPost.CallUnary(ctx, req)
}

// UpdatePost calls post.v1.PostService.UpdatePost.
func (c *postServiceClient) UpdatePost(ctx context.Context, req *connect.Request[v1.UpdatePostRequest]) (*connect.Response[emptypb.Empty], error) {
	return c.updatePost.CallUnary(ctx, req)
}

// DeletePost calls post.v1.PostService.DeletePost.
func (c *postServiceClient) DeletePost(ctx context.Context, req *connect.Request[v1.DeletePostRequest]) (*connect.Response[emptypb.Empty], error) {
	return c.deletePost.CallUnary(ctx, req)
}

// PostServiceHandler is an implementation of the post.v1.PostService service.
type PostServiceHandler interface {
	// Post一覧API
	// リクエストは空
	PostList(context.Context, *connect.Request[emptypb.Empty]) (*connect.Response[v1.PostListResponse], error)
	// Post詳細API
	Post(context.Context, *connect.Request[v1.PostRequest]) (*connect.Response[v1.PostResponse], error)
	// Post作成API
	CreatePost(context.Context, *connect.Request[v1.CreatePostRequest]) (*connect.Response[emptypb.Empty], error)
	// Post更新API
	UpdatePost(context.Context, *connect.Request[v1.UpdatePostRequest]) (*connect.Response[emptypb.Empty], error)
	// Post削除API
	DeletePost(context.Context, *connect.Request[v1.DeletePostRequest]) (*connect.Response[emptypb.Empty], error)
}

// NewPostServiceHandler builds an HTTP handler from the service implementation. It returns the path
// on which to mount the handler and the handler itself.
//
// By default, handlers support the Connect, gRPC, and gRPC-Web protocols with the binary Protobuf
// and JSON codecs. They also support gzip compression.
func NewPostServiceHandler(svc PostServiceHandler, opts ...connect.HandlerOption) (string, http.Handler) {
	postServicePostListHandler := connect.NewUnaryHandler(
		PostServicePostListProcedure,
		svc.PostList,
		connect.WithSchema(postServicePostListMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	postServicePostHandler := connect.NewUnaryHandler(
		PostServicePostProcedure,
		svc.Post,
		connect.WithSchema(postServicePostMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	postServiceCreatePostHandler := connect.NewUnaryHandler(
		PostServiceCreatePostProcedure,
		svc.CreatePost,
		connect.WithSchema(postServiceCreatePostMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	postServiceUpdatePostHandler := connect.NewUnaryHandler(
		PostServiceUpdatePostProcedure,
		svc.UpdatePost,
		connect.WithSchema(postServiceUpdatePostMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	postServiceDeletePostHandler := connect.NewUnaryHandler(
		PostServiceDeletePostProcedure,
		svc.DeletePost,
		connect.WithSchema(postServiceDeletePostMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	return "/post.v1.PostService/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		switch r.URL.Path {
		case PostServicePostListProcedure:
			postServicePostListHandler.ServeHTTP(w, r)
		case PostServicePostProcedure:
			postServicePostHandler.ServeHTTP(w, r)
		case PostServiceCreatePostProcedure:
			postServiceCreatePostHandler.ServeHTTP(w, r)
		case PostServiceUpdatePostProcedure:
			postServiceUpdatePostHandler.ServeHTTP(w, r)
		case PostServiceDeletePostProcedure:
			postServiceDeletePostHandler.ServeHTTP(w, r)
		default:
			http.NotFound(w, r)
		}
	})
}

// UnimplementedPostServiceHandler returns CodeUnimplemented from all methods.
type UnimplementedPostServiceHandler struct{}

func (UnimplementedPostServiceHandler) PostList(context.Context, *connect.Request[emptypb.Empty]) (*connect.Response[v1.PostListResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("post.v1.PostService.PostList is not implemented"))
}

func (UnimplementedPostServiceHandler) Post(context.Context, *connect.Request[v1.PostRequest]) (*connect.Response[v1.PostResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("post.v1.PostService.Post is not implemented"))
}

func (UnimplementedPostServiceHandler) CreatePost(context.Context, *connect.Request[v1.CreatePostRequest]) (*connect.Response[emptypb.Empty], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("post.v1.PostService.CreatePost is not implemented"))
}

func (UnimplementedPostServiceHandler) UpdatePost(context.Context, *connect.Request[v1.UpdatePostRequest]) (*connect.Response[emptypb.Empty], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("post.v1.PostService.UpdatePost is not implemented"))
}

func (UnimplementedPostServiceHandler) DeletePost(context.Context, *connect.Request[v1.DeletePostRequest]) (*connect.Response[emptypb.Empty], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("post.v1.PostService.DeletePost is not implemented"))
}
