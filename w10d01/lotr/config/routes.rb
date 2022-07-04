Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # post 'login', to: 'users#create'
  # post 'login', action: :create, controller: 'users'

  # resources :locations, except: [:show, :create]
  # resources :locations

  # resources :characters

  resources :locations do
    resources :characters
  end
end
