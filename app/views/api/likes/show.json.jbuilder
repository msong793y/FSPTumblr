json.extract! @post, :id, :author_id, :body,:hashtags, :content, :comments

json.author do
    json.partial! "api/users/user", user: @post.author
end

json.postComments do
    json.array! @post.comments do |comment|
        json.partial! "api/posts/comment", comment: comment
    end
end

json.postLikers do
    json.array! @post.likers do |liker|
        json.partial! "api/users/user", user: liker
    end
end