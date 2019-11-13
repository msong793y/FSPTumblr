class Api::PostsController < ApplicationController
    def index
        @posts = Post.all
        render :index
    end


    def create
        @post = Post.new(post_params)
        if @post.save
            @post.content.attach(params[:post][:content]) if params[:post][:content]
            @posts = Post.all
            render :index
        else
            render json: @user.errors.full_messages, status: 404
        end
     

    end

    def show
        @post = Post.find(params[:id])
        render :show
    
    end

    # def update

    # end

    def destroy
        post = current_user.posts.find_by(id: params[:id])
        if post
            post.destroy
            @posts = Post.all
            render :index
        else
            render json: ["you can't delete chirps that aren't yours"], status: 401
        end
    end

    private

    def post_params
        params.require(:post).permit(:author_id,:private,:body,:hastags,:content)
    end


end
