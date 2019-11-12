json.extract! post, :id, :author_id, :body,:hashtags, :content, :user

# json.content do
#     json.array! post.content do |content|
#         json.url url_for(content)
#     end
# end