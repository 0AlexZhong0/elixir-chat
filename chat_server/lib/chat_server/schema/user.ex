defmodule ChatServer.Schema.User do
  use Ecto.Schema
  import Ecto.Changeset

  alias ChatServer.Schema.Message
  alias ChatServer.Schema.Conversation
  alias ChatServer.Schema.UserConversation

  @primary_key {:id, :string, autogenerate: false}
  schema "user" do
    field :first_name, :string
    field :last_name, :string
    field :username, :string
    field :is_deleted, :boolean
    field :is_anonymous, :boolean
    field :anonymous_name, :string

    has_many :messages, Message
    many_to_many :conversations, Conversation, join_through: UserConversation

    timestamps()
  end

  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:id, :first_name, :last_name, :username])
    |> validate_required([:id, :first_name, :last_name, :username])
  end
end
