Rails.application.routes.draw do

  root to: 'static_root#static_pages'


  namespace :api, defaults: {format: :json} do
    delete '/likes/1', to: 'likes#destroy'
    delete '/posts', to: 'posts#index'
    delete '/follows/1', to: 'follows#destroy'
    get '/post', to: 'posts#user_post'
    resources :users, only: [:create, :index, :show] 
    resources :posts, only: [:create, :index, :update, :destroy]
    resources :comments, only: [:create, :show, :destroy]
    resources :likes, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :follows, only: [:create]

  end


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
