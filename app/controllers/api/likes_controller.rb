class Api::LikesController < ApplicationController

    def create
        like = Like.new(like_params)
        if like.save
            redirect_to "/api/posts"
        else
            render json: @like.errors.full_messages, status: 404
        end
    end

    def destroy
        @like = current_user.likes.find_by(like_params)
        if @like
            @like.destroy
            redirect_to api_posts_url
        else
            render json: ["you can't delete like that aren't yours"], status: 401
        end
    end



    private
    
    def like_params
        params.require(:likeObj).permit(:post_id, :liker_id)
    end

end