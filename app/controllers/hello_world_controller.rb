class HelloWorldController < ApplicationController
  layout "hello_world"

  def index
    @user = current_user
    @hello_world_props = { somethingELse: @user.email }
  end
end
