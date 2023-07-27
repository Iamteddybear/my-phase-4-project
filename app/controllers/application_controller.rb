class ApplicationController < ActionController::API
    include ActionController::Cookies
  
    def hello_world
        if session[:count]
            puts "session[:count] = #{session[:count]}"
            session[:count] = session[:count] + 1
        else
            puts "no value for session[:count]"
            session[:count] = 0
        end
      render json: { count: session[:count] }
    end
  end