class Recipe < ApplicationRecord
  belongs_to :user
has_many :comments
has_many :recipe_tags
has_many :tags, through: :recipe_tags
end
