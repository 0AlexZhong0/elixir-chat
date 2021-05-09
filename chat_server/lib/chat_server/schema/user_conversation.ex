defmodule ChatServer.Schema.UserConversation do
  use Ecto.Schema
  alias ChatServer.Schema.User
  alias ChatServer.Schema.Conversation

  @primary_key false
  schema "user_conversation" do
    belongs_to :user, User
    belongs_to :conversation, Conversation

    timestamps()
  end

  def changeset(struct, params \\ %{}) do
    struct
    |> Ecto.Changeset.cast(params, [:user_id, :conversation_id])
    |> Ecto.Changeset.validate_required([:user_id, :conversation_id])
  end
end
