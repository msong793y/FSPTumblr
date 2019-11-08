class PostsController < ApplicationController
    # def index
    #     @posts = Post.all
    #     render :index
    # end


    # def create
     

    # end

    def show
        @post = Post.find(params[:id])
        render '/api/posts/show.html.erb'
    
    end

    # def update

    # end

    # def destroy

    # end

    # private

    # def post_params
    #     params.require(:post).permit(:author_id,:private,:body,:hastags)
    # end


end
