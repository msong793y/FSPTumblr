Rails.application.routes.draw do

  root to: 'static_root#static_pages'

  namespace :api, defaults: {format: :json} do

    resources :users, only: [:create, :index, :show] 


    resource :session, only: [:create, :destroy]


  end


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
