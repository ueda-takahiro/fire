Rails.application.routes.draw do
  # devise_for :users
  root to: "users#index"
  resources :users
  # resources :personality
  resources :scores do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    end
  end
