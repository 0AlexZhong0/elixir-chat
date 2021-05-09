## Prerequisites

- Postgresql

## Overview

- the `chat_server` directory is bootstrapped with the command `mix phx.new chat_server --no-html --no-webpack`

## Development

- When a schema is added or created, you need to run a migration to reflect the changes, the following operations are needed.

```bash
mix ecto.gen.migration <migration_operation_name>
# a .exs file is generated in priv/repo/migrations/<prefix>.exs
# after editing the new file, run
mix ecto.migrate
# to rollback the migration, run
mix ecto.rollback
```

## TODO

- create the conversation channel
  - pattern match the channel on the channel_id
- asynchronously create the message in the database, then brodcast the message out to the clients
- expose the necessary endpoints, e.g. conversations/:id/messages fetches all the messages of a single conversation
- add changeset filtering/validations when needed

## Requirements

- only the people who are part of the conversation can see the chat
