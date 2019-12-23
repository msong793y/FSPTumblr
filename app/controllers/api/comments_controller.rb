class Api::CommentsController < ApplicationController
    # def index
    #     @posts = Post.all
    #     render :index
    # end


    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            # @posts = Post.all
            # render :index
        else
            render json: @comment.errors.full_messages, status: 404
        end
     

    end

    def show
        @post = Post.find(params[:id])
        render :show
    
    end

    # def update

    # end

    def destroy
        comment = current_user.comments.find_by(id: params[:id])
        if comment
            comment.destroy
           
        else
            render json: ["you can't delete post that aren't yours"], status: 401
        end
    end

    private

    def comment_params
        params.require(:comment).permit(:author_id,:post_id,:body)
    end


end