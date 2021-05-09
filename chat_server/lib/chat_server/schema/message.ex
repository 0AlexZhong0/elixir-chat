defmodule ChatServer.Schema.Message do
  use Ecto.Schema
  import Ecto.Changeset

  alias ChatServer.Schema.User
  alias ChatServer.Schema.Attachment
  alias ChatServer.Schema.Conversation
  alias ChatServer.Schema.MessageReaction

  schema "message" do
    field :text, :string
    field :deleted_at, :integer
    field :is_deleted, :boolean, default: false

    embeds_one :attachment, Attachment

    # foreign key constraints
    belongs_to :user, User
    belongs_to :conversation, Conversation
    belongs_to :reply_to, ChatServer.Schema.Message

    has_many :reactions, MessageReaction

    timestamps()
  end

  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:channel_id, :title, :creator_id])
    |> validate_required([:channel_id, :title, :creator_id])
    # the text can be empty if only an attachment is sent
    |> validate_inclusion(:text, 0..2000)
  end
end
