defmodule ChatServer.Schema.Attachment do
  use Ecto.Schema

  schema "attachment" do
    field :url, :string
    field :thumbnail, :string
    field :type, Ecto.Enum, values: [:video, :image, :file]
  end
end
