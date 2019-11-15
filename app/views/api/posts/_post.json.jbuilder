json.extract! post, :id, :author_id, :body,:hashtags, :content, :comments

json.author do
    json.partial! "api/users/user", user: post.author
end

json.postComments do
    json.array! post.comments do |comment|
        json.partial! "api/posts/comment", comment: comment
    end
end

# json.comments post.comments

# json.content do
#     json.array! post.content do |content|
#         json.url url_for(content)
#     end
# end