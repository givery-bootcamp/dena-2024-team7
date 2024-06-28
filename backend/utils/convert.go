package utils

import (
	"backend/domain"

	postv1 "backend/gen/post/v1" // generated by protoc-gen-connect-go

	"google.golang.org/protobuf/types/known/timestamppb"
)

func ConvertPostList(postlist []domain.Post) []*postv1.PostData {
	var res []*postv1.PostData
	for _, post := range postlist {
		comments := []*postv1.Comment{}
		for _, comment := range post.Comments {
			comments = append(comments, &postv1.Comment{
				Id:        comment.Id.Hex(),
				Body:      comment.Body,
				UserName:  comment.UserName,
				CreatedAt: &timestamppb.Timestamp{Seconds: comment.CreatedAt.Seconds, Nanos: comment.CreatedAt.Nanos},
				UpdatedAt: &timestamppb.Timestamp{Seconds: comment.UpdatedAt.Seconds, Nanos: comment.UpdatedAt.Nanos},
			})
		}
		res = append(res, &postv1.PostData{
			Id:        post.Id.Hex(),
			Title:     post.Title,
			Body:      post.Body,
			UserName:  post.UserName,
			ImageUrl:  post.ImageUrl,
			Comments:  comments,
			CreatedAt: &timestamppb.Timestamp{Seconds: post.CreatedAt.Seconds, Nanos: post.CreatedAt.Nanos},
			UpdatedAt: &timestamppb.Timestamp{Seconds: post.UpdatedAt.Seconds, Nanos: post.UpdatedAt.Nanos},
		})
	}

	return res
}
