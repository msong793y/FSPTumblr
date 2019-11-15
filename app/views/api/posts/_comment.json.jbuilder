json.extract! comment, :id, :author_id, :body

json.commentAuthor do
    json.partial! "api/users/user", user: comment.author
end