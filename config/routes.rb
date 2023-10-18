Rails.application.routes.draw do
  root 'users#new'

  resources :users, only: [:index, :show, :new, :create]
  resources :recipes
  get '/hello', to: 'application#hello_world'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
