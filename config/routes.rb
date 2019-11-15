Rails.application.routes.draw do

  root to: 'static_root#static_pages'

  # resources :posts, only: [:show]

  namespace :api, defaults: {format: :json} do

    resources :users, only: [:create, :index, :show] 
    resources :posts, only: [:create, :index, :show, :update, :destroy]
    resources :comments, only: [:create, :show, :destroy]

    resource :session, only: [:create, :destroy]


  end


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
