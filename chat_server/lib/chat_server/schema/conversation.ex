defmodule ChatServer.Schema.Conversation do
  use Ecto.Schema

  alias ChatServer.Schema.User
  alias ChatServer.Schema.UserConversation

  schema "conversation" do
    field :title, :string
    field :channel_id, :string
    field :deleted_at, :integer
    field :is_deleted, :boolean, default: false

    belongs_to :creator_id, User
    many_to_many :participants, User, join_through: UserConversation

    timestamps()
  end

  def changeset(struct, params \\ %{}) do
    struct
    |> Ecto.Changeset.cast(params, [:channel_id, :title, :creator_id])
    |> Ecto.Changeset.validate_required([:channel_id, :title, :creator_id])
  end
end
