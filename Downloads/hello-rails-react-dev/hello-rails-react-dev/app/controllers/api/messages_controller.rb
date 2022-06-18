class Api::MessagesController < ApplicationController
  def index
    msg = Message.all
    render json: msg[rand(0...msg.length - 1)]
  end
end
