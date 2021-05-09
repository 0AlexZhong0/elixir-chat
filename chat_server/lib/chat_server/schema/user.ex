defmodule ChatServer.Schema.User do
  use Ecto.Schema

  schema "user" do
    field :first_name, :string
    field :last_name, :string
    field :username, :string
    field :is_deleted, :boolean
    field :is_anonymous, :boolean
    field :anonymous_name, :string

    timestamps()
  end
end
