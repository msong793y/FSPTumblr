@posts.each do |post|
    json.set! post.id do
        json.partial! 'post', post: post
        if post.content.attached?
            json.contentUrl url_for(post.content)
        end
    end
end