defmodule ChatServer.Schema.MessageReaction do
  use Ecto.Schema

  alias ChatServer.Schema.User
  alias ChatServer.Schema.Emoji
  alias ChatServer.Schema.Message

  schema "message_reaction" do
    belongs_to :user, User
    belongs_to :emoji, Emoji
    belongs_to :message, Message
  end
end
