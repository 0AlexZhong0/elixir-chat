defmodule ChatServer.Schema.Emoji do
  use Ecto.Schema

  alias ChatServer.Schema.MessageReaction

  schema "emoji" do
    field :url, :string
    field :name, :string
    has_many :message_reactions, MessageReaction
  end
end
