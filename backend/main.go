package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"os"

	"golang.org/x/net/http2"
	"golang.org/x/net/http2/h2c"

	// generated by protoc-gen-connect-go
	"backend/gen/post/v1/postv1connect" // generated by protoc-gen-connect-go
	"backend/service"
	"backend/utils"

	"backend/infra"

	"go.mongodb.org/mongo-driver/mongo"
)

// Connection URI
var uri = os.Getenv("MONGODB_URI")

var client *mongo.Client

func main() {
	log.Println("Team 7 yuya is here.")

	//MongoDB接続
	var err error
	client, err = infra.NewMongoDB(uri)
	if err != nil {
		log.Fatalf("MongoDB接続エラー: %v", err)
	}
	defer func() {
		if err = client.Disconnect(context.TODO()); err != nil {
			log.Fatalf("MongoDB切断エラー: %v", err)
		}
	}()

	// muxの生成
	mux := http.NewServeMux()
	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("Team Aoi 200 OK"))
	})

	// Postサービスをmuxに登録
	poster := &service.PostServer{}
	path, handler := postv1connect.NewPostServiceHandler(poster)
	mux.Handle(path, utils.VerifyGoogleOAuthJwtToken(handler))

	// Commentサービスをmuxに登録
	comment := &service.CommentServer{}
	path, handler = postv1connect.NewCommentServiceHandler(comment)
	mux.Handle(path, utils.VerifyGoogleOAuthJwtToken(handler))

	// CORS設定用ミドルウェア
	corsMiddleware := func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			w.Header().Set("Access-Control-Allow-Origin", "*")
			w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
			w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization, Connect-Protocol-Version")

			if r.Method == http.MethodOptions {
				w.WriteHeader(http.StatusOK)
				return
			}

			next.ServeHTTP(w, r)
		})
	}

	// DB Client設定用ミドルウェア
	dbMiddleware := func(client *mongo.Client, next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			ctx := context.WithValue(r.Context(), utils.ClientKey, client)
			next.ServeHTTP(w, r.WithContext(ctx))
		})
	}

	// PORT環境変数の値を取得
	port := os.Getenv("PORT")
	if port == "" {
		port = "80"
	}
	log.Printf("Server listening on port %s", port)

	err_http := http.ListenAndServe(
		fmt.Sprintf("0.0.0.0:%s", port),
		h2c.NewHandler(dbMiddleware(client, corsMiddleware(mux)), &http2.Server{}),
	)

	if err_http != nil {
		log.Fatalf("サーバーの起動に失敗しました: %v", err)
	}
}
