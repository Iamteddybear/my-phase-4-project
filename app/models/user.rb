class User < ApplicationRecord
    has_secure_password
    has_many :recipes
    has_many :comments
end
