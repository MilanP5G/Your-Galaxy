Rails.application.routes.draw do

  resources :comments
  resources :posts
  resources :communities
  post '/login', to: 'sessions#create'
  get '/logged_in', to: 'sessions#is_logged_in?'
  delete '/logout', to: 'sessions#destroy'

  # post '/phones', to: 'phones#create'

  resources :phones
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
