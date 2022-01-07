Rails.application.routes.draw do
  root 'pages#home'
  
  get 'pages/home'
  get 'pages/lodging'
  get 'pages/about'
  get 'pages/registry'

end
