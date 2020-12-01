class FavoritesController < ApplicationController
  def index
    @my_favorites = current_user.favorites
  end

  def new
  end

  def create
    favorite = Favorite.new
    favorite.user = current_user
    favorite.exhibition = Exhibition.find(params[:exhibition_id])
    favorite.save
    redirect_to exhibition_path(favorite.exhibition)
   # if Favorite.create(favorited: @favorite_exhibition, user: current_user)
   #    redirect_to @exhibition, notice: 'Project has been favorited'
   #  else
   #    redirect_to @project, alert: 'Something went wrong...*sad panda*'
  end

  def destroy
    favorite = Favorite.find(params[:id])
    favorite.destroy
    redirect_to exhibition_path(favorite.exhibition)
  end

  def fav
    @exhibition = Exhibition.find(params[:exhibition_id])
    if Favorite.find_by(user: current_user, exhibition: @exhibition)
      favorite = Favorite.find_by(user: current_user, exhibition: @exhibition)
      favorite.destroy
    else
      favorite = Favorite.new
      favorite.user = current_user
      favorite.exhibition = @exhibition
      favorite.save
    end
    redirect_to exhibition_path(@exhibition)
  end
  # def favorite
  #   type = params[:type]
  #   if type == "favorite"
  #     current_user.favorites << @exhibition[:id]
  #     redirect_to :back, notice: "You favorited #{@exhibition.title}"
  #   elsif type == "unfavorite"
  #     current_user.favorites.delete(@exhibition)
  #     redirect_to :back, notice: "Unfavorited #{@exhibition.title}"
  #   else
  #     # Type missing, nothing happens
  #     redirect_to :back, notice: 'Nothing happened.'
  #   end
  # end
end
