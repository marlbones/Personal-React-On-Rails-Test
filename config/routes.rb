Rails.application.routes.draw do

  resources :reports
  devise_for :users

  root to: "home#index"

  resources :users do
    get 'hello_world', to: 'hello_world#index'
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
