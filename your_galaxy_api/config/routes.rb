Rails.application.routes.draw do


  post '/login', to: 'sessions#create'
  get '/logged_in', to: 'sessions#is_logged_in?'
  delete '/logout', to: 'sessions#destroy'

  # post '/phones', to: 'phones#create'

  resources :posts do
    resources :comments
  end

  resources :phones
  resources :users
  resources :comments
  resources :posts
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
