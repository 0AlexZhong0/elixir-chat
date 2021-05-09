defmodule ChatServer.Repo.Migrations.BootstrapDb do
  use Ecto.Migration

  def change do
    # the table creations must be in the following
    # order because of the foreign key constraints
    create_user_table()
    create_conversation_table()
    create_emoji_table()
    create_attachment_table()
    create_message_table()
    create_message_reaction_table()
    create_user_conversation_table()
  end

  defp create_user_table do
    create table(:user, primary_key: false) do
      add :id, :string, primary_key: true
      add :first_name, :string
      add :last_name, :string
      add :is_deleted, :boolean
      add :deleted_at, :int

      add :username, :string
      add :is_anonymous, :boolean
      add :anonymous_name, :string

      timestamps()
    end
  end

  defp create_conversation_table do
    create table(:conversation) do
      add :title, :string
      add :channel_id, :string
      add :is_deleted, :boolean
      add :deleted_at, :int
      add :creator_id, references(:user, column: :id, type: :string)

      timestamps()
    end
  end

  defp create_emoji_table do
    create table(:emoji) do
      add :url, :string
      add :name, :string

      timestamps()
    end
  end

  defp create_attachment_table do
    create_query = "CREATE TYPE attachment_type AS ENUM ('video', 'image', 'file')"
    drop_query = "DROP TYPE attachment_type"
    execute(create_query, drop_query)

    create table(:attachment) do
      add :type, :attachment_type
      add :thumbnail, :string
      add :url, :string
      add :is_deleted, :boolean
      add :deleted_at, :int

      timestamps()
    end
  end

  defp create_message_table do
    create table(:message) do
      add :text, :string, size: 2000
      add :from_id, references(:user, column: :id, type: :string)
      add :reply_to, references(:message)
      add :attachment_id, references(:attachment)
      add :conversation_id, references(:conversation)

      add :is_deleted, :boolean
      add :deleted_at, :int

      timestamps()
    end
  end

  defp create_message_reaction_table do
    create table(:message_reaction) do
      add :emoji_id, references(:emoji)
      add :message_id, references(:message)
      add :reactor_id, references(:user, column: :id, type: :string)
    end
  end

  # many to many relationshios
  defp create_user_conversation_table do
    create table(:user_conversation) do
      add :conversation_id, references(:conversation)
      add :user_id, references(:user, column: :id, type: :string)

      timestamps()
    end
  end
end
